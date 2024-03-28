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

  const bindPlus = useLongPress(() => setEditMode(true), {
    threshold: 600,
    onCancel: (e, { reason }) => {
      if (reason === LongPressCallbackReason.CancelledByRelease) {
        if (editMode) setEditMode(false);
        else setEditKey(true);
      }
    },
  });

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4">
      <button className={buttonClass + ' !bg-slate-200 !text-primary outline outline-primary outline-2 -outline-offset-2'} {...bindLock()}>
        <FaLock />
      </button>
      <button className={'transition-transform ' + buttonClass + (editMode ? ' rotate-45' : '')} {...bindPlus()}>
        <FaPlus />
      </button>
    </div>
  );
}
