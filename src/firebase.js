import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  // apikey, domain, etc.
});

const auth = app.auth();

export { auth };
export default app;
