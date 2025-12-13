import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { useSecondTimer } from '../hooks/useRefreshTimer';
import { useTailwind } from '../hooks/useTailwind';

export function Progress() {
  const tailwind = useTailwind();

  const { time } = useSecondTimer();

  const remainingMs = 30000 - (time.getTime() % 30000);
  const remainingSeconds = Math.ceil(remainingMs / 1000);
  const elapsedSeconds = 30 - remainingSeconds;

  // Originally, this was: const progressOffset = (elapsedSeconds / 30) * 50;
  // These magic number make things look good at the start / end points
  const progressOffset = ((elapsedSeconds + 0.15) / 29.4) * 50;

  return (
    <div className="flex sm:justify-center pl-8 sm:pl-0 fixed bottom-0 left-0 right-0 z-10 backdrop-blur-lg bg-slate-900 bg-opacity-30 pt-4 border-t-2 border-secondary">
      <div className="w-16 h-16 p-1 mb-6">
        <CircularProgressbar
          value={remainingSeconds - 1}
          maxValue={30}
          text={remainingSeconds.toString()}
          styles={buildStyles({
            textSize: '40px',
            trailColor: tailwind.theme.colors.slate[700],
            textColor: tailwind.theme.colors.primary,
            pathColor: tailwind.theme.colors.primary,
          })}
          className="text-shadow"
          strokeWidth={10}
        />
      </div>
      <div
        className="fixed bottom-1 h-1.5 bg-primary transition-all duration-700 z-20 rounded"
        style={{ left: `${progressOffset}%`, right: `${progressOffset}%` }}
      ></div>
    </div>
  );
}
