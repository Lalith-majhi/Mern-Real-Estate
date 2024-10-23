// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-realestate-af078.firebaseapp.com",
  projectId: "mern-realestate-af078",
  storageBucket: "mern-realestate-af078.appspot.com",
  messagingSenderId: "1066545535873",
  appId: "1:1066545535873:web:0fb01b5b49c4a5fa852680"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);