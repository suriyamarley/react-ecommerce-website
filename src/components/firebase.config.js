import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore"
import {getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAV8zFJxdcalUD573LiE0yD6LnNRlpXgYQ",
    authDomain: "costume-store-4150a.firebaseapp.com",
    projectId: "costume-store-4150a",
    storageBucket: "costume-store-4150a.appspot.com",
    messagingSenderId: "311662664790",
    appId: "1:311662664790:web:a69398af291a57086caff7",
    measurementId: "G-ZQFR67FG1K",
  };

const App = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const fireStore = getFirestore (App);
const storage = getStorage (App);

export {App, fireStore, storage};