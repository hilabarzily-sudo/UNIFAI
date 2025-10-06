@echo off
echo ========================================
echo   UNIFAI - Starting Backend Only
echo ========================================
echo.

cd backend

if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
    echo.
)

if not exist ".env" (
    echo Warning: .env file not found!
    echo Please create it from .env.example
    echo.
    pause
    exit
)

echo Starting Backend Server...
echo API: http://localhost:5000
echo.

npm run dev
