import { FaLock, FaPlus } from 'react-icons/fa';
import { LongPressCallbackReason, useLongPress } from 'use-long-press';

export function Menu({
  lock,
  updateCode,
  editMode,
  setEditMode,
  setEditKey,
}: {
  lock: () => void;
  updateCode: () => void;
  editMode: boolean;
  setEditMode: (value: boolean) => void;
  setEditKey: (value: boolean) => void;
}) {
  const buttonClass = 'p-4 rounded-full';

  const bindLock = useLongPress(updateCode, {
    threshold: 600,
    onCancel: (e, { reason }) => {
      if (reason === LongPressCallbackReason.CancelledByRelease) {
        lock();
      }
    },
  });

  const bindPlus = useLongPress(
    () => {
      setEditMode(true);
    },
    {
      threshold: 600,
      onCancel: (e, { reason }) => {
        if (reason === LongPressCallbackReason.CancelledByRelease) {
          if (editMode) {
            setEditMode(false);
          } else {
            setTimeout(() => setEditKey(true), 10); // Delay to prevent immediate closing of modal (not sure why)
          }
        }
      },
    }
  );

  return (
    <div className="fixed bottom-8 right-8 flex gap-4 z-20">
      <button className={buttonClass + ' !bg-slate-800 !text-primary outline outline-primary outline-2 -outline-offset-2'} {...bindPlus()}>
        <FaPlus />
      </button>
      <button className={'transition-transform ' + buttonClass + (editMode ? ' rotate-45' : '')} {...bindLock()}>
        <FaLock />
      </button>
    </div>
  );
}
