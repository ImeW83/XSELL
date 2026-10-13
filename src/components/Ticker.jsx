const items = [
  'Web Development', 'Mobile Applications', 'Data Science & AI',
  'IoT & Embedded Systems', 'DevOps & Cloud Infrastructure', 'Custom Software Solutions',
];

export default function Ticker() {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-b border-line bg-white">
      <div className="ticker-track flex w-max py-[15px]">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-11 font-bold text-xs tracking-[0.18em] uppercase text-accent-blue whitespace-nowrap px-11"
          >
            {item}
            <span aria-hidden="true" className="text-brand-green text-[0.6rem]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
