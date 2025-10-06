# 🌟 UNIFAI - Advanced AI Chatbot

<div align="center">

![UNIFAI](https://img.shields.io/badge/UNIFAI-Advanced%20AI%20Assistant-2d5f3f?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2-61dafb?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js)
![AI Powered](https://img.shields.io/badge/AI-Powered-6fbf9f?style=for-the-badge)

אפליקציית צ'אט בוט מתקדמת עם אינטגרציה ל-AI מרובים ועיצוב Glassmorphism מרהיב

[תכונות](#-תכונות) • [התקנה](#-התקנה-מהירה) • [שימוש](#-שימוש) • [עיצוב](#-עיצוב)

</div>

---

## ✨ תכונות

### 🤖 אינטליגנציה מלאכותית מתקדמת
- **אינטגרציה מרובה**: תמיכה ב-OpenAI GPT-4 ו-Anthropic Claude
- **בחירה אוטומטית**: המערכת בוחרת אוטומטית את ה-AI הטוב ביותר
- **שיחה חכמה**: זיכרון הקשר מלא לאורך השיחה
- **תגובות מהירות**: מערכת streaming לתגובות בזמן אמת

### 🎨 עיצוב מרהיב
- **Glassmorphism**: אפקטים של זכוכית שקופה צפה
- **אנימציות חלקות**: Framer Motion לתנועות מתקדמות
- **ירוק מונוכרומטי**: פלטת צבעים מרגיעה ומקצועית
- **Responsive**: מותאם לכל המכשירים (Desktop, Tablet, Mobile)

### 🛠 טכנולוגיות מתקדמות
- **Backend**: Node.js + Express + TypeScript
- **Frontend**: React 18 + Vite + Framer Motion
- **AI APIs**: OpenAI, Anthropic Claude
- **Security**: Helmet, Rate Limiting, CORS
- **Icons**: Lucide React

---

## 🚀 התקנה מהירה

### דרישות מקדימות
- Node.js 18+ מותקן
- מפתח API מ-OpenAI או Anthropic

### שלב 1: התקנת התלויות

#### Windows:
```bash
# התקנת כל התלויות
npm run install:all
```

#### Linux/Mac:
```bash
# התקנת כל התלויות
npm run install:all
```

### שלב 2: הגדרת משתני סביבה

צור קובץ `.env` בתיקיית `backend`:

```env
# Server Configuration
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173

# OpenAI Configuration (אופציונלי)
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4-turbo-preview

# Anthropic Configuration (אופציונלי)
ANTHROPIC_API_KEY=your_anthropic_api_key_here
ANTHROPIC_MODEL=claude-3-opus-20240229
```

**הערה**: עליך להגדיר לפחות מפתח API אחד (OpenAI או Anthropic).

### שלב 3: הפעלת האפליקציה

#### Windows:
```bash
# הפעלת כל האפליקציה
START.bat

# או בנפרד:
START_BACKEND.bat  # רק Backend
START_FRONTEND.bat # רק Frontend
```

#### Linux/Mac:
```bash
# הפעלת כל האפליקציה
chmod +x start.sh
./start.sh

# או בנפרד:
npm run dev:backend  # רק Backend
npm run dev:frontend # רק Frontend
```

### 🌐 כתובות

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **API Documentation**: http://localhost:5000

---

## 📖 שימוש

### צ'אט בסיסי

1. פתח את הדפדפן ב-http://localhost:5173
2. כתוב הודעה בשדה הקלט
3. לחץ על כפתור השליחה או Enter
4. קבל תשובה חכמה מה-AI!

### בחירת מודל AI

בפינה הימנית העליונה של הצ'אט, תוכל לבחור:
- **Auto Select**: המערכת בוחרת את ה-AI הטוב ביותר
- **OpenAI**: שימוש ב-GPT-4
- **Anthropic**: שימוש ב-Claude

### תכונות מתקדמות

- **Shift + Enter**: שורה חדשה בהודעה
- **Enter**: שליחת הודעה
- **גלילה אוטומטית**: להודעה האחרונה
- **היסטוריית שיחה**: נשמרת במהלך הסשן

---

## 🎨 עיצוב

### פלטת צבעים

```css
/* Green Monochrome Palette */
--color-primary: #2d5f3f        /* ירוק עמוק */
--color-primary-light: #3d7f5f  /* ירוק בהיר */
--color-accent: #6fbf9f          /* ירוק אקסנט */
--color-accent-light: #8fd7bf    /* ירוק בהיר מאוד */
--color-bg-dark: #0f1f17         /* רקע כהה */
--color-bg: #1a2f25              /* רקע */
```

### Glassmorphism Effects

- **Blur**: 20px backdrop filter
- **Opacity**: 0.08 - 0.15 background
- **Border**: 1px rgba(111, 191, 159, 0.2)
- **Shadow**: Multi-layer shadows for depth

### אנימציות

- **Fade In**: 0.5s ease-out
- **Slide In**: 0.5s ease-out
- **Hover Effects**: Transform + Shadow
- **Loading**: Pulse animation

---

## 🏗 מבנה הפרויקט

```
UNIFAI/
├── backend/                    # Backend Server
│   ├── config/                # הגדרות
│   ├── routes/                # API Routes
│   │   ├── chat.js           # Chat endpoints
│   │   └── health.js         # Health check
│   ├── services/             # Business Logic
│   │   └── aiService.js      # AI Integration
│   ├── server.js             # Main server file
│   ├── package.json          # Backend dependencies
│   └── .env.example          # Environment template
│
├── frontend/                  # Frontend Application
│   ├── src/
│   │   ├── components/       # React Components
│   │   │   ├── Header.jsx
│   │   │   ├── ChatContainer.jsx
│   │   │   ├── MessageList.jsx
│   │   │   ├── Message.jsx
│   │   │   ├── MessageInput.jsx
│   │   │   ├── TypingIndicator.jsx
│   │   │   ├── ProviderSelector.jsx
│   │   │   └── BackgroundEffects.jsx
│   │   ├── services/         # API Services
│   │   │   └── api.js
│   │   ├── App.jsx           # Main App component
│   │   ├── App.css
│   │   ├── index.css         # Global styles
│   │   └── main.jsx          # Entry point
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── .env.example
│
├── package.json              # Root package.json
├── START.bat                 # Windows startup script
├── START_BACKEND.bat         # Windows backend script
├── START_FRONTEND.bat        # Windows frontend script
├── start.sh                  # Linux/Mac startup script
├── .gitignore
└── README.md
```

---

## 🔧 API Endpoints

### Chat Endpoints

#### POST `/api/chat/message`
שליחת הודעה וקבלת תשובה מה-AI.

**Request Body:**
```json
{
  "message": "שלום, איך אתה?",
  "conversationHistory": [],
  "provider": "auto"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "message": "שלום! אני בסדר, תודה. במה אני יכול לעזור?",
    "provider": "openai",
    "model": "gpt-4-turbo-preview",
    "timestamp": "2024-01-01T12:00:00.000Z"
  }
}
```

#### POST `/api/chat/stream`
streaming של תשובה מה-AI (Server-Sent Events).

#### GET `/api/chat/providers`
קבלת רשימת ה-AI providers הזמינים.

### Health Endpoint

#### GET `/api/health`
בדיקת בריאות השרת.

---

## 🔐 אבטחה

- **Helmet**: הגנות HTTP headers
- **Rate Limiting**: הגבלת בקשות (100 לכל 15 דקות)
- **CORS**: הגבלת גישה לדומיינים מורשים
- **Input Validation**: אימות כל הקלטים
- **Error Handling**: טיפול מתקדם בשגיאות

---

## 🌈 תכונות עתידיות

- [ ] תמיכה במודלים נוספים (Google PaLM, Cohere)
- [ ] שמירת היסטוריית שיחות
- [ ] אימות משתמשים
- [ ] ייצוא שיחות ל-PDF/TXT
- [ ] תמיכה בקבצים (תמונות, מסמכים)
- [ ] קוד סינטקס highlighting
- [ ] תמיכה ב-markdown
- [ ] מצבי תבנית (Professional, Creative, Code)
- [ ] שיתוף שיחות
- [ ] תמיכה רב-לשונית

---

## 🤝 תרומה

תרומות יתקבלו בברכה! אנא:
1. Fork את הפרויקט
2. צור branch חדש (`git checkout -b feature/AmazingFeature`)
3. Commit את השינויים (`git commit -m 'Add some AmazingFeature'`)
4. Push ל-branch (`git push origin feature/AmazingFeature`)
5. פתח Pull Request

---

## 📄 רישיון

MIT License - ראה [LICENSE](LICENSE) לפרטים נוספים.

---

## 🙏 תודות

- [OpenAI](https://openai.com/) - GPT-4 API
- [Anthropic](https://www.anthropic.com/) - Claude API
- [React](https://react.dev/) - UI Framework
- [Framer Motion](https://www.framer.com/motion/) - Animation Library
- [Lucide](https://lucide.dev/) - Icon Library

---

## 📧 יצירת קשר

יש לך שאלות? רעיונות? בעיות?
- פתח [Issue](https://github.com/hilabarzily-sudo/UNIFAI/issues)
- שלח Pull Request

---

<div align="center">

**עשוי עם ❤️ באמצעות React & AI**

⭐ אם אהבת את הפרויקט, אל תשכח לתת כוכב!

</div>
