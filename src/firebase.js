import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

const firebaseConfig = {
    apiKey: "AIzaSyDtBFLZqeYIDoxiwyT0pSbsnvZoIBEdh2E",
    authDomain: "nextia-67a31.firebaseapp.com",
    databaseURL: "https://nextia-67a31.firebaseio.com",
    projectId: "nextia-67a31",
    storageBucket: "nextia-67a31.appspot.com",
    messagingSenderId: "911909792364",
    appId: "1:911909792364:web:1d515df6d67e8317b94649"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };