import { DocumentReference, doc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDocument } from 'react-firebase-hooks/firestore';

import { auth, db } from '../util/firebase';

export interface UserData {
  email: string;
  keys: Key[];
  code: string;
}

export interface Key {
  name: string;
  secret: string;
}

export function useUserData() {
  const [user] = useAuthState(auth);
  const userRef = doc(db, 'users', user?.uid || '') as DocumentReference<UserData>;
  const [value, loading, error] = useDocument(userRef);

  return { value, loading, error, userRef };
}
