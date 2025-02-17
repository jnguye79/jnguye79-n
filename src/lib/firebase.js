// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7JP8ifrSUTtFiolKLTslFNYMsLxTVIbU",
  authDomain: "my-portfolio-d1d31.firebaseapp.com",
  projectId: "my-portfolio-d1d31",
  storageBucket: "my-portfolio-d1d31.firebasestorage.app",
  messagingSenderId: "498372980688",
  appId: "1:498372980688:web:340f117aed5aa69be113d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);