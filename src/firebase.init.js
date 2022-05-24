// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChnt9wPaJk44lpRs3PIjdnTFbyy43Cffw",
    authDomain: "car-manufacturer-12d7e.firebaseapp.com",
    projectId: "car-manufacturer-12d7e",
    storageBucket: "car-manufacturer-12d7e.appspot.com",
    messagingSenderId: "611520151314",
    appId: "1:611520151314:web:a64130c93d50137d6afdcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;