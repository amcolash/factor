import { decrypt } from '@metamask/browser-passworder';
import { DocumentReference, arrayRemove, updateDoc } from 'firebase/firestore';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { TOTP } from 'totp-generator';
import { LongPressCallbackReason, useLongPress } from 'use-long-press';

import { CodeContext } from '../contexts/CodeContext';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';
import { useIsMobile } from '../hooks/useIsMobile';
import { Key } from '../hooks/useUserData';
import { AppIcon } from './AppIcon';

enum HiddenType {
  Hidden,
  FirstVisible,
  Visible,
}

export function TokenCard({
  data,
  userRef,
  timestamp,
  onEdit,
  setEditMode,
  editMode,
}: {
  data: Key;
  userRef: DocumentReference;
  timestamp: Date;
  onEdit: () => void;
  setEditMode: (value: boolean) => void;
  editMode: boolean;
}) {
  const encryptionToken = useContext(CodeContext) || '';
  const [secret, setSecret] = useState('');
  const [hidden, setHidden] = useState<HiddenType>(HiddenType.Hidden);
  const isMobile = useIsMobile();
  const [copy] = useCopyToClipboard();

  const bindPress = useLongPress(() => setEditMode(true), {
    threshold: 600,
    onCancel: (e, { reason }) => {
      if (reason === LongPressCallbackReason.CancelledByRelease) {
        if (hidden === HiddenType.Hidden) setHidden(HiddenType.FirstVisible);
        else if (editMode) onEdit();
        else copyToken();
      }
    },
  });

  useEffect(() => {
    if (hidden === HiddenType.Hidden) return;

    decrypt(encryptionToken, data.secret)
      .then((decrypted) => setSecret((decrypted as { secret: string }).secret))
      .catch((err) => {
        console.error(err);
        setSecret('Error');
      });
  }, [data.secret, encryptionToken, hidden]);

  const timeChunk = Math.floor(timestamp.getTime() / 30000);

  const token = useMemo(() => {
    if (secret.length === 0 || secret === 'Error' || hidden === HiddenType.Hidden) return 'Token Error';

    try {
      return TOTP.generate(secret.replace(/\s+/g, ''), { timestamp: timeChunk * 30000 }).otp;
    } catch (err) {
      console.error(err);
      return 'Token Error';
    }
  }, [secret, timeChunk, hidden]);

  const copyToken = useCallback(
    () =>
      copy(token).then((result) => {
        if (result && token !== 'Token Error')
          toast.info(data.name + ' code copied', { bodyClassName: isMobile ? 'text-right' : '' });
        else toast.error('Failed to copy code');
      }),
    [token, data, isMobile, copy]
  );

  useEffect(() => {
    if (hidden === HiddenType.FirstVisible && token !== 'Token Error') {
      copyToken();
      setHidden(HiddenType.Visible);
    }
  }, [hidden, token]);

  return (
    <div
      className={
        'p-3 bg-slate-800 border border-slate-700 rounded-md select-none flex gap-6 justify-between items-center hover:brightness-[97%] relative cursor-pointer transition-transform duration-1000 rotate-0' +
        (editMode ? ' animate-wiggle' : '')
      }
      style={{ animationDelay: `${Math.random() * 250}ms` }}
      {...bindPress()}
    >
      <div className="flex gap-4">
        <AppIcon name={data.name} />
        <div className="flex flex-col items-start justify-center">
          <h2 className="font-bold capitalize">{data.name}</h2>
          <div>
            {hidden === HiddenType.Hidden ? (
              '*** ***'
            ) : secret.length === 0 ? (
              'Decrypting...'
            ) : token === 'Token Error' ? (
              'Token Error'
            ) : (
              <>
                <span className="mr-2">{token.slice(0, 3)}</span>
                <span>{token.slice(3, 6)}</span>
              </>
            )}
          </div>
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
}
