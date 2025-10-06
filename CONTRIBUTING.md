# 🤝 Contributing to UNIFAI

Thank you for your interest in contributing to UNIFAI! This document provides guidelines and instructions for contributing.

## 🌟 Ways to Contribute

- 🐛 Report bugs
- 💡 Suggest new features
- 📝 Improve documentation
- 🎨 Design improvements
- 💻 Code contributions
- 🌍 Translations
- ✅ Write tests

## 🚀 Getting Started

### 1. Fork the Repository

Click the "Fork" button at the top right of the repository page.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/unifai-chatbot.git
cd unifai-chatbot
```

### 3. Set Up Development Environment

```bash
# Install dependencies
npm run install-all

# Create .env file
cp .env.example .env
# Add your API keys to .env

# Start development server
npm run dev
```

## 📝 Development Guidelines

### Code Style

- Use 2 spaces for indentation
- Use single quotes for strings
- Add semicolons
- Use meaningful variable names
- Add comments for complex logic
- Follow existing code patterns

### File Structure

```
server/
  controllers/    - Route handlers
  routes/         - API routes
  services/       - Business logic
  
client/src/
  components/     - React components
  services/       - API services
  *.css          - Component styles
```

### Naming Conventions

**Files:**
- Components: `PascalCase.jsx`
- Styles: `PascalCase.css`
- Services: `camelCase.js`
- Constants: `UPPER_CASE.js`

**Code:**
- Components: `PascalCase`
- Functions: `camelCase`
- Constants: `UPPER_SNAKE_CASE`
- CSS classes: `kebab-case`

## 🔧 Development Process

### 1. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 2. Make Your Changes

- Write clean, readable code
- Follow the code style
- Add comments where needed
- Test your changes

### 3. Test Your Changes

```bash
# Start the dev server
npm run dev

# Test in browser
# - Open http://localhost:3000
# - Test all functionality
# - Check console for errors
# - Test on mobile (responsive)
```

### 4. Commit Your Changes

```bash
git add .
git commit -m "feat: add amazing feature"
```

#### Commit Message Format

Use conventional commits:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation only
- `style:` - Code style (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

Examples:
```
feat: add dark mode toggle
fix: resolve chat scroll issue
docs: update API documentation
style: format code with prettier
refactor: simplify message handling
test: add chat component tests
chore: update dependencies
```

### 5. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 6. Create a Pull Request

1. Go to the original repository
2. Click "New Pull Request"
3. Select your fork and branch
4. Fill in the PR template
5. Submit!

## 📋 Pull Request Guidelines

### PR Title

Use the same format as commit messages:
```
feat: add voice input feature
fix: resolve API key validation bug
```

### PR Description

Include:
- **What**: Brief description of changes
- **Why**: Reason for the changes
- **How**: Technical details
- **Testing**: How you tested it
- **Screenshots**: For UI changes

Example:
```markdown
## What
Adds dark mode toggle to the header

## Why
Users requested a dark mode option for better nighttime viewing

## How
- Added theme context
- Created theme toggle component
- Updated CSS with dark mode variables

## Testing
- Tested theme switching
- Checked all pages in both modes
- Verified persistence across sessions

## Screenshots
[Before/After screenshots]
```

### Checklist

Before submitting, ensure:
- [ ] Code follows the style guide
- [ ] All features work as expected
- [ ] No console errors
- [ ] Responsive design maintained
- [ ] Documentation updated (if needed)
- [ ] Comments added for complex code
- [ ] No breaking changes (or documented)

## 🐛 Reporting Bugs

### Before Reporting

1. Check if the bug is already reported
2. Try the latest version
3. Gather information about the bug

### Bug Report Template

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- OS: [e.g., Windows 11]
- Browser: [e.g., Chrome 120]
- Node version: [e.g., 18.17.0]

**Additional context**
Any other information about the problem.
```

## 💡 Suggesting Features

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
A clear description of what the problem is.

**Describe the solution you'd like**
What you want to happen.

**Describe alternatives you've considered**
Other solutions you've thought about.

**Additional context**
Any other context or screenshots.

**Mockups**
If you have design ideas, include mockups.
```

## 📚 Documentation

### Updating Docs

When adding features, update:
- `README.md` - If it affects setup/usage
- `API_DOCUMENTATION.md` - For API changes
- `USAGE_GUIDE.md` - For user-facing features
- `FEATURES.md` - Add to feature list
- Code comments - Explain complex logic

### Documentation Style

- Use clear, simple language
- Include code examples
- Add screenshots for UI features
- Keep it up to date

## 🌍 Translations

To add a new language:

1. Create language file: `client/src/i18n/[lang].json`
2. Translate all strings
3. Update language selector
4. Test thoroughly

## ✅ Testing

### Manual Testing Checklist

- [ ] Chat functionality works
- [ ] Model switching works
- [ ] Messages display correctly
- [ ] Input field works properly
- [ ] Animations are smooth
- [ ] Responsive on mobile
- [ ] No console errors
- [ ] API calls succeed

### Browser Testing

Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🏗️ Project Structure

```
unifai-chatbot/
├── server/              Backend
│   ├── controllers/     Request handlers
│   ├── routes/          API routes
│   └── services/        AI integrations
├── client/              Frontend
│   ├── public/          Static assets
│   └── src/
│       ├── components/  React components
│       └── services/    API services
├── docs/                Documentation
└── scripts/             Utility scripts
```

## 🎨 Design Guidelines

### Colors

Use CSS variables from `index.css`:
```css
--primary-green
--secondary-green
--accent-green
--light-green
--mint
--cream
```

### Animations

Use Framer Motion:
```jsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.3 }}
>
```

### Responsive Design

Mobile-first approach:
```css
/* Mobile (default) */
.element { }

/* Tablet and up */
@media (min-width: 768px) { }

/* Desktop and up */
@media (min-width: 1024px) { }
```

## 🤔 Questions?

- Open an issue
- Tag it with `question`
- We'll respond as soon as possible

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Thank You!

Every contribution, no matter how small, is valuable. Thank you for making UNIFAI better!

---

Happy coding! 💚
