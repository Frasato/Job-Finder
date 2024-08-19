import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_FIREBASE_KEY,
  authDomain: import.meta.env.REACT_APP_AUTH_DOMAIN,
  projectId: "job-finder-cb9e6",
  storageBucket: import.meta.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.REACT_APP_MESSAGEN_SENDER_ID,
  appId: import.meta.env.REACT_APP_APP_ID
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);