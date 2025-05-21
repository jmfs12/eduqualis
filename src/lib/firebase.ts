
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0ProIKcrRLR0fwqLXROswreJhLdZKYbY",
  authDomain: "eduqualis-20517.firebaseapp.com",
  projectId: "eduqualis-20517",
  storageBucket: "eduqualis-20517.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:1063081201769:web:aa1a5197c6fcc6966ad2f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


export { auth, googleProvider };
