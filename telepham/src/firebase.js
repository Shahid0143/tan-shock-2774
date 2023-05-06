// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPZWv8MnGkdauHMyvhczIoXApUWJTuzQ0",
    authDomain: "tele-pharma-project.firebaseapp.com",
    projectId: "tele-pharma-project",
    storageBucket: "tele-pharma-project.appspot.com",
    messagingSenderId: "52720531941",
    appId: "1:52720531941:web:7d2426582e577a6ff1970c",
    url: "https://tele-pharma-project-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
