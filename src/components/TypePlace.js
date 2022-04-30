import React, { useState } from 'react';
import { projectFirestore, timestamp } from '../firebase/config';

export default function TypePlace(props) {
  const [message, setMessage] = useState('');

  const sendMessage = async (e) => {
    //Eliminating the form default submit event
    e.preventDefault();
    //This 'if' wont let you send an empty message
    if (message.trim() !== '') {
      //Creating the collection(messages) on firebase database
      const collectionRef = projectFirestore.collection('messages');
      //Adding to the new created collection the sent message data
      await collectionRef.add({
        createdAt: timestamp(),
        message: message,
        uid: props.username.toUpperCase()
      }, setMessage(''));
    }
  }

  //Using controlled components
  function handleChange(event) {
    const { value } = event.target
    setMessage(value);
  }

  return (
    <div className='typePlace'>
      <form>
        <input type='text' className='messageText' name={'message'} value={message} onChange={handleChange} placeholder="Message" />
        <button onClick={sendMessage} className='btn btn-secondary'>Send</button>
      </form>
    </div>
  )
}