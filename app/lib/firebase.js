// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNcCFnequiAcdqMNIHZcaQ9UBl13YoGTQ",
  authDomain: "netflix-clone-7100f.firebaseapp.com",
  projectId: "netflix-clone-7100f",
  storageBucket: "netflix-clone-7100f.appspot.com",
  messagingSenderId: "847401090747",
  appId: "1:847401090747:web:d50fee65f80734679eb39e",
  measurementId: "G-2VNX6S529C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export { app, auth };
