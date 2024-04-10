import { encrypt } from '@metamask/browser-passworder';
import { DocumentReference, arrayRemove, arrayUnion, updateDoc } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaQrcode, FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { CodeContext } from '../contexts/CodeContext';
import { AppIcon } from './AppIcon';
import { QR } from './QR';

interface EditKeyProps {
  name?: string;
  secret?: string;
  userRef: DocumentReference;
  close: () => void;
}

export function EditKey(props: EditKeyProps) {
  const [name, setName] = useState(props.name || '');
  const [secret, setSecret] = useState(props.secret || '');
  const [scan, setScan] = useState(false);
  const [masked, setMasked] = useState(true);
  const [updating, setUpdating] = useState(false);

  const token = useContext(CodeContext) || '';

  const editing = props.name || props.secret;

  const addKey = async (name: string, secret: string) => {
    if (name === '' || secret === '') {
      toast.error('Name and secret are required');
      return;
    }

    try {
      setUpdating(true);

      if (editing && (props.name !== name || props.secret !== secret)) {
        await updateDoc(props.userRef, { keys: arrayRemove({ name: props.name, secret: props.secret }) });
      }

      const encryptedSecret = await encrypt(token, { secret });
      await updateDoc(props.userRef, { keys: arrayUnion({ name, secret: encryptedSecret }) });
      setName('');
      setSecret('');
      setMasked(true);
      props.close();
    } catch (err) {
      console.error(err);
      toast.error('Failed to add key');
    } finally {
      setUpdating(false);
    }
  };

  return (
    <>
      <div
        className="flex flex-col gap-8"
        onKeyDown={(e) => {
          if (e.key === 'Enter') addKey(name, secret);
        }}
      >
        <div className="flex gap-4 items-center">
          <AppIcon name={name} className="w-14 h-14 sm:w-16 sm:h-16" />
          <div className="flex flex-col gap-3 w-full">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Site name"
              autoFocus
              autoComplete="false"
              type="text"
            />

            <div className="relative">
              <input
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                placeholder="Secret"
                autoComplete="false"
                type={masked ? 'password' : 'text'}
              />
              <button
                className="absolute right-0 top-0 bottom-0 flex items-center cursor-pointer bg-transparent"
                onClick={() => setMasked(!masked)}
              >
                {masked ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          {!editing && (
            <button onClick={() => setScan(true)}>
              <FaQrcode />
            </button>
          )}
          <button onClick={() => addKey(name, secret)} className="flex-1" disabled={updating}>
            {updating ? (editing ? 'Saving' : 'Adding') : editing ? 'Save' : 'Add'}
          </button>
        </div>
      </div>

      {scan && (
        <QR
          close={() => setScan(false)}
          onScan={(name, secret) => {
            setName(name);
            setSecret(secret);
          }}
        />
      )}
    </>
  );
}
