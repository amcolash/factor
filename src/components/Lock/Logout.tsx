import { clearIndexedDbPersistence, terminate } from 'firebase/firestore';
import { useSignOut } from 'react-firebase-hooks/auth';
import { FaSignOutAlt } from 'react-icons/fa';

import { auth, db } from '../../util/firebase';

export function Logout() {
  const [signOut] = useSignOut(auth);

  return (
    <button
      className="icon bg-danger"
      onClick={async () => {
        try {
          await signOut();
          await terminate(db);
          await clearIndexedDbPersistence(db);

          window.location.reload();
        } catch (err) {
          console.error(err);
        }
      }}
    >
      <FaSignOutAlt />
    </button>
  );
}
