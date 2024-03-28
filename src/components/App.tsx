import { useAuthState } from 'react-firebase-hooks/auth';
import { Login } from './Login';
import { TOTP } from './TOTP';
import { auth } from '../util/firebase';
import { useUserData } from '../hooks/useUserData';
import { Lock } from './Lock';
import { useEffect, useState } from 'react';
import { setDoc, updateDoc } from 'firebase/firestore';
import { User } from 'firebase/auth';
import { toast } from 'react-toastify';
import { encrypt } from '@metamask/browser-passworder';
import { CodeContext } from '../contexts/CodeContext';
import { LogoPage } from './Logo';
import { Menu } from './Menu';

export function App() {
  const [user, loading, error] = useAuthState(auth);

  if (loading || error) return <LogoPage>{error && <p>Error: {error.message}</p>}</LogoPage>;

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
      promptCode().then((code) => {
        if (code) setDoc(userRef, { keys: [], email: user.email || '', code });
        else toast.error('Failed to create user');
      });
    }
  }, [value, loading, error]);

  const updateCode = async () => {
    const code = await promptCode(token);

    if (code) updateDoc(userRef, { code });
    else toast.error('Failed to update code');
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
        updateCode={updateCode}
        editMode={editMode}
        setEditKey={setEditKey}
        setEditMode={setEditMode}
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
