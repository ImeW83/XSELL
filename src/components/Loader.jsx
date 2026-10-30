import { useEffect, useRef, useState } from 'react';
import Logo from './Logo';

const DURATION = 1800;
const HOLD_AT = 0.75; // the counter waits here until the page has loaded
const MAX_WAIT = 4000; // never hold a visitor longer than this

// Fast start, a short stall near 70%, then a quick finish, like a real page load
const ease = (t) =>
  t < 0.55
    ? 0.7 * (1 - Math.pow(1 - t / 0.55, 2))
    : t < 0.75
      ? 0.7 + 0.08 * ((t - 0.55) / 0.2)
      : 0.78 + 0.22 * Math.pow((t - 0.75) / 0.25, 1.6);

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Loader() {
  const [phase, setPhase] = useState(() => (prefersReducedMotion() ? 'gone' : 'counting'));
  const rootRef = useRef(null);
  const numRef = useRef(null);

  useEffect(() => {
    if (phase !== 'counting') return;
    let loaded = document.readyState === 'complete';
    const onLoad = () => { loaded = true; };
    window.addEventListener('load', onLoad);
    const failsafe = setTimeout(onLoad, MAX_WAIT);

    let elapsed = 0;
    let last = performance.now();
    let raf;
    let doneTimer;
    const frame = (now) => {
      if (loaded || elapsed < DURATION * HOLD_AT) elapsed = Math.min(DURATION, elapsed + (now - last));
      last = now;
      const p = ease(elapsed / DURATION) * 100;
      numRef.current.textContent = Math.round(p);
      rootRef.current.style.setProperty('--p', p.toFixed(2));
      if (elapsed < DURATION) raf = requestAnimationFrame(frame);
      else doneTimer = setTimeout(() => setPhase('opening'), 250);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(doneTimer);
      clearTimeout(failsafe);
      window.removeEventListener('load', onLoad);
    };
  }, [phase]);

  useEffect(() => {
    const root = document.documentElement;
    if (phase === 'gone') {
      root.classList.remove('is-loading');
      return;
    }
    if (phase !== 'opening') return;
    // Let the halves part a little before the hero text starts animating in
    const release = setTimeout(() => root.classList.remove('is-loading'), 350);
    const unmount = setTimeout(() => setPhase('gone'), 1000);
    return () => {
      clearTimeout(release);
      clearTimeout(unmount);
    };
  }, [phase]);

  if (phase === 'gone') return null;

  return (
    <div ref={rootRef} className={`loader ${phase === 'opening' ? 'loader-open' : ''}`} role="status">
      <span className="sr-only">Loading XSELL</span>
      <div className="loader-half loader-half-top" />
      <div className="loader-half loader-half-bottom" />
      <div className="loader-content text-white" aria-hidden="true">
        {/* Same position as the navbar logo, so the brand stays put when the page is revealed */}
        <div className="max-w-[1280px] mx-auto px-[clamp(20px,3.5vw,48px)] py-[22px]">
          <Logo />
        </div>
        <div className="absolute inset-x-0 bottom-0 px-[clamp(20px,4.5vw,64px)] pb-[clamp(28px,5vw,64px)] flex items-end justify-between gap-6">
          <span className="text-[0.75rem] font-semibold tracking-[0.2em] uppercase text-[#8fb3dc] pb-[0.6em]">
            Ideas in. Growth out.
          </span>
          <span
            className="font-bold leading-[0.8] tabular-nums"
            style={{ fontSize: 'clamp(5.5rem,19vw,16rem)', letterSpacing: '-0.06em' }}
          >
            <span ref={numRef}>0</span>
            <sup className="text-[0.32em] text-[#2EA44E] align-top ml-[0.05em] tracking-normal">%</sup>
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1.5 bg-white/[0.08]">
          <div className="loader-bar h-full bg-gradient-to-r from-[#1F88E4] to-[#2EA44E]" />
        </div>
      </div>
    </div>
  );
}
