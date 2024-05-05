import { FaLock, FaPlus, FaSave, FaUpload } from 'react-icons/fa';
import { twJoin } from 'tailwind-merge';

import { useOnHold } from '../hooks/useOnHold';

export function Menu({
  lock,
  updateCode,
  editMode,
  setEditMode,
  setEditKey,
  exportKeys,
  importKeys,
}: {
  lock: () => void;
  updateCode: () => void;
  editMode: boolean;
  setEditMode: (value: boolean) => void;
  setEditKey: (value: boolean) => void;
  exportKeys: () => void;
  importKeys: () => void;
}) {
  const buttonClass = 'p-4 rounded-full ';
  const buttonColor = buttonClass + ' !bg-slate-800 !text-primary';

  const bindLock = useOnHold(updateCode, lock);
  const bindPlus = useOnHold(
    () => setEditMode(!editMode),
    () => {
      if (editMode) {
        setEditMode(false);
      } else {
        setEditKey(true);
      }
    }
  );

  return (
    <div className="fixed bottom-8 right-8 flex gap-4 z-20">
      {editMode && (
        <>
          <button className={buttonColor} onClick={() => importKeys()}>
            <FaUpload />
          </button>
          <button className={buttonColor + ' mr-4'} onClick={() => exportKeys()}>
            <FaSave />
          </button>
        </>
      )}
      <button className={twJoin(buttonColor, editMode && 'rotate-45')} {...bindPlus()}>
        <FaPlus />
      </button>
      <button className={twJoin('transition-transform', buttonClass)} {...bindLock()}>
        <FaLock />
      </button>
    </div>
  );
}
