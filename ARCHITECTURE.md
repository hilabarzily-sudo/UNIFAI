# 🏗️ UNIFAI - ארכיטקטורה

## 📐 סקירה כללית

```
┌─────────────────────────────────────────────────┐
│              Frontend (React)                    │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│  │  Header  │  │ Balloons │  │ Selector │      │
│  └──────────┘  └──────────┘  └──────────┘      │
│  ┌───────────────────────────────────────┐      │
│  │       ChatContainer                   │      │
│  │  ┌────────────────────────────────┐   │      │
│  │  │     MessageList                │   │      │
│  │  │  ┌──────┐  ┌──────┐  ┌──────┐ │   │      │
│  │  │  │ Msg  │  │ Msg  │  │ Msg  │ │   │      │
│  │  │  └──────┘  └──────┘  └──────┘ │   │      │
│  │  └────────────────────────────────┘   │      │
│  │  ┌────────────────────────────────┐   │      │
│  │  │      MessageInput               │   │      │
│  │  └────────────────────────────────┘   │      │
│  └───────────────────────────────────────┘      │
└─────────────────────────────────────────────────┘
                       ↕ HTTP/REST
┌─────────────────────────────────────────────────┐
│          Backend (Node.js + Express)             │
│  ┌──────────────────────────────────────────┐   │
│  │            Routes Layer                  │   │
│  │  ┌──────────┐      ┌──────────┐         │   │
│  │  │ /chat    │      │ /models  │         │   │
│  │  └──────────┘      └──────────┘         │   │
│  └──────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────┐   │
│  │          Services Layer                  │   │
│  │  ┌────────────────────────────────────┐  │   │
│  │  │        ChatService                 │  │   │
│  │  │  ┌──────┐ ┌──────┐ ┌──────┐       │  │   │
│  │  │  │OpenAI│ │Claude│ │Gemini│       │  │   │
│  │  │  └──────┘ └──────┘ └──────┘       │  │   │
│  │  └────────────────────────────────────┘  │   │
│  └──────────────────────────────────────────┘   │
└─────────────────────────────────────────────────┘
                       ↕ HTTPS
┌─────────────────────────────────────────────────┐
│              External AI APIs                    │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│  │ OpenAI   │  │Anthropic │  │  Google  │      │
│  │ API      │  │   API    │  │   API    │      │
│  └──────────┘  └──────────┘  └──────────┘      │
└─────────────────────────────────────────────────┘
```

## 🔄 זרימת נתונים

### זרימת שליחת הודעה

```
1. User Types Message
   ↓
2. MessageInput Component
   ↓
3. ChatContainer State Update
   ↓
4. API Call (POST /api/chat/message)
   ↓
5. Express Route Handler (chat.js)
   ↓
6. ChatService.sendMessage()
   ↓
7. AI Provider SDK
   ↓
8. External AI API
   ↓
9. Response Back Through Chain
   ↓
10. React State Update
   ↓
11. UI Re-render with New Message
```

## 📦 Component Structure

### Frontend Components Tree

```
App
├── FloatingBalloons
├── Header
├── ModelSelector
└── ChatContainer
    ├── MessageList
    │   ├── Message (multiple)
    │   └── TypingIndicator
    └── MessageInput
```

### Component Responsibilities

| Component | תפקיד |
|-----------|--------|
| **App** | Root component, state management |
| **FloatingBalloons** | רקע אנימציה |
| **Header** | כותרת ולוגו |
| **ModelSelector** | בחירת מודל AI |
| **ChatContainer** | מכיל את השיחה |
| **MessageList** | מציג רשימת הודעות |
| **Message** | הודעה בודדת |
| **TypingIndicator** | אינדיקטור כתיבה |
| **MessageInput** | קלט הודעות |

## 🔌 API Endpoints

### Backend API

```
GET  /health                  - Health check
GET  /api/models             - Get available models
POST /api/chat/message       - Send message (non-streaming)
POST /api/chat/stream        - Send message (streaming)
```

### Request/Response Examples

**POST /api/chat/message**

Request:
```json
{
  "message": "שלום, מה שלומך?",
  "model": "gpt-3.5-turbo",
  "conversationHistory": [
    {
      "role": "user",
      "content": "היי"
    },
    {
      "role": "assistant",
      "content": "שלום! איך אני יכול לעזור?"
    }
  ]
}
```

