import { decrypt } from '@metamask/browser-passworder';
import { clearIndexedDbPersistence, terminate } from 'firebase/firestore';
import { useEffect, useRef } from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { FaSignOutAlt } from 'react-icons/fa';
import PinField from 'react-pin-field';
import { toast } from 'react-toastify';

import { auth, db } from '../util/firebase';
import { LogoPage } from './Logo';

let unlocked = false;

export function Lock({ unlock, encryptedCode }: { unlock: (code: string) => void; encryptedCode: string }) {
  const ref = useRef<HTMLInputElement[]>(null);
  const [signOut] = useSignOut(auth);

  useEffect(() => {
    setTimeout(() => ref.current?.[0].focus(), 250);

    if (process.env.NODE_ENV === 'development' && !unlocked) {
      onCodeEntered(import.meta.env.VITE_CODE);
      unlocked = true;
    }
  }, []);

  const onCodeEntered = async (code: string) => {
    if (code?.length === 6) {
      try {
        const decrypted = (await decrypt(code, encryptedCode)) as { token: string };
        unlock(decrypted.token);
      } catch (err) {
        console.log(err, code);
        toast.error('Invalid code');
      }
    }

    if (ref.current) {
      ref.current.forEach((input) => {
        input.value = '';
      });
      ref.current[0].focus();
    }
  };

  return (
    <LogoPage
      onClick={() => {
        if (ref.current) ref.current[0].focus();
      }}
      style={{ marginTop: 'calc(-1 * env(keyboard-inset-height) / 2)' }}
    >
      <button
        className="icon fixed top-4 right-4 bg-danger"
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

      <div className="flex">
        <PinField
          length={6}
          className="border border-slate-500 w-11 sm:w-12 h-14 m-1.5 rounded-lg text-center text-6xl p-1"
          type="password"
          inputMode="numeric"
          ref={ref}
          onComplete={onCodeEntered}
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </LogoPage>
  );
}
