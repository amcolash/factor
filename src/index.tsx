import { Buffer } from 'buffer';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Id, ToastContainer, Zoom, toast } from 'react-toastify';
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

function Container() {
  return (
    <StrictMode>
      <App />
      <ToastContainer theme="dark" position="bottom-center" transition={Zoom} hideProgressBar closeButton={false} />
    </StrictMode>
  );
}

function onLoad() {
  // keep track of updating toast
  let updateToast: Id;

  // add this to prompt for a refresh
  const updateSW = registerSW({
    onNeedRefresh() {
      if (updateToast) toast.dismiss(updateToast);

      updateToast = toast.warn('New version installed, tap to update.', {
        autoClose: false,
        onClick: () => {
          if (updateToast) toast.dismiss(updateToast);

          updateSW();
          toast.warn('Updating...', { autoClose: false });
        },
        closeOnClick: true,
      });
    },
    onRegistered(r) {
      // try to update every 5 minutes
      if (r) {
        setInterval(
          () => {
            r.update();
          },
          5 * 60 * 1000
        );

        // TODO: Test that this works
        r.addEventListener('updatefound', () => {
          updateToast = toast.info('Downloading new version...');
        });
      }
    },
  });
}

createRoot(document.getElementById('root')!).render(<Container />);
setTimeout(() => onLoad(), 50);
