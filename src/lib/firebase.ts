import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyALVvzrON1l4yeHsOKYtdLYy5IPyVCC-WA",
    authDomain: "sandr-cda7f.firebaseapp.com",
    projectId: "sandr-cda7f",
    storageBucket: "sandr-cda7f.firebasestorage.app",
    messagingSenderId: "58285999046",
    appId: "1:58285999046:web:b95d5fb52dfa7c7ca528c7"
};

// Initialize Firebase (singleton pattern)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
import { getAuth } from "firebase/auth";
const auth = getAuth(app);

export { db, auth };
