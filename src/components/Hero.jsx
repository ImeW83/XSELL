import { useGhostWord } from '../hooks/useGhostWord';

const ROTATING_WORDS = ['websites', 'mobile apps', 'AI tools', 'IoT systems'];
const ORBIT_CHIPS = [
  { label: 'Web', pos: 'top-[6%] left-1/2 -translate-x-1/2', delay: '0s' },
  { label: 'Mobile', pos: 'top-1/2 right-0 -translate-y-1/2', delay: '-1.5s' },
  { label: 'AI', pos: 'bottom-[6%] left-1/2 -translate-x-1/2', delay: '-3s' },
  { label: 'IoT', pos: 'top-1/2 left-0 -translate-y-1/2', delay: '-4.5s' },
];

export default function Hero() {
  const ghostWord = useGhostWord();
  const word = useGhostWord(2600, ROTATING_WORDS);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-[clamp(20px,3.5vw,48px)] pt-[130px] pb-[90px] overflow-hidden"
      style={{ background: 'linear-gradient(150deg,#0A3D7A 0%,#061226 65%)' }}
    >
      {/* Grid, faded toward the edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%,#000 40%,transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%,#000 40%,transparent 100%)',
        }}
      />
      {/* Floating glow blobs */}
      <div className="hero-blob hero-blob-1 absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full bg-brand-blue/40 blur-[120px] pointer-events-none" />
      <div className="hero-blob hero-blob-2 absolute bottom-[-180px] left-[-120px] w-[460px] h-[460px] rounded-full bg-brand-green/25 blur-[120px] pointer-events-none" />
      <div
        aria-hidden="true"
        className="ghost-word absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[#22A454] whitespace-nowrap pointer-events-none"
        style={{ fontSize: 'clamp(7rem,22vw,18rem)', letterSpacing: '-0.04em' }}
      >
        {ghostWord}
      </div>

      <div className="relative w-full max-w-[1280px] mx-auto grid lg:grid-cols-[1.25fr_1fr] gap-16 items-center">
        <div>
          <div className="hero-in hero-in-1 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 backdrop-blur px-4 py-2 mb-8">
            <span className="relative flex w-2 h-2">
              <span className="hero-ping absolute inset-0 rounded-full bg-brand-green" />
              <span className="relative w-2 h-2 rounded-full bg-brand-green" />
            </span>
            <span className="text-xs font-medium tracking-[0.12em] uppercase text-[#c3d7ef]">
              Available for new projects · Sri Lanka
            </span>
          </div>

          <h1
            className="hero-in hero-in-2 font-bold text-white leading-[1.02] mb-8"
            style={{ fontSize: 'clamp(2.6rem,7vw,5.6rem)', letterSpacing: '-0.035em' }}
          >
            We build
            <br />
            <span key={word} className="hero-word inline-block">
              {word}
            </span>
            <br />
            that <span className="relative inline-block">
              sell.
              <svg
                aria-hidden="true"
                className="hero-underline absolute left-0 -bottom-2 w-full"
                viewBox="0 0 200 14"
                preserveAspectRatio="none"
              >
                <path d="M2 10 Q 50 2 100 8 T 198 6" fill="none" stroke="#22A454" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="hero-in hero-in-3 max-w-[560px] text-lg leading-relaxed text-[#c3d7ef] mb-10">
            <strong className="text-white font-semibold">X<span className="text-brand-blue">Sell</span></strong> is a
            digital studio crafting Web, Mobile, AI &amp; IoT products that turn ideas into growth.
          </p>

          <div className="hero-in hero-in-3 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 text-white font-semibold text-sm tracking-wide px-8 py-4 rounded-full shadow-[0_10px_40px_-10px_rgba(14,127,225,.7)] hover:shadow-[0_14px_50px_-8px_rgba(14,127,225,.9)] hover:-translate-y-0.5 transition-all"
              style={{ background: 'linear-gradient(135deg,#0B6FC9,#22A454)' }}
            >
              Start a Project
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center text-white font-semibold text-sm tracking-wide px-8 py-4 rounded-full border border-white/25 hover:bg-white/10 hover:border-white/40 transition-colors"
            >
              See Our Work
            </a>
          </div>
        </div>

        {/* Orbit visual */}
        <div aria-hidden="true" className="hero-in hero-in-3 relative hidden lg:block aspect-square max-w-[460px] w-full justify-self-end">
          <div className="absolute inset-[8%] rounded-full border border-white/10" />
          <div className="hero-spin absolute inset-[8%] rounded-full border-t-2 border-brand-blue/70" />
          <div className="hero-spin-rev absolute inset-[24%] rounded-full border border-dashed border-white/15" />
          <div className="absolute inset-[34%] rounded-full bg-gradient-to-br from-[#0B6FC9] to-[#061226] shadow-[0_0_80px_rgba(14,127,225,.55)] flex items-center justify-center">
            <span className="text-white font-bold text-6xl tracking-tight">
              X<span className="text-brand-green">.</span>
            </span>
          </div>
          {ORBIT_CHIPS.map((chip) => (
            <span
              key={chip.label}
              className={`absolute ${chip.pos} hero-float rounded-full border border-white/15 bg-white/10 backdrop-blur-md px-5 py-2.5 text-sm font-medium text-white shadow-lg`}
              style={{ animationDelay: chip.delay }}
            >
              {chip.label}
            </span>
          ))}
        </div>
      </div>

      <a
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex w-6 h-10 rounded-full border-2 border-white/30 justify-center pt-2"
      >
        <span className="hero-scroll w-1 h-2 rounded-full bg-white/70" />
      </a>
    </section>
  );
}
