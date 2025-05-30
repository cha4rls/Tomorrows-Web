import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCR0E6LE9DIwHPV5LQP-MhCn8LLCTIgSGA",
  authDomain: "my-awesome-portfolio-6eca1.firebaseapp.com",
  projectId: "my-awesome-portfolio-6eca1",
  storageBucket: "my-awesome-portfolio-6eca1.firebasestorage.app",
  messagingSenderId: "404489279066",
  appId: "1:404489279066:web:f8f244f491334fb9efea63",
  measurementId: "G-KELCE11P82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app; 