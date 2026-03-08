// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0mt1nq15uDSL2uAFrmEoUFEM5SqwUb7o",
  authDomain: "global-tribune-40147.firebaseapp.com",
  projectId: "global-tribune-40147",
  storageBucket: "global-tribune-40147.firebasestorage.app",
  messagingSenderId: "711346293808",
  appId: "1:711346293808:web:2631f0fd1499a5af00f1f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);