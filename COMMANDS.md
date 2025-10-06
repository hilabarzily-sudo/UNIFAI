# 📝 UNIFAI - רשימת פקודות

מדריך מהיר לכל הפקודות הזמינות בפרויקט UNIFAI.

---

## 🚀 פקודות הפעלה

### התקנה

```bash
# התקנת כל התלויות (Backend + Frontend + Root)
npm run install:all

# התקנת Backend בלבד
cd backend && npm install

# התקנת Frontend בלבד
cd frontend && npm install
```

### הפעלה - Development Mode

```bash
# הפעלת כל האפליקציה (Backend + Frontend)
npm run dev

# הפעלת Backend בלבד
npm run dev:backend

# הפעלת Frontend בלבד
npm run dev:frontend
```

### הפעלה - Production Mode

```bash
# הפעלת כל האפליקציה
npm start

# הפעלת Backend בלבד
npm run start:backend

# הפעלת Frontend בלבד
npm run start:frontend
```

### Build

```bash
# Build Frontend לפרודקשן
npm run build

# או ישירות:
cd frontend && npm run build
```

---

## 🪟 Windows Scripts

### START.bat
הפעלת כל האפליקציה עם התקנה אוטומטית של תלויות אם צריך.

```bash
START.bat
```

**מה זה עושה:**
1. בודק אם `node_modules` קיים
2. מתקין תלויות אם חסרות
3. בודק אם `.env` קיים
4. מפעיל Backend ו-Frontend ביחד

### START_BACKEND.bat
הפעלת Backend בלבד.

```bash
START_BACKEND.bat
```

### START_FRONTEND.bat
הפעלת Frontend בלבד.

```bash
START_FRONTEND.bat
```

---

## 🐧 Linux/Mac Scripts

### start.sh
הפעלת כל האפליקציה (זהה ל-START.bat).

```bash
chmod +x start.sh
./start.sh
```

**או:**
```bash
bash start.sh
```

---

## 🔧 Backend Commands

### Development

```bash
cd backend

# הפעלה עם nodemon (auto-reload)
npm run dev

# הפעלה רגילה
npm start
```

### Testing

```bash
cd backend

# בדיקת health
curl http://localhost:5000/api/health

# בדיקת providers
curl http://localhost:5000/api/chat/providers

# שליחת הודעה
curl -X POST http://localhost:5000/api/chat/message \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello!", "provider": "auto"}'
```

---

## 🎨 Frontend Commands

### Development

```bash
cd frontend

# הפעלה עם Vite dev server
npm run dev

# build לפרודקשן
npm run build

# preview של build
npm run preview

# lint
npm run lint
```

### Build Output

```bash
# Build יוצר תיקיית dist/
cd frontend
npm run build

# הקבצים יהיו ב:
frontend/dist/
```

---

## 🔍 Debugging Commands

### בדיקת פורטים פתוחים

**Windows:**
```bash
# בדוק אם פורט 5000 תפוס
netstat -ano | findstr :5000

# בדוק אם פורט 5173 תפוס
netstat -ano | findstr :5173

# סגור תהליך
taskkill /PID <PID> /F
```

**Linux/Mac:**
```bash
# בדוק אם פורט 5000 תפוס
lsof -i :5000

# בדוק אם פורט 5173 תפוס
lsof -i :5173

# סגור תהליך
kill -9 <PID>
```

### בדיקת גרסאות

```bash
# Node.js version
node --version

# npm version
npm --version

# בדוק שזה v18+ לפחות
```

### ניקוי והתקנה מחדש

```bash
# ניקוי Backend
cd backend
rm -rf node_modules package-lock.json
npm install

# ניקוי Frontend
cd frontend
rm -rf node_modules package-lock.json
npm install

# ניקוי Root
rm -rf node_modules package-lock.json
npm install
```

---

## 🌐 API Endpoints

### Health Check

```bash
# GET - בדיקת בריאות
curl http://localhost:5000/api/health
```

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "uptime": 123.456
}
```

### Chat Endpoints

```bash
# GET - קבלת providers זמינים
curl http://localhost:5000/api/chat/providers

