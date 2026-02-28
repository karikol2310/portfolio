import { useState, useEffect } from 'react';

export function useScrollReveal(ref, options = {}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, options]);

  return isVisible;
}
