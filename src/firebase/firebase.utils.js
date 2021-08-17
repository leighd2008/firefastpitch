import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import 'firebase/storage'

const config = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: "fire-fastpitch.firebaseapp.com",
  databaseURL: "https://fire-fastpitch.firebaseio.com",
  projectId: "fire-fastpitch",
  storageBucket: "fire-fastpitch.appspot.com",
  messagingSenderId: "841247987879",
  appId: "1:841247987879:web:61151c16457a5037ff6382"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    const role = 'family';

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        role,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = teams => {
  const transformedCollection = teams.docs.map(doc => {
    const {
      title,
      teamName,
      location,
      eventUrls,
      teamPic,
      calendarLink,
      tournaments,
      teamEvents,
      division,
      roster,
      headCoach
    } = doc.data();

    return {
      routeName: encodeURI(title),
      id: doc.id,
      title,
      teamName,
      location,
      eventUrls,
      teamPic,
      calendarLink,
      tournaments,
      teamEvents,
      division,
      roster,
      headCoach
    };
  });

  return transformedCollection.reduce((accumulator, team) => {
    accumulator[team.title] = team;
    return accumulator;
  }, {});
};

export const convertCollectionsSnapshotToMap2 = fields => {
  const transformedCollection = fields.docs.map(doc => {
    const {
      title,
      fieldname,
      schedule,
      eventCreator,
      type,
    } = doc.data();

    return {
      routeName: encodeURI(title),
      id: doc.id,
      title,
      fieldname,
      schedule,
      eventCreator,
      type,
    };
  });
  return transformedCollection.reduce((accumulator, field) => {
    accumulator[field.title] = field;
    return accumulator;
  }, {});
};

export const convertCollectionsSnapshotToMap3 = preregistration2021 => {
  const transformedCollection = preregistration2021.docs.map(doc => {
    const {
      title,
      players,
      division,
    } = doc.data();

    return {
      routeName: encodeURI(title),
      id: doc.id,
      title,
      players,
      division,
    };
  });
  return transformedCollection.reduce((accumulator, registration) => {
    accumulator[registration.title] = registration;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
