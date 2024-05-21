import { useState } from 'react';
import './App.css';
import { db } from '../firebase';
import { addDoc, getDoc, doc, collection } from 'firebase/firestore';

function App() {
    
  const [answer, setAnswer] = useState("")
  const [question, setQuestion] = useState("")
  const fetchDoc = async () => {
    try {
      const docRef = await getDoc(doc(db, "poll", "EvB5BhdItzwtkVdqiYnD"));
      if (docRef.exists()) {
        const question = docRef.data().question;
        setQuestion(question);

      } else {
        console.log("No such document!");
      }
    } catch(error) {
      console.error("Cannot load answer", error);
    }
  }
  fetchDoc();
  
    return (
    <>
    <h1>What's your favorite cereal?</h1>
     
    </>
  )
}

export default App
