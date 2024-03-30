import { DocumentReference, arrayRemove, arrayUnion, updateDoc } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { FaQrcode, FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { QR } from './QR';
import { AppIcon } from './AppIcon';
import { CodeContext } from '../contexts/CodeContext';
import { encrypt } from '@metamask/browser-passworder';

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

  const token = useContext(CodeContext) || '';

  const editing = props.name || props.secret;

  const addKey = async (name: string, secret: string) => {
    if (name === '' || secret === '') {
      toast.error('Name and secret are required');
      return;
    }

    try {
      if (editing && (props.name !== name || props.secret !== secret)) {
        await updateDoc(props.userRef, { keys: arrayRemove({ name: props.name, secret: props.secret }) });
      }

      const encryptedSecret = await encrypt(token, { secret });
      await updateDoc(props.userRef, { keys: arrayUnion({ name, secret: encryptedSecret }) });
      setName('');
      setSecret('');
      props.close();
    } catch (err) {
      console.error(err);
      toast.error('Failed to add key');
    }
  };

  return (
    <>
      <div
        className="flex flex-col w-full gap-8"
        onKeyDown={(e) => {
          if (e.key === 'Enter') addKey(name, secret);
        }}
      >
        <div className="flex items-center">
          <h2 className="flex-1 text-lg font-medium">{editing ? 'Edit existing key' : 'Add a new key'}</h2>
          <button onClick={props.close} className="px-2">
            <FaTimes />
          </button>
        </div>

        <div className="flex gap-4 items-center">
          <AppIcon name={name} />
          <div className="flex flex-col gap-2">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Site name"
              autoFocus
              autoComplete="false"
              type="text"
            />
            <input value={secret} onChange={(e) => setSecret(e.target.value)} placeholder="Secret" autoComplete="false" type="password" />
          </div>
        </div>

        <div className="flex gap-4">
          {!editing && (
            <button onClick={() => setScan(true)}>
              <FaQrcode />
            </button>
          )}
          <button onClick={() => addKey(name, secret)} className="flex-1">
            {props.name || props.secret ? 'Save' : 'Add'}
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
