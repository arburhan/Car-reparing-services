// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2B7xexDWmol0Pp7mkrHQxL9LMXAaGWtA",
    authDomain: "car-repair-services-85293.firebaseapp.com",
    projectId: "car-repair-services-85293",
    storageBucket: "car-repair-services-85293.appspot.com",
    messagingSenderId: "456519262210",
    appId: "1:456519262210:web:1358ab63bcdf6f2ac9071b"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;