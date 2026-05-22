import { FocusTrap } from 'focus-trap-react';
import { JSX } from 'react';
import { FaTimes } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';

export function Modal({
  onClose,
  title,
  children,
  open,
}: {
  onClose: () => void;
  title: string;
  children: JSX.Element;
  open: boolean;
}): JSX.Element {
  return (
    <div
      className={twMerge(
        'fixed inset-0 z-30 flex items-center justify-center bg-slate-900/75 backdrop-blur-xs transition-all',
        !open && 'pointer-events-none opacity-0'
      )}
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      }}
    >
      <FocusTrap active={open}>
        <div
          className="w-full rounded-lg border border-slate-600/50 bg-slate-800/50 p-8 backdrop-blur-2xl"
          onClick={(e) => e.stopPropagation()}
          style={{ marginTop: 'calc(-1 * env(keyboard-inset-height))', maxWidth: 'min(80vw, 600px)' }}
        >
          <div className="mb-8 flex items-center">
            <h2 className="flex-1 text-xl font-medium">{title}</h2>
            <button onClick={onClose} className="bg-slate-600 px-2" tabIndex={open ? 0 : -1}>
              <FaTimes />
            </button>
          </div>

          {open && children}
        </div>
      </FocusTrap>
    </div>
  );
}
