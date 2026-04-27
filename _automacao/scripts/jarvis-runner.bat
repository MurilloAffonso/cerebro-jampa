@echo off
setlocal enabledelayedexpansion

REM ==============================================================
REM  jarvis-runner.bat — Runner Seguro Jampa Jarvis v0.2
REM  Risco:  AUTO — leitura de tarefas e relatorio. Zero execucao.
REM  Criado: 2026-04-27
REM ==============================================================
REM  O que FAZ:
REM    1. Verifica git status (alerta se sujo)
REM    2. Le todos os JSONs em _automacao/tasks/
REM    3. Extrai campos via PowerShell (sem instalar nada)
REM    4. Valida campos obrigatorios contra o schema
REM    5. Agrupa tarefas por risco: AUTO / APROVACAO / BLOQUEADO
REM    6. Exibe skills envolvidas por tarefa
REM    7. Gera log em _automacao/logs/
REM  O que NAO FAZ:
REM    - Nao executa nenhuma tarefa
REM    - Nao altera _site/ nem _conhecimento/
REM    - Nao faz commit ou push
REM    - Nao chama Claude Code
REM    - Nao acessa credenciais ou .env
REM ==============================================================

REM ── Verificar PowerShell ──────────────────────────────────────
where powershell.exe > nul 2>&1
if %errorlevel% neq 0 (
    echo [ERRO] powershell.exe nao encontrado.
    echo [ERRO] PowerShell 5.1+ necessario para parsing JSON.
    exit /b 1
)

REM ── Caminhos ──────────────────────────────────────────────────
set SCRIPT_DIR=%~dp0
set AUTOMACAO_DIR=%SCRIPT_DIR%..
set VAULT_ROOT=%AUTOMACAO_DIR%\..
set TASKS_DIR=%AUTOMACAO_DIR%\tasks
set LOGS_DIR=%AUTOMACAO_DIR%\logs
set TMP_DIR=%TEMP%\jarvis_runner

if not exist "%LOGS_DIR%" mkdir "%LOGS_DIR%"
if not exist "%TMP_DIR%"  mkdir "%TMP_DIR%"

REM ── Timestamp via PowerShell (mais confiavel que wmic) ────────
for /f "usebackq delims=" %%I in (`powershell.exe -NoProfile -Command "[DateTime]::Now.ToString('yyyyMMddHHmm')"`) do set WMIC_DT=%%I
if not defined WMIC_DT set WMIC_DT=202601010000
set ANO=%WMIC_DT:~0,4%
set MES=%WMIC_DT:~4,2%
set DIA=%WMIC_DT:~6,2%
set HORA=%WMIC_DT:~8,2%
set MIN=%WMIC_DT:~10,2%
set TS_ISO=%ANO%-%MES%-%DIA%T%HORA%:%MIN%-03:00
set LOG_FILE=%LOGS_DIR%\%ANO%-%MES%-%DIA%-%HORA%h-runner.log

REM ── Contadores (fora do for — sem risco de bloco fechado) ─────
set CNT_TOTAL=0
set CNT_PENDENTE=0
set CNT_AUTO=0
set CNT_APROVACAO=0
set CNT_BLOQUEADO=0
set CNT_INVALIDO=0
set GIT_DIRTY=0

REM ── Arquivos de lista por risco ───────────────────────────────
type nul > "%TMP_DIR%\list_auto.tmp"
type nul > "%TMP_DIR%\list_aprov.tmp"
type nul > "%TMP_DIR%\list_bloq.tmp"
type nul > "%TMP_DIR%\list_inv.tmp"
type nul > "%TMP_DIR%\skills.tmp"

REM ==============================================================
REM CABECALHO DO LOG
REM ==============================================================
echo === JARVIS RUNNER LOG === > "%LOG_FILE%"
echo Versao: 0.2 >> "%LOG_FILE%"
echo Risco: AUTO - apenas leitura e relatorio >> "%LOG_FILE%"
echo Timestamp: %TS_ISO% >> "%LOG_FILE%"
echo Vault: %VAULT_ROOT% >> "%LOG_FILE%"
echo Modo: sem execucao >> "%LOG_FILE%"
echo. >> "%LOG_FILE%"

