// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJQVa8_ujHWzq8aeWwh5jYDDjFCBY_rjY",
  authDomain: "nba-stats-3e602.firebaseapp.com",
  databaseURL: "https://nba-stats-3e602-default-rtdb.firebaseio.com",
  projectId: "nba-stats-3e602",
  storageBucket: "nba-stats-3e602.firebasestorage.app",
  messagingSenderId: "93395866773",
  appId: "1:93395866773:web:a420eff36de6ff97b3f79c",
  measurementId: "G-RBQKM730Z9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();
export default app;