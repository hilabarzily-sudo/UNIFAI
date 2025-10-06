# 🔧 UNIFAI Setup Guide

Complete setup instructions for the UNIFAI Chatbot application.

## 📋 Prerequisites

Before starting, make sure you have:

1. **Node.js** (v18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** (comes with Node.js)
   - Verify installation: `npm --version`

3. **AI API Keys** (at least one):
   - OpenAI API Key: https://platform.openai.com/api-keys
   - Anthropic API Key: https://console.anthropic.com/

## 🚀 Step-by-Step Setup

### 1. Install Dependencies

```bash
# Install both backend and frontend dependencies
npm run install-all
```

This will install:
- Backend dependencies in `node_modules/`
- Frontend dependencies in `client/node_modules/`

### 2. Configure Environment Variables

```bash
# Copy the example environment file
cp .env.example .env
```

Edit `.env` file with your favorite text editor:

```env
# Server Configuration
PORT=5000

# OpenAI API Key (required for GPT models)
OPENAI_API_KEY=sk-proj-...

# Anthropic Claude API Key (required for Claude models)
ANTHROPIC_API_KEY=sk-ant-...

# Default AI Model
DEFAULT_MODEL=gpt-4-turbo-preview
```

**Important Notes:**
- Never commit `.env` file to version control
- Keep your API keys secure
- At least one API key (OpenAI or Anthropic) is required

### 3. Start the Application

**Option A: Using npm scripts (Recommended)**
```bash
npm run dev
```

**Option B: Using batch file (Windows)**
```bash
START.bat
```

**Option C: Using shell script (Mac/Linux)**
```bash
chmod +x START.sh
./START.sh
```

### 4. Access the Application

Once started, open your browser and navigate to:
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000/api/health

## 🔍 Troubleshooting

### Issue: "Cannot find module"
**Solution:** Run `npm run install-all` again

### Issue: "API key not configured"
**Solution:** 
1. Check that `.env` file exists
2. Verify API keys are correct
3. Restart the server

### Issue: Port already in use
**Solution:** 
1. Change PORT in `.env` file
2. Or kill the process using the port:
   - Windows: `netstat -ano | findstr :5000` then `taskkill /PID <pid> /F`
   - Mac/Linux: `lsof -ti:5000 | xargs kill`

### Issue: Frontend won't connect to backend
**Solution:**
1. Ensure backend is running on port 5000
2. Check browser console for errors
3. Verify CORS settings in `server/index.js`

## 📦 Development Setup

### Running Backend Only
```bash
npm run server
```
Backend will run on http://localhost:5000

### Running Frontend Only
```bash
npm run client
```
Frontend will run on http://localhost:3000

### Installing New Dependencies

**Backend:**
```bash
npm install <package-name>
```

**Frontend:**
```bash
cd client
npm install <package-name>
```

## 🏗️ Building for Production

```bash
# Build frontend
cd client
npm run build

# The built files will be in client/dist/
```

To serve in production:
1. Build the frontend
2. Configure a reverse proxy (nginx, Apache)
3. Use PM2 or similar for backend process management

## 🔐 Security Best Practices

1. **Never expose API keys**
   - Keep `.env` in `.gitignore`
   - Use environment variables in production

2. **Use environment-specific configs**
   - Development: `.env`
   - Production: Set environment variables directly

3. **Keep dependencies updated**
   ```bash
   npm outdated
   npm update
   ```

## 📚 Additional Resources

- [Node.js Documentation](https://nodejs.org/docs/)
- [React Documentation](https://react.dev/)
- [OpenAI API Documentation](https://platform.openai.com/docs/)
- [Anthropic API Documentation](https://docs.anthropic.com/)

## 💡 Tips

1. **Use nodemon** - Already configured for automatic server restarts
2. **Check logs** - Watch the console for errors and debugging info
3. **Test API endpoints** - Use tools like Postman or curl
4. **Browser DevTools** - F12 to open and check for frontend errors

## 🆘 Getting Help

If you encounter issues:
1. Check this guide first
2. Review the main README.md
3. Check console/terminal for error messages
4. Verify all prerequisites are installed
5. Ensure API keys are valid and have credits

---

Happy coding! 🚀
