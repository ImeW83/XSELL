import { useState } from 'react';

const followSocials = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'GitHub', href: '#' },
  { label: 'WhatsApp', href: '#' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sent | error

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      return;
    }
    setStatus('sent');
    // TODO: wire this up to a real endpoint — see Endermonks' api/contact.js
    // for a working Vercel serverless-function pattern to copy.
  };

  return (
    <section id="contact" className="px-[clamp(20px,3.5vw,48px)] py-24 bg-white">
      <div className="max-w-[860px] mx-auto">
        <span className="text-xs font-bold tracking-[0.14em] uppercase text-accent-blue">— CONTACT</span>
        <h2 className="font-extrabold text-ink mt-2 mb-4" style={{ fontSize: 'clamp(2rem,5vw,3rem)' }}>
          Let's build something
          <br />
          legendary.
        </h2>
        <p className="text-base leading-relaxed text-body mb-11">
          Tell us about your project and we'll come back to you within 24 hours.
        </p>

        <div className="border-t border-line pt-10">
          <h3 className="font-bold text-lg text-ink mb-1.5">Send Us a Message</h3>
          <p className="text-sm text-body mb-8">Fill out the form and our team will respond within 24 hours.</p>

          <form onSubmit={submit} className="flex flex-col gap-7">
            <div>
              <label htmlFor="xcell-name" className="sr-only">Your Name</label>
              <input
                id="xcell-name" name="name" type="text" required placeholder="Your Name"
                value={form.name} onChange={handle}
                className="w-full border-0 border-b border-line outline-none text-base text-ink pb-3.5 bg-transparent focus:border-accent-blue transition-colors"
              />
            </div>
            <div>
              <label htmlFor="xcell-email" className="sr-only">Email Address</label>
              <input
                id="xcell-email" name="email" type="email" required placeholder="Email Address"
                value={form.email} onChange={handle}
                className="w-full border-0 border-b border-line outline-none text-base text-ink pb-3.5 bg-transparent focus:border-accent-blue transition-colors"
              />
            </div>
            <div>
              <label htmlFor="xcell-phone" className="sr-only">Phone Number</label>
              <input
                id="xcell-phone" name="phone" type="tel" placeholder="Phone Number"
                value={form.phone} onChange={handle}
                className="w-full border-0 border-b border-line outline-none text-base text-ink pb-3.5 bg-transparent focus:border-accent-blue transition-colors"
              />
            </div>
            <div>
              <label htmlFor="xcell-service" className="sr-only">Service Needed</label>
              <input
                id="xcell-service" name="service" type="text" placeholder="Service Needed"
                value={form.service} onChange={handle}
                className="w-full border-0 border-b border-line outline-none text-base text-ink pb-3.5 bg-transparent focus:border-accent-blue transition-colors"
              />
            </div>
            <div>
              <label htmlFor="xcell-message" className="sr-only">Your Message</label>
              <textarea
                id="xcell-message" name="message" required rows={3} placeholder="Your Message"
                value={form.message} onChange={handle}
                className="w-full border-0 border-b border-line outline-none text-base text-ink pb-3.5 bg-transparent focus:border-accent-blue transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full text-center text-white font-bold text-xs tracking-wider uppercase px-8 py-[17px] hover:opacity-90 transition-opacity"
              style={{ background: 'linear-gradient(135deg,#0A3D7A,#0B6FC9)' }}
            >
              Send Message
            </button>
            {status === 'sent' && <p className="text-sm text-accent-blue">Thanks! We'll reply within 24 hours.</p>}
            {status === 'error' && <p className="text-sm text-red-600">Please fill in your name, email and message.</p>}
          </form>
        </div>

        <div className="mt-14 border border-line p-9">
          <h3 className="font-bold text-lg text-ink mb-1.5">Contact Information</h3>
          <p className="text-sm text-body mb-7">Reach out through any of these channels. We're always happy to chat.</p>

          <div className="flex flex-col gap-5 mb-7">
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 border border-line flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B6FC9" strokeWidth="1.8">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3.5 7l8.5 6 8.5-6" />
                </svg>
              </span>
              <div>
                <div className="text-xs tracking-wide uppercase text-body">Email Us</div>
                <div className="text-sm font-semibold text-ink">[YOUR EMAIL]</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 border border-line flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B6FC9" strokeWidth="1.8">
                  <path d="M21 11.5a8.5 8.5 0 1 1-4-7.2" />
                  <path d="M21 3l-6.5 6.5" />
                </svg>
              </span>
              <div>
                <div className="text-xs tracking-wide uppercase text-body">WhatsApp</div>
                <div className="text-sm font-semibold text-ink">[YOUR WHATSAPP NUMBER]</div>
              </div>
            </div>
          </div>

          <div className="border-t border-line pt-5">
            <div className="text-xs tracking-wide uppercase text-body mb-3 font-bold">Follow Us</div>
            <div className="flex flex-wrap gap-2.5">
              {followSocials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="flex items-center gap-2 border border-line px-4 py-2.5 text-sm font-semibold text-ink hover:border-accent-blue hover:-translate-y-0.5 transition-all"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
