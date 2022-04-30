import React from 'react';
import { projectAuth, firebase } from '../firebase/config';

export default function SignIn() {
  //Using the firebase auth method...
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    projectAuth.signInWithPopup(provider);
  }

  return (
    <div className='signInWithGoogle'>
      <h1>You can Sign In With your google account!</h1>
      <button onClick={signInWithGoogle} className='btn btn-primary btn-lg'>Sign In With Google</button>
    </div>
  );
}