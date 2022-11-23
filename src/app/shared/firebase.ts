import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
//import { getFirestore } from "firebase/firestore";
//import { getAuth } from "firebase/auth";
//import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBO8t2oBcXB0qjknEP0Ov5vf6SfOMwRkjI",
  authDomain: "hawk-mobile-db36f.firebaseapp.com",
  databaseURL: "https://hawk-mobile-db36f.firebaseio.com",
  projectId: "hawk-mobile-db36f",
  storageBucket: "hawk-mobile-db36f.appspot.com",
  messagingSenderId: "404237595688",
  appId: "1:404237595688:web:270716eae9984c2cdef11d",
  measurementId: "G-1DKZ0F7JL1"
};

const app = initializeApp(firebaseConfig);
//export const auth = getAuth(app);
export const db = getDatabase(app);
//export const storage = getStorage(app);
