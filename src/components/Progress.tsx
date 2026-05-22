import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { useSecondTimer } from 'hooks/useRefreshTimer';

export function Progress() {
  const { time } = useSecondTimer();

  const remainingMs = 30000 - (time.getTime() % 30000);
  const remainingSeconds = Math.ceil(remainingMs / 1000);
  const elapsedSeconds = 30 - remainingSeconds;

  // Originally, this was: const progressOffset = (elapsedSeconds / 30) * 50;
  // These magic number make things look good at the start / end points
  const progressOffset = ((elapsedSeconds + 0.15) / 29.4) * 50;

  return (
    <div className="border-secondary fixed right-0 bottom-0 left-0 z-10 flex border-t-2 bg-slate-900/30 pt-4 pl-8 backdrop-blur-lg sm:justify-center sm:pl-0">
      <div className="mb-6 h-16 w-16 p-1">
        <CircularProgressbar
          value={remainingSeconds - 1}
          maxValue={30}
          text={remainingSeconds.toString()}
          styles={buildStyles({
            textSize: '40px',
            trailColor: 'var(--color-slate-700)',
            textColor: 'var(--color-primary)',
            pathColor: 'var(--color-primary)',
          })}
          className="text-shadow"
          strokeWidth={10}
        />
      </div>
      <div
        className="bg-primary fixed bottom-1 z-20 h-1.5 rounded-sm transition-all duration-700"
        style={{ left: `${progressOffset}%`, right: `${progressOffset}%` }}
      ></div>
    </div>
  );
}
