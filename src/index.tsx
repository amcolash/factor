import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import { ToastContainer, Zoom } from 'react-toastify';
import { Buffer } from 'buffer';
import 'react-toastify/dist/ReactToastify.css';
import { registerSW } from 'virtual:pwa-register';
import { useIsMobile } from './hooks/useIsMobile';

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

// If a pwa on desktop, resize window a bit smaller
const isBrowser = matchMedia('(display-mode: browser)').matches;
if (!isBrowser) {
  // window.moveTo(16, 16);
  window.resizeTo(500, 760);
}

function Container() {
  const isMobile = useIsMobile();

  return (
    <>
      <App />
      <ToastContainer
        theme="dark"
        position="bottom-center"
        bodyClassName={isMobile ? 'text-right' : ''}
        transition={Zoom}
        autoClose={1000}
        hideProgressBar
        closeButton={false}
      />
    </>
  );
}

createRoot(document.getElementById('root')!).render(<Container />);
