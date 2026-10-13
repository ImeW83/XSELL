# XSell Portfolio

> Single-page agency portfolio for XSell — content from Endermonks, layout/visual system referenced from a friend's site (Lovi Labs), blue/green accent from the XSell logo.

Built with **React 18** + **Tailwind CSS 3** + **Vite**.

## Getting Started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Sticky nav + mobile menu
│   ├── Hero.jsx           # Full-bleed gradient hero w/ cycling ghost-word
│   ├── Ticker.jsx         # Scrolling services marquee
│   ├── Capabilities.jsx   # Numbered services list (exports `services`)
│   ├── Work.jsx            # Project case-study cards
│   ├── Stack.jsx           # Alternating black/white tech-stack blocks
│   ├── Team.jsx             # Team bios
│   ├── CTA.jsx               # "READY?" dark gradient band
│   ├── Contact.jsx           # Contact form + info card
│   └── Footer.jsx            # Footer
├── data/
│   └── projects.js        # Project case-study data + per-project accent theme
├── hooks/
│   └── useGhostWord.js    # Cycles the hero's background word
├── App.jsx
├── index.jsx
└── index.css               # Tailwind + custom keyframes/hover effects
```

## Still to do

- Replace the `[YOUR EMAIL]` / `[YOUR WHATSAPP NUMBER]` placeholders in `Contact.jsx` and `Footer.jsx`
- Point the social links (Instagram / LinkedIn / GitHub / WhatsApp) at your real accounts
- Wire `Contact.jsx`'s `submit()` to a real backend — Endermonks' own `api/contact.js` is a working Vercel serverless-function pattern you can copy
- Swap the initial-circle team avatars and stack-block backgrounds for real photos if you get some together

---
© 2026 XSell
