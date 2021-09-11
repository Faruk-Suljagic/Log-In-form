import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  // apikey, domain, etc.
  apiKey: "AIzaSyAuhea3t_r3JpfiSfcSs4g0WIplESZi5no",
  authDomain: "isatis-development.firebaseapp.com",
  projectId: "isatis-development",
  storageBucket: "isatis-development.appspot.com",
  messagingSenderId: "225545420842",
  appId: "1:225545420842:web:6d3c1e22cc774f0b50c353",
});

const auth = app.auth();

export { auth };
export default app;
