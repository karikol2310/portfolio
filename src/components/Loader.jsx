import { useState, useEffect, useId } from 'react';
import './Loader.css';

function Loader() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [removed, setRemoved] = useState(false);
  const id = useId();
  const gradientId = `loader-gradient-${id}`;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const remaining = 100 - prev;
        const increment = Math.max(1, Math.floor(remaining * 0.08));
        return Math.min(prev + increment, 100);
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100 && loading) {
      const timer = setTimeout(() => {
        setExiting(true);
        setLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [progress, loading]);

  const handleAnimationEnd = () => {
    if (exiting) {
      setRemoved(true);
    }
  };

  if (removed) return null;

  return (
    <div
      className={`loader-overlay${exiting ? ' loader-exit' : ''}`}
      onAnimationEnd={handleAnimationEnd}
      aria-hidden={exiting}
    >
      <div className="loader-content">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`loader-logo${progress < 100 ? ' loader-logo-glow' : ''}`}
          role="img"
          aria-label="KR Logo"
        >
          <rect
            x="2" y="2" width="44" height="44" rx="12"
            stroke={`url(#${gradientId})`} strokeWidth="2.5"
            fill="rgba(0, 212, 255, 0.05)"
          />
          <text
            x="50%" y="54%"
            dominantBaseline="middle" textAnchor="middle"
            fill={`url(#${gradientId})`}
            fontFamily="'Fira Code', monospace" fontWeight="700" fontSize="18"
          >
            KR
          </text>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="48" y2="48">
              <stop offset="0%" stopColor="#00d4ff" />
              <stop offset="100%" stopColor="#0077b6" />
            </linearGradient>
          </defs>
        </svg>

        <div className="loader-bar-track">
          <div
            className="loader-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="loader-percent">{progress}%</span>
      </div>
    </div>
  );
}

export default Loader;
