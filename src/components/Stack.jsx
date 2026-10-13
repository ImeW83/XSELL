const categories = [
  { name: 'Web Development', tag: 'Interfaces and platforms built for the web.', items: ['React', 'Next.js', 'Vue.js', 'Laravel', 'Tailwind CSS'], dark: true },
  { name: 'Mobile Applications', tag: 'Native and cross-platform apps for iOS and Android.', items: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase'], dark: false },
  { name: 'Data Science & AI', tag: 'Models, pipelines, and intelligence layered into your product.', items: ['Python', 'TensorFlow', 'PyTorch', 'LangChain', 'OpenAI API'], dark: true },
  { name: 'IoT & Embedded', tag: 'Connected hardware and the firmware that drives it.', items: ['Arduino', 'Raspberry Pi', 'ESP32', 'MQTT', 'C++'], dark: false },
  { name: 'DevOps & Cloud', tag: 'Infrastructure, deployment, and scaling done right.', items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform'], dark: true },
  { name: 'Custom Software', tag: 'Bespoke systems built to your exact spec.', items: ['Node.js', 'FastAPI', 'PostgreSQL', 'MongoDB', 'REST APIs'], dark: false },
];

export default function Stack() {
  return (
    <section id="stack">
      {categories.map((c) => (
        <div
          key={c.name}
          className={`px-[clamp(20px,3.5vw,48px)] py-16 border-b border-line ${c.dark ? 'bg-black' : 'bg-white'}`}
        >
          <div className="max-w-[1280px] mx-auto">
            <h3
              className={`font-extrabold uppercase mb-2.5 ${c.dark ? 'text-white' : 'text-ink'}`}
              style={{ fontSize: 'clamp(1.5rem,3.5vw,2.1rem)' }}
            >
              {c.name}
            </h3>
            <p className={`text-sm leading-relaxed max-w-[560px] mb-6 ${c.dark ? 'text-[#b7b7b7]' : 'text-body'}`}>
              {c.tag}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {c.items.map((it) => (
                <span
                  key={it}
                  className={`text-xs font-semibold px-3.5 py-2 border ${
                    c.dark ? 'text-white border-[rgba(177,128,229,.35)]' : 'text-ink border-line'
                  }`}
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
