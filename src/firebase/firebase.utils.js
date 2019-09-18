import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAN1e4qCSYJr7KVO2kieJy5mkrf7GHEJWU",
  authDomain: "fire-fastpitch.firebaseapp.com",
  databaseURL: "https://fire-fastpitch.firebaseio.com",
  projectId: "fire-fastpitch",
  storageBucket: "fire-fastpitch.appspot.com",
  messagingSenderId: "841247987879",
  appId: "1:841247987879:web:61151c16457a5037ff6382"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
