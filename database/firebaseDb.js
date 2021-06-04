import * as firebase from 'firebase';
import firestore from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAL_LaDbEBz7lKizjXtW85XYJYqRDbmWAI",
    authDomain: "react-native-crud-3769d.firebaseapp.com",
    projectId: "react-native-crud-3769d",
    storageBucket: "react-native-crud-3769d.appspot.com",
    messagingSenderId: "1094789924468",
    appId: "1:1094789924468:web:1940e75ea6d9b25bc73321",
    measurementId: "G-T34TD6H7SX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;