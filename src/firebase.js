import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAE-mkqudrA8ZRUELgHcA5es5Of-1E2Xvk",
    authDomain: "message-react-21e09.firebaseapp.com",
    projectId: "message-react-21e09",
    storageBucket: "message-react-21e09.appspot.com",
    messagingSenderId: "840024029076",
    appId: "1:840024029076:web:36e857c4325a7b77d88181",
    measurementId: "G-7KXZ72MHB2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;