export const LOGO_BLUE = '#1F88E4';
export const LOGO_GREEN = '#2EA44E';

// The XSELL mark: a green "X" stroke crossed by a blue growth arrow.
export function LogoMark({ size = 28, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="10 14 380 376" className={className} aria-hidden="true">
      <g fill="none" strokeWidth="48">
        <path d="M56 56 L172 172 M228 228 L344 344" stroke={LOGO_GREEN} />
        <path d="M56 344 L312 88" stroke={LOGO_BLUE} />
      </g>
      <circle cx="56" cy="56" r="41" fill={LOGO_GREEN} />
      <circle cx="344" cy="344" r="41" fill={LOGO_GREEN} />
      <circle cx="56" cy="344" r="41" fill={LOGO_BLUE} />
      <path d="M252 48 L376 24 L352 148 Z" fill={LOGO_BLUE} stroke={LOGO_BLUE} strokeWidth="8" strokeLinejoin="round" />
    </svg>
  );
}

export default function Logo({ size = 28, className = '' }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} />
      <span className="font-bold text-xl tracking-wide">
        <span style={{ color: LOGO_GREEN }}>X</span>
        <span style={{ color: LOGO_BLUE }}>SELL</span>
      </span>
    </span>
  );
}