Response:
```json
{
  "content": "שלום! אני בסדר, תודה. איך אני יכול לעזור לך היום?",
  "model": "gpt-3.5-turbo",
  "provider": "openai"
}
```

## 🎯 State Management

### React State

```javascript
// App.jsx
const [selectedModel, setSelectedModel] = useState('gpt-4');
const [availableModels, setAvailableModels] = useState([]);

// ChatContainer.jsx
const [messages, setMessages] = useState([]);
const [isLoading, setIsLoading] = useState(false);

// Message Structure
{
  id: number,
  role: 'user' | 'assistant',
  content: string,
  model?: string,
  provider?: string,
  timestamp: string,
  error?: boolean
}
```

## 🔐 Security Architecture

### Environment Variables

```
.env (Server-side only)
├── OPENAI_API_KEY     → ChatService
├── ANTHROPIC_API_KEY  → ChatService
├── GOOGLE_API_KEY     → ChatService
├── PORT               → Express Server
└── CLIENT_URL         → CORS Config
```

**Important**: Never expose API keys to frontend!

### CORS Configuration

```javascript
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));
```

## 🎨 Styling Architecture

### CSS Structure

```
Global Styles (index.css)
├── CSS Variables
├── Reset Styles
├── Animations
├── Glassmorphism Classes
└── Utility Classes

Component Styles
├── Header.css
├── ModelSelector.css
├── ChatContainer.css
├── Message.css
├── MessageInput.css
├── TypingIndicator.css
└── FloatingBalloons.css
```

### CSS Variables Usage

```css
/* Define once */
:root {
  --primary-pink: #F8B4B4;
  --glass-bg: rgba(255, 255, 255, 0.25);
}

/* Use everywhere */
.my-component {
  background: var(--glass-bg);
  border-color: var(--primary-pink);
}
```

## 🔄 Animation System

### Framer Motion Hierarchy

```
AnimatePresence (Conditional Rendering)
├── motion.div (Container Animations)
│   ├── initial={{ opacity: 0, y: 20 }}
│   ├── animate={{ opacity: 1, y: 0 }}
│   └── exit={{ opacity: 0, y: -20 }}
└── motion.button (Interactive Elements)
    ├── whileHover={{ scale: 1.05 }}
    └── whileTap={{ scale: 0.95 }}
```

## 📡 Network Flow

### API Call Pattern

```javascript
// 1. Frontend makes request
fetch('http://localhost:3001/api/chat/message', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message, model, conversationHistory })
})

// 2. Express receives and routes
app.use('/api/chat', chatRouter);

// 3. Route handler processes
chatRouter.post('/message', async (req, res) => {
  const response = await chatService.sendMessage(...);
  res.json(response);
});

// 4. Service calls AI
async sendMessage(message, model, history) {
  const provider = this.getProvider(model);
  // Call appropriate AI SDK
}

// 5. Response flows back to frontend
```

## 🧪 Testing Strategy

### Unit Tests (Future)

```javascript
// ChatService.test.js
describe('ChatService', () => {
  test('sends message to OpenAI', async () => {
    // Test implementation
  });
});
```

### Integration Tests (Future)

```javascript
// api.test.js
describe('Chat API', () => {
  test('POST /api/chat/message returns response', async () => {
    // Test implementation
  });
});
```

## 🚀 Deployment Architecture

### Production Setup (Future)

```
Frontend (Vercel/Netlify)
  ↓ HTTPS
Backend (Railway/Render/Heroku)
  ↓ HTTPS
AI APIs (OpenAI/Anthropic/Google)
```

### Environment Variables in Production

```
Frontend:
- VITE_API_URL=https://your-backend.com

Backend:
- OPENAI_API_KEY=...
- ANTHROPIC_API_KEY=...
- GOOGLE_API_KEY=...
- PORT=...
- NODE_ENV=production
- CLIENT_URL=https://your-frontend.com
```

## 📈 Scalability Considerations

### Current Limitations

- Single server instance
- In-memory conversation storage
- No user authentication
- No rate limiting

### Future Improvements

- Database for conversation persistence (MongoDB/PostgreSQL)
- Redis for caching
- Load balancing
- Microservices architecture
- CDN for static assets

---

**UNIFAI** - Built for growth 🌱