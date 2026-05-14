# Moumeants & Frames — Wedding Cinematography Portfolio

A premium, cinematic wedding portfolio website built with **React + Vite + Tailwind CSS**.

---

## 🚀 Quick Start (Local)

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (opens at http://localhost:3000)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

**Requirements:** Node.js ≥ 18

---

## ☁️ Deploy to Vercel (Recommended)

### Option A — Vercel CLI (fastest)
```bash
npm install -g vercel
vercel        # follow the prompts — deploy in ~60 seconds
```

### Option B — GitHub + Vercel Dashboard
1. Push this folder to a GitHub repository
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Vercel auto-detects Vite — click **Deploy**
5. Done ✓

> `vercel.json` is already configured for SPA routing and asset caching.

---

## 🌐 Deploy to Netlify

```bash
npm run build
# Drag the `dist/` folder to https://app.netlify.com/drop
```

Or via CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

---

## 📁 Project Structure

```
moumeants-and-frames/
├── public/
│   ├── favicon.svg          # Brand favicon
│   ├── og-image.jpg         # Add your OG image here (1200×630px)
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Fixed nav with mobile hamburger
│   │   ├── Hero.jsx         # Fullscreen cinematic hero
│   │   ├── FilmsSection.jsx # Grid gallery + video modal
│   │   ├── StorySection.jsx # Philosophy / approach
│   │   ├── TestimonialsSection.jsx
│   │   ├── PackagesSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Footer.jsx
│   │   ├── FilmGrain.jsx    # Fixed film grain overlay
│   │   ├── CursorGlow.jsx   # Ambient cursor effect
│   │   ├── LoadingIntro.jsx # Cinematic intro animation
│   │   └── UI.jsx           # Shared primitives
│   ├── data/
│   │   ├── films.js         # ← Edit your film portfolio here
│   │   ├── testimonials.js  # ← Edit your testimonials here
│   │   └── packages.js      # ← Edit your pricing here
│   ├── hooks/
│   │   └── useInView.js     # Scroll-reveal hook
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html               # SEO meta tags, structured data
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── package.json
```

---

## ✏️ Customisation Guide

| What to change | Where |
|---|---|
| Film gallery images & metadata | `src/data/films.js` |
| Testimonials | `src/data/testimonials.js` |
| Pricing packages | `src/data/packages.js` |
| Email / phone / social links | `src/components/ContactSection.jsx` |
| Brand name & year | `src/components/Footer.jsx` + `index.html` |
| About photo | `src/components/AboutSection.jsx` (swap Unsplash URL) |
| OG image for social sharing | `public/og-image.jpg` (add your own 1200×630 JPG) |
| Connect real video player | `src/components/FilmsSection.jsx` → `VideoModal` |

---

## 🎬 Adding Real Videos

In `FilmsSection.jsx`, find `VideoModal` and replace the placeholder `<div>` with:

```jsx
<iframe
  src="https://player.vimeo.com/video/YOUR_VIDEO_ID?autoplay=1"
  width="100%" height="100%"
  frameBorder="0"
  allow="autoplay; fullscreen"
  allowFullScreen
/>
```

---

## 🎨 Design Tokens

| Token | Value |
|---|---|
| Gold accent | `#c4913f` |
| Background | `#0a0a0a` |
| Cream text | `#f5f0ea` |
| Serif font | Cormorant Garamond |
| Sans font | Jost |

---

© 2024 Moumeants & Frames
