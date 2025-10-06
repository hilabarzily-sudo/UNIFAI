# 📁 Project Structure - AI Chatbot

Complete file structure of the AI Chatbot application.

## 🌳 Directory Tree

```
ai-chatbot/
│
├── 📄 README.md                      # Main documentation
├── 📄 SETUP.md                       # Detailed setup guide
├── 📄 INTEGRATION_GUIDE.md           # UNIFAI integration instructions
├── 📄 PROJECT_STRUCTURE.md           # This file
│
├── 🚀 start.sh                       # Linux/Mac startup script
├── 🚀 start.bat                      # Windows startup script
├── 📝 .gitignore                     # Git ignore rules
│
├── 📁 backend/                       # Node.js + Express Backend
│   ├── 📄 server.js                 # Main server file
│   ├── 📄 package.json              # Backend dependencies
│   ├── 📄 .env.example              # Environment variables template
│   ├── 📝 .gitignore                # Backend-specific ignores
│   │
│   ├── 📁 routes/                   # API Routes
│   │   ├── chatRoutes.js           # Chat endpoints
│   │   └── conversationRoutes.js   # Conversation management
│   │
│   ├── 📁 controllers/              # Request Handlers
│   │   ├── chatController.js       # Chat logic
│   │   └── conversationController.js # Conversation CRUD
│   │
│   └── 📁 services/                 # Business Logic
│       ├── aiService.js            # OpenAI integration
│       └── conversationService.js  # Conversation management
│
└── 📁 frontend/                     # React + Vite Frontend
    ├── 📄 index.html               # Entry HTML
    ├── 📄 package.json             # Frontend dependencies
    ├── 📄 vite.config.js           # Vite configuration
    ├── 📝 .gitignore               # Frontend-specific ignores
    │
    └── 📁 src/                      # Source Code
        ├── 📄 main.jsx             # React entry point
        ├── 📄 App.jsx              # Main app component
        ├── 📄 App.css              # App styles
        ├── 📄 index.css            # Global styles + glassmorphism
        │
        └── 📁 components/           # React Components
            ├── Header.jsx          # Top navigation bar
            ├── Header.css
            ├── Sidebar.jsx         # Conversations sidebar
            ├── Sidebar.css
            ├── WelcomeScreen.jsx   # Initial landing page
            ├── WelcomeScreen.css
            ├── ChatContainer.jsx   # Main chat interface
            ├── ChatContainer.css
            ├── Message.jsx         # Individual message
            ├── Message.css
            ├── ChatInput.jsx       # Message input field
            └── ChatInput.css
```

## 📊 File Count Summary

### Backend (9 files)
- **Configuration**: 2 files (server.js, package.json)
- **Routes**: 2 files
- **Controllers**: 2 files
- **Services**: 2 files
- **Environment**: 1 file (.env.example)

### Frontend (19 files)
- **Configuration**: 3 files (index.html, vite.config.js, package.json)
- **Core**: 3 files (main.jsx, App.jsx, index.css)
- **Components**: 12 files (6 components × 2 files each)

### Documentation (4 files)
- README.md
- SETUP.md
- INTEGRATION_GUIDE.md
- PROJECT_STRUCTURE.md

### Scripts (2 files)
- start.sh (Linux/Mac)
- start.bat (Windows)

**Total Project Files**: 34 files

## 🎨 Component Architecture

### Frontend Component Hierarchy

```
App
├── Sidebar
│   └── ConversationItem (list)
│
└── Main Content
    ├── Header
    │   ├── MenuButton
    │   └── StatusIndicator
    │
    ├── WelcomeScreen (when no conversation)
    │   ├── FeatureCards
    │   └── QuickPrompts
    │
    └── ChatContainer (when conversation active)
        ├── MessagesContainer
        │   └── Message (list)
        │       ├── Avatar
        │       ├── MessageContent
        │       └── Timestamp
        │
        └── ChatInput
            ├── TextArea
            ├── VoiceButton
            └── SendButton
```

## 🔄 Data Flow

### Message Flow

```
User Input (ChatInput)
    ↓
ChatContainer (frontend)
    ↓
POST /api/chat/message
    ↓
chatController.js
    ↓
aiService.js → OpenAI API
    ↓
conversationService.js (save)
    ↓
Response to frontend
    ↓
Update UI (Message component)
```

### Conversation Management Flow

```
App.jsx
    ↓
GET /api/conversations
    ↓
conversationController.js
    ↓
conversationService.js
    ↓
Return conversation list
    ↓
Sidebar.jsx (display)
```

## 🎨 Styling Architecture

### CSS Organization

1. **Global Styles** (`index.css`)
   - CSS variables (colors, fonts)
   - Glassmorphism utilities
   - Animations
   - Scrollbar styling

2. **Component Styles**
   - Each component has its own CSS file
   - Scoped to component
   - Uses global CSS variables

3. **Glassmorphism Classes**
   - `.glass` - Standard glass effect
   - `.glass-strong` - Enhanced glass effect
   - `.glass-button` - Glass-styled buttons

