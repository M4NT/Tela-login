import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDIzNea_nt3_SgEGzcGoiL5Qm0MKhApEUU",
  authDomain: "eventx-df8e3.firebaseapp.com",
  projectId: "eventx-df8e3",
  storageBucket: "eventx-df8e3.appspot.com",
  messagingSenderId: "443605827988",
  appId: "1:443605827988:web:4b60c88197c7916abc4f81",
  measurementId: "G-QJS8LCD2MP"

};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage) 
});

export { auth };

