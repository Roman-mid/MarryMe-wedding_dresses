import { initializeApp } from "firebase/app";

interface Type {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROGECT_ID,
  storageBucket: process.env.REACT_APP_STRANGE_BUKET,
  messagingSenderId: process.env.REACT_APP_MESAGE_ID ,
  appId: process.env.REACT_APP_APP_ID,
  mockApi: process.env.REACT_APP_MOCKAPI
};


export const app = initializeApp(firebaseConfig);