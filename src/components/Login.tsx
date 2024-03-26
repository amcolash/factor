import { useAuthState, useSignInWithGoogle, useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../util/firebase';

export function Login() {
  const [user] = useAuthState(auth);
  const [signInWithGoogle, , loading, error] = useSignInWithGoogle(auth);

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      {!user && !loading && <button onClick={() => signInWithGoogle()}>Login with Google</button>}

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}
