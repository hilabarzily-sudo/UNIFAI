@echo off
echo ========================================
echo   UNIFAI Chatbot - Starting Server
echo ========================================
echo.

REM Check if node_modules exists
if not exist "node_modules\" (
    echo Installing dependencies...
    call npm run install-all
    echo.
)

REM Check if .env exists
if not exist ".env" (
    echo WARNING: .env file not found!
    echo Please copy .env.example to .env and add your API keys.
    echo.
    pause
    exit /b 1
)

echo Starting UNIFAI Chatbot...
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo.

npm run dev

pause
