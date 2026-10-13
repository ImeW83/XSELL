const members = [
  {
    name: 'Imeth',
    role: 'The Coordinator',
    initial: 'I',
    bio: "Imeth handles client conversations, keeps projects on schedule and reminds grown men to check their messages. He also brings the cybersecurity expertise that keeps your website from becoming a side hustle for some scammer. In his own time, he's usually tinkering with decoy systems that lure hackers in, or chasing a personal best at the gym.",
  },
  {
    name: 'Heshal',
    role: 'The Brain',
    initial: 'H',
    bio: "Heshal has 24 hours in his day (allegedly). He leads development, plans how our software fits together, writes code and handles cloud infrastructure and deployments. Ask him something outside tech and you can find yourself discussing free will when you only meant to make small talk.",
  },
  {
    name: 'Naveed',
    role: 'The Builder',
    initial: 'N',
    bio: "Naveed is a skilled mobile developer who also spends hours testing mobile games for companies that don't know he exists. He builds our apps, keeps the team's spirits high and comes through when things get hectic, despite the obvious demands of his unpaid gaming career.",
  },
];

export default function Team() {
  return (
    <section id="team" className="px-[clamp(20px,3.5vw,48px)] py-24 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <span className="text-xs font-bold tracking-[0.14em] uppercase text-accent-blue">— OUR TEAM</span>
        <h2 className="font-extrabold text-ink mt-2 mb-12" style={{ fontSize: 'clamp(2rem,5vw,3rem)' }}>
          Meet the People Behind XSell
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {members.map((m) => (
            <div key={m.name} className="team-card border border-line p-9">
              <div
                className="w-[60px] h-[60px] rounded-full flex items-center justify-center font-extrabold text-white text-xl mb-4"
                style={{ background: 'radial-gradient(circle at 30% 30%,rgba(255,255,255,.3),transparent 60%),#0B6FC9' }}
              >
                {m.initial}
              </div>
              <div className="font-bold text-lg text-ink">{m.name}</div>
              <div className="text-sm text-body mt-0.5 mb-4 font-semibold">{m.role}</div>
              <p className="text-sm leading-relaxed text-body">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
