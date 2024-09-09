// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "karen-blog-8a8ef.firebaseapp.com",
  projectId: "karen-blog-8a8ef",
  storageBucket: "karen-blog-8a8ef.appspot.com",
  messagingSenderId: "650305408986",
  appId: "1:650305408986:web:73330c6641808c86573ae3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
