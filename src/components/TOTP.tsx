import { useRefreshTimer } from '../hooks/useRefreshTimer';
import { Key, UserData } from '../hooks/useUserData';
import { TokenCard } from './TokenCard';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useMemo, useState } from 'react';
import { DocumentReference } from 'firebase/firestore';
import { EditKey } from './EditKey';
import { useTailwind } from '../hooks/useTailwind';

export function TOTP({
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

  const [search, setSearch] = useState('');
  const [keyToEdit, setKeyToEdit] = useState<Key>();
  const tailwind = useTailwind();

  const remainingMs = 30000 - (time.getTime() % 30000);
  const remainingSeconds = Math.ceil(remainingMs / 1000);

  const tokens = useMemo(
    () => (
      <>
        {userData.keys.length === 0 && <div className="text-center text-lg bg-slate-800 p-8 w-full rounded-md">No keys added yet</div>}
        {userData.keys.length > 0 && (
          <div className="w-full max-w-screen-lg">
            <div className="relative">
              <input
                className="mb-6 pl-10"
                type="search"
                value={search}
                placeholder="Search tokens"
                onChange={(e) => setSearch(e.target.value)}
              />
              {/* Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
              <svg className="fill-slate-400 absolute left-3 top-[11px] h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {userData.keys
                .filter((k) => search.length === 0 || k.name.toLowerCase().includes(search.toLowerCase()))
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((key: Key, i: number) => {
                  try {
                    return (
                      <TokenCard
                        key={key.name}
                        data={key}
                        userRef={userRef}
                        timestamp={timestamp}
                        onEdit={() => {
                          setEditKey(true);
                          setKeyToEdit(key);
                        }}
                        setEditMode={setEditMode}
                        editMode={editMode}
                        index={i}
                      />
                    );
                  } catch (err) {
                    console.error(err);
                    return <div>Error Loading Token ({key.name})</div>;
                  }
                })}
            </div>
          </div>
        )}
      </>
    ),
    [userData.keys, search, timestamp, userRef, editMode]
  );

  return (
    <>
      <div
        className="fixed bottom-0 left-0 h-1.5 bg-primary transition-transform duration-700 w-screen"
        style={{ transform: `scaleX(${(remainingSeconds / 30) * 100}%)` }}
      ></div>

      <div className="flex justify-center w-full fixed bottom-2 left-0 right-0 pointer-events-none">
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
      </div>

      <div className="flex flex-col gap-4 m-6 sm:m-8 items-center">{tokens}</div>

      {editKey && (
        <div
          className="absolute z-10 inset-0 bg-slate-900 bg-opacity-75 flex justify-center items-center"
          onClick={() => {
            setEditKey(false);
            setKeyToEdit(undefined);
          }}
        >
          <div
            className="max-w-screen-md bg-slate-700 rounded-lg p-8"
            onClick={(e) => e.stopPropagation()}
            style={{ marginTop: 'calc(-1 * env(keyboard-inset-height))' }}
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
          </div>
        </div>
      )}
    </>
  );
}