REM ── Console ───────────────────────────────────────────────────
echo.
echo  ============================================================
echo   JARVIS RUNNER v0.2    %ANO%-%MES%-%DIA% %HORA%:%MIN%
echo   Modo: LEITURA - nenhuma tarefa sera executada
echo  ============================================================
echo.

REM ==============================================================
REM PASSO 1 - GIT STATUS
REM ==============================================================
echo --- 1. GIT STATUS --- >> "%LOG_FILE%"
echo  [1/3] Verificando Git...

cd /d "%VAULT_ROOT%"

git status --porcelain > "%TMP_DIR%\git_limpo.tmp" 2>&1
git status            > "%TMP_DIR%\git_full.tmp"   2>&1
git log -1 --oneline > "%TMP_DIR%\git_log.tmp"     2>&1

REM Detectar se sujo: qualquer linha em --porcelain = alteracao pendente
REM NOTA: usar usebackq para ler ARQUIVO (nao literal string)
for /f "usebackq delims=" %%L in ("%TMP_DIR%\git_limpo.tmp") do set GIT_DIRTY=1

if "!GIT_DIRTY!"=="1" (
    echo [ALERTA] Git sujo - alteracoes nao commitadas >> "%LOG_FILE%"
    echo [ALERTA] Tarefas APROVACAO bloqueadas ate git estar limpo >> "%LOG_FILE%"
    echo. >> "%LOG_FILE%"
    type "%TMP_DIR%\git_full.tmp" >> "%LOG_FILE%"
    echo  [ALERTA] Git sujo
    echo         Tarefas APROVACAO nao podem rodar.
    echo         Resolva as alteracoes pendentes primeiro.
) else (
    set "LAST_COMMIT=sem commits"
    for /f "usebackq delims=" %%L in ("%TMP_DIR%\git_log.tmp") do set "LAST_COMMIT=%%L"
    echo [OK] Git limpo - !LAST_COMMIT! >> "%LOG_FILE%"
    echo  [OK] Git limpo: !LAST_COMMIT!
)
echo. >> "%LOG_FILE%"
echo.

REM ==============================================================
REM PASSO 2 - SCAN DE TAREFAS JSON
REM ==============================================================
echo --- 2. TAREFAS ENCONTRADAS --- >> "%LOG_FILE%"
echo Diretorio tasks: %TASKS_DIR% >> "%LOG_FILE%"
echo. >> "%LOG_FILE%"
echo  [2/3] Escaneando tarefas...
echo.

