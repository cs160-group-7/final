import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyALs5yvnMRxJdw42Dbq1kXwynjlyJZ67So",
    authDomain: "cs160final-5b867.firebaseapp.com",
    projectId: "cs160final-5b867",
    storageBucket: "cs160final-5b867.appspot.com",
    messagingSenderId: "1012297394586",
    appId: "1:1012297394586:web:f00525a030cfe68449f223",
    measurementId: "G-ESRLGNL40C",
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;