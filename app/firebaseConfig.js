// app/firebaseConfig.js
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const { getAuth } = require('firebase/auth'); // <--- IMPORTANTE!

const firebaseConfig = {
  apiKey: 'AIzaSyCHgUz4TQtgDXyFwlFlgMuCaUNJRiW5_ms',
  authDomain: 'app-cristina.firebaseapp.com',
  projectId: 'app-cristina',
  storageBucket: 'app-cristina.firebasestorage.app',
  messagingSenderId: '496967888003',
  appId: '1:496967888003:web:ad7d06d1063e21b64d7fb6',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); 

module.exports = { app, db, auth }; 
