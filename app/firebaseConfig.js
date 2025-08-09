
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHgUz4TQtgDXyFwlFlgMuCaUNJRiW5_ms",
  authDomain: "app-cristina.firebaseapp.com",
  projectId: "app-cristina",
  storageBucket: "app-cristina.firebasestorage.app",
  messagingSenderId: "496967888003",
  appId: "1:496967888003:web:ad7d06d1063e21b64d7fb6"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)