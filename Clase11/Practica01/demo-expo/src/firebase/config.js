import app from 'firebase/app'
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBCUU1gifJbHelSSiGzOdBGew2-HF-yvBY",
    authDomain: "clase11-b9cbc.firebaseapp.com",
    projectId: "clase11-b9cbc",
    storageBucket: "clase11-b9cbc.firebasestorage.app",
    messagingSenderId: "1004980739751",
    appId: "1:1004980739751:web:b46f5b7da835dbb0308582"
  };   

app.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const storage = app.storage()
export const db = app.firestore()