import { useEffect, useState } from 'react';

export const useTailwindSize = () => {
  const [screenSize, setScreenSize] = useState(getScreenSize());

  function getScreenSize() {
    const width = window.innerWidth;

    if (width < 640) {
      return 'sm';
    } else if (width < 768) {
      return 'md';
    } else if (width < 1024) {
      return 'lg';
    } else if (width < 1280) {
      return 'xl';
    } else {
      return '2xl';
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize());
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
};
