import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// import { initializeApp } from "firebase/app";

// store in env
const firebaseConfig = {
    apiKey: "AIzaSyCLy5tXaAX0pHZZ8r9xupO6ciqwLttDEBw",
    authDomain: "tasks2do-91121.firebaseapp.com",
    projectId: "tasks2do-91121",
    storageBucket: "tasks2do-91121.appspot.com",
    messagingSenderId: "86953179629",
    appId: "1:86953179629:web:5156b498850b0d090f0fe4",
    measurementId: "G-2CHQ7RN42K"
  };

const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();