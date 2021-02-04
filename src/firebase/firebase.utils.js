import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA52etxh0Lct4xUTwxchbGe8f3zA5GihSc",
    authDomain: "rod-clothing-db.firebaseapp.com",
    projectId: "rod-clothing-db",
    storageBucket: "rod-clothing-db.appspot.com",
    messagingSenderId: "1086586461704",
    appId: "1:1086586461704:web:cdab09050e458a9b4e3bbd"
  };

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase