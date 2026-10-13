import { projects, themes } from '../data/projects';

export default function Work() {
  return (
    <section id="work" className="px-[clamp(20px,3.5vw,48px)] py-24 bg-[#fafafa] border-t border-b border-line">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-12">
          <span className="text-xs font-bold tracking-[0.14em] uppercase text-accent-blue">— PORTFOLIO</span>
          <h2 className="font-extrabold text-ink mt-2" style={{ fontSize: 'clamp(2rem,5vw,3rem)' }}>
            Our Work
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {projects.map((p) => {
            const t = themes[p.theme];
            return (
              <div
                key={p.num}
                className={`bg-white border border-line border-t-4 ${t.stripe} p-[clamp(24px,4vw,40px)]`}
              >
                <div className="flex flex-wrap gap-2.5 items-center mb-4">
                  <span className="text-xs font-bold tracking-[0.1em] text-accent-blue">{p.num}</span>
                  <span className="text-xs font-semibold tracking-wide uppercase text-body border border-line px-2.5 py-1">
                    {p.cat}
                  </span>
                </div>
                <h3 className="font-extrabold text-ink mb-3.5" style={{ fontSize: 'clamp(1.6rem,3.5vw,2.2rem)' }}>
                  {p.name}
                </h3>
                <p className="text-sm leading-relaxed text-body max-w-[680px] mb-5">{p.brief}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-xs font-semibold text-body border border-line px-2.5 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-line border border-line mb-5">
                  {p.stats.map(([v, l]) => (
                    <div key={l} className="bg-[#fafafa] px-3.5 py-4">
                      <div className="font-extrabold text-accent-blue text-xl">{v}</div>
                      <div className="text-[0.62rem] text-body uppercase tracking-wide mt-1">{l}</div>
                    </div>
                  ))}
                </div>
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block ${t.bg} text-black font-bold text-xs tracking-wide uppercase px-5 py-3 hover:opacity-80 transition-opacity`}
                  >
                    Visit Live Site →
                  </a>
                )}
                {p.isResearch && (
                  <span className="text-sm text-body font-semibold">
                    Research prototype — not publicly deployed
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
