@echo off
echo.
echo ========================================
echo    UNIFAI - Starting Backend Server
echo ========================================
echo.

cd /d "%~dp0"

echo Checking for node_modules...
if not exist "node_modules\" (
    echo Installing dependencies...
    call npm install
)

echo.
echo Starting server on port 3001...
echo.

call npm run dev

pause
