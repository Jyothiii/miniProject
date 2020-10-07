import firebase from 'firebase';

const config ={
    apiKey: "AIzaSyA4-3FrIIaad98BT8L4qoe9qVFRIQEEaF4",
    authDomain: "reactnativefirebase-fb24f.firebaseapp.com",
    databaseURL: "https://reactnativefirebase-fb24f.firebaseio.com",
    projectId: "reactnativefirebase-fb24f",
    storageBucket: "reactnativefirebase-fb24f.appspot.com",
    messagingSenderId: "467973807771",
    appId: "1:467973807771:web:4802df41c72d1ac0f2303e",
    measurementId: "G-K7RH06ZHB9"
}

const Firebase = firebase.initializeApp(config);

export default Firebase;