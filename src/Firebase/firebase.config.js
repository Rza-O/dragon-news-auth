// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKpRJdzsUeEGhfX_dGa-r_wp9bBC96Cfc",
    authDomain: "dragon-news-auth-174d3.firebaseapp.com",
    projectId: "dragon-news-auth-174d3",
    storageBucket: "dragon-news-auth-174d3.firebasestorage.app",
    messagingSenderId: "532106707397",
    appId: "1:532106707397:web:a09213551842ab746f0bac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;