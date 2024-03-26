import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import { ToastContainer, Zoom } from 'react-toastify';
import { Buffer } from 'buffer';
import 'react-toastify/dist/ReactToastify.css';
import { registerSW } from 'virtual:pwa-register';

// Fixes for browser-passworder
window.global ||= window;
globalThis.Buffer = Buffer;

// add this to prompt for a refresh
const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm('New content available. Reload?')) {
      updateSW(true);
    }
  },
});

createRoot(document.getElementById('root')!).render(
  <>
    <App />
    <ToastContainer theme="dark" position="bottom-center" transition={Zoom} autoClose={1000} hideProgressBar closeButton={false} />
  </>
);
