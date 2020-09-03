import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyA1__Ml15wnjZzrOfw-MiBODHixiXxGzWU",
    authDomain: "notereactfedu-3e46c.firebaseapp.com",
    databaseURL: "https://notereactfedu-3e46c.firebaseio.com",
    projectId: "notereactfedu-3e46c",
    storageBucket: "notereactfedu-3e46c.appspot.com",
    messagingSenderId: "892473288934",
    appId: "1:892473288934:web:183770793c1c08b8ea3327",
    measurementId: "G-3JMEXMBNP8"
};
firebase.initializeApp(firebaseConfig);
export const noteData = firebase.database().ref('dataForNote');