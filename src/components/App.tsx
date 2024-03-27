import { useAuthState } from 'react-firebase-hooks/auth';
import { Login } from './Login';
import { TOTP } from './TOTP';
import { auth } from '../util/firebase';
import { useUserData } from '../hooks/useUserData';
import { Lock } from './Lock';
import { useEffect, useMemo, useState } from 'react';
import { FaLock } from 'react-icons/fa';
import { setDoc, updateDoc } from 'firebase/firestore';
import { User } from 'firebase/auth';
import { toast } from 'react-toastify';
import { encrypt } from '@metamask/browser-passworder';
import { CodeContext } from '../contexts/CodeContext';
import useLongPress from '../hooks/useLongPress';

export function App() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!user) return <Login />;
  return <Authorized user={user} />;
}

async function promptCode(token?: string): Promise<string | undefined> {
  let code = '';
  let tries = 0;
  while (code.length !== 6 && tries < 3) {
    code = prompt('Enter 6 digit pin') || '';
    tries++;
  }
  if (code.length === 6) {
    const newCode = prompt('Re-enter 6 digit pin') || '';
    if (newCode !== code) {
      toast.error('Codes do not match', { autoClose: 5000 });
      return;
    }
  }

  if (code.length === 6) {
    if (!token) {
      token = crypto.getRandomValues(new Uint32Array(32)).toString();
    }

    try {
      const blob = await encrypt(code, { token });
      return blob;
    } catch (err) {
      console.error(err);
    }
  }
}

function Authorized({ user }: { user: User }) {
  const { value, loading, error, userRef } = useUserData();
  const [token, setToken] = useState<string>();
  const longPressEvent = useLongPress(async () => {
    const code = await promptCode(token);

    if (code) updateDoc(userRef, { code });
    else toast.error('Failed to update code');
  }, 1000);

  useEffect(() => {
    const listener = () => {
      if (document.visibilityState === 'visible') {
        setToken(undefined);
      }
    };

    document.addEventListener('visibilitychange', listener);
    return () => document.removeEventListener('visibilitychange', listener);
  }, []);

  useEffect(() => {
    if (!loading && !error && value?.data() === undefined) {
      promptCode().then((code) => {
        if (code) setDoc(userRef, { keys: [], email: user.email || '', code });
        else toast.error('Failed to create user');
      });
    }
  }, [value, loading, error]);

  const buttons = useMemo(
    () => (
      <div className="fixed bottom-24 right-[30px]">
        <button onClick={() => setToken(undefined)} className="p-2.5 rounded-full" {...longPressEvent}>
          <FaLock />
        </button>
      </div>
    ),
    [longPressEvent]
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!value || value.data() === undefined) return <p>No data</p>;

  if (!token) return <Lock unlock={(code) => setToken(code)} encryptedCode={value.data()?.code!} />;

  return (
    <CodeContext.Provider value={token}>
      {buttons}
      <TOTP userData={value.data()!} userRef={userRef} />
    </CodeContext.Provider>
  );
}
