import { encrypt } from '@metamask/browser-passworder';
import { User } from 'firebase/auth';
import { setDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

import { CodeContext } from '../contexts/CodeContext';
import { useUserData } from '../hooks/useUserData';
import { auth } from '../util/firebase';
import { exportKeys, importKeys } from '../util/keys';
import { Lock } from './Lock';
import { Login } from './Login';
import { LogoPage } from './Logo';
import { Menu } from './Menu';
import { TOTP } from './TOTP';

export function App() {
  const [user, loading, error] = useAuthState(auth);

  if (loading || error) return <LogoPage>{error && <p>Error: {error.message}</p>}</LogoPage>;

  if (!user) return <Login />;
  return <Authorized user={user} />;
}

async function promptPin(token?: string): Promise<string | undefined> {
  let code = '';
  let tries = 0;
  while (code.length !== 6 && tries < 3) {
    code = prompt('Set a new 6 digit pin') || '';
    tries++;
  }
  if (code.length === 6) {
    const newCode = prompt('Re-enter 6 digit pin') || '';
    if (newCode !== code) {
      toast.error('Pins do not match');
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
  const [editMode, setEditMode] = useState(false);
  const [editKey, setEditKey] = useState(false);

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
      promptPin().then((code) => {
        if (code) setDoc(userRef, { keys: [], email: user.email || '', code });
        else toast.error('Failed to create user');
      });
    }
  }, [value, loading, error]);

  const updatePin = async () => {
    if (!confirm('Would you like to update your pin?')) return;
    const code = await promptPin(token);

    if (code) updateDoc(userRef, { code });
    else toast.error('Failed to update pin');
  };

  if (loading || error || !value || value.data() === undefined)
    return (
      <LogoPage>
        {error && <p>Error: {error.message}</p>}
        {!value || (value.data() === undefined && <p>No data</p>)}
      </LogoPage>
    );

  if (!token) return <Lock unlock={(code) => setToken(code)} encryptedCode={value.data()?.code!} />;

  return (
    <CodeContext.Provider value={token}>
      <Menu
        lock={() => setToken(undefined)}
        updateCode={updatePin}
        editMode={editMode}
        setEditKey={setEditKey}
        setEditMode={setEditMode}
        exportKeys={() => exportKeys(token, value.data()!)}
        importKeys={() => importKeys(token, value.data()!)}
      />
      <TOTP
        userData={value.data()!}
        userRef={userRef}
        editMode={editMode}
        setEditMode={setEditMode}
        editKey={editKey}
        setEditKey={setEditKey}
      />
    </CodeContext.Provider>
  );
}
