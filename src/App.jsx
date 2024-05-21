import { useEffect, useState } from "react";
import "./App.css";
import { db } from "../firebase";
import { addDoc, getDocs, doc, collection } from "firebase/firestore";

function App() {
  const [answers, setAnswers] = useState(null);
  const [answerList, setAnswerList] = useState([]);


  useEffect(() => {
    const fetchDoc = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "poll"));
        if (querySnapshot != null) {
          const allAnswers = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          // const e = querySnapshot.docs.map(doc => console.log(doc.data().answer));
          const e = querySnapshot.docs.map(doc => console.log(doc.data().answer));
          setAnswerList(e)

          console.log(allAnswers)
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Cannot load answer", error);
      }
    };

    fetchDoc();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "poll"), {
      answer: answers,
    });
  };

 useEffect(() => {
  const e = () =>  {
    answerList.map((answer, key) => 
      <p>{ answer }</p>
    )
  }

}, [answerList])

  return (
    <>
      <h1>What's your favorite cereal?</h1>
      <form onSubmit={handleSubmit}>
        <label>Answer:</label>
        <input type="text" onChange={(e) => setAnswers(e.target.value)}></input>
        <button type="submit"> Submit</button>
      </form>

      <h2>Vote for your fav cereal!</h2>
      <e />
      
    </>
  );
}

export default App;
