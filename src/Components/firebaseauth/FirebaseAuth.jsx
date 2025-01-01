import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const FirebaseAuth = ({ onLogin }) => {
  const provider = new GoogleAuthProvider();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      onLogin(result.user);
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  };

  return (
    <button onClick={handleLogin}>Login with Google</button>
  );
};

export default FirebaseAuth;