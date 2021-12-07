// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import firebase from 'firebase/compat/app'
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

export const environment = {
  production: false,
};
const config = {
  apiKey: "AIzaSyAgWGS7DJA48lwG9NtwkjmcM4lEIxf5I1o",
  authDomain: "strk-prdct.firebaseapp.com",
  projectId: "strk-prdct",
  storageBucket: "strk-prdct.appspot.com",
  messagingSenderId: "137726470492",
  appId: "1:137726470492:web:5a529ec6eb29ca4163b999",
  measurementId: "G-LSCMEGK2BT",
};
firebase.initializeApp(config);
export const fire = {
  db: getFirestore(),
  auth: getAuth()
};
