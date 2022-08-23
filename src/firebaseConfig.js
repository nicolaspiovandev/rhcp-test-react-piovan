// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDX1XfAKka34dvUmNJz4TC7QFEj47ECVi8",
    authDomain: "rhcp-rest-react.firebaseapp.com",
    projectId: "rhcp-rest-react",
    storageBucket: "rhcp-rest-react.appspot.com",
    messagingSenderId: "1326853559",
    appId: "1:1326853559:web:6b0658a09b3bb0fd908c32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db