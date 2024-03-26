import { useEffect, useRef } from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { FaSignOutAlt } from 'react-icons/fa';
import PinField from 'react-pin-field';
import { toast } from 'react-toastify';
import { auth, db } from '../util/firebase';
import { clearIndexedDbPersistence, terminate } from 'firebase/firestore';
import { decrypt } from '@metamask/browser-passworder';
import Logo from '../logo.png';

export function Lock({ unlock, encryptedCode }: { unlock: (code: string) => void; encryptedCode: string }) {
  const ref = useRef<HTMLInputElement[]>(null);
  const [signOut] = useSignOut(auth);

  useEffect(() => {
    setTimeout(() => ref.current?.[0].focus(), 150);
  }, []);

  return (
    <>
      <button
        className="icon absolute top-4 right-4 bg-danger"
        onClick={async () => {
          try {
            await signOut();
            await terminate(db);
            await clearIndexedDbPersistence(db);
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <FaSignOutAlt />
      </button>
      <div
        className="w-full h-[100svh] flex flex-col justify-center items-center"
        onClick={() => {
          if (ref.current) ref.current[0].focus();
        }}
      >
        <h1 className="mt-30 text-center text-5xl font-bold mb-2">Factor</h1>
        <img src={Logo} className="h-52 mb-10" style={{ clipPath: 'circle(40%)' }} />
        <div className="flex">
          <PinField
            length={6}
            className="border border-slate-500 w-12 h-12 m-2 rounded-lg text-center text-6xl p-1 outline-none outline-offset-0 outline-4"
            type="password"
            inputMode="numeric"
            ref={ref}
            onComplete={async (code) => {
              try {
                const decrypted = (await decrypt(code, encryptedCode)) as { token: string };
                unlock(decrypted.token);
              } catch (err) {
                toast.error('Invalid code');
              }

              if (ref.current) {
                ref.current.forEach((input) => {
                  input.value = '';
                });
                ref.current[0].focus();
              }
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
    </>
  );
}
