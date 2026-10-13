export const services = [
  { num: '01', title: 'Web Development', tag: 'Websites · Web Apps · SaaS Platforms' },
  { num: '02', title: 'Mobile Applications', tag: 'iOS · Android · Cross-Platform' },
  { num: '03', title: 'Data Science & AI', tag: 'Analytics · Machine Learning · Automation' },
  { num: '04', title: 'IoT & Embedded Systems', tag: 'Connected Devices · Sensors · Hardware Integration' },
  { num: '05', title: 'DevOps & Cloud Infrastructure', tag: 'CI/CD · Cloud Deployment · Scaling' },
  { num: '06', title: 'Custom Software Solutions', tag: 'POS · LMS · Inventory · Bespoke Systems' },
];

export default function Capabilities() {
  return (
    <section id="services" className="px-[clamp(20px,3.5vw,48px)] py-24 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex justify-between items-end flex-wrap gap-4 mb-12">
          <h2 className="font-extrabold text-ink" style={{ fontSize: 'clamp(2rem,5vw,3rem)' }}>
            CAPABILITIES
          </h2>
          <a href="#work" className="text-xs font-bold tracking-[0.14em] uppercase text-accent-blue">
            VIEW OUR WORK →
          </a>
        </div>

        <div className="border-t border-line">
          {services.map((s) => (
            <div key={s.num} className="cap-row flex items-center gap-7 py-6 border-b border-line flex-wrap">
              <span className="font-bold text-accent-blue text-base min-w-[2.2rem]">{s.num}</span>
              <div>
                <div className="font-bold text-base tracking-wide text-ink uppercase">{s.title}</div>
                <div className="text-sm text-body mt-1">{s.tag}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
