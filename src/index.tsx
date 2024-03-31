import { Buffer } from 'buffer';
import { createRoot } from 'react-dom/client';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerSW } from 'virtual:pwa-register';

import { App } from './components/App';

// Fixes for browser-passworder
window.global ||= window;
globalThis.Buffer = Buffer;

// add this to prompt for a refresh
const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm('New content available. Reload?')) {
      updateSW();
    }
  },
});

// If a pwa on desktop, resize window a bit smaller
const isBrowser = matchMedia('(display-mode: browser)').matches;
if (!isBrowser) {
  // window.moveTo(16, 16);
  window.resizeTo(500, 760);
}

// Enable virtual keyboard api
const nav = navigator as any;
if (nav.virtualKeyboard) nav.virtualKeyboard.overlaysContent = true;

function Container() {
  return (
    <>
      <App />
      <ToastContainer
        theme="dark"
        position="bottom-center"
        transition={Zoom}
        autoClose={1000}
        hideProgressBar
        closeButton={false}
      />
    </>
  );
}

createRoot(document.getElementById('root')!).render(<Container />);
