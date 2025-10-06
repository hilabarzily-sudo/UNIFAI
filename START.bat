@echo off
echo ========================================
echo   UNIFAI - Starting Application
echo ========================================
echo.

REM Check if node_modules exists
if not exist "backend\node_modules" (
    echo Installing backend dependencies...
    cd backend
    call npm install
    cd ..
    echo.
)

if not exist "frontend\node_modules" (
    echo Installing frontend dependencies...
    cd frontend
    call npm install
    cd ..
    echo.
)

REM Check if .env files exist
if not exist "backend\.env" (
    echo Warning: backend\.env file not found!
    echo Please create it from backend\.env.example
    echo.
    pause
    exit
)

echo Starting UNIFAI...
echo Backend: http://localhost:5000
echo Frontend: http://localhost:5173
echo.

npm run dev
