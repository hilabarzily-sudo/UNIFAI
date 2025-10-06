@echo off
echo ============================================
echo    Starting AI Chatbot Application
echo ============================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Install backend dependencies if needed
if not exist "backend\node_modules\" (
    echo Installing backend dependencies...
    cd backend
    call npm install
    cd ..
)

REM Install frontend dependencies if needed
if not exist "frontend\node_modules\" (
    echo Installing frontend dependencies...
    cd frontend
    call npm install
    cd ..
)

REM Check if .env exists
if not exist "backend\.env" (
    echo WARNING: backend\.env file not found!
    echo Creating .env from .env.example...
    copy backend\.env.example backend\.env
    echo.
    echo Please edit backend\.env and add your OpenAI API key!
    echo.
    pause
)

echo.
echo Starting Backend Server...
start "AI Chatbot Backend" cmd /k "cd backend && npm start"

timeout /t 3 /nobreak >nul

echo Starting Frontend Server...
start "AI Chatbot Frontend" cmd /k "cd frontend && npm run dev"

echo.
echo ============================================
echo   AI Chatbot is starting!
echo ============================================
echo.
echo Backend:  http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo Two terminal windows have been opened.
echo Close them to stop the servers.
echo.
pause
