import { useRefreshTimer } from '../hooks/useRefreshTimer';
import { Key, UserData } from '../hooks/useUserData';
import { TokenCard } from './TokenCard';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useMemo, useState } from 'react';
import { DocumentReference } from 'firebase/firestore';
import { EditKey } from './EditKey';
import { FaEdit, FaPlus } from 'react-icons/fa';
import { useTailwind } from '../hooks/useTailwind';

export function TOTOP({ userData, userRef }: { userData: UserData; userRef: DocumentReference }) {
  const { time, timestamp } = useRefreshTimer();

  const [search, setSearch] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editKey, setEditKey] = useState(false);
  const [keyToEdit, setKeyToEdit] = useState<Key>();
  const tailwind = useTailwind();

  const remainingMs = 30000 - (time.getTime() % 30000);
  const remainingSeconds = Math.ceil(remainingMs / 1000);

  const tokens = useMemo(
    () => (
      <>
        {userData.keys.length === 0 && <div className="text-center text-lg bg-slate-800 p-8 w-full rounded-md">No keys added yet</div>}
        {userData.keys.length > 0 && (
          <>
            <div className="flex gap-4 w-full mb-6">
              <input type="search" value={search} placeholder="Search tokens" onChange={(e) => setSearch(e.target.value)} />
              <button onClick={() => setEditMode(!editMode)} className={'icon' + (editMode ? ' !brightness-75' : '')}>
                <FaEdit />
              </button>
            </div>
            <div className="w-full max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {userData.keys
                .filter((k) => search.length === 0 || k.name.toLowerCase().includes(search.toLowerCase()))
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((key: Key) => {
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
                        editMode={editMode}
                      />
                    );
                  } catch (err) {
                    console.error(err);
                    return <div>Error Loading Token ({key.name})</div>;
                  }
                })}
            </div>
          </>
        )}
      </>
    ),
    [userData.keys, search, timestamp, userRef, editMode]
  );

  return (
    <>
      <div
        className="absolute bottom-0 left-0 h-1.5 bg-primary transition-all duration-700"
        style={{ width: `${(remainingSeconds / 30) * 100}%` }}
      ></div>

      <button onClick={() => setEditKey(true)} className="icon absolute bottom-6 right-6 rounded-full !p-4">
        <FaPlus />
      </button>

      <div className="flex flex-col gap-4 m-4 items-center">
        <div className="w-16 h-16 p-1 mb-6">
          <CircularProgressbar
            value={remainingSeconds}
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

        {tokens}
      </div>

      {editKey && (
        <div
          className="absolute z-10 inset-0 bg-slate-900 bg-opacity-75 flex justify-center items-center"
          onClick={() => {
            setEditKey(false);
            setKeyToEdit(undefined);
          }}
        >
          <div className="max-w-screen-md bg-slate-700 rounded-lg p-8" onClick={(e) => e.stopPropagation()}>
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
