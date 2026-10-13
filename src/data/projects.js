// Per-project accent theme. Full Tailwind class strings are kept literal
// here (not built dynamically) so Tailwind's JIT scanner picks them up.
export const themes = {
  pink:   { bg: 'bg-[#FAA6FF]', stripe: 'border-t-[#FAA6FF]' },
  blue:   { bg: 'bg-[#8BD0F2]', stripe: 'border-t-[#8BD0F2]' },
  lime:   { bg: 'bg-[#CCFF00]', stripe: 'border-t-[#CCFF00]' },
  orange: { bg: 'bg-[#FF8A3D]', stripe: 'border-t-[#FF8A3D]' },
};

export const projects = [
  {
    num: '01',
    theme: 'pink',
    cat: 'Healthcare Platform',
    name: 'VCare Nursing',
    brief:
      "The complete digital operation for a Sri Lankan home-healthcare provider: a public booking site, a client portal, a mobile-first staff portal and a 32-module admin back office. It covers everything from the first enquiry to the final payslip.",
    stats: [['4', 'Connected apps'], ['32', 'Admin modules'], ['180+', 'Permissions'], ['~150k', 'Lines of code']],
    tags: ['React 19', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    liveUrl: 'https://www.vcareos.com',
    isResearch: false,
  },
  {
    num: '02',
    theme: 'blue',
    cat: 'Travel & Tourism Platform',
    name: 'World Class Travels',
    brief:
      "A fully digital travel agency: a cinematic booking website, a traveller portal, a B2B partner portal and a 28-module operations console. Visa files, fare holds, holiday packages and multi-currency payments, from first message to safe return.",
    stats: [['4', 'Connected apps'], ['28', 'Ops modules'], ['45+', 'Visa destinations'], ['~110k', 'Lines of code']],
    tags: ['React 19', 'Node.js', 'MongoDB', 'BullMQ', 'AWS'],
    liveUrl: 'https://world-class-travels.vercel.app/',
    isResearch: false,
  },
  {
    num: '03',
    theme: 'lime',
    cat: 'Gig Economy · Consumer SaaS',
    name: 'CheapAss',
    brief:
      "The delivery driver's secret weapon: a community platform where drivers log anonymous Delivery Notes (tips, addresses, platforms and issues) so others can dodge bad drops. One Flutter codebase runs as a web app, a PWA and a mobile app, with a Stripe-powered freemium model.",
    stats: [['3', 'Surfaces, one codebase'], ['5+', 'Delivery platforms'], ['$14.95', 'For 100 notes'], ['PWA', 'iOS & Android']],
    tags: ['Flutter', 'Firebase', 'Stripe', 'Google Maps', 'PWA'],
    liveUrl: 'https://cheapass.app',
    isResearch: false,
  },
  {
    num: '04',
    theme: 'orange',
    cat: 'Cybersecurity · Research Platform',
    name: 'Honeylight',
    brief:
      "A honeypot that doesn't just detect attacks, it physically shows you one. A Cowrie SSH honeypot on a Raspberry Pi feeds a machine learning detection engine and a live dashboard, and an Arduino-driven set of lights turns off, dims or flickers depending on what the attacker is doing.",
    stats: [['3', 'Attack types classified'], ['89%', 'Random Forest accuracy'], ['3', 'Physical lights'], ['2', 'Detection layers']],
    tags: ['Python', 'scikit-learn', 'Cowrie', 'Raspberry Pi', 'Arduino'],
    liveUrl: '',
    isResearch: true,
  },
];
