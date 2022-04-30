import React from 'react';
import AppHeader from './AppHeader';
import MsgPlace from './MsgPlace';
import TypePlace from './TypePlace';
import './styles.css';

export default function chatContainer(props) {
  return (
    <div className='chatContainer'>
      <AppHeader username={props.username} />
      <MsgPlace username={props.username} />
      <TypePlace username={props.username} />
    </div>
  )
}