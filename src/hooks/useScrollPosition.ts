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

export const useFooterVisibility = (threshold = 200) => {
  const scrollY = useScrollPosition();
  
  // Show footer when scrolled past the threshold
  return scrollY > threshold;
};