// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9tA_iZ7sLecoLDMB3LaH0KicV3gbJjyo",
  authDomain: "sarcon-goals.firebaseapp.com",
  projectId: "sarcon-goals",
  storageBucket: "sarcon-goals.firebasestorage.app",
  messagingSenderId: "95708529740",
  appId: "1:95708529740:web:b0b9ab6353fd1d452c20e9",
  measurementId: "G-PN7WY1X3T6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);