import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyD9bUGlFEih-RkxXZwo4F9IvjNHyTpYJNs",
    authDomain: "lb-bakery.firebaseapp.com",
    projectId: "lb-bakery",
    storageBucket: "lb-bakery.appspot.com",
    messagingSenderId: "96860650955",
    appId: "1:96860650955:web:56ef120f97cb7fb8354a4e"
}

const fb = firebase.initializeApp(firebaseConfig);

export const dataBase = fb.firestore();