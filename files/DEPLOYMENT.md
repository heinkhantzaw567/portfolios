# Portfolio Deployment Guide

Your portfolio is ready to deploy! This guide covers multiple hosting options.

## Quick Start Options

### Option 1: Deploy to Vercel (Recommended - Easiest)

Vercel offers free hosting with automatic deployments from Git.

1. **Sign up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

3. **Import to Vercel**
   - Click "New Project" in Vercel dashboard
   - Import your GitHub repository
   - Vercel auto-detects settings
   - Click "Deploy"
   - Your site will be live at `your-username.vercel.app`

4. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

---

### Option 2: Deploy to Netlify

Netlify also offers free hosting with continuous deployment.

1. **Sign up for Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub

2. **Push code to GitHub** (same as Option 1)

3. **Deploy**
   - Click "New site from Git"
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

4. **Custom Domain**
   - Go to Site settings → Domain management
   - Add custom domain

---

### Option 3: GitHub Pages (Free Static Hosting)

1. **Update package.json**
   Add to `scripts`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Update vite.config.js**
   Change base to your repo name:
   ```js
   base: '/your-repo-name/',
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repo Settings → Pages
   - Source: `gh-pages` branch
   - Your site: `username.github.io/repo-name`

---

## Local Development

To run and test locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Customization Guide

### Update Personal Information

Edit `portfolio.jsx`:

1. **Contact Links** (lines ~90-110)
   - Update email, LinkedIn, and GitHub URLs
   - Make sure the URLs match your actual profiles

2. **Projects** (lines ~28-75)
   - Add new projects or modify existing ones
   - Update GitHub repo links when you add them
   - Include demo links if available

3. **Experience** (lines ~77-98)
   - Add new positions as you gain experience
   - Keep descriptions concise and impact-focused

4. **Skills** (lines ~100-107)
   - Add new technologies as you learn them
   - Keep organized by category

### Add Project Links

To add GitHub links to projects:

```jsx
<div className="mt-4 flex gap-3">
  <a 
    href="https://github.com/yourusername/project-name"
    target="_blank"
    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
  >
    <Github className="w-4 h-4" />
    Code
  </a>
  <a 
    href="https://your-demo-url.com"
    target="_blank"
    className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300"
  >
    <ExternalLink className="w-4 h-4" />
    Live Demo
  </a>
</div>
```

### Change Color Scheme

In `portfolio.jsx`, find gradient classes and update:
- `from-cyan-400 to-emerald-400` → Choose your colors
- `bg-slate-950` → Change background base
- `text-cyan-400` → Accent colors throughout

### Add Analytics (Optional)

1. **Google Analytics**
   Add to `index.html` before `</head>`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

2. **Vercel Analytics** (if using Vercel)
   - Enable in project settings
   - Automatically tracks page views

---

## Performance Optimization

Your portfolio is already optimized with:
- ✅ Lazy loading animations
- ✅ Minimal dependencies (React + Lucide icons)
- ✅ Tailwind CSS (no bloat)
- ✅ Static generation ready

To further optimize:
1. Compress images before adding
2. Use WebP format for photos
3. Enable caching in hosting platform

---

## Troubleshooting

**Build fails on deployment:**
- Check Node version (use Node 18+)
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`

**Styling looks broken:**
- Ensure Tailwind CDN is loaded (for simple HTML version)
- Or run `npm install` for Vite version

**Links don't work:**
- Make sure all URLs are absolute (include https://)
- Update placeholder URLs with your actual links

---

## Next Steps

1. ✅ Deploy to one of the platforms above
2. 📝 Update your LinkedIn with the portfolio URL
3. 🔗 Add portfolio link to your GitHub profile
4. 📧 Update your resume with the live link
5. 🚀 Share on social media

## Need Help?

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **GitHub Pages:** https://pages.github.com

---

**Your portfolio is ready! Choose a deployment option and go live in minutes.** 🚀
