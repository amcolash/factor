import { FaTimes } from 'react-icons/fa';
import { jsx } from 'react/jsx-runtime';

export function Modal({
  onClose,
  title,
  children,
}: {
  onClose: () => void;
  title: string;
  children: JSX.Element;
}): JSX.Element {
  return (
    <div
      className="fixed z-10 inset-0 bg-slate-900 bg-opacity-75 flex justify-center items-center"
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      }}
    >
      <div
        className="bg-slate-700 rounded-lg p-8 w-full"
        onClick={(e) => e.stopPropagation()}
        style={{ marginTop: 'calc(-1 * env(keyboard-inset-height))', maxWidth: 'min(80vw, 600px)' }}
      >
        <div className="flex items-center mb-8">
          <h2 className="flex-1 text-xl font-medium">{title}</h2>
          <button onClick={onClose} className="px-2 bg-slate-600 border-2 border-slate-800">
            <FaTimes />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}
