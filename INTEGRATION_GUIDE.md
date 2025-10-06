# 🔗 UNIFAI Integration Guide

Guide for integrating the AI Chatbot with your UNIFAI project.

## 🎯 Overview

This AI Chatbot is designed to integrate seamlessly with the UNIFAI platform. This guide explains how to connect the two systems.

## 🏗️ Integration Architecture

```
┌─────────────────┐
│   UNIFAI App    │
│                 │
│  ┌───────────┐  │
│  │  Chatbot  │  │ ← Embedded Component
│  │  Widget   │  │
│  └───────────┘  │
└────────┬────────┘
         │
         │ API Calls
         ↓
┌─────────────────┐
│  Chatbot API    │
│  (Backend)      │
└─────────────────┘
         │
         │ AI Requests
         ↓
┌─────────────────┐
│   OpenAI API    │
└─────────────────┘
```

## 📦 Integration Methods

### Method 1: Standalone Component (Recommended)

Keep the chatbot as a separate microservice and integrate via API.

**Advantages:**
- Independent deployment
- Separate scaling
- Easy maintenance
- Reusable across projects

**Implementation:**

1. Deploy chatbot backend to a server
2. Use the chatbot frontend as a widget in UNIFAI
3. Communicate via REST API

### Method 2: Direct Integration

Incorporate chatbot components directly into UNIFAI.

**Advantages:**
- Single deployment
- Shared authentication
- Unified styling

**Implementation:**

1. Copy frontend components to UNIFAI
2. Integrate backend routes into UNIFAI backend
3. Share database and user management

## 🔌 API Integration

### Using the Chatbot API in UNIFAI

#### 1. Install API Client

```bash
npm install axios
```

#### 2. Create API Service

Create `unifai/services/chatbotApi.js`:

```javascript
import axios from 'axios';

const CHATBOT_API_URL = process.env.REACT_APP_CHATBOT_API || 'http://localhost:5000/api';

class ChatbotAPI {
  constructor() {
    this.client = axios.create({
      baseURL: CHATBOT_API_URL,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  async sendMessage(message, conversationId = null) {
    try {
      const response = await this.client.post('/chat/message', {
        message,
        conversationId,
        model: 'gpt-4'
      });
      return response.data;
    } catch (error) {
      console.error('Chatbot API Error:', error);
      throw error;
    }
  }

  async getConversations() {
    try {
      const response = await this.client.get('/conversations');
      return response.data.conversations;
    } catch (error) {
      console.error('Error fetching conversations:', error);
      throw error;
    }
  }

  async deleteConversation(conversationId) {
    try {
      const response = await this.client.delete(`/conversations/${conversationId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting conversation:', error);
      throw error;
    }
  }
}

export default new ChatbotAPI();
```

#### 3. Use in UNIFAI Components

```javascript
import chatbotApi from './services/chatbotApi';

function UnifaiComponent() {
  const [response, setResponse] = useState('');

  const askChatbot = async (question) => {
    try {
      const result = await chatbotApi.sendMessage(question);
      setResponse(result.message);
    } catch (error) {
      console.error('Failed to get response:', error);
    }
  };

  return (
    <div>
      <button onClick={() => askChatbot('How can you help me?')}>
        Ask AI
      </button>
      <p>{response}</p>
    </div>
  );
}
```

## 🎨 UI Component Integration

### Embedding Chatbot Widget

#### 1. Copy Components

Copy these components to your UNIFAI project:

```
chatbot/frontend/src/components/
├── ChatContainer.jsx
├── ChatContainer.css
├── Message.jsx
├── Message.css
├── ChatInput.jsx
└── ChatInput.css
```

#### 2. Create Chatbot Widget

Create `unifai/components/ChatbotWidget.jsx`:

```javascript
import { useState } from 'react';
import ChatContainer from './chatbot/ChatContainer';
import './ChatbotWidget.css';

function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [conversation, setConversation] = useState(null);

  return (
    <>
      {/* Floating chat button */}
      <button 
        className="chatbot-toggle glass"
        onClick={() => setIsOpen(!isOpen)}
      >
        💬
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="chatbot-window glass">
          <div className="chatbot-header">
            <h3>AI Assistant</h3>
            <button onClick={() => setIsOpen(false)}>×</button>
          </div>
          <ChatContainer 
            conversation={conversation}
            conversationId={null}
            onMessageSent={() => {}}
          />
        </div>
      )}
    </>
  );
}

export default ChatbotWidget;
```

#### 3. Add Styles

Create `unifai/components/ChatbotWidget.css`:

```css
.chatbot-toggle {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00ff88, #4facfe);
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(0, 255, 136, 0.4);
  z-index: 1000;
  transition: all 0.3s ease;
}

