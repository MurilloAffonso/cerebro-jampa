@echo off
setlocal enabledelayedexpansion

REM ==========================================================
REM jarvis-status.bat v0.3 - Jampa Jarvis
REM Risco: AUTO - apenas leitura, sem efeito externo
REM Nao executa tarefas, nao chama Claude, nao faz commit/push
REM ==========================================================

REM --- Derivar raiz do vault a partir da localizacao do script ---
REM %~dp0 = _automacao\scripts\  (com trailing backslash)
REM cd /d %~dp0..\.. = vault root
cd /d "%~dp0..\.."
set "VAULT_ROOT=%CD%"
set "AUTOMACAO_DIR=%VAULT_ROOT%\_automacao"
set "LOG_DIR=%AUTOMACAO_DIR%\logs"
set "TASKS_DIR=%AUTOMACAO_DIR%\tasks"

REM --- Criar diretorio de logs se nao existir ---
if not exist "%LOG_DIR%" mkdir "%LOG_DIR%"

REM --- Timestamp via PowerShell (wmic obsoleto no Windows 11) ---
for /f "usebackq delims=" %%I in (`powershell.exe -NoProfile -Command "[DateTime]::Now.ToString('yyyyMMddHHmm')"`) do set DT=%%I
if not defined DT set DT=202601010000
set ANO=%DT:~0,4%
set MES=%DT:~4,2%
set DIA=%DT:~6,2%
set HORA=%DT:~8,2%
set MIN=%DT:~10,2%
set "DATA_SLUG=%ANO%-%MES%-%DIA%"
set "LOG_FILE=%LOG_DIR%\%DATA_SLUG%-%HORA%h-diario.log"

REM ==========================================================
REM GERAR LOG
REM ==========================================================
echo === JARVIS STATUS LOG === > "%LOG_FILE%"
echo Data: %DATA_SLUG% %HORA%:%MIN% >> "%LOG_FILE%"
echo Vault: %VAULT_ROOT% >> "%LOG_FILE%"
echo. >> "%LOG_FILE%"

echo --- GIT STATUS --- >> "%LOG_FILE%"
git status --short >> "%LOG_FILE%" 2>&1
echo. >> "%LOG_FILE%"

echo --- ULTIMOS 3 COMMITS --- >> "%LOG_FILE%"
git log -3 --oneline >> "%LOG_FILE%" 2>&1
echo. >> "%LOG_FILE%"

echo --- ARQUIVOS _automacao --- >> "%LOG_FILE%"
dir "%AUTOMACAO_DIR%" /b /a-d >> "%LOG_FILE%" 2>&1
echo. >> "%LOG_FILE%"

echo --- TAREFAS JSON --- >> "%LOG_FILE%"
set CNT_JSON=0
set CNT_PENDENTE=0
for %%F in ("%TASKS_DIR%\*.json") do (
    set /a CNT_JSON+=1
    findstr /i "pendente" "%%F" >nul 2>&1
    if !errorlevel! == 0 set /a CNT_PENDENTE+=1
)
echo Total JSON:  %CNT_JSON% >> "%LOG_FILE%"
echo Pendentes:   %CNT_PENDENTE% >> "%LOG_FILE%"
echo. >> "%LOG_FILE%"
echo --- FIM --- >> "%LOG_FILE%"

REM ==========================================================
REM SAIDA NO TERMINAL (stdout enviado ao Telegram pelo n8n)
REM ==========================================================
echo.
echo ================================================
echo  JARVIS STATUS  %DATA_SLUG%  %HORA%:%MIN%
echo ================================================
echo.
echo  Vault: %VAULT_ROOT%
echo.
echo  [GIT STATUS]
git status --short
if errorlevel 1 echo  (repositorio limpo)
echo.
echo  [ULTIMOS 3 COMMITS]
git log -3 --oneline
echo.
echo  [ARQUIVOS _automacao]
dir "%AUTOMACAO_DIR%" /b /a-d 2>nul
echo.
echo  [TAREFAS]
echo  Total JSON:  %CNT_JSON%
echo  Pendentes:   %CNT_PENDENTE%
echo.
echo  Log: %LOG_FILE%
echo.
echo ================================================

endlocal
exit /b 0
