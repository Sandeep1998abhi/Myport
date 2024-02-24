import {initializeApp, getApp, getApps} from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCvZ3gFYDR8hn7C5mbd3_KnMpJbaZaAxUU",
    authDomain: "portfolio-2dd99.firebaseapp.com",
    projectId: "portfolio-2dd99",
    storageBucket: "portfolio-2dd99.appspot.com",
    messagingSenderId: "21808267745",
    appId: "1:21808267745:web:1d5cf811328dae611292a0",
    measurementId: "G-00D1V7W32G"
  };

  const app = getApp.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export {app, db}