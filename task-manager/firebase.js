import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/auth';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBe1PCe1CXLtYGD8Zy-PWzYCgrOH3ENcPU",
  authDomain: "todo-120fa.firebaseapp.com",
  projectId: "todo-120fa",
  storageBucket: "todo-120fa.firebasestorage.app",
  messagingSenderId: "756131429046",
  appId: "1:756131429046:web:a622570c6a16bee39d8417"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
