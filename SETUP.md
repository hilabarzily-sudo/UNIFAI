# 🎈 UNIFAI - מדריך התקנה מפורט

## 📋 תוכן עניינים

1. [דרישות מקדימות](#דרישות-מקדימות)
2. [התקנת הפרויקט](#התקנת-הפרויקט)
3. [קבלת מפתחות API](#קבלת-מפתחות-api)
4. [הגדרת משתני סביבה](#הגדרת-משתני-סביבה)
5. [הרצת האפליקציה](#הרצת-האפליקציה)
6. [פתרון בעיות](#פתרון-בעיות)

## 🔧 דרישות מקדימות

לפני שמתחילים, וודא שיש לך:

- **Node.js** גרסה 18 ומעלה ([הורד כאן](https://nodejs.org/))
- **npm** או **yarn** (מגיע עם Node.js)
- **Git** ([הורד כאן](https://git-scm.com/))
- לפחות **מפתח API אחד** ממודלי AI הנתמכים

### בדיקת גרסאות

פתח terminal/cmd והרץ:

```bash
node --version    # צריך להיות v18.0.0 ומעלה
npm --version     # כל גרסה עדכנית
```

## 📥 התקנת הפרויקט

### שלב 1: שכפול הפרויקט

```bash
git clone https://github.com/hilabarzily-sudo/UNIFAI.git
cd UNIFAI
```

### שלב 2: התקנת תלויות השרת

```bash
npm install
```

זה יתקין את כל החבילות הנדרשות:
- express
- cors
- dotenv
- openai
- @anthropic-ai/sdk
- @google/generative-ai
- axios
- uuid

### שלב 3: התקנת תלויות הקליינט

```bash
cd client
npm install
cd ..
```

זה יתקין:
- react
- react-dom
- vite
- framer-motion
- react-icons
- react-markdown
- axios

## 🔑 קבלת מפתחות API

### OpenAI (GPT-4, GPT-3.5)

1. גש ל-[OpenAI Platform](https://platform.openai.com/)
2. צור חשבון או התחבר
3. לך ל-[API Keys](https://platform.openai.com/api-keys)
4. לחץ על "Create new secret key"
5. העתק את המפתח (מתחיל ב-`sk-`)

**חשוב**: אתה צריך יתרת קרדיט ב-OpenAI. בדוק ב-[Billing](https://platform.openai.com/account/billing).

### Anthropic (Claude 3)

1. גש ל-[Anthropic Console](https://console.anthropic.com/)
2. צור חשבון או התחבר
3. לך ל-API Keys
4. צור מפתח חדש
5. העתק את המפתח (מתחיל ב-`sk-ant-`)

### Google (Gemini Pro)

1. גש ל-[Google AI Studio](https://makersuite.google.com/app/apikey)
2. התחבר עם חשבון Google
3. לחץ על "Get API key"
4. צור מפתח חדש
5. העתק את המפתח

## ⚙️ הגדרת משתני סביבה

### שלב 1: יצירת קובץ .env

העתק את קובץ הדוגמה:

```bash
cp .env.example .env
```

או ב-Windows:

```cmd
copy .env.example .env
```

### שלב 2: עריכת קובץ .env

פתח את קובץ `.env` בעורך טקסט והוסף את המפתחות שלך:

```env
# API Keys - הוסף לפחות מפתח אחד
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
GOOGLE_API_KEY=AIzaxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Server Configuration
PORT=3001
NODE_ENV=development

# Frontend URL
CLIENT_URL=http://localhost:5173
```

**הערות חשובות:**
- אתה יכול להוסיף רק חלק מהמפתחות
- המודלים שלא הוגדרו לא יופיעו ברשימה
- מומלץ להתחיל עם GPT-3.5 Turbo (זול יותר)

## 🚀 הרצת האפליקציה

### אופציה 1: הרצה אוטומטית (Windows)

פשוט לחץ פעמיים על:

```
START_ALL.bat
```

זה יתקין הכל ויריץ את השרת והקליינט ביחד.

### אופציה 2: הרצה ידנית

#### הרצת שני השרתים ביחד:

```bash
npm run dev:all
```

#### הרצה נפרדת:

**Terminal 1 - Backend:**
```bash
npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm run dev:frontend
```

### אופציה 3: הרצה עם Nodemon (Development)

```bash
# התקן nodemon גלובלית (פעם אחת)
npm install -g nodemon

# הרץ את השרת עם auto-reload
nodemon server/index.js
```

## 🌐 גישה לאפליקציה

לאחר ההרצה, פתח בדפדפן:

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3001
- **Health Check**: http://localhost:3001/health

## 🔍 בדיקת תקינות

### בדיקת השרת

פתח דפדפן או השתמש ב-curl:

```bash
curl http://localhost:3001/health
```

תקבל:
```json
{
  "status": "ok",
  "message": "UNIFAI Server is running"
}
```

### בדיקת מודלים זמינים

```bash
curl http://localhost:3001/api/models
```

תקבל רשימה של כל המודלים עם סטטוס enabled/disabled.

## 🐛 פתרון בעיות

### בעיה: "Cannot find module"

**פתרון:**
```bash
# נקה והתקן מחדש
rm -rf node_modules package-lock.json
npm install

cd client
rm -rf node_modules package-lock.json
npm install
```

### בעיה: "Port 3001 is already in use"

**פתרון 1:** שנה את הפורט ב-`.env`:
```env
PORT=3002
```

**פתרון 2 (Windows):** מצא ותפסיק את התהליך:
```cmd
netstat -ano | findstr :3001
taskkill /PID <PID> /F
```

**פתרון 2 (Linux/Mac):**
```bash
lsof -ti:3001 | xargs kill -9
```

### בעיה: "Failed to fetch models"

**סיבות אפשריות:**
1. השרת לא רץ - וודא ש-`npm run dev` פעיל
2. CORS issue - בדוק שה-`CLIENT_URL` ב-`.env` נכון
3. פורט שגוי - וודא שהשרת ב-3001 והקליינט ב-5173

**פתרון:**
- בדוק את הקונסול ב-browser (F12)
- בדוק את לוגים של השרת
- וודא שהשרת רץ על הפורט הנכון

### בעיה: "API key not configured"

**פתרון:**
1. וודא שקובץ `.env` קיים בתיקיית הראשית
2. בדוק שהמפתחות נכתבו נכון (ללא רווחים)
3. הפעל מחדש את השרת אחרי שינוי `.env`

### בעיה: שגיאות CSS או עיצוב לא עובד

**פתרון:**
```bash
cd client
rm -rf dist .vite
npm run dev
```

### בעיה: העיצוב לא נראה טוב

**בדיקות:**
1. וודא שהפונט Heebo נטען (בדוק ב-Network tab)
2. נקה cache של הדפדפן (Ctrl+Shift+R)
3. בדוק שאין שגיאות ב-console

## 💡 טיפים

1. **פיתוח מהיר**: השתמש ב-`npm run dev:all` כדי לראות שינויים בזמן אמת
2. **חיסכון בעלויות**: התחל עם GPT-3.5 Turbo לפני שעובר ל-GPT-4
3. **ביצועים**: סגור tabs אחרים בזמן שימוש לביצועים טובים יותר
4. **RTL**: האפליקציה אופטימלית לעברית עם RTL מלא

## 📧 תמיכה

אם נתקלת בבעיות:
1. בדוק ב-[Issues](https://github.com/hilabarzily-sudo/UNIFAI/issues)
2. פתח Issue חדש עם תיאור מפורט
3. צרף screenshots ו-logs אם אפשר

---

**Happy Chatting! 🎈**