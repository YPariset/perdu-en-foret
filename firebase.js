// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXfCMyi605QHwheWfNyI3TZhk4Phwo1jg",
  authDomain: "perdu-en-foret.firebaseapp.com",
  projectId: "perdu-en-foret",
  storageBucket: "perdu-en-foret.appspot.com",
  messagingSenderId: "997177063904",
  appId: "1:997177063904:web:204e815d7e55358a075385"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };