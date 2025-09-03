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

export const useFooterVisibility = (threshold = 50) => {
  const scrollY = useScrollPosition();
  const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
  
  // Show footer when scrolled past 80% of viewport height
  return scrollY > windowHeight * 0.8;
};