import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyACW5oeoZ_m878zy_H8F25-LNjHWYj968c",
    authDomain: "shyam-portfolio18.firebaseapp.com",
    projectId: "shyam-portfolio18",
    storageBucket: "shyam-portfolio18.appspot.com",
    messagingSenderId: "30760478569",
    appId: "1:30760478569:web:2ebf762ddf0b74ae337ff8"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(); 