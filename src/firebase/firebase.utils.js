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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;