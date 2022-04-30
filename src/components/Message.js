import React from 'react';

export default function Message(props) {
  //Extracting the time from firebase and converting it in hour:minute format
  let time = props.time && props.time.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  //If the same user sent the message, there is no need to show the username tag
  return (
    props.uid === "Me" ?
      <li style={{ justifyContent: 'right' }} >
        <div className='chatMessage iSent'>
          <p className='theText'>{props.msg}</p>
          <span className='timeSpan'>{time ? time : 'sending..'}</span>
        </div>
      </li> :
      <li className='msgReceived'>
        <span className='showName'>{props.uid && props.uid}</span>
        <div className='chatMessage iReceived'>
          <p className='theText'>{props.msg}</p>
          <span className='timeSpan'>{time}</span>
        </div>
      </li>
  );
}