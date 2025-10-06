# 🤖 UNIFAI - Advanced AI Chatbot

A beautiful, modern AI chatbot application with **glassmorphism design** and multi-model support. Built with React, Node.js, and integrated with leading AI providers.

![UNIFAI Chatbot](https://img.shields.io/badge/AI-Chatbot-green?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js)

## ✨ Features

- 🎨 **Stunning Glassmorphism UI** - Modern, floating glass design with smooth animations
- 🤖 **Multi-AI Support** - Integrate OpenAI (GPT-4, GPT-3.5) and Anthropic (Claude 3)
- 💬 **Real-time Chat** - Smooth, responsive conversation interface
- 🎭 **Model Switching** - Easily switch between different AI models
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast & Efficient** - Optimized performance with React + Vite

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- API keys from one or both:
  - [OpenAI API Key](https://platform.openai.com/api-keys)
  - [Anthropic API Key](https://console.anthropic.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd unifai-chatbot
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your API keys:
   ```env
   PORT=5000
   OPENAI_API_KEY=sk-...
   ANTHROPIC_API_KEY=sk-ant-...
   DEFAULT_MODEL=gpt-4-turbo-preview
   ```

4. **Start the application**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
unifai-chatbot/
├── server/                  # Backend (Node.js + Express)
│   ├── index.js            # Server entry point
│   ├── routes/             # API routes
│   ├── controllers/        # Route controllers
│   └── services/           # AI service integrations
├── client/                  # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── services/       # API services
│   │   ├── App.jsx         # Main app component
│   │   └── index.css       # Global styles
│   ├── index.html
│   └── package.json
├── .env.example            # Environment variables template
├── package.json            # Root package.json
└── README.md
```

## 🎨 Design Features

### Glassmorphism
- Frosted glass effects with backdrop blur
- Transparent floating elements
- Subtle shadows and borders
- Smooth animations and transitions

### Color Palette
- Primary: `#2d5a4a` (Deep Green)
- Secondary: `#3d7a63` (Forest Green)
- Accent: `#4a9d7f` (Jade Green)
- Light: `#8bc4a8` (Mint)
- Background: Gradient from deep to light green

### Animations
- Smooth entry animations with Framer Motion
- Floating background effects
- Interactive hover states
- Loading indicators

## 🔌 API Integration

### Supported Models

**OpenAI:**
- GPT-4 Turbo (128K context)
- GPT-4
- GPT-3.5 Turbo

**Anthropic:**
- Claude 3 Opus
- Claude 3 Sonnet
- Claude 3 Haiku

### API Endpoints

**POST /api/chat**
```json
{
  "messages": [
    {"role": "user", "content": "Hello!"}
  ],
  "model": "gpt-4-turbo-preview",
  "temperature": 0.7
}
```

**GET /api/models**
Returns list of available models based on configured API keys.

**GET /api/health**
Health check endpoint.

## 🛠️ Development

### Running Backend Only
```bash
npm run server
```

### Running Frontend Only
```bash
npm run client
```

### Running Both (Recommended)
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `PORT` | Server port (default: 5000) | No |
| `OPENAI_API_KEY` | OpenAI API key | Yes* |
| `ANTHROPIC_API_KEY` | Anthropic API key | Yes* |
| `DEFAULT_MODEL` | Default AI model | No |

*At least one API key is required

## 📱 Responsive Design

The application is fully responsive and optimized for:
- 💻 Desktop (1920px+)
- 💻 Laptop (1366px - 1920px)
- 📱 Tablet (768px - 1366px)
- 📱 Mobile (320px - 768px)

## 🎯 Features Roadmap

- [ ] User authentication
- [ ] Conversation history
- [ ] Message export (PDF, TXT)
- [ ] Voice input/output
- [ ] Code syntax highlighting
- [ ] Multi-language support
- [ ] Dark/Light theme toggle
- [ ] Custom system prompts

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Design inspired by green monochrome aesthetic
- Built with React, Express, and modern web technologies
- AI powered by OpenAI and Anthropic

---

Made with 💚 by UNIFAI Team
