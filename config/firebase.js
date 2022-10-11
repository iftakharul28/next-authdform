import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyDwvf7tdqm0JBM7YD5omW0eh-rXXeP_f8M',
  authDomain: 'next-e-commerce-78e2f.firebaseapp.com',
  databaseURL: 'https://next-e-commerce-78e2f-default-rtdb.firebaseio.com',
  projectId: 'next-e-commerce-78e2f',
  storageBucket: 'next-e-commerce-78e2f.appspot.com',
  messagingSenderId: '279329008296',
  appId: '1:279329008296:web:f49256044bffea4bdc309d',
  measurementId: 'G-TCPC05207P',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
