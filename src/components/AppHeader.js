import React from 'react';

export default function AppHeader(props) {
  return (
    <div className='headerChat'>
      <h1>ChatApp.Miti</h1>
      <h6>Your username: {props.username}</h6>
    </div>
  )
}