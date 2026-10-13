import { services } from './Capabilities';

const navLinks = ['Services', 'Work', 'Team', 'Stack', 'Contact'];
const footerSocials = [
  { tag: 'IG', href: '#' },
  { tag: 'FB', href: '#' },
  { tag: 'LI', href: '#' },
  { tag: 'WA', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-black px-[clamp(20px,3.5vw,48px)] pt-16 pb-7">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3.5">
            <svg width="27" height="24" viewBox="0 0 90 80" aria-hidden="true">
              <path d="M14 72 L60 24 M44 18 L64 18 L64 38" stroke="#22A454" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <line x1="14" y1="16" x2="76" y2="72" stroke="#0E7FE1" strokeWidth="9" strokeLinecap="round" />
            </svg>
            <span className="font-extrabold text-xl text-white">
              X<span className="text-brand-blue">Sell</span>
            </span>
          </div>
          <p className="text-sm text-[#9a9a9a] max-w-[360px]">
            Building digital experiences through Web, Mobile, AI &amp; IoT.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-9 pb-9 border-b border-white/10">
          <div>
            <div className="text-xs font-bold tracking-[0.1em] text-white uppercase mb-4">Navigation</div>
            {navLinks.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="block text-sm text-[#9a9a9a] hover:text-white transition-colors mb-2.5 w-fit"
              >
                {l}
              </a>
            ))}
          </div>
          <div>
            <div className="text-xs font-bold tracking-[0.1em] text-white uppercase mb-4">Services</div>
            {services.map((s) => (
              <span key={s.num} className="block text-sm text-[#9a9a9a] mb-2.5">
                {s.title}
              </span>
            ))}
          </div>
          <div>
            <div className="text-xs font-bold tracking-[0.1em] text-white uppercase mb-4">Get In Touch</div>
            <span className="block text-sm text-[#9a9a9a] mb-2.5">[YOUR EMAIL]</span>
            <span className="block text-sm text-[#9a9a9a] mb-2.5">[YOUR WHATSAPP NUMBER]</span>
          </div>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {footerSocials.map((s) => (
              <a
                key={s.tag}
                href={s.href}
                className="w-9 h-9 border border-white/25 flex items-center justify-center text-[0.62rem] font-bold text-white"
              >
                {s.tag}
              </a>
            ))}
          </div>
          <span className="text-xs text-[#9a9a9a]">© {new Date().getFullYear()} XSell. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
