import { useEffect, useState } from 'react';

export function useRefreshTimer() {
  const [timestamp, setTimestamp] = useState(new Date());
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // 1 second refresh
    const timeInt: NodeJS.Timeout = setInterval(() => setTime(new Date()), 1000);

    // 30 second refresh (updated at 0 seconds, 30 seconds, 60 seconds, etc.)
    let timestampInt: NodeJS.Timeout;
    setTimeout(
      () => {
        setTimestamp(new Date());
        timestampInt = setInterval(() => setTimestamp(new Date()), 30000);
      },
      30000 - (new Date().getTime() % 30000)
    );

    return () => {
      if (timestampInt) clearInterval(timestampInt);
      clearInterval(timeInt);
    };
  }, []);

  return { time, timestamp };
}
