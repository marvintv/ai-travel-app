// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK5RLqauFGhppd_3SIcS4N_eTSA9SlDXE",
  authDomain: "react-projects-6a3d9.firebaseapp.com",
  projectId: "react-projects-6a3d9",
  storageBucket: "react-projects-6a3d9.appspot.com",
  messagingSenderId: "755490567626",
  appId: "1:755490567626:web:0b3539557e1c2c09fccb33"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);