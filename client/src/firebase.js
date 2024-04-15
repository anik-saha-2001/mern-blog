// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-81d18.firebaseapp.com",
  projectId: "mern-blog-81d18",
  storageBucket: "mern-blog-81d18.appspot.com",
  messagingSenderId: "964960673561",
  appId: "1:964960673561:web:9e035578e72f1db963af88",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
