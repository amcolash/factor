import { Id, ToastOptions, UpdateOptions, toast } from 'react-toastify';
import { registerSW } from 'virtual:pwa-register';

export function useServiceWorker() {
  // keep track of updating toast
  let updateToast: Id;

  // add this to prompt for a refresh
  const updateSW = registerSW({
    onNeedRefresh() {
      const content = 'New version installed, tap to update.';
      const options = {
        autoClose: false,
        closeOnClick: true,
        onClick: () => {
          const content = 'Updating...';
          if (updateToast) toast.update(updateToast, { render: content, onClick: undefined });
          else toast.warn(content, { autoClose: false });

          updateSW();
        },
      };

      if (updateToast) toast.update(updateToast, { render: content, type: 'warning', ...options } as UpdateOptions);
      else updateToast = toast.warn(content, options as ToastOptions);
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
