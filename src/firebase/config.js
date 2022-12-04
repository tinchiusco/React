// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA30ZPECrGOEuwA0m7qUw7k6eskpYkb4rU",
  authDomain: "proyectoreact-b4a2b.firebaseapp.com",
  projectId: "proyectoreact-b4a2b",
  storageBucket: "proyectoreact-b4a2b.appspot.com",
  messagingSenderId: "335540747422",
  appId: "1:335540747422:web:1da88a14f4aeb9d6768f8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);