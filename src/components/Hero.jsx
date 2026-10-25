import { LOGO_BLUE, LOGO_GREEN } from './Logo';

const PILLARS = [
  ['01', 'Websites that convert'],
  ['02', 'Apps people keep'],
  ['03', 'AI that saves hours'],
  ['04', 'IoT that connects'],
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col px-[clamp(20px,4.5vw,64px)] pt-[clamp(140px,18vh,190px)] pb-10 overflow-hidden bg-[#07152B] text-white"
    >
      {/* Drifting glows */}
      <div className="hero-glow hero-glow-blue absolute -top-[220px] -right-[160px] w-[720px] h-[720px] rounded-full bg-[#1F88E4]/45 blur-[140px] pointer-events-none" />
      <div className="hero-glow hero-glow-green absolute -bottom-[320px] -left-[220px] w-[720px] h-[720px] rounded-full bg-[#2EA44E]/30 blur-[140px] pointer-events-none" />

      {/* Oversized logo mark; the green stroke is faded as one group so its circles and bars read as a single shape */}
      <svg
        aria-hidden="true"
        viewBox="10 14 380 376"
        className="hero-mark absolute right-[-3%] bottom-[-6%] w-[min(54vw,820px)] opacity-30 lg:opacity-100 pointer-events-none"
      >
        <g opacity=".3" fill={LOGO_GREEN}>
          <path d="M56 56 L172 172 M228 228 L344 344" stroke={LOGO_GREEN} strokeWidth="48" />
          <circle cx="56" cy="56" r="41" />
          <circle cx="344" cy="344" r="41" />
        </g>
        <path d="M56 344 L312 88" stroke={LOGO_BLUE} strokeWidth="48" />
        <circle cx="56" cy="344" r="41" fill={LOGO_BLUE} />
        <path d="M252 48 L376 24 L352 148 Z" fill={LOGO_BLUE} stroke={LOGO_BLUE} strokeWidth="8" strokeLinejoin="round" />
      </svg>

      <div className="relative w-full max-w-[1312px] mx-auto flex-1 flex flex-col">
        <div className="max-w-[760px] pb-16">
          <div className="hero-in hero-in-1 flex items-center gap-3.5 text-[0.8rem] font-semibold tracking-[0.2em] uppercase text-[#8fb3dc]">
            <span className="w-10 h-0.5 bg-brand-green" />
            Web · Mobile · AI · IoT
          </div>

          <h1
            className="hero-in hero-in-2 font-bold leading-[0.95] mt-7 mb-8"
            style={{ fontSize: 'clamp(3.2rem,7.8vw,7rem)', letterSpacing: '-0.05em' }}
          >
            Ideas in.
            <br />
            <span className="hero-gradient-text">Growth out.</span>
          </h1>

          <p className="hero-in hero-in-3 max-w-[560px] text-[clamp(1.05rem,1.4vw,1.25rem)] leading-relaxed text-[#b7c9e2] mb-10">
            XSELL is a digital studio from Sri Lanka building products that move your numbers — not just pixels.
          </p>

          <div className="hero-in hero-in-3 flex flex-wrap gap-3.5">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 bg-[#1F88E4] text-white font-semibold text-[0.95rem] px-[30px] py-4 rounded-full shadow-[0_12px_30px_-10px_rgba(31,136,228,.7)] hover:shadow-[0_16px_40px_-8px_rgba(31,136,228,.9)] hover:-translate-y-0.5 transition-all"
            >
              Start a Project
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center text-white font-semibold text-[0.95rem] px-[30px] py-4 rounded-full border-[1.5px] border-white/30 hover:bg-white/10 hover:border-white/50 transition-colors"
            >
              See Our Work
            </a>
          </div>
        </div>

        <ul className="hero-in hero-in-3 mt-auto grid grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-6 border-t border-white/10 text-sm text-[#8fb3dc] [&>li]:pt-5">
          {PILLARS.map(([num, label]) => (
            <li key={num} className="lg:last:text-right lg:[&:nth-child(2)]:text-center lg:[&:nth-child(3)]:text-center">
              <b className="text-white font-semibold mr-2">{num}</b>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
