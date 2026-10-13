export default function CTA() {
  return (
    <section
      className="relative px-[clamp(20px,3.5vw,48px)] py-24 text-center overflow-hidden"
      style={{ background: 'linear-gradient(150deg,#0A3D7A 0%,#061226 65%)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 20% 85%,rgba(34,164,84,.18),transparent 60%)' }}
      />
      <div className="relative max-w-[800px] mx-auto">
        <h2 className="font-extrabold text-white mb-8" style={{ fontSize: 'clamp(2.6rem,8vw,5rem)' }}>
          READY?
        </h2>
        <div className="flex flex-col gap-3.5 max-w-[340px] mx-auto">
          <a
            href="#contact"
            className="text-center text-white font-bold text-xs tracking-wider uppercase px-8 py-[17px] hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(135deg,#0A3D7A,#0B6FC9)' }}
          >
            Contact Us
          </a>
          <a
            href="#contact"
            className="text-center border-[1.5px] border-white/50 text-white font-bold text-xs tracking-wider uppercase px-8 py-4 hover:border-white hover:bg-white/10 transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
