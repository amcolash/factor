import { DocumentReference, arrayRemove, updateDoc } from 'firebase/firestore';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import { TOTP } from 'totp-generator';
import { FaEdit, FaTimes } from 'react-icons/fa';
import { Key } from '../hooks/useUserData';

import { AppIcon } from './AppIcon';
import { CodeContext } from '../contexts/CodeContext';
import { useContext, useEffect, useState } from 'react';
import { decrypt } from '@metamask/browser-passworder';

export function TokenCard({
  data,
  userRef,
  timestamp,
  onEdit,
  editMode,
}: {
  data: Key;
  userRef: DocumentReference;
  timestamp: Date;
  onEdit: () => void;
  editMode: boolean;
}) {
  const encryptionToken = useContext(CodeContext) || '';
  const [secret, setSecret] = useState('');

  useEffect(() => {
    decrypt(encryptionToken, data.secret).then((decrypted) => setSecret((decrypted as { secret: string }).secret));
  }, [data, encryptionToken]);

  const token = secret.length > 0 ? TOTP.generate(secret.replace(/\s+/g, ''), { timestamp: timestamp.getTime() }).otp : '';

  const innerContents = (
    <div
      className="p-3 bg-slate-800 border border-slate-700 rounded-md select-none flex gap-6 justify-between items-center hover:brightness-[97%] relative cursor-pointer"
      onClick={(e) => {
        if (editMode) onEdit();
      }}
    >
      <div className="flex gap-4">
        <AppIcon name={data.name} />
        <div className="flex flex-col items-start justify-center">
          <h2 className="font-bold capitalize">{data.name}</h2>
          <div>{token}</div>
        </div>
      </div>

      <div
        className={
          'flex justify-end items-center gap-2 sm:w-16 md:w-32 h-12 transition-opacity duration-500 ' +
          (editMode ? '' : 'pointer-events-none')
        }
        style={{ opacity: editMode ? 1 : 0 }}
      >
        <button
          className="absolute -top-3 -right-3 !p-1 text-slate-800 bg-white border border-slate-400 rounded-full hover:text-white hover:brightness-100 hover:bg-danger transition-all duration-300"
          style={{ pointerEvents: editMode ? 'auto' : 'none' }}
          onClick={(e) => {
            e.stopPropagation();

            const confirm = window.confirm('Are you sure you want to remove this token?');
            if (confirm) {
              const confirm2 = window.confirm('Are you really sure?');
              if (confirm2) updateDoc(userRef, { keys: arrayRemove(data) });
            }
          }}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );

  if (editMode) return innerContents;

  return (
    <CopyToClipboard
      text={token}
      onCopy={(text, result) => {
        if (result) toast.info(data.name + ' code copied');
        else toast.error('Failed to copy code');
      }}
    >
      {innerContents}
    </CopyToClipboard>
  );
}
