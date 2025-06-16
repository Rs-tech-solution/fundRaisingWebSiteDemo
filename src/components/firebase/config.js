// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import appConstant from "@/appConstant";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig =
  // {
  //   apiKey: "AIzaSyA7BhIGLoY8vcGZ2KaS09GXSAQev3v4w4A",
  //   authDomain: "b2bproduct-dd3ab.firebaseapp.com",
  //   projectId: "b2bproduct-dd3ab",
  //   storageBucket: "b2bproduct-dd3ab.appspot.com",
  //   messagingSenderId: "1084367471213",
  //   appId: "1:1084367471213:web:824a9dcc2575a91e043564",
  //   measurementId: "G-YH51NK6BNF",
  // };

  {
    apiKey: appConstant.firebaseApiKey,
    authDomain: appConstant.firebaseAuthDomain,
    projectId: appConstant.firebaseProjectId,
    storageBucket: appConstant.firebaseStorageBucket,
    messagingSenderId: appConstant.firebaseMessagingSenderId,
    appId: appConstant.firebaseAppId,
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Error setting persistence:", error);
});

export { auth };
