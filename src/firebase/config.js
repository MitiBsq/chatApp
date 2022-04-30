import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// The data to sync the app with firebase
const firebaseConfig = {
  apiKey: "AIzaSyAyacS4cSZBRnTf0Kz94Czlc_K6aArUqXE",
  authDomain: "chatappproject-aaf5a.firebaseapp.com",
  projectId: "chatappproject-aaf5a",
  storageBucket: "chatappproject-aaf5a.appspot.com",
  messagingSenderId: "167248797228",
  appId: "1:167248797228:web:600699e8fc53dde65f3b89"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp }