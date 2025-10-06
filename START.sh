#!/bin/bash

echo "========================================"
echo "  UNIFAI Chatbot - Starting Server"
echo "========================================"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm run install-all
    echo ""
fi

# Check if .env exists
if [ ! -f ".env" ]; then
    echo "WARNING: .env file not found!"
    echo "Please copy .env.example to .env and add your API keys."
    echo ""
    exit 1
fi

echo "Starting UNIFAI Chatbot..."
echo "Backend: http://localhost:5000"
echo "Frontend: http://localhost:3000"
echo ""

npm run dev
