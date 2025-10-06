# 📝 UNIFAI - פקודות שימושיות

## 🚀 פקודות הרצה

### הרצה בסיסית

```bash
# הרץ את השרת בלבד
npm run dev

# הרץ את הקליינט בלבד
npm run dev:frontend

# הרץ שניהם ביחד
npm run dev:all
```

### הרצה עם Nodemon (Auto-reload)

```bash
# התקן nodemon
npm install -g nodemon

# הרץ עם auto-reload
nodemon server/index.js
```

### Build לפרודקשן

```bash
# Build את הקליינט
npm run build

# הרץ בפרודקשן
npm start
```

## 📦 ניהול תלויות

### התקנת תלויות

```bash
# התקן את כל התלויות
npm install

# התקן תלות ספציפית
npm install <package-name>

# התקן dev dependency
npm install --save-dev <package-name>
```

### עדכון תלויות

```bash
# בדוק תלויות מיושנות
npm outdated

# עדכן כל התלויות
npm update

# עדכן תלות ספציפית
npm update <package-name>
```

### ניקוי

```bash
# נקה node_modules
rm -rf node_modules package-lock.json

# התקן מחדש
npm install
```

## 🔑 פקודות API

### בדיקת בריאות השרת

```bash
curl http://localhost:3001/health
```

תגובה מצופה:
```json
{
  "status": "ok",
  "message": "UNIFAI Server is running"
}
```

### קבלת רשימת מודלים

```bash
curl http://localhost:3001/api/models
```

### שליחת הודעה (POST)

```bash
curl -X POST http://localhost:3001/api/chat/message \
  -H "Content-Type: application/json" \
  -d '{
    "message": "שלום, מה שלומך?",
    "model": "gpt-3.5-turbo",
    "conversationHistory": []
  }'
```

## 🧪 בדיקות ופיתוח

### בדיקת Linting

```bash
# התקן ESLint
npm install --save-dev eslint

# הרץ lint
npm run lint
```

### בדיקת Formatting

```bash
# התקן Prettier
npm install --save-dev prettier

# פרמט קוד
npm run format
```

## 🔧 פקודות שימושיות

### ניקוי Cache

```bash
# Vite cache
cd client
rm -rf .vite dist
npm run dev
```

### בדיקת פורטים

**Windows:**
```cmd
# בדוק מה רץ על פורט 3001
netstat -ano | findstr :3001

# בדוק מה רץ על פורט 5173
netstat -ano | findstr :5173
```

**Linux/Mac:**
```bash
# בדוק מה רץ על פורט 3001
lsof -i :3001

# בדוק מה רץ על פורט 5173
lsof -i :5173
```

### עצירת תהליכים

**Windows:**
```cmd
# עצור תהליך לפי PID
taskkill /PID <PID> /F
```

**Linux/Mac:**
```bash
# עצור תהליך לפי פורט
lsof -ti:3001 | xargs kill -9
lsof -ti:5173 | xargs kill -9
```

## 🌍 פקודות Git

### עבודה בסיסית

```bash
# בדוק סטטוס
git status

# הוסף קבצים
git add .

# צור commit
git commit -m "הודעה"

# דחוף לשרת
git push origin main
```

### ענפים (Branches)

```bash
# צור ענף חדש
git checkout -b feature/new-feature

# עבור בין ענפים
git checkout main

# מזג ענף
git merge feature/new-feature
```

### עדכון מהשרת

```bash
# משוך שינויים
git pull origin main

# משוך ומזג
git fetch
git merge origin/main
```

## 🐳 Docker (אופציונלי)

אם תרצה להריץ עם Docker בעתיד:

```dockerfile
# Dockerfile לשרת
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD ["npm", "start"]
```

```bash
# בנה image
docker build -t unifai .

# הרץ container
docker run -p 3001:3001 --env-file .env unifai
```

## 📊 פקודות ניטור

### בדיקת שימוש בזיכרון

```bash
# Windows
tasklist | findstr node

# Linux/Mac
ps aux | grep node
```

### צפייה בלוגים

```bash
# הרצה עם verbose logging
DEBUG=* npm run dev

# שמור logs לקובץ
npm run dev > logs.txt 2>&1
```

## 🔐 פקודות אבטחה

### בדיקת חולשות

```bash
# סרוק חולשות
npm audit

# תקן אוטומטית
npm audit fix

# תקן בכוח (שבור שינויים)
npm audit fix --force
```

## 🎨 פקודות פיתוח Frontend

```bash
cd client

# הרץ dev server
npm run dev

# Build לפרודקשן
npm run build

# תצוגה מקדימה של build
npm run preview

# ניקוי
rm -rf dist node_modules
npm install
```

## 📱 בדיקה במכשירים שונים

```bash
# הרץ עם IP מקומי (גישה מטלפון)
# ב-vite.config.js הוסף:
server: {
  host: '0.0.0.0',
  port: 5173
}

# אז גש מהטלפון ל:
# http://<YOUR_LOCAL_IP>:5173
```

---

**טיפ**: שמור קובץ זה לעיון מהיר! 💡