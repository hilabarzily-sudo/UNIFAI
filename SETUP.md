# 🛠️ Setup Guide - AI Chatbot

Complete setup instructions for the AI Chatbot application.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** (optional, for cloning)
- **OpenAI API Key** - [Get one here](https://platform.openai.com/api-keys)

## 🚀 Installation Steps

### Step 1: Get the Code

If you have Git:
```bash
git clone <repository-url>
cd ai-chatbot
```

Or download and extract the ZIP file.

### Step 2: Install Backend Dependencies

```bash
cd backend
npm install
```

This will install:
- express - Web server framework
- openai - OpenAI API client
- cors - Cross-origin resource sharing
- dotenv - Environment variable management
- uuid - Unique ID generation
- body-parser - Request body parsing

### Step 3: Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

This will install:
- react & react-dom - UI framework
- vite - Build tool and dev server
- axios - HTTP client
- react-icons - Icon library
- react-markdown - Markdown rendering

### Step 4: Configure Environment Variables

1. Navigate to backend folder:
```bash
cd ../backend
```

2. Copy the example environment file:
```bash
cp .env.example .env
```

3. Open `.env` in your text editor and add your OpenAI API key:
```env
PORT=5000
OPENAI_API_KEY=sk-your-actual-api-key-here
NODE_ENV=development
```

**🔑 Getting an OpenAI API Key:**

1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Sign up or log in
3. Navigate to API Keys section
4. Create a new secret key
5. Copy and paste it into your `.env` file

⚠️ **Important**: Never share or commit your API key!

### Step 5: Start the Application

#### Option A: Using the Startup Script (Recommended)

**Linux/Mac:**
```bash
cd ..
chmod +x start.sh
./start.sh
```

**Windows:**
```bash
cd ..
.\start.bat
```

#### Option B: Manual Start

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### Step 6: Open the Application

Open your browser and navigate to:
```
http://localhost:3000
```

You should see the AI Chatbot welcome screen! 🎉

## 🔍 Verification

### Check if Backend is Running

Visit: `http://localhost:5000/api/health`

You should see:
```json
{
  "status": "ok",
  "message": "AI Chatbot Backend is running"
}
```

### Check if Frontend is Running

Visit: `http://localhost:3000`

You should see the glassmorphism welcome screen.

## 🐛 Troubleshooting

### Issue: "Module not found" errors

**Solution:**
```bash
# Clean install for backend
cd backend
rm -rf node_modules package-lock.json
npm install

# Clean install for frontend
cd ../frontend
rm -rf node_modules package-lock.json
npm install
```

### Issue: "OpenAI API key not valid"

**Solution:**
1. Check your `.env` file in the backend folder
2. Ensure the API key starts with `sk-`
3. Verify your OpenAI account has credits
4. Make sure there are no spaces around the key

### Issue: Port already in use

**Solution:**

**For Backend (Port 5000):**
Edit `backend/.env`:
```env
PORT=5001
```

**For Frontend (Port 3000):**
Edit `frontend/vite.config.js`:
```javascript
server: {
  port: 3001,
  // ...
}
```

### Issue: CORS errors

**Solution:**
Make sure both backend and frontend are running. The frontend is configured to proxy API requests to the backend.

### Issue: "Cannot connect to backend"

**Solution:**
1. Ensure backend server is running on port 5000
2. Check backend terminal for errors
3. Verify `.env` file exists and is properly configured

## 🎯 Development Mode

### Backend Development (with auto-reload)

```bash
cd backend
npm run dev
```

Uses nodemon to automatically restart on file changes.

### Frontend Development

```bash
cd frontend
npm run dev
```

Vite provides hot module replacement (HMR) for instant updates.

## 📦 Production Build

### Build Frontend

```bash
cd frontend
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🔐 Security Best Practices

1. **Never commit `.env` files** - They're in `.gitignore` for a reason
2. **Keep API keys secure** - Don't share them or expose them in code
3. **Use environment variables** - For all sensitive configuration
4. **Rotate API keys regularly** - Especially if they might be compromised
5. **Monitor API usage** - Check OpenAI dashboard for unexpected usage

## 📊 API Usage & Costs

### Model Costs (approximate)

- **GPT-4**: $0.03 per 1K input tokens, $0.06 per 1K output tokens
- **GPT-3.5-turbo**: $0.0015 per 1K input tokens, $0.002 per 1K output tokens

### Monitoring Usage

1. Log in to [OpenAI Platform](https://platform.openai.com/)
2. Navigate to Usage section
3. Monitor your API calls and costs

### Setting Usage Limits

In OpenAI dashboard:
1. Go to Settings > Billing
2. Set monthly budget limits
3. Enable usage alerts

## 🎨 Customization

### Changing AI Model

Edit `backend/services/aiService.js`:

```javascript
// Change default model
const completion = await this.openai.chat.completions.create({
  model: 'gpt-3.5-turbo', // Change this
  // ...
});
```

### Customizing Colors

Edit `frontend/src/index.css`:

```css
:root {
  --accent-green: #00ff88;  /* Change this */
  --accent-blue: #4facfe;   /* Change this */
  --accent-purple: #a78bfa; /* Change this */
}
```

### Changing System Prompt

Edit `backend/services/aiService.js`:

```javascript
this.systemPrompt = `Your custom system prompt here...`;
```

## 🚀 Next Steps

Now that your chatbot is running:

1. Try asking it questions
2. Start multiple conversations
3. Explore the glassmorphism UI
4. Customize the appearance
5. Integrate with your UNIFAI project

## 📞 Need Help?

- Check the main [README.md](./README.md)
- Review OpenAI documentation
- Check console for error messages

Happy chatting! 🤖✨
