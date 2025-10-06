@echo off
echo ========================================
echo   UNIFAI - Starting Frontend Only
echo ========================================
echo.

cd frontend

if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
    echo.
)

echo Starting Frontend Development Server...
echo URL: http://localhost:5173
echo.

npm run dev
