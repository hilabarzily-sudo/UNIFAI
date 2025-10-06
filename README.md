# 🎈 UNIFAI - Advanced AI Chatbot

<div align="center">

![UNIFAI Logo](./client/public/balloon-icon.svg)

## עוף אל השמיים עם אלפי AI's
### Fly to the sky with thousands of AI's

צ'אט בוט מתקדם עם עיצוב **Glassmorphism** מהמם ותמיכה במספר מודלי AI מובילים

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)

</div>

---

## 🎬 Quick Start (60 seconds)

```bash
# 1. Install
npm install && cd client && npm install && cd ..

# 2. Add API key to .env (get free key from Google Gemini)
# https://makersuite.google.com/app/apikey

# 3. Run
npm run dev:all

# 4. Open http://localhost:5173
```

**🎉 That's it! Your chatbot is running!**

---

## ✨ תכונות

- 🤖 **תמיכה במודלים מרובים**: GPT-4, GPT-3.5, Claude 3, Gemini Pro
- 🎨 **עיצוב Glassmorphism**: ממשק משתמש מודרני ושקוף עם אנימציות חלקות
- 🎈 **בלונים צפים**: רקע אנימציה ייחודי המבוסס על לוח ההשראה
- 💬 **שיחות חכמות**: שמירת היסטוריית שיחה להקשר מלא
- ⚡ **ביצועים מהירים**: תגובות בזמן אמת עם streaming
- 🌐 **תמיכה בעברית**: ממשק מלא בעברית עם RTL
- 📱 **Responsive**: עובד מצוין על כל המכשירים

## 🚀 התקנה מהירה

### דרישות מקדימות

- Node.js 18+ 
- npm או yarn
- מפתחות API לפחות ממודל AI אחד

### שלבי התקנה

1. **שכפל את הפרויקט**
   ```bash
   git clone https://github.com/hilabarzily-sudo/UNIFAI.git
   cd UNIFAI
   ```

2. **התקן תלויות השרת**
   ```bash
   npm install
   ```

3. **התקן תלויות הקליינט**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **הגדר משתני סביבה**
   ```bash
   cp .env.example .env
   ```
   
   ערוך את קובץ `.env` והוסף את מפתחות ה-API שלך:
   ```env
   OPENAI_API_KEY=sk-...
   ANTHROPIC_API_KEY=sk-ant-...
   GOOGLE_API_KEY=...
   ```

5. **הפעל את האפליקציה**
   ```bash
   # הפעל את השרת וה-Frontend ביחד
   npm run dev:all
   
   # או בנפרד:
   # שרת: npm run dev
   # קליינט: npm run dev:frontend
   ```

6. **פתח בדפדפן**
   
   גש ל-`http://localhost:5173`

## 📁 מבנה הפרויקט

```
UNIFAI/
├── server/                  # Backend (Node.js + Express)
│   ├── index.js            # Entry point
│   ├── routes/             # API routes
│   │   ├── chat.js         # Chat endpoints
│   │   └── models.js       # Models endpoints
│   └── services/           # Business logic
│       └── ChatService.js  # AI integration service
│
├── client/                 # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Header.jsx
│   │   │   ├── FloatingBalloons.jsx
│   │   │   ├── ModelSelector.jsx
│   │   │   ├── ChatContainer.jsx
│   │   │   ├── MessageList.jsx
│   │   │   ├── Message.jsx
│   │   │   ├── MessageInput.jsx
│   │   │   └── TypingIndicator.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── index.html
│
├── .env.example            # Environment variables template
├── .gitignore
├── package.json
└── README.md
```

## 🎨 עיצוב

האפליקציה משתמשת בטכניקת **Glassmorphism** עם:
- רקע גרדיאנט מתחלף בצבעים פסטליים
- כרטיסים שקופים עם blur effect
- בלונים צפים מונפשים
- אנימציות חלקות עם Framer Motion
- פלטת צבעים: #F8B4B4, #FAD5C5, #A8C5DA, #C5B9E5, #F5E6B8

## 🔑 API Keys

הפרויקט תומך ב-3 ספקי AI:

### OpenAI (GPT-4, GPT-3.5)
```
https://platform.openai.com/api-keys
```

### Anthropic (Claude 3)
```
https://console.anthropic.com/
```

### Google (Gemini Pro)
```
https://makersuite.google.com/app/apikey
```

## 🛠️ טכנולוגיות

### Backend
- Node.js + Express
- OpenAI SDK
- Anthropic SDK
- Google Generative AI SDK

### Frontend
- React 18
- Vite
- Framer Motion
- React Icons
- React Markdown

## 📝 שימוש

1. בחר מודל AI מהרשימה הנפתחת
2. כתוב את ההודעה שלך
3. לחץ Enter או על כפתור השליחה
4. קבל תשובה חכמה מה-AI!

## 🤝 תרומה

נשמח לקבל תרומות! פתח Issue או Pull Request.

## 📄 רישיון

MIT License

## 👥 יוצרים

נוצר עם ❤️ על ידי צוות UNIFAI

---

**UNIFAI** - Fly to the sky with thousands of AI's 🎈