import { Scanner } from '@yudiel/react-qr-scanner';
import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';

export function QR({ close, onScan }: { close: () => void; onScan: (name: string, secret: string) => void }) {
  return (
    <div className="absolute inset-0 w-screen h-screen bg-black flex justify-center z-10">
      <div className="relative w-[100vh] p-2">
        <div className="absolute bottom-14 right-0 left-0 z-10 flex justify-center">
          <button className="icon" onClick={close}>
            <FaTimes />
          </button>
        </div>
        <Scanner
          onResult={async (text: string) => {
            try {
              const url = new URL(text);

              const name = decodeURIComponent(url.pathname.replace('//totp/', '')).split(':')[0];
              const secret = url.searchParams.get('secret');

              if (url.protocol !== 'otpauth:' || !name || !secret) throw new Error(`Invalid URL: ${url.toString()}`);

              onScan(name, secret);
              close();
            } catch (err) {
              console.error(err);
              toast.error('Failed to scan qr code');
            }
          }}
          onError={(error) => console.error(error?.message)}
          components={{ audio: false }}
        />
      </div>
    </div>
  );
}
