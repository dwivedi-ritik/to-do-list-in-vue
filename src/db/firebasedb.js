import firebase from "firebase/app"
import "firebase/firestore"

//My database configuration
var firebaseConfig = {
    apiKey: "AIzaSyAoP8ZQEsC-Rhuj-hjpkYKH7EMnl3-o074",
    authDomain: "my-awesome2001.firebaseapp.com",
    projectId: "my-awesome2001",
    storageBucket: "my-awesome2001.appspot.com",
    messagingSenderId: "499551025422",
    appId: "1:499551025422:web:da47f789207f11a90bff5f"
  };

//Initialization of app
firebase.initializeApp(firebaseConfig)
const firestoreDb = firebase.firestore()
export {
  firestoreDb
}

