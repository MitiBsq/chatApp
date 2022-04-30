import React, { useState } from 'react';
import ChatContainer from './components/ChatContainer';
import EnterUsername from './components/EnterUsername';

//Main App component//Using state to rerender after inserting the username
function App() {
  const [username, setUser] = useState(null);

  function enterUser(dataPassed) {
    setUser(dataPassed.trim());
  }

  return (
    <div>
      {username ? <ChatContainer username={username} /> : <EnterUsername username={enterUser} />}
    </div>
  );
}

export default App;