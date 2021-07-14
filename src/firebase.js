import firebase from "firebase/app";
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBcRCBEiX1c3xqRR53KM2H72zGcbkBOrW8",
    authDomain: "fir-coderhouse.firebaseapp.com",
    projectId: "fir-coderhouse",
    storageBucket: "fir-coderhouse.appspot.com",
    messagingSenderId: "367348446063",
    appId: "1:367348446063:web:77b20312a7bc7a1d84ee9a"
};
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();