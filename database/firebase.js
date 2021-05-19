import firebase from 'firebase'

import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyA5CmAWmSjMLjnxigF85jjgqhei4UKxuPQ",
    authDomain: "pruebita-1c4c2.firebaseapp.com",
    databaseURL: "https://pruebita-1c4c2-default-rtdb.firebaseio.com",
    projectId: "pruebita-1c4c2",
    storageBucket: "pruebita-1c4c2.appspot.com",
    messagingSenderId: "126371026855",
    appId: "1:126371026855:web:47b947df98cbb785700882",
    measurementId: "G-3770J9C0B2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  const db = firebase.firestore()

  export default {
      firebase,
      db
  }