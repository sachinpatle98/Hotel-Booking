// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZvduRrgGrdzD4ticgH8caG_STpjzjMew",
    authDomain: "hotel-44f24.firebaseapp.com",
    projectId: "hotel-44f24",
    storageBucket: "hotel-44f24.appspot.com",
    messagingSenderId: "410840034275",
    appId: "1:410840034275:web:304d414a3460a4c866ced6"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);