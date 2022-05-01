import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiWMTVXCoafxqe7bhEr0cj2mNmlJULakc",
  authDomain: "android-project-6d6dc.firebaseapp.com",
  projectId: "android-project-6d6dc",
  storageBucket: "android-project-6d6dc.appspot.com",
  messagingSenderId: "156348758550",
  appId: "1:156348758550:web:8785a4d957a67eedf75337"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