REM Escrever o script PowerShell de extracao em arquivo temp
REM (evita linha de comando muito longa e problemas de quoting)
echo try { > "%TMP_DIR%\extract.ps1"
echo   $t = Get-Content -Raw -LiteralPath $args[0] ^| ConvertFrom-Json >> "%TMP_DIR%\extract.ps1"
echo   $req = @('id','criado_em','objetivo','tipo','risco','status','autonomia','skill_primaria','precisa_aprovacao','resultado_esperado') >> "%TMP_DIR%\extract.ps1"
echo   $miss = @($req ^| Where-Object { $null -eq $t.$_ }) >> "%TMP_DIR%\extract.ps1"
echo   $valid = if ($miss.Count -gt 0) { 'FALTANDO: ' + ($miss -join ', ') } else { 'OK' } >> "%TMP_DIR%\extract.ps1"
echo   $maxobj = 75 >> "%TMP_DIR%\extract.ps1"
echo   $obj = if ($t.objetivo) { if ($t.objetivo.Length -gt $maxobj) { $t.objetivo.Substring(0,$maxobj) + '...' } else { $t.objetivo } } else { 'sem objetivo' } >> "%TMP_DIR%\extract.ps1"
echo   $rec = if ($t.skills_recomendadas -and $t.skills_recomendadas.Count -gt 0) { $t.skills_recomendadas -join ', ' } else { 'nenhuma' } >> "%TMP_DIR%\extract.ps1"
echo   Write-Output $(if ($t.id) { $t.id } else { 'sem-id' }) >> "%TMP_DIR%\extract.ps1"
echo   Write-Output $(if ($t.risco) { $t.risco } else { 'invalido' }) >> "%TMP_DIR%\extract.ps1"
echo   Write-Output $(if ($t.status) { $t.status } else { 'sem-status' }) >> "%TMP_DIR%\extract.ps1"
echo   Write-Output $(if ($t.skill_primaria) { $t.skill_primaria } else { 'sem-skill' }) >> "%TMP_DIR%\extract.ps1"
echo   Write-Output $obj >> "%TMP_DIR%\extract.ps1"
echo   Write-Output $valid >> "%TMP_DIR%\extract.ps1"
echo   Write-Output $rec >> "%TMP_DIR%\extract.ps1"
echo } catch { >> "%TMP_DIR%\extract.ps1"
echo   Write-Output 'PARSE-ERROR' >> "%TMP_DIR%\extract.ps1"
echo   Write-Output 'invalido' >> "%TMP_DIR%\extract.ps1"
echo   Write-Output 'erro' >> "%TMP_DIR%\extract.ps1"
echo   Write-Output 'sem-skill' >> "%TMP_DIR%\extract.ps1"
echo   Write-Output $_.Exception.Message >> "%TMP_DIR%\extract.ps1"
echo   Write-Output 'ERRO-JSON' >> "%TMP_DIR%\extract.ps1"
echo   Write-Output 'nenhuma' >> "%TMP_DIR%\extract.ps1"
echo } >> "%TMP_DIR%\extract.ps1"

