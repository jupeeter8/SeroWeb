//import { boot } from 'quasar/wrappers'

import { initializeApp } from 'firebase/app';
import {getFirestore ,doc} from 'firebase/firestore';


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmINeBu52lgjZ5p2ClVSYNx8Eqym1MsQk",
  authDomain: "sero-9f651.firebaseapp.com",
  projectId: "sero-9f651",
  storageBucket: "sero-9f651.appspot.com",
  messagingSenderId: "319631268583",
  appId: "1:319631268583:web:9a1e7c9469c42b866ce042"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const firestore = getFirestore()

export default firestore