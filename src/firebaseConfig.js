// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU0tdPm8PzEVnEj7n9zpFCjUC70Dg4H1A",
  authDomain: "amazn-clone2.firebaseapp.com",
  projectId: "amazn-clone2",
  storageBucket: "amazn-clone2.appspot.com",
  messagingSenderId: "986528045515",
  appId: "1:986528045515:web:64eb17f5b2f3b576513e4e",
  measurementId: "G-XRE7157B9R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
