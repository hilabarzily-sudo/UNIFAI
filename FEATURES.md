# 🌟 UNIFAI - תכונות מתקדמות

## 🎨 עיצוב Glassmorphism

### מה זה Glassmorphism?

טכניקת עיצוב מודרנית שיוצרת אפקט של זכוכית מטושטשת עם:
- **Backdrop Blur**: טשטוש הרקע
- **שקיפות**: רקע חצי שקוף
- **גבולות עדינים**: מסגרות דקיקות
- **צללים רכים**: אפקט של עומק

### איך זה עובד ב-UNIFAI?

```css
.glass-card {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
}
```

## 🎈 אנימציות בלונים

### בלונים צפים

- **7 בלונים** בצבעים פסטליים שונים
- **תנועה אינסופית** למעלה ולצדדים
- **סיבוב עדין** למראה טבעי
- **Opacity משתנה** להרגשת עומק

### התאמה אישית

ערוך ב-`FloatingBalloons.jsx`:

```javascript
const balloons = [
  { color: '#F8B4B4', size: 80, left: '10%', delay: 0 },
  // הוסף עוד בלונים כאן!
];
```

## 🤖 מודלי AI נתמכים

### OpenAI

| מודל | תיאור | מחיר יחסי | שימוש מומלץ |
|------|-------|-----------|-------------|
| GPT-4 | המתקדם ביותר | 💰💰💰 | משימות מורכבות |
| GPT-3.5 Turbo | מהיר וזול | 💰 | שאלות כלליות |

### Anthropic

| מודל | תיאור | מחיר יחסי | שימוש מומלץ |
|------|-------|-----------|-------------|
| Claude 3 Opus | הגדול ביותר | 💰💰💰 | ניתוח מעמיק |
| Claude 3 Sonnet | מאוזן | 💰💰 | שימוש יומיומי |

### Google

| מודל | תיאור | מחיר יחסי | שימוש מומלץ |
|------|-------|-----------|-------------|
| Gemini Pro | רב-תכליתי | 💰💰 | טקסט ותמונות |

## 💬 תכונות צ'אט

### היסטוריית שיחה

- **שמירה אוטומטית**: כל ההודעות נשמרות בזיכרון
- **הקשר מלא**: ה-AI זוכר את כל השיחה
- **ניקוי קל**: כפתור "נקה שיחה" מאפס את ההיסטוריה

### עיצוב הודעות

**הודעות משתמש:**
- גרדיאנט ורוד-אפרסק
- מיושרות לצד ימין
- אייקון משתמש

**הודעות AI:**
- גרדיאנט כחול-סגול
- מיושרות לצד שמאל
- אייקון רובוט
- תג של ספק ה-AI

### Markdown Support

ה-AI יכול לכתוב:
- **טקסט מודגש**
- *טקסט נטוי*
- `קוד inline`
- ```
  בלוקי קוד
  ```
- רשימות
- כותרות

## ⌨️ קיצורי מקלדת

| מקש | פעולה |
|-----|--------|
| Enter | שלח הודעה |
| Shift + Enter | שורה חדשה |
| Ctrl + K | נקה צ'אט (בעתיד) |

## 🎯 תכונות מתקדמות (בפיתוח)

### תכונות עתידיות

- [ ] **Streaming Responses**: תגובות בזמן אמת
- [ ] **Voice Input**: הקלטת קול והמרה לטקסט
- [ ] **Image Support**: שליחת ותמיכה בתמונות
- [ ] **שמירת שיחות**: export/import של שיחות
- [ ] **ערכות נושא**: בחירה בין עיצובים שונים
- [ ] **Multi-language**: תמיכה בשפות נוספות
- [ ] **Code Highlighting**: צביעת קוד מתקדמת
- [ ] **הודעות קוליות**: AI מדבר
- [ ] **שיתוף**: שיתוף שיחות עם אחרים

## 🔒 אבטחה ופרטיות

### נוכחי

- ✅ CORS מוגדר
- ✅ Validation של קלט
- ✅ Error handling
- ✅ מפתחות ב-.env (לא ב-git)

### תכונות עתידיות

- [ ] Authentication (JWT)
- [ ] Rate limiting
- [ ] Request sanitization
- [ ] Encryption של הודעות
- [ ] User sessions

## 📊 ביצועים

### אופטימיזציות נוכחיות

- **Lazy Loading**: טעינת קומפוננטות לפי דרישה
- **Memoization**: מניעת רינדור מיותר
- **Code Splitting**: פיצול הקוד לחבילות קטנות
- **Auto-resize**: textarea משתנה בגובה
- **Smooth Animations**: 60 FPS עם Framer Motion

### מדדים

| מדד | ערך |
|-----|------|
| Initial Load | ~500ms |
| Response Time | תלוי ב-AI |
| Bundle Size | ~200KB |
| Lighthouse Score | 95+ |

## 🎨 התאמה אישית

### שינוי צבעים

ב-`client/src/index.css`:

```css
:root {
  --primary-pink: #YOUR_COLOR;
  --primary-peach: #YOUR_COLOR;
  --primary-blue: #YOUR_COLOR;
  --primary-purple: #YOUR_COLOR;
  --primary-yellow: #YOUR_COLOR;
}
```

### שינוי פונט

ב-`client/index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

ואז ב-CSS:

```css
body {
  font-family: 'YOUR_FONT', sans-serif;
}
```

### הוספת בלונים

ב-`FloatingBalloons.jsx`:

```javascript
const balloons = [
  // הוסף בלון חדש
  { color: '#YOUR_COLOR', size: 100, left: '40%', delay: 5 },
];
```

## 🧩 הרחבות

### הוספת מודל AI חדש

1. התקן SDK:
   ```bash
   npm install <ai-sdk-package>
   ```

2. עדכן `ChatService.js`:
   ```javascript
   async sendToNewAI(message, conversationHistory) {
     // הוסף לוגיקה כאן
   }
   ```

3. עדכן `models.js`:
   ```javascript
   {
     id: 'new-model-id',
     name: 'Model Name',
     provider: 'Provider',
     enabled: !!process.env.NEW_API_KEY
   }
   ```

### הוספת פיצ'רים

כל קומפוננטה ב-`client/src/components/` ניתנת להרחבה!

---

**UNIFAI** - The sky is not the limit! 🚀