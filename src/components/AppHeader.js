import React from 'react';

export default function AppHeader(props) {
  //Using the google signOut method
  function signOut() {
    props.signOut();
  }

  return (
    <div className='headerChat'>
      <h1>ChatApp.Miti</h1>
      <div>
        <button onClick={signOut} className='btn btn-secondary btn-sm'>Sign Out</button>
        <h6>Your username: {props.username} </h6>
      </div>
    </div>
  )
}