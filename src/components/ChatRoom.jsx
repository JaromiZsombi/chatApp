import { Timestamp } from 'firebase/firestore';
import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'
import { addMessage } from '../../utils';

export const ChatRoom = ({user}) => {
  const [messages, setMessages] = useState([]);
  const inputRef=useRef()

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
        defautl chatasdjia
        
        <form onSubmit={handleSubmit}>
          <input ref={inputRef} type="text" placeholder='írj valamit...' />
          <button type='submit'>Küldés</button>
        </form>
    </div>
  )
}