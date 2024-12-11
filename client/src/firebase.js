// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-state-ae98a.firebaseapp.com",
  projectId: "real-state-ae98a",
  storageBucket: "real-state-ae98a.appspot.com",
  messagingSenderId: "266674152673",
  appId: "1:266674152673:web:24f75162c1bde5668b83a0",
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
