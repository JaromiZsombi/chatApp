import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../firebaseApp'

export const Signin = () => {
    const handleSignIn = async ()=>{
        await signInWithPopup(auth, provider)
    }
  return (
    <div className='signin'>
        <p>Jelentkezz be hogy chatelhess</p>
        <button onClick={handleSignIn}>Bejelentkezés</button>
    </div>
  )
}