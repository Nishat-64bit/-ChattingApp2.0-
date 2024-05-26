
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCNfH4LfqlQWvO0y_4jmAULJkNVNHa9H4s",
  authDomain: "chattingapp-bdfdc.firebaseapp.com",
  projectId: "chattingapp-bdfdc",
  storageBucket: "chattingapp-bdfdc.appspot.com",
  messagingSenderId: "566579056277",
  appId: "1:566579056277:web:f6042c884077e7a104d59c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
console.log("firebase is succesfully connected");