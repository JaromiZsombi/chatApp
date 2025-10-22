import { useRef } from 'react';
import { useState } from 'react'
import { Message } from './Message';
import { useEffect } from 'react';
import { readMessages } from '../utils';
import { addMessage } from '../utils';

export const ChatRoom = ({user}) => {
  const [messages, setMessages] = useState([]);
  const inputRef=useRef() 

  useEffect(()=>{
    const unsubscribe=readMessages(setMessages)
    return unsubscribe//cleanup: tisztító
  },[])

  console.log(messages);

  const handleSubmit=async (e)=>{
    e.preventDefault()
    const text=inputRef.current.value
    console.log(text)
    const message={
      text,
      uid:user.uid,
      photoURL:user.photoURL,
      displayName:user.displayName,
      Timestamp:Date.now()
    }
    //meghívjuk a firestore fg-t
    await addMessage(message)
  }



  return (
    <div>  
        
        <form onSubmit={handleSubmit}>
          <input ref={inputRef} type="text" placeholder='írj valamit...' />
          <button type='submit'>Küldés</button>
        </form>
        <div className='chatRoom'>
          {messages && messages.map(msg=><Message key={msg.id} msg={msg} currentUser={user.uid}/>)}
        </div>
        
    </div>
  )
}