
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDOTYJVbmHiAqOpJEKVahuKsgt_SvWyYfo",
  authDomain: "chat-a7b9b.firebaseapp.com",
  projectId: "chat-a7b9b",
  storageBucket: "chat-a7b9b.appspot.com",
  messagingSenderId: "1086720597452",
  appId: "1:1086720597452:web:8edda0d498fb6c62b55169"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth()
export const storage = getStorage();
export const db=getFirestore(app)