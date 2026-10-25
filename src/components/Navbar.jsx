import { useEffect, useState } from 'react';
import Logo from './Logo';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Team', href: '#team' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Transparent over the dark hero; solid white once scrolled or when the mobile menu is open
  const solid = scrolled || open;
  const linkColor = solid ? 'text-ink hover:text-accent-blue' : 'text-white hover:text-[#8fb3dc]';
  const iconColor = solid ? '#0d0d10' : '#fff';

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 border-b ${
        solid ? 'bg-white border-line' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-[clamp(20px,3.5vw,48px)] py-4 flex items-center justify-between gap-6">
        <a href="#hero" aria-label="XSELL — back to top">
          <Logo />
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className={`nav-link font-semibold text-sm ${linkColor} transition-colors`}
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#1F88E4] text-white font-semibold text-[0.8rem] px-[22px] py-[11px] rounded-full shadow-[0_10px_24px_-10px_rgba(31,136,228,.8)] hover:opacity-90 transition-opacity"
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
            <line x1="0" y1="1" x2="22" y2="1" stroke={iconColor} strokeWidth="2" />
            <line x1="0" y1="8" x2="22" y2="8" stroke={iconColor} strokeWidth="2" />
            <line x1="0" y1="15" x2="22" y2="15" stroke={iconColor} strokeWidth="2" />
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
            className="mt-4 text-center bg-[#1F88E4] text-white font-semibold text-sm px-6 py-4 rounded-full"
          >
            Start a Project
          </a>
        </div>
      )}
    </header>
  );
}
