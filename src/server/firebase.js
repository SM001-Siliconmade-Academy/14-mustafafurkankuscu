import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyByUi36743S-ABhQqVaHi0xmoUoG2sgSf8",
    authDomain: "exampleapp-d920a.firebaseapp.com",
    projectId: "exampleapp-d920a",
    storageBucket: "exampleapp-d920a.appspot.com",
    messagingSenderId: "568551968587",
    appId: "1:568551968587:web:59bfb8b9ef5a6da43262ce",
    measurementId: "G-DEKY7KKZC5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage=getStorage(app)

export { app, db, auth,storage };
