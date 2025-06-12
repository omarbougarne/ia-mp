import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyBWWd6bE8Fi74qJW3sEyYmV6suBGQrwdNk",
  
    authDomain: "iamp-e2b32.firebaseapp.com",
  
    projectId: "iamp-e2b32",
  
    storageBucket: "iamp-e2b32.appspot.com",
  
    messagingSenderId: "815672876072",
  
    appId: "1:815672876072:web:bfc199c0bed1859bb7291d"
  
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);