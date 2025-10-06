# 🤖 AI Chatbot - Advanced Intelligent Assistant

A beautiful, modern AI chatbot application with **Glassmorphism** UI design, powered by OpenAI GPT models.

![AI Chatbot](https://img.shields.io/badge/AI-Chatbot-00ff88?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2-61dafb?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4-412991?style=for-the-badge&logo=openai)

## ✨ Features

- 🎨 **Glassmorphism UI** - Modern, transparent floating interface design
- 🧠 **Multiple AI Models** - Powered by OpenAI GPT-4 and GPT-3.5 Turbo
- 💬 **Real-time Chat** - Instant, intelligent responses
- 📝 **Conversation History** - Save and manage multiple chat sessions
- 🎯 **Context Awareness** - AI remembers conversation context
- 📱 **Responsive Design** - Works perfectly on all devices
- 🌙 **Dark Theme** - Easy on the eyes with beautiful gradients

## 🏗️ Architecture

```
ai-chatbot/
├── backend/                 # Node.js + Express Server
│   ├── server.js           # Main server file
│   ├── routes/             # API routes
│   ├── controllers/        # Request handlers
│   └── services/           # Business logic (AI & Conversations)
│
└── frontend/               # React + Vite Application
    ├── src/
    │   ├── components/     # React components
    │   ├── App.jsx         # Main app component
    │   └── index.css       # Global styles with glassmorphism
    └── index.html          # Entry HTML
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- OpenAI API Key ([Get one here](https://platform.openai.com/api-keys))

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd ai-chatbot
```

2. **Install Backend Dependencies**
```bash
cd backend
npm install
```

3. **Install Frontend Dependencies**
```bash
cd ../frontend
npm install
```

4. **Configure Environment Variables**
```bash
cd ../backend
cp .env.example .env
```

Edit `.env` and add your OpenAI API key:
```env
PORT=5000
OPENAI_API_KEY=your_openai_api_key_here
NODE_ENV=development
```

5. **Start the Application**

**Option 1: Using the startup script (Linux/Mac)**
```bash
cd ..
chmod +x start.sh
./start.sh
```

**Option 2: Manual start**

Terminal 1 - Backend:
```bash
cd backend
npm start
```

Terminal 2 - Frontend:
```bash
cd frontend
npm run dev
```

6. **Open your browser**
Navigate to: `http://localhost:3000`

## 🎯 API Endpoints

### Chat Endpoints

**POST** `/api/chat/message`
- Send a message and get AI response
- Body: `{ message, conversationId?, model? }`

**POST** `/api/chat/stream`
- Stream AI response in real-time
- Body: `{ message, conversationId?, model? }`

### Conversation Endpoints

**GET** `/api/conversations`
- Get all conversations

**GET** `/api/conversations/:id`
- Get specific conversation

**DELETE** `/api/conversations/:id`
- Delete conversation

**DELETE** `/api/conversations/clear/all`
- Clear all conversations

## 🎨 Design System

### Color Palette

- **Primary Background**: `#0a0e1a`
- **Secondary Background**: `#121827`
- **Accent Green**: `#00ff88`
- **Accent Blue**: `#4facfe`
- **Accent Purple**: `#a78bfa`

### Glassmorphism Effect

The UI uses modern glassmorphism effects:
- Semi-transparent backgrounds
- Backdrop blur filters
- Subtle borders and shadows
- Floating, layered elements

## 🔧 Configuration

### Backend Configuration

Edit `backend/.env`:

```env
PORT=5000                    # Backend server port
OPENAI_API_KEY=sk-...       # Your OpenAI API key
NODE_ENV=development         # Environment mode
```

### Frontend Configuration

Edit `frontend/vite.config.js` to change proxy settings or port.

## 📦 Available Models

The application supports multiple OpenAI models:

- **GPT-4** (default) - Most capable model
- **GPT-3.5-turbo** - Fast and cost-effective
- More models can be easily added in `aiService.js`

## 🛠️ Development

### Backend Development

```bash
cd backend
npm run dev  # Uses nodemon for auto-reload
```

### Frontend Development

```bash
cd frontend
npm run dev  # Vite dev server with HMR
```

### Build for Production

```bash
cd frontend
npm run build  # Creates optimized production build
```

## 🔐 Security Notes

- Never commit `.env` file with API keys
- Keep your OpenAI API key secure
- Use environment variables for sensitive data
- In production, add rate limiting and authentication

## 🚀 Deployment

### Backend Deployment

1. Deploy to any Node.js hosting (Heroku, Railway, Render, etc.)
2. Set environment variables in hosting dashboard
3. Ensure OpenAI API key is set

### Frontend Deployment

1. Build: `npm run build`
2. Deploy `dist` folder to:
   - Vercel
   - Netlify
   - GitHub Pages
   - Any static hosting

## 🤝 Integration with UNIFAI

This chatbot is designed to integrate seamlessly with the UNIFAI project:

1. **API Compatibility** - RESTful API design
2. **Modular Architecture** - Easy to integrate components
3. **Flexible Design System** - Matches modern UI patterns
4. **Scalable Backend** - Ready for database integration

## 📈 Future Enhancements

- [ ] Voice input/output
- [ ] File uploads and analysis
- [ ] Multi-language support
- [ ] Custom AI model training
- [ ] Database persistence (MongoDB/PostgreSQL)
- [ ] User authentication
- [ ] Team collaboration features
- [ ] Export conversations
- [ ] Custom themes

## 🐛 Troubleshooting

**Issue**: OpenAI API errors
- **Solution**: Check your API key is valid and has credits

**Issue**: CORS errors
- **Solution**: Ensure backend is running and proxy is configured

**Issue**: Connection refused
- **Solution**: Start both backend and frontend servers

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Built with ❤️ using React, Node.js, and OpenAI GPT

---

**Enjoy your intelligent AI assistant!** 🚀
