import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore, persistentLocalCache } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDMQ4jffBbrLTjdhy_qS4GeZdbYtzEKHp4',
  authDomain: 'factor-97c20.firebaseapp.com',
  projectId: 'factor-97c20',
  storageBucket: 'factor-97c20.appspot.com',
  messagingSenderId: '524844196447',
  appId: '1:524844196447:web:9d5f59006ec0b8e68d31ea',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = initializeFirestore(app, { localCache: persistentLocalCache() });
