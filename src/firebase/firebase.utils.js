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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()
    // checking if snapshot exists, it creates user data in its place.
    if(!snapShot.exists) {
      // destructure displayName and email from userAuth object
      const { displayName, email } = userAuth
      const createdAt = new Date()
      try {
        // create a new user object with the following properties
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user')
      }
    }
    return userRef
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase