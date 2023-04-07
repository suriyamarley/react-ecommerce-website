import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAV8zFJxdcalUD573LiE0yD6LnNRlpXgYQ",
  authDomain: "costume-store-4150a.firebaseapp.com",
  projectId: "costume-store-4150a",
  storageBucket: "costume-store-4150a.appspot.com",
  messagingSenderId: "311662664790",
  appId: "1:311662664790:web:a69398af291a57086caff7",
  measurementId: "G-ZQFR67FG1K",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