## 📦 Dependencies

### Backend Dependencies

```json
{
  "express": "^4.18.2",          // Web framework
  "cors": "^2.8.5",              // CORS middleware
  "dotenv": "^16.3.1",           // Environment variables
  "openai": "^4.20.0",           // OpenAI API client
  "uuid": "^9.0.1",              // UUID generation
  "body-parser": "^1.20.2"       // Body parsing
}
```

### Frontend Dependencies

```json
{
  "react": "^18.2.0",            // UI library
  "react-dom": "^18.2.0",        // React DOM
  "axios": "^1.6.0",             // HTTP client
  "react-icons": "^4.12.0",      // Icon library
  "react-markdown": "^9.0.1",    // Markdown rendering
  "@vitejs/plugin-react": "^4.2.0", // Vite React plugin
  "vite": "^5.0.0"               // Build tool
}
```

## 🔌 API Endpoints

### Chat Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/chat/message` | Send message, get AI response |
| POST | `/api/chat/stream` | Stream AI response (SSE) |

### Conversation Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/conversations` | Get all conversations |
| GET | `/api/conversations/:id` | Get specific conversation |
| DELETE | `/api/conversations/:id` | Delete conversation |
| DELETE | `/api/conversations/clear/all` | Clear all conversations |

### Health Check

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Server health check |

## 🎯 Key Features by File

### Backend

- **server.js**: Express setup, middleware, routes
- **aiService.js**: OpenAI integration, response generation
- **conversationService.js**: In-memory conversation storage
- **chatController.js**: Message handling, streaming
- **conversationController.js**: CRUD operations

### Frontend

- **App.jsx**: Main layout, state management
- **Header.jsx**: Navigation, status indicator
- **Sidebar.jsx**: Conversation list, new chat button
- **WelcomeScreen.jsx**: Landing page with features
- **ChatContainer.jsx**: Message list, input handling
- **Message.jsx**: Message display, markdown support
- **ChatInput.jsx**: Text input, send button

## 🚀 Startup Scripts

### start.sh (Linux/Mac)
- Checks Node.js installation
- Installs dependencies if needed
- Checks .env configuration
- Starts both servers concurrently
- Provides status messages

### start.bat (Windows)
- Same functionality as start.sh
- Windows-specific commands
- Opens separate terminal windows

## 📝 Environment Variables

Required in `backend/.env`:

```env
PORT=5000                    # Backend server port
OPENAI_API_KEY=sk-...       # Your OpenAI API key
NODE_ENV=development         # Environment mode
```

## 🎨 Design System

### Colors (CSS Variables)

```css
--bg-primary: #0a0e1a       /* Dark background */
--bg-secondary: #121827      /* Secondary dark */
--glass-bg: rgba(255, 255, 255, 0.05)  /* Glass background */
--glass-border: rgba(255, 255, 255, 0.1)  /* Glass border */
--text-primary: #ffffff      /* Primary text */
--text-secondary: #a0aec0    /* Secondary text */
--accent-green: #00ff88      /* Primary accent */
--accent-blue: #4facfe       /* Secondary accent */
--accent-purple: #a78bfa     /* Tertiary accent */
```

### Typography

- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Effects

- **Glassmorphism**: backdrop-filter blur(20-30px)
- **Shadows**: Colored shadows with accent colors
- **Animations**: Smooth transitions (0.3s ease)

## 🔄 State Management

### Frontend State (React)

1. **App Level**:
   - `conversations`: List of all conversations
   - `currentConversationId`: Active conversation
   - `sidebarOpen`: Sidebar visibility

2. **ChatContainer Level**:
   - `messages`: Current conversation messages
   - `isLoading`: Loading state during API call

3. **ChatInput Level**:
   - `message`: Current input text

## 📱 Responsive Design

### Breakpoints

- **Desktop**: > 768px (default)
- **Mobile**: ≤ 768px (adjusted layouts)

### Mobile Adjustments

- Sidebar: Full width overlay
- Messages: Larger touch targets
- Input: Simplified controls
- Header: Compact layout

## 🔒 Security Features

- Environment variable protection (.env)
- CORS configuration
- Input validation
- Error handling
- API key security

## 🎯 Future Enhancement Areas

Based on file structure, easy to add:

1. **Backend**:
   - Database integration (add models/)
   - Authentication (add middleware/)
   - File uploads (add uploads/)
   - Caching (add cache service)

2. **Frontend**:
   - Settings component
   - User profile
   - Theme switcher
   - Voice input component

## 📞 Quick Reference

### Start Development
```bash
./start.sh                   # Linux/Mac
start.bat                    # Windows
```

### Install Dependencies
```bash
cd backend && npm install
cd frontend && npm install
```

### Build Production
```bash
cd frontend && npm run build
```

### Run Tests (to be added)
```bash
npm test
```

---

**Project Structure Version**: 1.0
**Last Updated**: 2025-10-06
