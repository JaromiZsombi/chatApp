import { addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { db } from "./firebaseApp"

export const addMessage=async(message)=>{
    try {
        const docRef=collection(db,"messages")
        await addDoc(docRef, message)
    } catch (error) {
        console.log("Hiba az üzenet küldésénél!", error)
    }
}

export const readMessages=(setMessages)=>{
    const collectionRef=collection(db, 'messages')
    const q=query(collectionRef,orderBy('Timestamp'))
    const unsubscribe=onSnapshot(q,(snapshot)=>{
        const messagesArr=snapshot.docs.map((doc)=>({id:doc.id,...doc.data()})) 
        console.log(messagesArr)
        setMessages(messagesArr)
    })
    return unsubscribe//leállítódik a figyelő
}