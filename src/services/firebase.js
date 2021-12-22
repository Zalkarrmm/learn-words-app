import firebase from 'firebase/app'
import 'firebase/auth' 
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBnjKwewFL5Wo2kQ_7MkyYneKcdgUXoCHo",
    authDomain: "learn-words-f8c5a.firebaseapp.com",
    databaseURL: "https://learn-words-f8c5a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "learn-words-f8c5a",
    storageBucket: "learn-words-f8c5a.appspot.com",
    messagingSenderId: "598274527638",
    appId: "1:598274527638:web:fa1554ce7208e4eb2a4db7"
};

export const  fire = firebase;
export const provider = new firebase.auth.GoogleAuthProvider();
firebase.initializeApp(firebaseConfig)