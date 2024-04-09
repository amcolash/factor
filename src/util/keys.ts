import { decrypt } from '@metamask/browser-passworder';
import { toast } from 'react-toastify';

import { UserData } from '../hooks/useUserData';

export async function exportKeys(token: string, data: UserData): Promise<void> {
  const toastId = toast('Exporting keys ⏳️', {
    autoClose: false,
    progress: 0,
    hideProgressBar: false,
  });

  const keys = [];

  for (let i = 0; i < data.keys.length; i++) {
    const key = data.keys[i];
    const decoded = (await decrypt(token, key.secret)) as { secret: string };
    keys.push({ nam: key.name, secret: decoded.secret });

    console.log(i / data.keys.length);
    toast.update(toastId, { progress: i / data.keys.length });
  }

  toast.done(toastId);

  const blob = new Blob([JSON.stringify(keys)], { type: 'text/json' });

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'keys.json';
  a.click();
  URL.revokeObjectURL(url);
}

export async function importKeys(token: string, doata: UserData): Promise<void> {}
