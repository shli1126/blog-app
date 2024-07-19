// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-clone-ba95c.firebaseapp.com",
  projectId: "blog-clone-ba95c",
  storageBucket: "blog-clone-ba95c.appspot.com",
  messagingSenderId: "258928401137",
  appId: "1:258928401137:web:b788dc7a8c2f94c420a750",
  measurementId: "G-YPK9VE5JMP",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
