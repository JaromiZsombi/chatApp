import { useState } from 'react'
import './App.css'
import { ChatRoom } from './components/ChatRoom';
import { Signin } from './components/Signin';
import { useEffect } from 'react';
import { auth } from './firebaseApp';
import { signOut } from 'firebase/auth';

function App() {

  const [user, setUser] = useState(null);
  
  useEffect(()=>{
    const unsub=auth.onAuthStateChanged(setUser)
    return unsub
  }, [])

  return (
    <div>
      <h1>Realchat</h1>
      {user ?
        <>
          <div className="user-info">
            <img src={user.photoURL} alt={user.displayName} />
            <span>{user.displayName}</span>
            <button onClick={()=>signOut(auth)}>Kijelentkezés</button>
          </div>
          <ChatRoom user={user}/>
        </> :
        <Signin />
      }
    </div>
  )
}

export default App
