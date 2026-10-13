import { useState } from 'react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Team', href: '#team' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-line">
      <div className="max-w-[1280px] mx-auto px-[clamp(20px,3.5vw,48px)] py-4 flex items-center justify-between gap-6">
        <a href="#hero" aria-label="XSell — back to top" className="flex items-center gap-2">
          <svg width="27" height="24" viewBox="0 0 90 80" aria-hidden="true">
            <path d="M14 72 L60 24 M44 18 L64 18 L64 38" stroke="#22A454" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <line x1="14" y1="16" x2="76" y2="72" stroke="#0E7FE1" strokeWidth="9" strokeLinecap="round" />
          </svg>
          <span className="font-extrabold text-xl text-accent-blue">Sell</span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="nav-link font-semibold text-sm text-ink hover:text-accent-blue transition-colors"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-gradient-to-br from-hero-start to-accent-blue text-white font-bold text-xs tracking-wider uppercase px-6 py-3 hover:opacity-90 transition-opacity"
          >
            Start a Project
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden flex items-center justify-center p-3"
        >
          <svg width="22" height="16" viewBox="0 0 22 16" aria-hidden="true">
            <line x1="0" y1="1" x2="22" y2="1" stroke="#0d0d10" strokeWidth="2" />
            <line x1="0" y1="8" x2="22" y2="8" stroke="#0d0d10" strokeWidth="2" />
            <line x1="0" y1="15" x2="22" y2="15" stroke="#0d0d10" strokeWidth="2" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="flex flex-col px-[clamp(20px,3.5vw,48px)] pb-6 border-t border-line">
          {navLinks.map((n) => (
            <a
              key={n.label}
              href={n.href}
              onClick={() => setOpen(false)}
              className="py-3.5 text-sm font-semibold text-ink border-b border-line"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 text-center bg-gradient-to-br from-hero-start to-accent-blue text-white font-bold text-xs tracking-wider uppercase px-6 py-4"
          >
            Start a Project
          </a>
        </div>
      )}
    </header>
  );
}
