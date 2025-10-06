# 🔧 UNIFAI - מדריך התקנה מפורט

מדריך מפורט להתקנה והגדרת אפליקציית UNIFAI.

---

## 📋 תוכן עניינים

1. [דרישות מקדימות](#-דרישות-מקדימות)
2. [התקנה צעד אחר צעד](#-התקנה-צעד-אחר-צעד)
3. [הגדרת AI API Keys](#-הגדרת-ai-api-keys)
4. [הפעלת האפליקציה](#-הפעלת-האפליקציה)
5. [פתרון בעיות](#-פתרון-בעיות)

---

## 🔍 דרישות מקדימות

### תוכנות נדרשות

#### 1. Node.js
- **גרסה נדרשת**: 18.0.0 או גבוהה יותר
- **הורדה**: https://nodejs.org/

**בדיקת התקנה:**
```bash
node --version  # צריך להציג v18.0.0 או גבוהה יותר
npm --version   # צריך להציג 9.0.0 או גבוהה יותר
```

#### 2. Git (אופציונלי)
- **הורדה**: https://git-scm.com/

#### 3. עורך קוד
- מומלץ: [Visual Studio Code](https://code.visualstudio.com/)

### API Keys נדרשים

אתה צריך לפחות אחד מהבאים:

#### OpenAI API Key
1. היכנס ל-https://platform.openai.com/
2. עבור ל-"API Keys"
3. לחץ "Create new secret key"
4. שמור את המפתח במקום בטוח

#### Anthropic API Key
1. היכנס ל-https://console.anthropic.com/
2. עבור ל-"API Keys"
3. לחץ "Create Key"
4. שמור את המפתח במקום בטוח

---

## 💾 התקנה צעד אחר צעד

### שלב 1: הורדת הפרויקט

#### אופציה א': Clone מ-Git
```bash
git clone https://github.com/hilabarzily-sudo/UNIFAI.git
cd UNIFAI
```

#### אופציה ב': הורדת ZIP
1. הורד את הפרויקט כ-ZIP
2. חלץ את הקבצים
3. פתח terminal/cmd בתיקייה

### שלב 2: התקנת תלויות

#### התקנה אוטומטית (מומלץ)
```bash
npm run install:all
```

#### התקנה ידנית

**Backend:**
```bash
cd backend
npm install
cd ..
```

**Frontend:**
```bash
cd frontend
npm install
cd ..
```

**Root (לסקריפטים):**
```bash
npm install
```

---

## 🔑 הגדרת AI API Keys

### Backend Configuration

1. **צור קובץ `.env` בתיקיית `backend`:**

```bash
cd backend
cp .env.example .env
```

2. **ערוך את הקובץ `.env`:**

פתח את `backend/.env` בעורך טקסט ומלא את הפרטים:

```env
# ========================================
# Server Configuration
# ========================================
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173

# ========================================
# OpenAI Configuration
# ========================================
# אם יש לך מפתח OpenAI, מלא אותו כאן
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
OPENAI_MODEL=gpt-4-turbo-preview

# ========================================
# Anthropic Configuration
# ========================================
# אם יש לך מפתח Anthropic, מלא אותו כאן
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
ANTHROPIC_MODEL=claude-3-opus-20240229
```

**הערות חשובות:**
- ⚠️ **חובה**: מלא לפחות מפתח API אחד (OpenAI או Anthropic)
- 🔒 **אבטחה**: אל תשתף את המפתחות שלך עם אף אחד
- 🚫 **Git**: הקובץ `.env` לא יועלה ל-Git (כבר ב-gitignore)

### Frontend Configuration (אופציונלי)

אם אתה רוצה לשנות את כתובת ה-API:

1. **צור קובץ `.env` בתיקיית `frontend`:**

```bash
cd frontend
cp .env.example .env
```

2. **ערוך את הקובץ `.env`:**

```env
VITE_API_URL=http://localhost:5000/api
```

---

## 🚀 הפעלת האפליקציה

### אופציה 1: הפעלה מלאה (Backend + Frontend)

#### Windows:
```bash
START.bat
```
או:
```bash
npm run dev
```

#### Linux/Mac:
```bash
chmod +x start.sh
./start.sh
```
או:
```bash
npm run dev
```

### אופציה 2: הפעלה נפרדת

#### רק Backend:

**Windows:**
```bash
START_BACKEND.bat
```

**Linux/Mac:**
```bash
npm run dev:backend
```

#### רק Frontend:

**Windows:**
```bash
START_FRONTEND.bat
```

**Linux/Mac:**
```bash
npm run dev:frontend
```

---

## 🌐 גישה לאפליקציה

לאחר ההפעלה המוצלחת:

- **Frontend (UI)**: http://localhost:5173
- **Backend (API)**: http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health

פתח את הדפדפן ב-http://localhost:5173 ותראה את ממשק ה-UNIFAI!

---

## ❗ פתרון בעיות

### בעיה: "OPENAI_API_KEY is not defined"

**פתרון:**
1. וודא שיצרת את הקובץ `backend/.env`
2. וודא שהמפתח מלא ונכון
3. אתחל את השרת (סגור והפעל מחדש)

### בעיה: "Cannot find module"

**פתרון:**
```bash
# נקה והתקן מחדש
cd backend
rm -rf node_modules package-lock.json
npm install

cd ../frontend
rm -rf node_modules package-lock.json
npm install
```

### בעיה: "Port 5000 is already in use"

**פתרון:**

**Windows:**
```bash
# מצא תהליך שתופס את הפורט
netstat -ano | findstr :5000
# סגור את התהליך
taskkill /PID <PID> /F
```

**Linux/Mac:**
```bash
# מצא תהליך שתופס את הפורט
lsof -i :5000
# סגור את התהליך
kill -9 <PID>
```

או שנה את הפורט ב-`backend/.env`:
```env
PORT=5001
```

### בעיה: "CORS Error"

**פתרון:**
1. וודא ש-Backend רץ על http://localhost:5000
2. וודא ש-Frontend רץ על http://localhost:5173
3. בדוק ש-`FRONTEND_URL` ב-`backend/.env` נכון:
```env
FRONTEND_URL=http://localhost:5173
```

### בעיה: "Network Error / Failed to fetch"

**פתרון:**
1. וודא שה-Backend רץ (בדוק http://localhost:5000)
2. בדוק את ה-console בדפדפן לשגיאות
3. וודא שאין Firewall שחוסם את הפורטים

### בעיה: חוסר תגובה מה-AI

**פתרון:**
1. בדוק שה-API Key תקין ופעיל
2. בדוק שיש לך יתרת קרדיט ב-OpenAI/Anthropic
3. בדוק את הלוגים בשרת לשגיאות
4. נסה להחליף provider (OpenAI ↔ Anthropic)

---

## 🧪 בדיקת התקנה

### 1. Backend Health Check

פתח בדפדפן או ב-curl:
```bash
curl http://localhost:5000/api/health
```

**תגובה צפויה:**
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "uptime": 123.456
}
```

### 2. AI Providers Check

```bash
curl http://localhost:5000/api/chat/providers
```

**תגובה צפויה:**
```json
{
  "success": true,
  "providers": [
    {
      "name": "openai",
      "displayName": "OpenAI",
      "model": "gpt-4-turbo-preview",
      "status": "active"
    }
  ]
}
```

### 3. Test Chat Message

```bash
curl -X POST http://localhost:5000/api/chat/message \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello!", "provider": "auto"}'
```

---

## 🔄 עדכון הפרויקט

אם יש גרסה חדשה:

```bash
# Pull changes
git pull origin main

# Update dependencies
npm run install:all

# Restart application
npm run dev
```

---

## 📊 מצב הפרויקט

לאחר התקנה מוצלחת, אתה צריך לראות:

```
✅ Node.js מותקן
✅ תלויות מותקנות
✅ קובץ .env מוגדר
✅ Backend רץ על פורט 5000
✅ Frontend רץ על פורט 5173
✅ AI API מגיב
✅ צ'אט עובד
```

---

## 🎓 צעדים הבאים

1. ✅ פתח את http://localhost:5173
2. ✅ נסה לשלוח הודעה
3. ✅ בדוק את ה-Provider Selector
4. ✅ נסה שיחה ארוכה יותר
5. ✅ בדוק responsive (פתח בנייד)

---

## 💡 טיפים

- 🔄 אם יש בעיה, תמיד נסה אתחול (סגור והפעל מחדש)
- 📝 עקוב אחרי הלוגים בטרמינל
- 🐛 השתמש ב-DevTools של הדפדפן (F12)
- 💾 שמור גיבוי של `.env` במקום בטוח
- 🔐 אל תשתף API Keys
- 📚 קרא את ה-README.md לתכונות נוספות

---

## 📞 זקוק לעזרה?

- 📖 קרא את [README.md](README.md)
- 🐛 פתח [Issue](https://github.com/hilabarzily-sudo/UNIFAI/issues)
- 💬 שאל בקהילה

---

<div align="center">

**ההתקנה הושלמה בהצלחה! 🎉**

תהנה מ-UNIFAI! 🚀

</div>