.chatbot-toggle:hover {
  transform: scale(1.1);
  box-shadow: 0 12px 35px rgba(0, 255, 136, 0.5);
}

.chatbot-window {
  position: fixed;
  bottom: 6rem;
  right: 2rem;
  width: 400px;
  height: 600px;
  border-radius: 24px;
  overflow: hidden;
  z-index: 999;
  display: flex;
  flex-direction: column;
}

.chatbot-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .chatbot-window {
    width: 100%;
    height: 100%;
    bottom: 0;
    right: 0;
    border-radius: 0;
  }
}
```

#### 4. Add to UNIFAI App

```javascript
// In your main UNIFAI App.jsx
import ChatbotWidget from './components/ChatbotWidget';

function App() {
  return (
    <div className="unifai-app">
      {/* Your UNIFAI components */}
      
      {/* Add chatbot widget */}
      <ChatbotWidget />
    </div>
  );
}
```

## 🔐 Authentication Integration

### Sharing User Context

If UNIFAI has user authentication, you can pass user context to the chatbot:

```javascript
// In ChatbotAPI service
async sendMessage(message, conversationId, userContext) {
  const response = await this.client.post('/chat/message', {
    message,
    conversationId,
    userContext: {
      userId: userContext.userId,
      userName: userContext.userName,
      preferences: userContext.preferences
    }
  });
  return response.data;
}
```

### Backend User Context Handler

Update `backend/controllers/chatController.js`:

```javascript
export const sendMessage = async (req, res) => {
  const { message, conversationId, userContext } = req.body;
  
  // Use user context to personalize responses
  const personalizedPrompt = `User ${userContext?.userName || 'User'} asks: ${message}`;
  
  // Continue with AI response...
};
```

## 🎨 Styling Consistency

### Match UNIFAI Design System

1. **Copy UNIFAI's CSS variables** to chatbot:

```css
/* In chatbot frontend/src/index.css */
:root {
  /* Use UNIFAI's color palette */
  --primary-color: var(--unifai-primary);
  --secondary-color: var(--unifai-secondary);
  /* ... */
}
```

2. **Use UNIFAI's fonts**:

```css
body {
  font-family: var(--unifai-font-family);
}
```

3. **Match border radius and shadows**:

```css
.chatbot-component {
  border-radius: var(--unifai-border-radius);
  box-shadow: var(--unifai-shadow);
}
```

## 🚀 Deployment

### Deploy Chatbot Backend

1. **Railway.app** (Recommended)
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

2. **Heroku**
```bash
heroku create your-chatbot-api
git push heroku main
heroku config:set OPENAI_API_KEY=your_key
```

3. **Render**
- Connect GitHub repository
- Add environment variables
- Deploy

### Update UNIFAI Environment

```env
REACT_APP_CHATBOT_API=https://your-chatbot-api.herokuapp.com/api
```

## 📊 Advanced Features

### 1. User-Specific Conversations

Store conversations in UNIFAI's database with user associations.

### 2. Custom AI Behavior

Customize the system prompt based on UNIFAI's context:

```javascript
const unifaiSystemPrompt = `
You are an AI assistant for UNIFAI platform.
You help users with ${unifaiContext.features}.
Always provide responses in ${unifaiContext.language}.
`;
```

### 3. Analytics Integration

Track chatbot usage in UNIFAI's analytics:

```javascript
import { trackEvent } from './unifai/analytics';

const handleMessage = async (message) => {
  trackEvent('chatbot_message_sent', {
    messageLength: message.length,
    timestamp: Date.now()
  });
  
  const response = await chatbotApi.sendMessage(message);
  
  trackEvent('chatbot_response_received', {
    responseLength: response.message.length
  });
};
```

## ✅ Testing Integration

### Test Checklist

- [ ] Chatbot API accessible from UNIFAI
- [ ] CORS configured correctly
- [ ] Authentication working
- [ ] Styling matches UNIFAI design
- [ ] Mobile responsive
- [ ] Error handling works
- [ ] Loading states display correctly
- [ ] Conversations save properly

## 🐛 Common Integration Issues

### Issue: CORS errors between UNIFAI and Chatbot

**Solution:**
Update `backend/server.js`:
```javascript
app.use(cors({
  origin: ['http://localhost:3000', 'https://your-unifai-domain.com'],
  credentials: true
}));
```

### Issue: Style conflicts

**Solution:**
Use CSS modules or scoped styling:
```javascript
import styles from './Chatbot.module.css';
```

## 📞 Support

For integration help:
1. Check the main [README.md](./README.md)
2. Review [SETUP.md](./SETUP.md)
3. Check UNIFAI documentation

---

Happy integrating! 🚀
