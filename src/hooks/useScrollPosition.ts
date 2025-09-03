import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const updateScrollY = () => setScrollY(window.scrollY);
    
    window.addEventListener('scroll', updateScrollY, { passive: true });
    
    return () => window.removeEventListener('scroll', updateScrollY);
  }, []);

  return scrollY;
};

export const useFooterVisibility = (threshold = 100) => {
  const scrollY = useScrollPosition();
  return scrollY > threshold;
};