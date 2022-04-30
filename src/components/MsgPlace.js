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
  let uid = '';
  let count;
  const msg = docs.map(doc => {
    if (uid !== doc.uid) {
      uid = doc.uid;
      count = 0;
    } else {
      ++count;
    }
    //If the user enters the chat with the same id as other messages he is actualized to "Me"
    return <Message key={doc.id} msg={doc.message} time={doc.createdAt} uid={uid === props.username.toUpperCase() ? "Me" : count > 0 ? "" : uid} />
  });

  return (
    <div className='msgPlace'>
      <ul>
        {msg}
      </ul>
      <div ref={toScroll} ></div>
    </div>
  )
}