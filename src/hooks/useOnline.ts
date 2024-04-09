import { useEffect, useState } from 'react';

export function useOnline(): boolean {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    function onStatus() {
      setOnline(navigator.onLine);
    }

    window.addEventListener('online', onStatus);
    window.addEventListener('offline', onStatus);

    return () => {
      window.removeEventListener('online', onStatus);
      window.removeEventListener('offline', onStatus);
    };
  }, []);

  return online;
}
