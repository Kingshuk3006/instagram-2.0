// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, getApp, getApps } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABtyb3aLd60IlyG3csagAea7Z82sWjBhk",
  authDomain: "instagram2-27e04.firebaseapp.com",
  projectId: "instagram2-27e04",
  storageBucket: "instagram2-27e04.appspot.com",
  messagingSenderId: "394253183326",
  appId: "1:394253183326:web:6dc63c3777f585711207cf",
  measurementId: "G-CJ9341E8KR"
};

// Initialize Firebase
const app = !getApps().length ?  initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);

const db = getFirestore()

const storage = getStorage()

export {app, db, storage}