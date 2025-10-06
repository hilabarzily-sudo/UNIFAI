# ⚡ UNIFAI - התחלה מהירה

התחל לעבוד עם UNIFAI ב-5 דקות! 🚀

---

## 📥 1. התקנה

### Windows:
```bash
npm run install:all
```

### Linux/Mac:
```bash
npm run install:all
```

---

## 🔑 2. הגדרת API Key

1. צור קובץ `backend/.env`:
```bash
cd backend
copy .env.example .env  # Windows
# או
cp .env.example .env    # Linux/Mac
```

2. פתח את `backend/.env` וקבל מפתח API:

**אופציה א' - OpenAI** (https://platform.openai.com/api-keys):
```env
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**אופציה ב' - Anthropic** (https://console.anthropic.com/):
```env
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**צריך רק אחד מהם!** ✅

---

## 🚀 3. הפעלה

### Windows:
```bash
START.bat
```

### Linux/Mac:
```bash
chmod +x start.sh
./start.sh
```

### או עם npm:
```bash
npm run dev
```

---

## 🌐 4. פתח בדפדפן

```
http://localhost:5173
```

**זהו! אתה מוכן! 🎉**

---

## 💬 שימוש בסיסי

1. כתוב הודעה בשדה הקלט
2. לחץ Enter או על כפתור השליחה
3. קבל תשובה חכמה מה-AI!

---

## 🎨 תכונות מהירות

- **Auto-Select AI**: בחר "Auto Select" בתפריט העליון
- **שורה חדשה**: Shift + Enter
- **שליחה**: Enter
- **החלף AI**: לחץ על הכפתור בפינה הימנית העליונה

---

## ❓ בעיות נפוצות

### "API Key not found"
➡️ ודא ש-`backend/.env` קיים ומכיל מפתח תקין

### "Port 5000 already in use"
➡️ סגור תהליכים אחרים או שנה את הפורט ב-`backend/.env`:
```env
PORT=5001
```

### "Cannot connect to server"
➡️ ודא ש-Backend רץ (אמור להיות טרמינל פתוח איתו)

---

## 📚 מסמכים נוספים

- [README.md](README.md) - מדריך מלא
- [SETUP.md](SETUP.md) - הסבר מפורט על התקנה
- [COMMANDS.md](COMMANDS.md) - רשימת כל הפקודות

---

## 🆘 צריך עזרה?

פתח [Issue](https://github.com/hilabarzily-sudo/UNIFAI/issues) או צור קשר.

---

<div align="center">

**תהנה מ-UNIFAI! 💚**

Made with ❤️ using React & AI

</div>
