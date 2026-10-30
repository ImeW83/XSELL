# XSELL

Single-page portfolio site for **XSELL**, a digital studio from Sri Lanka building Web, Mobile, AI and IoT products.

Built with **React 18**, **Tailwind CSS 3** and **Vite**. Typeface: Space Grotesk.

## Sections

Hero, services ticker, services, our work, tech stack, team, call-to-action, contact form and footer. Everything is on one page, with the navbar linking to each section.

## Getting started

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm run dev       # start the dev server (http://localhost:5173)
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## Project structure

```
public/
├── favicon.svg            # Browser tab icon (the XSELL mark)
└── xsell-logo.jpg         # Original logo artwork
src/
├── components/
│   ├── Logo.jsx           # XSELL mark + wordmark (exports LOGO_BLUE / LOGO_GREEN)
│   ├── Navbar.jsx         # Fixed nav, transparent over the hero, solid on scroll
│   ├── Hero.jsx           # "Ideas in. Growth out." hero with animated glows
│   ├── Ticker.jsx         # Scrolling services marquee
│   ├── Capabilities.jsx   # Numbered services list (exports `services`)
│   ├── Work.jsx           # Project case-study cards
│   ├── Stack.jsx          # Alternating black/white tech-stack blocks
│   ├── Team.jsx           # Team bios
│   ├── CTA.jsx            # Dark call-to-action band
│   ├── Contact.jsx        # Contact form + info card
│   └── Footer.jsx         # Footer
├── data/
│   └── projects.js        # Project case-study data + per-project accent colours
├── App.jsx
├── index.jsx
└── index.css              # Tailwind + custom animations and hover effects
```

## Brand

| | |
|---|---|
| Blue | `#1F88E4` |
| Green | `#2EA44E` |
| Hero navy | `#07152B` |

## Editing content

- **Projects:** add or edit entries in [src/data/projects.js](src/data/projects.js). Each project picks one of the accent colours defined at the top of that file.
- **Services:** edit the `services` list in [src/components/Capabilities.jsx](src/components/Capabilities.jsx). The footer reads from it. The scrolling ticker has its own list in [src/components/Ticker.jsx](src/components/Ticker.jsx).
- **Hero text and animations:** [src/components/Hero.jsx](src/components/Hero.jsx) and the `hero-*` rules in [src/index.css](src/index.css). Animations switch off for visitors who prefer reduced motion.
- **Logo:** the mark is an inline SVG in [src/components/Logo.jsx](src/components/Logo.jsx), so it stays sharp at any size.

## Contact details

- Email: [tellxsell@gmail.com](mailto:tellxsell@gmail.com)
- WhatsApp: [+94 76 799 7796](https://wa.me/94767997796)

These appear in the contact section and the footer.

## Still to do

- Point the Instagram, LinkedIn, GitHub and Facebook links (currently `#`) at the real accounts.
- Connect the contact form. `submit()` in `Contact.jsx` currently only shows a success message and does **not** send anything, so it needs a real backend or form service (for example a serverless function that emails the team).
- Replace the initial-circle team avatars and stack-block backgrounds with real photos.
- Replace the placeholder figures and any sample copy with real numbers before launch.

---
© 2026 XSELL
