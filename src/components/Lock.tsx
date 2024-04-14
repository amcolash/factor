import { decrypt, encrypt } from '@metamask/browser-passworder';
import { DocumentReference, arrayUnion, clearIndexedDbPersistence, terminate, updateDoc } from 'firebase/firestore';
import { useEffect, useRef } from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { FaFingerprint, FaSignOutAlt } from 'react-icons/fa';
import PinField from 'react-pin-field';
import { toast } from 'react-toastify';

import { useUUID } from '../hooks/useUUID';
import { UserData } from '../hooks/useUserData';
import { auth, db } from '../util/firebase';
import { authenticate, register } from '../util/webauthn';
import { LogoPage } from './Logo';

let unlocked = false;

export function Lock({
  unlock,
  encryptedCode,
  data,
  userRef,
}: {
  unlock: (code: string) => void;
  encryptedCode: string;
  data?: UserData;
  userRef: DocumentReference;
}) {
  const ref = useRef<HTMLInputElement[]>(null);
  const [signOut] = useSignOut(auth);
  const uuid = useUUID();

  const webauthn = data?.webauthn?.find((a) => a.uuid === uuid);

  useEffect(() => {
    setTimeout(() => ref.current?.[0].focus(), 250);

    // if (process.env.NODE_ENV === 'development' && !unlocked) {
    //   onCodeEntered(import.meta.env.VITE_CODE);
    //   unlocked = true;
    // }
  }, []);

  useEffect(() => {
    if (webauthn && !unlocked) {
      biometricLogin();
      unlocked = true;
    }
  }, [webauthn]);

  const biometricLogin = async () => {
    try {
      if (!webauthn) throw 'webauthn not defined';

      const userHandle = await authenticate(webauthn.credentialId).catch(console.error);
      const decryptedSecret = (await decrypt(userHandle || '', webauthn.secret)) as { token: string };

      unlock(decryptedSecret.token);
    } catch (err) {
      console.error(err);
      toast.error('Invalid biometric login');
    }
  };

  const biometricRegister = async () => {
    try {
      const pin = prompt('Enter pin to register biometric login') || '';
      const decryptedSecret = (await decrypt(pin, encryptedCode)) as { token: string };

      const credential = await register();
      const userHandle = credential?.userHandle || '';

      const encryptedSecret = await encrypt(userHandle, decryptedSecret);

      updateDoc(userRef, {
        webauthn: arrayUnion({
          credentialId: credential?.credentialId,
          uuid,
          secret: encryptedSecret,
        }),
      });

      unlocked = true;
      toast.success('Successfully enrolled biometric login');
    } catch (err) {
      console.error(err);
      toast.error('Error registering fingerprint');
    }
  };

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

      <div className="flex mb-6">
        <PinField
          length={6}
          className="border border-slate-500 w-10 sm:w-12 h-14 m-1.5 rounded-lg text-center text-6xl p-1"
          type="password"
          inputMode="numeric"
          ref={ref}
          onComplete={onCodeEntered}
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      {navigator.credentials && webauthn ? (
        <button
          className="p-3 rounded-full bg-slate-900 bg-opacity-75 border-2 border-slate-600"
          onClick={async (e) => {
            e.stopPropagation();
            biometricLogin();
          }}
        >
          <FaFingerprint size={30} />
        </button>
      ) : (
        <button
          className="p-3 rounded-full bg-tertiary bg-opacity-75 border-2 border-slate-600"
          onClick={async (e) => {
            e.stopPropagation();
            biometricRegister();
          }}
        >
          <FaFingerprint size={30} />
        </button>
      )}
    </LogoPage>
  );
}
