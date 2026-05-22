@echo off
setlocal
title Cerebro Jampa - Claude Code Proxy

set "PROJECT_DIR=%~dp0"
if "%PROJECT_DIR:~-1%"=="\" set "PROJECT_DIR=%PROJECT_DIR:~0,-1%"

if not defined ANTHROPIC_BASE_URL (
  set "ANTHROPIC_BASE_URL=http://localhost:8082"
)

if not defined ANTHROPIC_AUTH_TOKEN (
  echo Defina ANTHROPIC_AUTH_TOKEN antes de executar este script.
  echo Exemplo:
  echo   set "ANTHROPIC_AUTH_TOKEN=seu-token-local"
  echo.
  pause
  exit /b 1
)

cd /d "%PROJECT_DIR%"

echo Abrindo Claude Code no projeto CEREBRO.JAMPA...
echo Projeto: %cd%
echo BASE URL: %ANTHROPIC_BASE_URL%
echo AUTH TOKEN: definido
echo.

fcc-claude

echo.
echo Claude Code foi encerrado ou ocorreu um erro.
pause
endlocal
