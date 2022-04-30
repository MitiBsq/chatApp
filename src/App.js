import React from 'react';
import './App.css';
import ChatContainer from './components/ChatContainer';
import SignIn from './components/SignIn';
import { projectAuth } from './firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';

//Main App component//Using state to rerender after inserting the username
function App() {
  //Using the Google Auth Provider(Sign with google account)
  const [user] = useAuthState(projectAuth);

  return (
    <div>
      {user ? <ChatContainer userAuth={projectAuth.currentUser} signOut={() => projectAuth.signOut()} /> : <SignIn />}
    </div>
  );
}

export default App;