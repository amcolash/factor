import { decrypt } from '@metamask/browser-passworder';
import { DocumentReference, updateDoc } from 'firebase/firestore';
import { useContext, useEffect, useMemo, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { toast } from 'react-toastify';

import { CodeContext } from '../contexts/CodeContext';
import { useRefreshTimer } from '../hooks/useRefreshTimer';
import { useTailwind } from '../hooks/useTailwind';
import { Key, UserData } from '../hooks/useUserData';
import logo from '../images/logo.png';
import { EditKey } from './EditKey';
import { Modal } from './Modal';
import { TokenCard } from './TokenCard';

export function TokenList({
  userData,
  userRef,
  editMode,
  setEditMode,
  editKey,
  setEditKey,
}: {
  userData: UserData;
  userRef: DocumentReference;
  editMode: boolean;
  setEditMode: (value: boolean) => void;
  editKey: boolean;
  setEditKey: (value: boolean) => void;
}) {
  const { time, timestamp } = useRefreshTimer();
  const encryptionToken = useContext(CodeContext) || '';

  const [search, setSearch] = useState('');
  const [keyToEdit, setKeyToEdit] = useState<Key>();
  const tailwind = useTailwind();

  const remainingMs = 30000 - (time.getTime() % 30000);
  const remainingSeconds = Math.ceil(remainingMs / 1000);
  const elapsedSeconds = 30 - remainingSeconds;

  useEffect(() => {
    return () => {
      setEditMode(false);
      setEditKey(false);
    };
  }, []);

  useEffect(() => {
    if (editMode && navigator.vibrate) navigator.vibrate(200);
  }, [editMode]);

  const Card = (props: { userKey: Key }): JSX.Element => {
    const key = props.userKey;

    try {
      return (
        <TokenCard
          data={key}
          userRef={userRef}
          timestamp={timestamp}
          onEdit={() => {
            const ref = toast.info('Decrypting token...', { autoClose: 1500 });
            decrypt(encryptionToken, key.secret)
              .then((decrypted) => {
                toast.dismiss(ref);

                setEditKey(true);
                setKeyToEdit({ name: key.name, secret: (decrypted as { secret: string }).secret });
              })
              .catch((err) => {
                toast.dismiss(ref);

                console.error(err);
                toast.error('Failed to decrypt token', { autoClose: 2500 });
              });
          }}
          setEditMode={setEditMode}
          editMode={editMode}
          addRecentKey={async (name) => {
            const totalKeys = 4;

            let recentKeys = userData.recentKeys || [];

            // Remove existing key if it is already in list
            if (recentKeys.includes(name)) {
              recentKeys = recentKeys.filter((key) => key !== name);
            }

            // Add new key to front of list
            recentKeys.unshift(name);

            // Limit list to total keys count
            if (recentKeys.length > totalKeys) {
              recentKeys = recentKeys.slice(0, totalKeys);
            }

            await updateDoc(userRef, { recentKeys });
          }}
        />
      );
    } catch (err) {
      console.error(err);
      return <div>Error Loading Token ({key.name})</div>;
    }
  };

  const gridClass = 'w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6';

  const tokens = useMemo(
    () => (
      <>
        {userData.keys?.length === 0 && (
          <div className="text-center text-lg bg-slate-800 p-8 w-full rounded-md">No keys added yet</div>
        )}
        {userData.keys.length > 0 && (
          <div className="w-full max-w-screen-lg">
            <div className="flex gap-4 sm:gap-6 items-center mb-10">
              <img src={logo} className="h-10 aspect-square -mb-0.5" />

              <div className="relative w-full">
                <input
                  className="pl-10"
                  type="search"
                  value={search}
                  placeholder="Search tokens"
                  onChange={(e) => setSearch(e.target.value)}
                />
                {/* Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                <svg
                  className="fill-slate-400 absolute left-3 top-[11px] h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
              </div>
            </div>

            {userData.recentKeys?.length > 0 && (
              <div className="grid gap-4 sm:gap-6 mb-4 sm:mb-6">
                <h2 className="m-0 text-xl leading-none">Recently Used</h2>
                <div className={gridClass}>
                  {userData.recentKeys.map((name: string) => {
                    const key = userData.keys.find((k) => k.name === name);
                    if (key) return <Card key={key.name} userKey={key} />;
                  })}
                </div>
                <hr className="border-slate-700" />
              </div>
            )}

            <div className={gridClass}>
              {userData.keys
                .filter((k) => search.length === 0 || k.name.toLowerCase().includes(search.toLowerCase()))
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((key: Key) => (
                  <Card key={key.name} userKey={key} />
                ))}
            </div>
          </div>
        )}
      </>
    ),
    [userData.keys, userData.recentKeys, search, timestamp, userRef, editMode]
  );

  // Originally, this was: const progressOffset = (elapsedSeconds / 30) * 50;
  // These magic number make things look good at the start / end points
  const progressOffset = ((elapsedSeconds + 0.15) / 29.4) * 50;

  return (
    <>
      <div className="flex sm:justify-center pl-8 sm:pl-0 fixed bottom-0 left-0 right-0 z-10 backdrop-blur-lg bg-slate-900 bg-opacity-30 pt-4 border-t-2 border-secondary">
        <div className="w-16 h-16 p-1 mb-6">
          <CircularProgressbar
            value={remainingSeconds - 1}
            maxValue={30}
            text={remainingSeconds.toString()}
            styles={buildStyles({
              textSize: '40px',
              trailColor: tailwind.theme.colors.slate[700],
              textColor: tailwind.theme.colors.primary,
              pathColor: tailwind.theme.colors.primary,
            })}
            strokeWidth={10}
          />
        </div>
        <div
          className="fixed bottom-1 h-1.5 bg-primary transition-all duration-700 z-20 rounded"
          style={{ left: `${progressOffset}%`, right: `${progressOffset}%` }}
        ></div>
      </div>

      <div className="flex flex-col gap-4 m-6 sm:m-8 items-center pb-24">{tokens}</div>

      {editKey && (
        <Modal
          title={keyToEdit?.name || keyToEdit?.secret ? 'Edit existing key' : 'Add a new key'}
          onClose={() => {
            setEditKey(false);
            setKeyToEdit(undefined);
          }}
        >
          <EditKey
            name={keyToEdit?.name}
            secret={keyToEdit?.secret}
            userRef={userRef}
            close={() => {
              setEditKey(false);
              setKeyToEdit(undefined);
            }}
          />
        </Modal>
      )}
    </>
  );
}
