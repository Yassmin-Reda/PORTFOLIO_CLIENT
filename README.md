# Alex Carter — Developer Portfolio

A premium, fully responsive personal portfolio for a Front-End Developer, built with
React, TypeScript, Vite, Tailwind CSS and Framer Motion.

## ✨ Highlights

- Dark theme with blue/purple gradients, glassmorphism cards and soft shadows
- Signature "code editor" visual motif (tabbed panels, mono eyebrows) tying the whole
  site back to the subject — a developer's own tooling
- Loading screen, scroll reveals, floating elements, custom cursor, animated
  background particles, card tilt effects, ripple buttons, page transitions
- Typing-effect hero, animated progress bars + circular skill indicators
- Filterable project grid with detail modal
- Accessible, validated contact form wired to EmailJS
- Dark/light mode, sticky nav with active-route indicator, mobile menu, scroll-to-top
- SEO: per-page meta tags, Open Graph, Twitter Card, JSON-LD, sitemap.xml, robots.txt
- Custom 404 page

## 🧱 Tech stack

React 18 · TypeScript · Vite · Tailwind CSS · Framer Motion · React Router ·
React Icons · @emailjs/browser

## 🚀 Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## 🔧 Things to customize before deploying

1. **Your info** — name, role, bio, social links: `src/data/socials.ts`,
   `src/components/home/Hero.tsx`, `index.html` (meta tags + JSON-LD).
2. **CV** — drop your real PDF into `public/cv/` and update the `href` in
   `src/components/home/Hero.tsx`.
3. **Projects, skills, experience, education** — all in `src/data/*.ts`. Replace the
   placeholder Unsplash images with screenshots of your real projects.
4. **Contact form (EmailJS)** — create a free account at https://www.emailjs.com,
   then set `SERVICE_ID`, `TEMPLATE_ID`, and `PUBLIC_KEY` in
   `src/components/contact/ContactForm.tsx`.
5. **Domain** — replace `https://yourdomain.com` in `index.html`, `public/sitemap.xml`,
   `public/robots.txt`, and `src/lib/seo.ts` with your real production URL.
6. **Favicon / OG image** — `public/favicon.svg` is a placeholder mark; add a real
   `public/og-image.jpg` (1200×630) referenced in `index.html`.

## 📁 Project structure

```
src/
  components/
    layout/     navbar, footer, cursor, particles, loading screen, page transitions
    ui/         button, glass card, section heading, reveal wrapper, tag
    home/       hero, social links, projects preview
    about/      intro, timeline, what-i-do, fun facts
    skills/     progress bars, circular indicators, tilt cards
    projects/   project card, filter, modal
    contact/    form (EmailJS), contact info
  pages/        Home, About, Projects, Skills, Contact, NotFound
  data/         all editable content (skills, projects, experience...)
  hooks/        useTheme, useTypewriter, useScrollSpy, useSEO
  lib/          small utilities + SEO helper
```

## ♿ Accessibility

Semantic landmarks, skip-to-content link, visible focus states, `aria-label`s on
icon-only controls, accessible form validation with `aria-invalid`/`aria-describedby`,
and `prefers-reduced-motion` support (disables decorative animation/parallax).

## ⚡ Performance notes

- Images use `loading="lazy"` (except the above-the-fold hero portrait)
- Route-level code is naturally split by Vite/Rollup per dynamic import if you choose
  to lazy-load pages with `React.lazy` as the project grows
- No render-blocking fonts: Google Fonts loaded with `preconnect`
- Swap the Unsplash placeholder images for optimized local/CDN assets before shipping
  for the best Lighthouse score
