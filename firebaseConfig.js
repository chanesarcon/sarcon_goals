
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9tA_iZ7sLecoLDMB3LaH0KicV3gbJjyo",
  authDomain: "sarcon-goals.firebaseapp.com",
  projectId: "sarcon-goals",
  storageBucket: "sarcon-goals.firebasestorage.app",
  messagingSenderId: "95708529740",
  appId: "1:95708529740:web:b0b9ab6353fd1d452c20e9",
  measurementId: "G-PN7WY1X3T6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);