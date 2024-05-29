// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBOcnzjUXMOr0SIADZIaRuAa7PvEumTjJI",
    authDomain: "talhaportfolio.firebaseapp.com",
    databaseURL: "https://talhaportfolio.firebaseio.com",
    projectId: "talhaportfolio",
    storageBucket: "talhaportfolio.appspot.com",
    messagingSenderId: "343015534467",
    appId: "1:343015534467:web:f7931c56b42a2370d350b6",
    measurementId: "G-ZTE4C95VHW"
  };
  


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { db,storage };