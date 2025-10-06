@echo off
echo.
echo ========================================
echo    UNIFAI - Starting Full Application
echo ========================================
echo.

cd /d "%~dp0"

echo Installing all dependencies...
echo.

echo [1/2] Installing server dependencies...
call npm install

echo.
echo [2/2] Installing client dependencies...
cd client
call npm install
cd ..

echo.
echo ========================================
echo    Starting Backend and Frontend
echo ========================================
echo.
echo Backend will run on: http://localhost:3001
echo Frontend will run on: http://localhost:5173
echo.
echo Press Ctrl+C to stop both servers
echo.

call npm run dev:all

pause
