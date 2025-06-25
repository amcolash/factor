import { DocumentData, DocumentReference, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { UserData } from './useUserData';

export function useMigrateData(userRef: DocumentReference<UserData, DocumentData>, data?: UserData) {
  const [migrated, setMigrated] = useState(false);

  const migrateData = async (oldData: UserData) => {
    // Add archived property if it doesn't exist
    const updatedKeys = oldData.keys.map((key) => ({
      ...key,
      archived: key.archived ?? false, // Default to false if not present
    }));

    // Update the user data with the new keys if necessary
    if (JSON.stringify(updatedKeys) !== JSON.stringify(oldData.keys)) {
      console.log('Upgrading user data keys to include archived property');
      await updateDoc(userRef, {
        keys: updatedKeys,
      });
    }
  };

  useEffect(() => {
    if (data && !migrated) {
      setMigrated(true);
      migrateData(data);
    }
  }, [data, migrated]);
}
