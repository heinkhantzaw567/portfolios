# Portfolio Website for Hein Khant Zaw

A modern, responsive portfolio website showcasing projects, experience, and skills.

## 🚀 Quick Start (3 Options)

### Option 1: Instant Preview (No Setup Required)
Simply open `portfolio-standalone.html` in your web browser. Everything works out of the box!

### Option 2: Deploy to Vercel (Recommended)
1. Push this folder to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up
3. Click "New Project" → Import your repo
4. Click "Deploy" (Vercel auto-configures everything)
5. Your site is live! 🎉

### Option 3: Run Locally with Development Server
```bash
npm install
npm run dev
```
Visit `http://localhost:5173`

## 📁 Files Included

- `portfolio-standalone.html` - Complete single-file version (open directly in browser)
- `portfolio.jsx` - React component version
- `package.json` - Dependencies for npm-based deployment
- `DEPLOYMENT.md` - Comprehensive deployment guide
- `vite.config.js` - Build configuration

## 🎨 Customization

### Update Your Links
In either `portfolio-standalone.html` or `portfolio.jsx`, update:
- Email address
- LinkedIn URL
- GitHub URL

Search for these lines and replace with your actual links:
```html
<a href="mailto:heinkhant.zaw@torontomu.ca">
<a href="https://linkedin.com">
<a href="https://github.com">
```

### Add New Projects
Find the `projects` array and add:
```javascript
{
  title: "Your Project Name",
  date: "Month Year",
  tech: ["Tech1", "Tech2"],
  description: "Brief description",
  highlights: [
    "Key feature 1",
    "Key feature 2"
  ]
}
```

### Change Colors
Find and replace color classes:
- `from-cyan-400 to-emerald-400` - Gradient colors
- `text-cyan-300` - Accent colors
- `bg-slate-950` - Background colors

## 📱 Features

✅ Fully responsive design  
✅ Smooth animations  
✅ Dark theme with gradient effects  
✅ Section-based navigation  
✅ Easy to customize  
✅ SEO optimized  
✅ Fast loading  

## 🌐 Deployment Options

Detailed deployment instructions in `DEPLOYMENT.md` for:
- Vercel (easiest, recommended)
- Netlify
- GitHub Pages
- Any static hosting service

## 📞 Support

Need help? The `DEPLOYMENT.md` file has comprehensive guides and troubleshooting tips.

---

**Ready to go live?** Pick a deployment option and share your portfolio with the world! 🚀
