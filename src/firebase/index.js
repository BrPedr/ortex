import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCek5fEnKsB-OsAbXNkEO6ech6skMk8eOc",
  authDomain: "ortex-812ec.firebaseapp.com",
  projectId: "ortex-812ec",
  storageBucket: "ortex-812ec.appspot.com",
  messagingSenderId: "67340626751",
  appId: "1:67340626751:web:1b8d05b84facc395b8c18a",
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();

export const auth = firebase.auth();

export const signInWithGoogle = () =>
  auth.signInWithPopup(provider).catch((error) => {
    console.log(error);
  });
