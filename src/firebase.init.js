// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUtEVNJJ_8FVMKsZXRgVCmZgrfu6jaQRg",
    authDomain: "inventory-management-7b51a.firebaseapp.com",
    projectId: "inventory-management-7b51a",
    storageBucket: "inventory-management-7b51a.appspot.com",
    messagingSenderId: "881679812915",
    appId: "1:881679812915:web:13e6106edfeaa766715646"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;