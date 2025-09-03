import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const updateScrollY = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);
      console.log('Scroll Y:', newScrollY); // Debug log
    };
    
    window.addEventListener('scroll', updateScrollY, { passive: true });
    
    return () => window.removeEventListener('scroll', updateScrollY);
  }, []);

  return scrollY;
};

export const useFooterVisibility = (threshold = 100) => {
  const scrollY = useScrollPosition();
  const isVisible = scrollY > threshold;
  
  console.log('ScrollY:', scrollY, 'Threshold:', threshold, 'Visible:', isVisible); // Debug log
  
  return isVisible;
};