import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDmKzIXpd98k22LKKXkyVqbbsXgeE4DUGw",
	authDomain: "uber-next-clone-27a69.firebaseapp.com",
	projectId: "uber-next-clone-27a69",
	storageBucket: "uber-next-clone-27a69.appspot.com",
	messagingSenderId: "840899609053",
	appId: "1:840899609053:web:79e2c27a3d2d5d9321f634",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
