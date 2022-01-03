// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSB2ojn_WBzJh8lQbukjCy0wk05pr7lwE",
  authDomain: "marketplace-app-55ee4.firebaseapp.com",
  projectId: "marketplace-app-55ee4",
  storageBucket: "marketplace-app-55ee4.appspot.com",
  messagingSenderId: "82964849580",
  appId: "1:82964849580:web:57b9240ab4ab9ce8295009"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()