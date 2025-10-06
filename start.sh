#!/bin/bash

echo "🚀 Starting AI Chatbot Application..."
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if backend dependencies are installed
if [ ! -d "backend/node_modules" ]; then
    echo "${BLUE}📦 Installing backend dependencies...${NC}"
    cd backend
    npm install
    cd ..
fi

# Check if frontend dependencies are installed
if [ ! -d "frontend/node_modules" ]; then
    echo "${BLUE}📦 Installing frontend dependencies...${NC}"
    cd frontend
    npm install
    cd ..
fi

# Check if .env exists
if [ ! -f "backend/.env" ]; then
    echo "⚠️  Warning: backend/.env file not found!"
    echo "Please create backend/.env and add your OPENAI_API_KEY"
    echo ""
    echo "Creating .env from .env.example..."
    cp backend/.env.example backend/.env
    echo ""
    echo "⚠️  Please edit backend/.env and add your OpenAI API key before the servers start."
    echo ""
    read -p "Press Enter when you're ready to continue..."
fi

echo "${GREEN}✅ Starting Backend Server...${NC}"
cd backend
npm start &
BACKEND_PID=$!

echo ""
echo "${GREEN}✅ Starting Frontend Server...${NC}"
cd ../frontend
npm run dev &
FRONTEND_PID=$!

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "${GREEN}🎉 AI Chatbot is running!${NC}"
echo ""
echo "Backend:  http://localhost:5000"
echo "Frontend: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop both servers"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Wait for Ctrl+C
trap "kill $BACKEND_PID $FRONTEND_PID; exit" INT
wait
