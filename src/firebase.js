import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJD9sLFzbYHSbQ_At08zMYyJXvi2w_lgI",
  authDomain: "classtrack-remake.firebaseapp.com",
  projectId: "classtrack-remake",
  storageBucket: "classtrack-remake.firebasestorage.app",
  messagingSenderId: "565327386550",
  appId: "1:565327386550:web:30ee4caa9891ed06fd5317",
  measurementId: "G-4BPPSV8WN0",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
