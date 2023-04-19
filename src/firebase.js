import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCCC8JMm6sjUwA3Bu7sOi1QJQ7Xv2t44rw",
  authDomain: "zelar-practise.firebaseapp.com",
  databaseURL: "https://zelar-practise-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "zelar-practise",
  storageBucket: "zelar-practise.appspot.com",
  messagingSenderId: "903370382495",
  appId: "1:903370382495:web:4d3d689d2bae49915c16aa"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()
