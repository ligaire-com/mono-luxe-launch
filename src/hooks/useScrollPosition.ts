import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const updateScrollY = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);
    };
    
    window.addEventListener('scroll', updateScrollY, { passive: true });
    
    return () => window.removeEventListener('scroll', updateScrollY);
  }, []);

  return scrollY;
};

export const useFooterVisibility = (threshold = 50) => {
  const scrollY = useScrollPosition();
  
  return scrollY > threshold;
};