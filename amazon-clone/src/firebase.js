import firebase from "firebase";

const firebasrApp = firebase.initializeApp({
  apiKey: "AIzaSyAjjofasVPSGdf3gFpYgYEOp-1j8PGW4Bo",
  authDomain: "clone-29ec0.firebaseapp.com",
  projectId: "clone-29ec0",
  storageBucket: "clone-29ec0.appspot.com",
  messagingSenderId: "40901018281",
  appId: "1:40901018281:web:0202420b7b637c21a7dfb8",
  measurementId: "G-LMJML1HD83",
});

// const db = firebasrApp.firestore();
const auth = firebase.auth();

export { auth };
