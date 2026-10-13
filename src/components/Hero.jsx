import { useGhostWord } from '../hooks/useGhostWord';

export default function Hero() {
  const ghostWord = useGhostWord();

  return (
    <section
      id="hero"
      className="relative px-[clamp(20px,3.5vw,48px)] pt-[140px] pb-[90px] overflow-hidden"
      style={{ background: 'linear-gradient(150deg,#0A3D7A 0%,#061226 65%)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 55% at 80% 10%,rgba(14,127,225,.25),transparent 60%)' }}
      />
      <div
        aria-hidden="true"
        className="ghost-word absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold text-[#22A454] whitespace-nowrap pointer-events-none"
        style={{ fontSize: 'clamp(7rem,22vw,18rem)', letterSpacing: '-0.02em' }}
      >
        {ghostWord}
      </div>

      <div className="relative max-w-[1280px] mx-auto">
        <div className="hero-in hero-in-1 flex justify-between items-center flex-wrap gap-3 mb-9">
          <span className="text-xs font-semibold tracking-[0.16em] uppercase text-[#a9c6e8]">
            <span className="inline-block w-5 h-0.5 bg-brand-green mr-2.5 align-middle" />
            EST. 2026
          </span>
          <span className="text-xs font-semibold tracking-[0.16em] uppercase text-[#a9c6e8]">SRI LANKA</span>
        </div>

        <h1
          className="hero-in hero-in-2 font-extrabold text-white leading-[0.98] mb-8"
          style={{ fontSize: 'clamp(3.2rem,11vw,7rem)', letterSpacing: '-0.01em' }}
        >
          X<span className="text-brand-blue">Sell</span>
        </h1>

        <p className="hero-in hero-in-2 max-w-[620px] text-base leading-relaxed text-[#c3d7ef] mb-10">
          Building digital experiences through{' '}
          <strong className="text-white">Web Development, Mobile Apps, AI &amp; IoT</strong>.
        </p>

        <div className="hero-in hero-in-3">
          <a
            href="#contact"
            className="inline-block text-white font-bold text-xs tracking-wider uppercase px-8 py-[17px] hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(135deg,#0A3D7A,#0B6FC9)' }}
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}
