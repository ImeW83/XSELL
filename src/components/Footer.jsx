import { services } from './Capabilities';
import Logo from './Logo';

const navLinks = ['Services', 'Work', 'Team', 'Stack', 'Contact'];
const footerSocials = [
  { tag: 'IG', href: '#' },
  { tag: 'FB', href: '#' },
  { tag: 'LI', href: '#' },
  { tag: 'WA', href: 'https://wa.me/94767997796' },
];

export default function Footer() {
  return (
    <footer className="bg-black px-[clamp(20px,3.5vw,48px)] pt-16 pb-7">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-10">
          <Logo className="mb-3.5" />
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
            <a href="mailto:tellxsell@gmail.com" className="block text-sm text-[#9a9a9a] hover:text-white transition-colors mb-2.5 w-fit">tellxsell@gmail.com</a>
            <a href="https://wa.me/94767997796" target="_blank" rel="noopener noreferrer" className="block text-sm text-[#9a9a9a] hover:text-white transition-colors mb-2.5 w-fit">+94 76 799 7796</a>
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
          <span className="text-xs text-[#9a9a9a]">© {new Date().getFullYear()} XSELL. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