# POST - שליחת הודעה
curl -X POST http://localhost:5000/api/chat/message \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Hello, how are you?",
    "conversationHistory": [],
    "provider": "auto"
  }'

# POST - streaming response
curl -X POST http://localhost:5000/api/chat/stream \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Tell me a story",
    "conversationHistory": [],
    "provider": "openai"
  }'
```

---

## 📦 Package Management

### בדיקת תלויות מיושנות

```bash
# Backend
cd backend
npm outdated

# Frontend
cd frontend
npm outdated
```

### עדכון תלויות

```bash
# עדכון minor/patch versions
npm update

# עדכון major versions (זהירות!)
npm install <package>@latest
```

### הסרת תלויות לא בשימוש

```bash
npm prune
```

---

## 🔐 Environment Variables

### יצירת .env מ-example

```bash
# Backend
cd backend
cp .env.example .env

# Frontend
cd frontend
cp .env.example .env
```

### קריאת .env

```bash
# Windows
type backend\.env

# Linux/Mac
cat backend/.env
```

---

## 📊 Logs & Monitoring

### הצגת לוגים

```bash
# Backend logs (אם רץ)
# הלוגים מוצגים בטרמינל אוטומטית

# Frontend logs (Vite)
# הלוגים מוצגים בטרמינל אוטומטית
```

### שמירת לוגים לקובץ

```bash
# Backend
cd backend
npm start > backend.log 2>&1

# Frontend
cd frontend
npm run dev > frontend.log 2>&1
```

---

## 🧪 Testing Commands (עתידי)

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test

# E2E tests
npm run test:e2e
```

---

## 🔄 Git Commands

### עדכון מהמאגר

```bash
# Pull latest changes
git pull origin main

# Reinstall dependencies
npm run install:all
```

### Commit Changes

```bash
# Add all changes
git add .

# Commit with message
git commit -m "Your message here"

# Push to remote
git push origin main
```

---

## 🎯 שורות טובות לדעת

```bash
# הצגת כל התהליכים של Node
# Windows:
tasklist | findstr node

# Linux/Mac:
ps aux | grep node

# סגירת כל תהליכי Node
# Windows:
taskkill /F /IM node.exe

# Linux/Mac:
killall node

# בדיקת גודל התיקייה
# Windows:
dir /s

# Linux/Mac:
du -sh .

# ניקוי cache של npm
npm cache clean --force
```

---

## 📱 צפייה מרחוק

אם אתה רוצה לגשת לאפליקציה ממכשיר אחר ברשת המקומית:

```bash
# מצא את ה-IP שלך
# Windows:
ipconfig

# Linux/Mac:
ifconfig

# ואז גש מהמכשיר האחר ל:
http://<YOUR_IP>:5173
```

**שים לב**: צריך לעדכן את `FRONTEND_URL` ב-`backend/.env`:
```env
FRONTEND_URL=http://<YOUR_IP>:5173
```

---

## 🆘 פקודות חירום

### אתחול מלא

```bash
# הפסק הכל
# Windows: Ctrl+C בכל terminal
# Linux/Mac: Ctrl+C בכל terminal

# נקה
npm run install:all

# הפעל מחדש
npm run dev
```

### איפוס מוחלט

```bash
# מחק node_modules מכל מקום
rm -rf backend/node_modules
rm -rf frontend/node_modules
rm -rf node_modules

# מחק package-lock.json
rm backend/package-lock.json
rm frontend/package-lock.json
rm package-lock.json

# התקן הכל מחדש
npm run install:all
```

---

## 📚 פקודות שימושיות נוספות

```bash
# הצג את כל הסקריפטים הזמינים
npm run

# עזרה על npm
npm help

# גרסת Node.js מפורטת
node -p process.versions

# בדוק תקינות package.json
npm ls
```

---

<div align="center">

**זהו! כל הפקודות שתצטרך 🎉**

</div>
