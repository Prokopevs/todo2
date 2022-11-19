import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAqquP6RTfFCbWKGj_h7LPkG3eV3BSkpoc",
  authDomain: "todo-59633.firebaseapp.com",
  projectId: "todo-59633",
  storageBucket: "todo-59633.appspot.com",
  messagingSenderId: "1089491070800",
  appId: "1:1089491070800:web:1d8ced461743e9232a4655",
  measurementId: "G-4GDVP7D3Y2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);