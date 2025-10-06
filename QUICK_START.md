# ⚡ UNIFAI - התחלה מהירה

## 🎯 מה זה UNIFAI?

צ'אט בוט חכם עם עיצוב מהמם שמאפשר לך לדבר עם מודלי AI מובילים:
- 🤖 GPT-4 / GPT-3.5 (OpenAI)
- 🧠 Claude 3 (Anthropic)  
- ⭐ Gemini Pro (Google)

## 🚀 התחלה תוך 3 דקות

### 1️⃣ הורד והתקן

```bash
# שכפל את הפרויקט
git clone https://github.com/hilabarzily-sudo/UNIFAI.git
cd UNIFAI

# התקן תלויות (פעם אחת בלבד)
npm install
cd client && npm install && cd ..
```

### 2️⃣ הוסף מפתח API

פתח את קובץ `.env` והוסף **לפחות מפתח אחד**:

```env
OPENAI_API_KEY=sk-...    # מ-https://platform.openai.com/api-keys
```

💡 **טיפ**: אם אין לך מפתח, קבל אחד חינם/בתשלום מ-OpenAI.

### 3️⃣ הרץ!

**Windows:** לחץ פעמיים על `START_ALL.bat`

**Mac/Linux:**
```bash
npm run dev:all
```

### 4️⃣ פתח בדפדפן

גש ל: **http://localhost:5173** 🎉

---

## 📝 שימוש מהיר

1. בחר מודל מהרשימה הנפתחת למעלה
2. כתוב שאלה בתיבת הטקסט
3. לחץ Enter או על כפתור השליחה ✈️
4. קבל תשובה חכמה מה-AI!

## ❓ שאלות נפוצות

**ש: האפליקציה לא עולה?**  
ת: וודא ש-Node.js מותקן: `node --version` (צריך 18+)

**ש: מקבל שגיאת API?**  
ת: בדוק שהמפתח ב-`.env` נכון ושיש לך יתרה באותו שירות

**ש: איך משנים פורט?**  
ת: ב-`.env` שנה את `PORT=3001` לפורט אחר

**ש: איך מוסיפים עוד מודלים?**  
ת: הוסף מפתח API נוסף ב-`.env` והמודל יופיע אוטומטית!

## 🎨 התאמה אישית

רוצה לשנות צבעים? עדכן ב-`client/src/index.css`:

```css
:root {
  --primary-pink: #F8B4B4;    /* שנה את הורוד שלך */
  --primary-blue: #A8C5DA;    /* שנה את הכחול שלך */
  /* ... */
}
```

## 🆘 עזרה

- 📖 מדריך מלא: `SETUP.md`
- ⌨️ כל הפקודות: `COMMANDS.md`
- 🐛 בעיות? פתח [Issue](https://github.com/hilabarzily-sudo/UNIFAI/issues)

---

**תהנה מהצ'אט! 🎈**