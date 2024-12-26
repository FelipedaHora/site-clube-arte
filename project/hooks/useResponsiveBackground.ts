"use client";

import { useState, useEffect } from 'react';

interface BackgroundImages {
  desktop: string;
  mobile: string;
}

export function useResponsiveBackground(images: BackgroundImages) {
  const [currentBackground, setCurrentBackground] = useState(images.desktop);

  useEffect(() => {
    const updateBackground = () => {
      const isMobile = window.innerWidth < 768;
      setCurrentBackground(isMobile ? images.mobile : images.desktop);
    };

    // Initial check
    updateBackground();

    // Add resize listener
    window.addEventListener('resize', updateBackground);

    // Cleanup
    return () => window.removeEventListener('resize', updateBackground);
  }, [images]);

  return currentBackground;
}