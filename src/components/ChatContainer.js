import React from 'react';
import AppHeader from './AppHeader';
import MsgPlace from './MsgPlace';
import TypePlace from './TypePlace';

export default function chatContainer(props) {
  return (
    <div className='chatContainer'>
      <AppHeader username={props.userAuth.displayName} signOut={props.signOut} />
      <MsgPlace userAuth={props.userAuth} />
      <TypePlace userAuth={props.userAuth} />
    </div>
  );
}