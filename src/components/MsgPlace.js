import React, { useEffect, useRef } from 'react';
import Message from './Message';
import useFirestore from '../hooks/useFireStore';

export default function MsgPlace(props) {
  //Using the custom hook
  const { docs } = useFirestore('messages');

  //When sending a new msg or when entering the chat, this scrolls to the latest messages
  const toScroll = useRef();
  useEffect(() => {
    toScroll.current.scrollIntoView({ behavior: 'smooth' });
  }, [docs]);

  //Verifying if the messages are sent by the same user(will display the username just for the first one )
  const { uid } = props.userAuth;
  let checkUid = '';
  let count;
  const msg = docs.map(doc => {
    if (checkUid !== doc.uid) {
      checkUid = doc.uid;
      count = 0;
    } else {
      ++count;
    }
    //If the user enters the chat with the same id as other messages he is actualized to "Me"
    return <Message key={doc.id} msg={doc.message} time={doc.createdAt} uid={doc.uid === uid ? "Me" : count > 0 ? "" : doc.displayName} photoURL={props.userAuth.photoURL} />
  });

  return (
    <div className='msgPlace'>
      <ul>
        {msg}
      </ul>
      <div ref={toScroll} ></div>
    </div>
  );
}