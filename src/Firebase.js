import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmdzUFCDS_Q7Tv16jP9TgqRn2xig9sSk",
  authDomain: "book-library-f6916.firebaseapp.com",
  projectId: "book-library-f6916",
  storageBucket: "book-library-f6916.appspot.com",
  messagingSenderId: "385915205832",
  appId: "1:385915205832:web:7286d09a43c9965c334dfd",
  measurementId: "G-LMJRZ4PG9E"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
