import { useEffect } from 'react';

const keys = new Set();
export function useEffectOnce(key: string, callback: () => void) {
  useEffect(() => {
    if (keys.has(key)) return;

    callback();
    keys.add(key);
  }, []);
}
