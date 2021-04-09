import "firebase/auth";
import "firebase/firebase-firestore";

import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDrCl7BVOhINEo1bEOkCmVeofwEqp_d5Xw",
  authDomain: "test-12ad2.firebaseapp.com",
  databaseURL: "test-12ad2-default-rtdb.firebaseio.com",
  projectId: "test-12ad2",
  storageBucket: "test-12ad2.appspot.com",
  messagingSenderId: "189829187200",
  appId: "1:189829187200:web:33bc58ce6eaaee47d00865"
};
firebase.initializeApp(config);
const auth = firebase.auth();
export default auth;

