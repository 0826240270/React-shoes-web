import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const provider = new GoogleAuthProvider();
const auth = getAuth();
const firebaseConfig = {
  apiKey: "AIzaSyCftPPnjMaRXOOiLtAa2BkGHNvbGbn62gs",
  authDomain: "react-shoes-web-d47c8.firebaseapp.com",
  projectId: "react-shoes-web-d47c8",
  storageBucket: "react-shoes-web-d47c8.appspot.com",
  messagingSenderId: "29026058921",
  appId: "1:29026058921:web:84af1de6cce37060fb5fb8",
  measurementId: "G-JHG0XJ4RK5",
};

signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(token, user);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorCode, errorMessage, email, credential);
    // ...
  });
signInWithRedirect(auth, provider);
// Get a reference to the storage service, which is used to create references in your storage bucket
export const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
export { signInWithPopup, signInWithRedirect };