for %%F in ("%TASKS_DIR%\*.json") do (
    set /a CNT_TOTAL+=1
    set "JSON_NAME=%%~nxF"

    REM Extrair campos via script PowerShell (uma chamada por arquivo)
    powershell.exe -NoProfile -File "%TMP_DIR%\extract.ps1" "%%F" > "%TMP_DIR%\fields.tmp" 2>&1

    REM Ler campos linha a linha — usebackq obrigatorio para ler arquivo
    set "T_ID=sem-id"
    set "T_RISCO=invalido"
    set "T_STATUS=sem-status"
    set "T_SKILL=sem-skill"
    set "T_OBJ=sem objetivo"
    set "T_VALID=DESCONHECIDO"
    set "T_SKREC=nenhuma"
    set T_LINE=0

    for /f "usebackq delims=" %%L in ("%TMP_DIR%\fields.tmp") do (
        set /a T_LINE+=1
        if !T_LINE!==1 set "T_ID=%%L"
        if !T_LINE!==2 set "T_RISCO=%%L"
        if !T_LINE!==3 set "T_STATUS=%%L"
        if !T_LINE!==4 set "T_SKILL=%%L"
        if !T_LINE!==5 set "T_OBJ=%%L"
        if !T_LINE!==6 set "T_VALID=%%L"
        if !T_LINE!==7 set "T_SKREC=%%L"
    )

    REM Contar pendentes
    if /i "!T_STATUS!"=="pendente" set /a CNT_PENDENTE+=1

    REM Escrever detalhes no log (linha a linha — evita bloco de parenteses com `)`)
    echo Arquivo: !JSON_NAME! >> "%LOG_FILE%"
    echo   id:             !T_ID! >> "%LOG_FILE%"
    echo   status:         !T_STATUS! >> "%LOG_FILE%"
    echo   risco:          !T_RISCO! >> "%LOG_FILE%"
    echo   skill_primaria: !T_SKILL! >> "%LOG_FILE%"
    echo   skills_rec:     !T_SKREC! >> "%LOG_FILE%"
    echo   objetivo:       !T_OBJ! >> "%LOG_FILE%"
    echo   validacao:      !T_VALID! >> "%LOG_FILE%"
    echo. >> "%LOG_FILE%"

    REM Console: linha compacta por tarefa
    echo   [!T_RISCO!] !T_ID!
    echo      skill: !T_SKILL!
    if not "!T_SKREC!"=="nenhuma" echo      skills+: !T_SKREC!
    echo      status: !T_STATUS! -- validacao: !T_VALID!
    echo.

    REM Agrupar por risco em listas temporarias
    if /i "!T_RISCO!"=="auto" (
        set /a CNT_AUTO+=1
        echo   - !T_ID! >> "%TMP_DIR%\list_auto.tmp"
        echo     skill:   !T_SKILL! >> "%TMP_DIR%\list_auto.tmp"
        echo     skills+: !T_SKREC! >> "%TMP_DIR%\list_auto.tmp"
        echo     status:  !T_STATUS! >> "%TMP_DIR%\list_auto.tmp"
        echo     valida:  !T_VALID! >> "%TMP_DIR%\list_auto.tmp"
        echo. >> "%TMP_DIR%\list_auto.tmp"
    )
    if /i "!T_RISCO!"=="aprovacao" (
        set /a CNT_APROVACAO+=1
        echo   - !T_ID! >> "%TMP_DIR%\list_aprov.tmp"
        echo     skill:   !T_SKILL! >> "%TMP_DIR%\list_aprov.tmp"
        echo     skills+: !T_SKREC! >> "%TMP_DIR%\list_aprov.tmp"
        echo     status:  !T_STATUS! >> "%TMP_DIR%\list_aprov.tmp"
        echo     valida:  !T_VALID! >> "%TMP_DIR%\list_aprov.tmp"
        echo. >> "%TMP_DIR%\list_aprov.tmp"
    )
    if /i "!T_RISCO!"=="bloqueado" (
        set /a CNT_BLOQUEADO+=1
        echo   - !T_ID! >> "%TMP_DIR%\list_bloq.tmp"
        echo     skill:   !T_SKILL! >> "%TMP_DIR%\list_bloq.tmp"
        echo     status:  !T_STATUS! >> "%TMP_DIR%\list_bloq.tmp"
        echo     valida:  !T_VALID! >> "%TMP_DIR%\list_bloq.tmp"
        echo. >> "%TMP_DIR%\list_bloq.tmp"
    )
    set "T_KNOWN=no"
    if /i "!T_RISCO!"=="auto"      set "T_KNOWN=yes"
    if /i "!T_RISCO!"=="aprovacao" set "T_KNOWN=yes"
    if /i "!T_RISCO!"=="bloqueado" set "T_KNOWN=yes"
    if "!T_KNOWN!"=="no" (
        set /a CNT_INVALIDO+=1
        echo   - !JSON_NAME! risco desconhecido: !T_RISCO! >> "%TMP_DIR%\list_inv.tmp"
        echo. >> "%TMP_DIR%\list_inv.tmp"
    )

    REM Registrar skills para relatorio final
    if not "!T_SKILL!"=="sem-skill" echo !T_SKILL! >> "%TMP_DIR%\skills.tmp"
    if not "!T_SKREC!"=="nenhuma"   echo !T_SKREC! >> "%TMP_DIR%\skills.tmp"
)

REM ==============================================================
REM PASSO 3 - RELATORIO FINAL
REM ==============================================================
echo  [3/3] Gerando relatorio...
echo.

echo --- 3. RELATORIO POR RISCO --- >> "%LOG_FILE%"
echo. >> "%LOG_FILE%"
echo TOTAIS: >> "%LOG_FILE%"
echo   Total de tarefas encontradas: %CNT_TOTAL% >> "%LOG_FILE%"
echo   Pendentes (status=pendente):  %CNT_PENDENTE% >> "%LOG_FILE%"
echo   AUTO:                         %CNT_AUTO% >> "%LOG_FILE%"
echo   APROVACAO:                    %CNT_APROVACAO% >> "%LOG_FILE%"
echo   BLOQUEADO:                    %CNT_BLOQUEADO% >> "%LOG_FILE%"
echo   Invalidos:                    %CNT_INVALIDO% >> "%LOG_FILE%"
echo. >> "%LOG_FILE%"

echo === AUTO [%CNT_AUTO%] - Prontas para rodar quando n8n ativo: >> "%LOG_FILE%"
echo. >> "%LOG_FILE%"
type "%TMP_DIR%\list_auto.tmp" >> "%LOG_FILE%"

