import { addDoc, collection } from "firebase/firestore"
import { db } from "./src/firebaseApp"

export const addMessage=async(message)=>{
    try {
        const docRef=collection(db,"messages")
        await addDoc(docRef, message)
    } catch (error) {
        console.log("Hiba az üzenet küldésénél!", error)
    }
}

export const readMessages=async