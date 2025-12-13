import { DocumentReference, doc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDocumentData } from 'react-firebase-hooks/firestore';

import { auth, db } from '../util/firebase';

export interface UserData {
  email: string;
  keys: Key[];
  recentKeys: string[];
  code: string;
  webauthn: Auth[];
}

export interface Auth {
  credentialId: string;
  uuid: string;
  secret: string;
  userAgent: string;
}

export interface Key {
  name: string;
  secret: string;
  archived: boolean;
}

export function useUserData() {
  const [user] = useAuthState(auth);
  const userRef = doc(db, 'users', user?.uid || '') as DocumentReference<UserData>;
  const [value, loading, error, snapshot] = useDocumentData(userRef);

  return { data: value, loading, error, userRef };
}
