import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyAiNwQSgqfVbyzw7VDhUdWXFsqfI9CaMX8',
  authDomain: 'sv-react-e-commerce-app.firebaseapp.com',
  projectId: 'sv-react-e-commerce-app',
  storageBucket: 'sv-react-e-commerce-app.appspot.com',
  messagingSenderId: '561695549170',
  appId: '1:561695549170:web:8b9f409d81f2ec12ae926b',
  measurementId: 'G-G3KL94WB61',
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
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
