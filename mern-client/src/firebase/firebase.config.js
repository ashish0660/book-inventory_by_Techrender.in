// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP00MoET9hySxfCGY720xA6V357o4ZmuU",
  authDomain: "book-inventory-5fc28.firebaseapp.com",
  projectId: "book-inventory-5fc28",
  storageBucket: "book-inventory-5fc28.appspot.com",
  messagingSenderId: "982316061204",
  appId: "1:982316061204:web:6db64de1a81b000ad0cd01",
  measurementId: "G-9F4RM84W0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;