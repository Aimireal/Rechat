import firebase from "firebase/app";
import "firebase/auth";

//Export the firebase authentication
export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDhQdkaFHbAlL9XWm0umYtcjKnjECvJBzo",
    authDomain: "reactmessenger-3f6aa.firebaseapp.com",
    projectId: "reactmessenger-3f6aa",
    storageBucket: "reactmessenger-3f6aa.appspot.com",
    messagingSenderId: "238391612412",
    appId: "1:238391612412:web:0684f8dfd01ac42daa9879"
  }).auth();