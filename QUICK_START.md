# ⚡ UNIFAI Quick Start

Get up and running in 5 minutes!

## 📋 Prerequisites

✅ Node.js 18+ installed  
✅ npm installed  
✅ API key from OpenAI or Anthropic

## 🚀 3-Step Setup

### Step 1: Install Dependencies

```bash
npm run install-all
```

This installs everything you need for both backend and frontend.

### Step 2: Configure API Keys

```bash
# Copy the example file
cp .env.example .env
```

Edit `.env` and add your API key(s):

```env
# Add at least one API key:
OPENAI_API_KEY=sk-proj-YOUR_KEY_HERE
# or
ANTHROPIC_API_KEY=sk-ant-YOUR_KEY_HERE
```

**Get API Keys:**
- OpenAI: https://platform.openai.com/api-keys
- Anthropic: https://console.anthropic.com/

### Step 3: Start the App

```bash
npm run dev
```

**Or use the startup scripts:**

Windows:
```bash
START.bat
```

Mac/Linux:
```bash
./START.sh
```

## 🌐 Access the App

Open your browser and go to:
```
http://localhost:3000
```

That's it! You're ready to chat! 🎉

## 🎯 First Steps

1. **Type a message** in the input box at the bottom
2. **Press Enter** to send
3. **Wait for the AI** to respond
4. **Click the model button** in the header to switch AI models

## 💬 Example Prompts

Try asking:
- "What can you help me with?"
- "Explain quantum computing simply"
- "Write a Python function to sort a list"
- "Create a short poem about AI"

## 🎨 Features Overview

### Switch Models
Click the sparkle button (✨) in the header to choose different AI models:
- **GPT-4 Turbo** - Most powerful OpenAI model
- **GPT-3.5 Turbo** - Fast and efficient
- **Claude 3 Opus** - Best Anthropic model
- **Claude 3 Haiku** - Fastest responses

### Beautiful Design
- **Glassmorphism** - Transparent, frosted glass effect
- **Animations** - Smooth transitions and effects
- **Responsive** - Works on all devices

## ⚙️ Configuration

### Change Port

Edit `.env`:
```env
PORT=8080  # Default is 5000
```

### Select Default Model

Edit `.env`:
```env
DEFAULT_MODEL=gpt-3.5-turbo  # Options: gpt-4-turbo-preview, gpt-4, gpt-3.5-turbo, claude-3-opus-20240229, etc.
```

## 🔧 Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start both backend and frontend |
| `npm run server` | Start backend only (port 5000) |
| `npm run client` | Start frontend only (port 3000) |
| `npm run build` | Build for production |

## 📚 More Information

- **Detailed Setup**: See [SETUP.md](SETUP.md)
- **User Guide**: See [USAGE_GUIDE.md](USAGE_GUIDE.md)
- **API Docs**: See [API_DOCUMENTATION.md](API_DOCUMENTATION.md)
- **Features**: See [FEATURES.md](FEATURES.md)

## 🐛 Troubleshooting

### "Cannot find module"
```bash
npm run install-all
```

### "API key not configured"
1. Make sure `.env` exists
2. Check your API keys are correct
3. Restart the server

### Port already in use
Kill the process or change the port in `.env`:

**Windows:**
```bash
netstat -ano | findstr :5000
taskkill /PID <pid> /F
```

**Mac/Linux:**
```bash
lsof -ti:5000 | xargs kill
```

### Frontend won't load
1. Check backend is running: http://localhost:5000/api/health
2. Clear browser cache
3. Check browser console (F12) for errors

## 💡 Tips

1. **Use Shift+Enter** for new lines in messages
2. **Try different models** to see which works best for your use case
3. **GPT-3.5 Turbo is fastest** for quick questions
4. **GPT-4 Turbo is best** for complex tasks

## 🆘 Need Help?

1. Check [README.md](README.md)
2. Review [SETUP.md](SETUP.md)
3. Read [USAGE_GUIDE.md](USAGE_GUIDE.md)
4. Open an issue on GitHub

## 🎉 You're All Set!

Enjoy chatting with AI! 🤖💚

---

**Next Steps:**
- Explore different AI models
- Try complex prompts
- Customize the theme (coming soon!)
- Read the full documentation

**Have fun!** 🚀
