import { useEffect } from 'react';

export function useVisibilityChange(callback: (visible: boolean) => void) {
  useEffect(() => {
    const listener = () => callback(!document.hidden);

    document.addEventListener('visibilitychange', listener);
    return () => document.removeEventListener('visibilitychange', listener);
  }, [callback]);
}
