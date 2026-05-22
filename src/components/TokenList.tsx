import { DocumentReference, updateDoc } from 'firebase/firestore';
import { useCallback, useContext, useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';

import { CodeContext } from 'contexts/CodeContext';
import { useRefreshTimer } from 'hooks/useRefreshTimer';
import { useTailwindSize } from 'hooks/useTailwindSize';
import { Key, UserData } from 'hooks/useUserData';
import logo from 'images/logo.png';

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
  lock,
}: {
  userData: UserData;
  userRef: DocumentReference;
  editMode: boolean;
  setEditMode: (value: boolean) => void;
  editKey: boolean;
  setEditKey: (value: boolean) => void;
  lock: () => void;
}) {
  const { timestamp } = useRefreshTimer();
  const size = useTailwindSize();

  const encryptionToken = useContext(CodeContext) || '';

  const [search, setSearch] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [keyToEdit, setKeyToEdit] = useState<Key>();

  useEffect(() => {
    return () => {
      setEditMode(false);
      setEditKey(false);
    };
  }, []);

  useEffect(() => {
    if (editMode && navigator.vibrate) navigator.vibrate(200);
  }, [editMode]);

  const addRecentKey = useCallback(
    async (name: string) => {
      const totalKeys = 4;

      let recentKeys = [...(userData.recentKeys || [])];

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

      if (JSON.stringify(recentKeys) !== JSON.stringify(userData.recentKeys)) {
        await updateDoc(userRef, { recentKeys });
      }
    },
    [userData.recentKeys, userRef]
  );

  const onEdit = useCallback(
    (key: Key) => {
      setEditKey(true);
      setKeyToEdit({ name: key.name, secret: key.secret, archived: key.archived });
    },
    [encryptionToken, setEditKey, setKeyToEdit]
  );

  const gridClass =
    'w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 transition-all';

  return (
    <>
      <div className="m-6 flex flex-col items-center gap-4 pb-24 sm:m-8">
        {userData.keys?.length === 0 ? (
          <div className="w-full rounded-md bg-slate-800 p-8 text-center text-lg">No keys added yet</div>
        ) : (
          <div className="w-full max-w-(--breakpoint-lg)">
            <div className="mb-10 flex items-center gap-4 sm:gap-6">
              <button onClick={lock} className="bg-transparent p-0" title="Lock">
                <img src={logo} className="-mb-0.5 aspect-square h-10 object-contain" />
              </button>

              <div className="relative w-full">
                <input
                  className="shadow-centered bg-slate-700/20 pl-10 transition-all focus-within:bg-slate-600/30 hover:bg-slate-600/30"
                  type="search"
                  value={search}
                  placeholder="Search tokens"
                  onChange={(e) => setSearch(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
                <FaSearch className="absolute top-2.75 left-3 h-4 fill-slate-400" />
              </div>
            </div>

            {userData.recentKeys.length > 0 && search.length === 0 && (
              <div
                className={twMerge(
                  'mb-4 grid gap-4 transition-all sm:mb-6 sm:gap-6',
                  searchFocused && 'opacity-50 blur-xs'
                )}
              >
                <h2 className="m-0 text-xl leading-none">Recently Used</h2>
                <div className={gridClass}>
                  {userData.recentKeys.slice(0, size === 'sm' || size === 'lg' ? 3 : 4).map((name: string) => {
                    const key = userData.keys.find((k) => k.name === name);
                    if (key)
                      return (
                        <TokenCard
                          key={key.name + key.secret}
                          data={key}
                          userRef={userRef}
                          timestamp={timestamp}
                          onEdit={() => onEdit(key)}
                          setEditMode={setEditMode}
                          editMode={editMode}
                          addRecentKey={addRecentKey}
                        />
                      );
                  })}
                </div>
                <hr className="border-slate-700" />
              </div>
            )}

            <div className={twMerge(gridClass, searchFocused && search.length === 0 && 'opacity-50 blur-xs')}>
              {userData.keys
                .filter(
                  (k) => (search.length === 0 || k.name.toLowerCase().includes(search.toLowerCase())) && !k.archived
                )
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((key: Key) => (
                  <TokenCard
                    key={key.name + key.secret}
                    data={key}
                    userRef={userRef}
                    timestamp={timestamp}
                    onEdit={() => onEdit(key)}
                    setEditMode={setEditMode}
                    editMode={editMode}
                    addRecentKey={addRecentKey}
                  />
                ))}
            </div>

            {editMode && (
              <div className="mt-4 border-t-2 border-slate-700 pt-4 sm:mt-6 sm:pt-6">
                <h2 className="mb-4 text-xl leading-none sm:mb-6">Archived Tokens</h2>
                <div className={gridClass}>
                  {userData.keys
                    .filter(
                      (k) => (search.length === 0 || k.name.toLowerCase().includes(search.toLowerCase())) && k.archived
                    )
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((key: Key) => (
                      <TokenCard
                        key={key.name + key.secret}
                        data={key}
                        userRef={userRef}
                        timestamp={timestamp}
                        onEdit={() => onEdit(key)}
                        setEditMode={setEditMode}
                        editMode={editMode}
                        addRecentKey={addRecentKey}
                      />
                    ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <Modal
        title={keyToEdit?.name || keyToEdit?.secret ? 'Edit Existing Token' : 'Add New Token'}
        onClose={() => {
          setEditKey(false);
          setKeyToEdit(undefined);
        }}
        open={editKey}
      >
        <EditKey
          name={keyToEdit?.name}
          secret={keyToEdit?.secret}
          archived={keyToEdit?.archived || false}
          userRef={userRef}
          close={() => {
            setEditKey(false);
            setKeyToEdit(undefined);
          }}
        />
      </Modal>
    </>
  );
}
