import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDTTaKHAlsIO7WbP-7cSlKs2cnN_pBnloc",
  authDomain: "endgame-b9583.firebaseapp.com",
  projectId: "endgame-b9583",
  storageBucket: "endgame-b9583.appspot.com",
  messagingSenderId: "349154415961",
  appId: "1:349154415961:web:6022f585c5820d341f2848"
};


const app = initializeApp(firebaseConfig);

export default app