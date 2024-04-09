import { Buffer } from 'buffer';
import { createRoot } from 'react-dom/client';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerSW } from 'virtual:pwa-register';

import { App } from './components/App';

// Fixes for browser-passworder
window.global ||= window;
globalThis.Buffer = Buffer;

// If a pwa on desktop, resize window a bit smaller
const isBrowser = matchMedia('(display-mode: browser)').matches;
if (!isBrowser) {
  window.resizeTo(500, 760);
}

// Enable virtual keyboard api
const nav = navigator as any;
if (nav.virtualKeyboard) nav.virtualKeyboard.overlaysContent = true;

// add this to prompt for a refresh
const updateSW = registerSW({
  onNeedRefresh() {
    toast.warn('New version available, tap to update.', {
      autoClose: false,
      onClick: () => {
        updateSW();
        toast.warn('Updating...', { autoClose: false });
      },
      closeOnClick: true,
    });
  },
});

function Container() {
  return (
    <>
      <App />
      <ToastContainer theme="dark" position="bottom-center" transition={Zoom} hideProgressBar closeButton={false} />
    </>
  );
}

createRoot(document.getElementById('root')!).render(<Container />);
