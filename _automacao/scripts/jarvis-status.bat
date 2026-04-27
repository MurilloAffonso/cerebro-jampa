@echo off
setlocal enabledelayedexpansion

REM ============================================================
REM jarvis-status.bat — Ciclo Diario do Jampa Jarvis
REM Risco: AUTO — so leitura, sem efeito externo
REM Nao instala dependencias, nao faz push, nao envia mensagens
REM ============================================================

REM --- Configuracao ---
set VAULT_ROOT=%~dp0..\..
set AUTOMACAO_DIR=%~dp0..
set LOG_DIR=%AUTOMACAO_DIR%\logs
set TASKS_DIR=%AUTOMACAO_DIR%\tasks
set PROXIMOS_PASSOS=%VAULT_ROOT%\_memoria\proximos-passos.md

REM --- Timestamp ---
for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value') do set DATETIME=%%I
set ANO=%DATETIME:~0,4%
set MES=%DATETIME:~4,2%
set DIA=%DATETIME:~6,2%
set HORA=%DATETIME:~8,2%
set MIN=%DATETIME:~10,2%
set TIMESTAMP=%ANO%-%MES%-%DIA%T%HORA%:%MIN%:00-03:00
set DATA_SLUG=%ANO%-%MES%-%DIA%
set HORA_SLUG=%HORA%h

REM --- Nome do log ---
set LOG_FILE=%LOG_DIR%\%DATA_SLUG%-%HORA_SLUG%-diario.log

REM --- Criar diretorio de logs se nao existir ---
if not exist "%LOG_DIR%" mkdir "%LOG_DIR%"

REM ============================================================
REM INICIO DO LOG
REM ============================================================
echo === JARVIS LOG === > "%LOG_FILE%"
echo Ciclo: diario >> "%LOG_FILE%"
echo Timestamp: %TIMESTAMP% >> "%LOG_FILE%"
echo TarefaId: n/a >> "%LOG_FILE%"
echo Risco: auto >> "%LOG_FILE%"
echo Status: iniciado >> "%LOG_FILE%"
echo. >> "%LOG_FILE%"
echo --- GIT STATUS --- >> "%LOG_FILE%"

REM --- Git status ---
cd /d "%VAULT_ROOT%"
git status >> "%LOG_FILE%" 2>&1
echo. >> "%LOG_FILE%"

REM --- Ultimo commit ---
echo --- ULTIMO COMMIT --- >> "%LOG_FILE%"
git log -1 --oneline >> "%LOG_FILE%" 2>&1
echo. >> "%LOG_FILE%"

REM --- Contar tarefas pendentes ---
echo --- TAREFAS --- >> "%LOG_FILE%"
set TAREFAS_PENDENTES=0
if exist "%TASKS_DIR%\*.json" (
    for %%F in ("%TASKS_DIR%\*.json") do (
        findstr /i "\"status\": \"pendente\"" "%%F" >nul 2>&1
        if !errorlevel! == 0 set /a TAREFAS_PENDENTES+=1
    )
)
echo Pendentes: %TAREFAS_PENDENTES% >> "%LOG_FILE%"
echo. >> "%LOG_FILE%"

REM --- Proximos passos (primeiras 20 linhas uteis) ---
echo --- PROXIMOS PASSOS (topo) --- >> "%LOG_FILE%"
if exist "%PROXIMOS_PASSOS%" (
    set COUNT=0
    for /f "usebackq delims=" %%L in ("%PROXIMOS_PASSOS%") do (
        if !COUNT! lss 20 (
            echo %%L >> "%LOG_FILE%"
            set /a COUNT+=1
        )
    )
) else (
    echo [AVISO] Arquivo nao encontrado: %PROXIMOS_PASSOS% >> "%LOG_FILE%"
)
echo. >> "%LOG_FILE%"

REM --- Contar logs existentes ---
echo --- LOGS EXISTENTES --- >> "%LOG_FILE%"
set LOG_COUNT=0
if exist "%LOG_DIR%\*.log" (
    for %%F in ("%LOG_DIR%\*.log") do set /a LOG_COUNT+=1
)
echo Total de logs: %LOG_COUNT% >> "%LOG_FILE%"
echo. >> "%LOG_FILE%"

REM --- Finalizar log ---
echo --- FIM --- >> "%LOG_FILE%"
echo Status: concluido >> "%LOG_FILE%"
echo ProximoCiclo: Consultar ciclos.md para agenda >> "%LOG_FILE%"

REM ============================================================
REM OUTPUT NO TERMINAL
REM ============================================================
echo.
echo ================================================
echo  JARVIS STATUS — %DATA_SLUG% %HORA%:%MIN%
echo ================================================
echo.
echo  Git: verificado (ver log)
echo  Tarefas pendentes: %TAREFAS_PENDENTES%
echo  Log gerado: %LOG_FILE%
echo.
echo  Para ler o log:
echo    type "%LOG_FILE%"
echo.
echo ================================================

endlocal
