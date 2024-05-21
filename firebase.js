// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_KEY,
  authDomain: "poll-miniproject.firebaseapp.com",
  projectId: "poll-miniproject",
  storageBucket: "poll-miniproject.appspot.com",
  messagingSenderId: "81266396539",
  appId: "1:81266396539:web:de6c5186531e47207641de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};