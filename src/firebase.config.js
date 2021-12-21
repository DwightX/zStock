// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQr3kHr-qJ_rIT7ENeGi8EUpegLR1pq08",
  authDomain: "zstock-17013.firebaseapp.com",
  projectId: "zstock-17013",
  storageBucket: "zstock-17013.appspot.com",
  messagingSenderId: "426102068834",
  appId: "1:426102068834:web:a1ddc7371d9d2b1358233b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()