
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAN0xtuCS-2x1okie-hmOYVMeAwcjIb4IQ",
  authDomain: "chat1-c9599.firebaseapp.com",
  projectId: "chat1-c9599",
  storageBucket: "chat1-c9599.appspot.com",
  messagingSenderId: "1073377608024",
  appId: "1:1073377608024:web:44b64321dd64918c7f652d"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth()
export const storage = getStorage();
export const db=getFirestore(app)