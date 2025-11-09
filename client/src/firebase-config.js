// client/src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkMgxbus8wZL2gICArvNkUIXo_L8QHAUk",
  authDomain: "reviewgenerator-648fd.firebaseapp.com",
  projectId: "reviewgenerator-648fd",
  storageBucket: "reviewgenerator-648fd.firebasestorage.app",
  messagingSenderId: "815518017745",
  appId: "1:815518017745:web:d14e8e840ba7c4e47dbdf0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
