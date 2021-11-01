import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCR-0eDW2tHIW3fy6Dv_2b2TkcUloshfM",
  authDomain: "shoppizilla-3d657.firebaseapp.com",
  projectId: "shoppizilla-3d657",
  storageBucket: "shoppizilla-3d657.appspot.com",
  messagingSenderId: "413343368121",
  appId: "1:413343368121:web:4eb6cc2edaeaf62d492c68"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
