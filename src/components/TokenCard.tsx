import { DocumentReference, arrayRemove, updateDoc } from 'firebase/firestore';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import { TOTP } from 'totp-generator';
import { FaTimes } from 'react-icons/fa';
import { Key } from '../hooks/useUserData';

import { AppIcon } from './AppIcon';
import { CodeContext } from '../contexts/CodeContext';
import { useContext, useEffect, useMemo, useState } from 'react';
import { decrypt } from '@metamask/browser-passworder';
import { LongPressCallbackReason, useLongPress } from 'use-long-press';
import { useIsMobile } from '../hooks/useIsMobile';

export function TokenCard({
  data,
  userRef,
  timestamp,
  onEdit,
  setEditMode,
  editMode,
  index,
}: {
  data: Key;
  userRef: DocumentReference;
  timestamp: Date;
  onEdit: () => void;
  setEditMode: (value: boolean) => void;
  editMode: boolean;
  index: number;
}) {
  const encryptionToken = useContext(CodeContext) || '';
  const [secret, setSecret] = useState('');
  const isMobile = useIsMobile();

  const bindPress = useLongPress(() => setEditMode(true), {
    threshold: 600,
    onCancel: (e, { reason }) => {
      if (reason === LongPressCallbackReason.CancelledByRelease) {
        if (editMode) onEdit();
      }
    },
  });

  useEffect(() => {
    decrypt(encryptionToken, data.secret)
      .then((decrypted) => setSecret((decrypted as { secret: string }).secret))
      .catch((err) => {
        console.error(err);
        setSecret('Error');
      });
  }, [data, encryptionToken]);

  const timeChunk = Math.floor(timestamp.getTime() / 30000);

  const token = useMemo(() => {
    if (secret.length === 0 || secret === 'Error') return 'Token Error';
    return TOTP.generate(secret.replace(/\s+/g, ''), { timestamp: timeChunk * 30000 }).otp;
  }, [secret, timeChunk]);

  const innerContents = (
    <div
      className={
        'p-3 bg-slate-800 border border-slate-700 rounded-md select-none flex gap-6 justify-between items-center hover:brightness-[97%] relative cursor-pointer transition-transform duration-1000 rotate-0' +
        (editMode ? ' animate-wiggle' : '')
      }
      style={{ animationDelay: `${index * 100}ms` }}
      {...bindPress()}
    >
      <div className="flex gap-4">
        <AppIcon name={data.name} />
        <div className="flex flex-col items-start justify-center">
          <h2 className="font-bold capitalize">{data.name}</h2>
          <div>{secret.length === 0 ? 'Decrypting...' : token}</div>
        </div>
      </div>

      <button
        className="absolute -top-3 -right-3 !p-1 text-slate-800 bg-white border border-slate-400 rounded-full hover:text-white hover:brightness-100 sm:hover:bg-danger transition-all duration-300"
        style={{ pointerEvents: editMode ? 'auto' : 'none', opacity: editMode ? 1 : 0 }}
        onClick={(e) => {
          e.stopPropagation();

          const confirm = window.confirm('Are you sure you want to remove this token?');
          if (confirm) {
            const confirm2 = window.confirm('Are you really sure?');
            if (confirm2) updateDoc(userRef, { keys: arrayRemove(data) });
          }
        }}
        onMouseDown={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
      >
        <FaTimes />
      </button>
    </div>
  );

  if (editMode) return innerContents;

  return (
    <CopyToClipboard
      text={token}
      onCopy={(text, result) => {
        if (result) toast.info(data.name + ' code copied', { bodyClassName: isMobile ? 'text-right' : '' });
        else toast.error('Failed to copy code');
      }}
    >
      {innerContents}
    </CopyToClipboard>
  );
}
