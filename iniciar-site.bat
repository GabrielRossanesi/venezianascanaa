@echo off
setlocal
title Venezianas Canaa - Inicializador

cd /d "%~dp0"

where node.exe >nul 2>&1
if errorlevel 1 (
  echo.
  echo [ERRO] O Node.js nao foi encontrado neste computador.
  echo Instale o Node.js e execute este arquivo novamente.
  echo.
  pause
  exit /b 1
)

where npm.cmd >nul 2>&1
if errorlevel 1 (
  echo.
  echo [ERRO] O npm nao foi encontrado neste computador.
  echo Reinstale o Node.js e execute este arquivo novamente.
  echo.
  pause
  exit /b 1
)

if not exist "node_modules\" (
  echo Instalando as dependencias do projeto...
  call npm.cmd install
  if errorlevel 1 (
    echo.
    echo [ERRO] Nao foi possivel instalar as dependencias.
    echo.
    pause
    exit /b 1
  )
)

echo Iniciando o site em http://127.0.0.1:5173
start "Venezianas Canaa - Servidor" cmd.exe /k "cd /d ""%~dp0"" && npm.cmd run dev -- --host 127.0.0.1"

timeout /t 3 /nobreak >nul
start "" "http://127.0.0.1:5173"

endlocal
