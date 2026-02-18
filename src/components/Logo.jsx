import './Logo.css';

function Logo({ size = 'default' }) {
  return (
    <div className={`logo logo--${size}`}>
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-icon" role="img" aria-labelledby="logo-title">
        <title id="logo-title">KR Logo</title>
        <rect x="2" y="2" width="44" height="44" rx="12" stroke="url(#logo-gradient)" strokeWidth="2.5" fill="rgba(0, 212, 255, 0.05)" />
        <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="url(#logo-gradient)" fontFamily="'Fira Code', monospace" fontWeight="700" fontSize="18">
          KR
        </text>
        <defs>
          <linearGradient id="logo-gradient" x1="0" y1="0" x2="48" y2="48">
            <stop offset="0%" stopColor="#00d4ff" />
            <stop offset="100%" stopColor="#0077b6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default Logo;
