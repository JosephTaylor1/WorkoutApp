// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp9QFHHLrBB_PTAemNFsjEh9A98jwS-vg",
  authDomain: "workoutapp-4f691.firebaseapp.com",
  projectId: "workoutapp-4f691",
  storageBucket: "workoutapp-4f691.appspot.com",
  messagingSenderId: "350787718899",
  appId: "1:350787718899:web:c680aa735440d2c30eb186",
  measurementId: "G-JKY0C3M30Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);