echo === APROVACAO [%CNT_APROVACAO%] - Aguardam aprovado_por_murillo: true: >> "%LOG_FILE%"
echo. >> "%LOG_FILE%"
if "!GIT_DIRTY!"=="1" echo   [ALERTA] Git sujo - tarefas APROVACAO bloqueadas! >> "%LOG_FILE%"
if "!GIT_DIRTY!"=="1" echo. >> "%LOG_FILE%"
type "%TMP_DIR%\list_aprov.tmp" >> "%LOG_FILE%"

echo === BLOQUEADO [%CNT_BLOQUEADO%] - Nao executar. Ver motivo_bloqueio no JSON: >> "%LOG_FILE%"
echo. >> "%LOG_FILE%"
type "%TMP_DIR%\list_bloq.tmp" >> "%LOG_FILE%"

if %CNT_INVALIDO% GTR 0 (
    echo === INVALIDOS [%CNT_INVALIDO%] - Verificar schema: >> "%LOG_FILE%"
    echo. >> "%LOG_FILE%"
    type "%TMP_DIR%\list_inv.tmp" >> "%LOG_FILE%"
)

REM Skills unicas envolvidas (via PowerShell Sort-Object -Unique)
echo --- SKILLS ENVOLVIDAS --- >> "%LOG_FILE%"
echo. >> "%LOG_FILE%"
type "%TMP_DIR%\skills.tmp" | powershell.exe -NoProfile -Command "$input | Sort-Object -Unique" >> "%LOG_FILE%" 2>&1
echo. >> "%LOG_FILE%"

REM Proxima acao recomendada
echo --- PROXIMA ACAO RECOMENDADA --- >> "%LOG_FILE%"
echo. >> "%LOG_FILE%"
if "!GIT_DIRTY!"=="1" (
    echo   [ALERTA] Git sujo - resolver antes de qualquer execucao APROVACAO >> "%LOG_FILE%"
    echo           git add . e git commit, ou git restore . >> "%LOG_FILE%"
    echo. >> "%LOG_FILE%"
)
if %CNT_AUTO% GTR 0 echo   [DISPONIVEL] %CNT_AUTO% tarefa AUTO - prontas quando n8n estiver ativo >> "%LOG_FILE%"
if %CNT_APROVACAO% GTR 0 echo   [AGUARDANDO] %CNT_APROVACAO% tarefa APROVACAO - setar aprovado_por_murillo: true >> "%LOG_FILE%"
if %CNT_BLOQUEADO% GTR 0 echo   [BLOQUEADO] %CNT_BLOQUEADO% tarefa - ver motivo_bloqueio no JSON >> "%LOG_FILE%"
echo. >> "%LOG_FILE%"
echo --- FIM --- >> "%LOG_FILE%"
echo Status: runner concluido com sucesso >> "%LOG_FILE%"
echo Log: %LOG_FILE% >> "%LOG_FILE%"

REM ==============================================================
REM CONSOLE FINAL
REM ==============================================================
echo  ============================================================
echo   RELATORIO JARVIS - %ANO%-%MES%-%DIA% %HORA%:%MIN%
echo  ============================================================
echo.
echo   Total de tarefas:   %CNT_TOTAL%
echo   Pendentes:          %CNT_PENDENTE%
echo   AUTO:               %CNT_AUTO%
echo   APROVACAO:          %CNT_APROVACAO%
echo   BLOQUEADO:          %CNT_BLOQUEADO%
if %CNT_INVALIDO% GTR 0 echo   Invalidos:          %CNT_INVALIDO%
echo.
if "!GIT_DIRTY!"=="1" (
    echo   [ALERTA] Git sujo - resolver antes de executar tarefas APROVACAO
    echo.
)
echo   Log: %LOG_FILE%
echo.
echo   Para ler o log completo:
echo     type "%LOG_FILE%"
echo.
echo  ============================================================
echo.

REM ── Limpar temporarios ────────────────────────────────────────
del /q "%TMP_DIR%\*.tmp" 2>nul
del /q "%TMP_DIR%\*.ps1" 2>nul

endlocal
exit /b 0
