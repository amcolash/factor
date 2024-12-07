import { decrypt } from '@metamask/browser-passworder';
import { DocumentReference, updateDoc } from 'firebase/firestore';
import { useContext, useEffect, useMemo, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaSearch } from 'react-icons/fa';
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

  const recentKeys = useMemo(
    () => (
      <div className="grid gap-4 sm:gap-6 mb-4 sm:mb-6">
        <h2 className="m-0 text-xl leading-none">Recently Used</h2>
        <div className={gridClass}>
          {userData.recentKeys?.map((name: string) => {
            const key = userData.keys.find((k) => k.name === name);
            if (key) return <Card key={key.name} userKey={key} />;
          })}
        </div>
        <hr className="border-slate-700" />
      </div>
    ),
    [userData.recentKeys, search, timestamp, userRef, editMode]
  );

  const tokens = useMemo(
    () => (
      <div className={gridClass}>
        {userData.keys
          .filter((k) => search.length === 0 || k.name.toLowerCase().includes(search.toLowerCase()))
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((key: Key) => (
            <Card key={key.name} userKey={key} />
          ))}
      </div>
    ),
    [userData.keys, search, timestamp, userRef, editMode]
  );

  return (
    <>

      <div className="flex flex-col gap-4 m-6 sm:m-8 items-center pb-24">
        {userData.keys?.length === 0 ? (
          <div className="text-center text-lg bg-slate-800 p-8 w-full rounded-md">No keys added yet</div>
        ) : (
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
                <FaSearch className="fill-slate-400 absolute left-3 top-[11px] h-4" />
              </div>
            </div>

            {userData.recentKeys?.length > 0 && recentKeys}
            {tokens}
          </div>
        )}
      </div>

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
