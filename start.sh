#!/bin/bash

echo "========================================"
echo "  UNIFAI - Starting Application"
echo "========================================"
echo ""

# Check if node_modules exists
if [ ! -d "backend/node_modules" ]; then
    echo "Installing backend dependencies..."
    cd backend
    npm install
    cd ..
    echo ""
fi

if [ ! -d "frontend/node_modules" ]; then
    echo "Installing frontend dependencies..."
    cd frontend
    npm install
    cd ..
    echo ""
fi

# Check if .env files exist
if [ ! -f "backend/.env" ]; then
    echo "Warning: backend/.env file not found!"
    echo "Please create it from backend/.env.example"
    echo ""
    exit 1
fi

echo "Starting UNIFAI..."
echo "Backend: http://localhost:5000"
echo "Frontend: http://localhost:5173"
echo ""

npm run dev
