import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";


export const firebaseConfig = {
  apiKey: "AIzaSyCFntrn69UBZCiZlqQVVxJILlM60gOuQsw",
  authDomain: "proyectoapp-82e75.firebaseapp.com",
  projectId: "proyectoapp-82e75",
  storageBucket: "proyectoapp-82e75.appspot.com",
  messagingSenderId: "49463302405",
  appId: "1:49463302405:web:9e344488c118688a4e3f6c",
  measurementId: "G-5FF30TYB5R"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);