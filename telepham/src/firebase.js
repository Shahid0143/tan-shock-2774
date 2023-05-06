// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbZVzYsYCG5csKUe4xQNJVv80PtHAczE8",
    authDomain: "vastra-project.firebaseapp.com",
    projectId: "vastra-project",
    storageBucket: "vastra-project.appspot.com",
    messagingSenderId: "1094038130966",
    appId: "1:1094038130966:web:1e028ddfbec31bb68d8037",
    url: "https://vastra-project-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);