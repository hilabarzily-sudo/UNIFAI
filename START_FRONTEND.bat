@echo off
echo.
echo ========================================
echo    UNIFAI - Starting Frontend Client
echo ========================================
echo.

cd /d "%~dp0\client"

echo Checking for node_modules...
if not exist "node_modules\" (
    echo Installing dependencies...
    call npm install
)

echo.
echo Starting Vite dev server on port 5173...
echo.

call npm run dev

pause
