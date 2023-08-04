// src/firebase.js
// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const BACKEND_URL = 'http://localhost:6000/'; // Replace with your actual backend URL

const fetchFirebaseConfig = async () => {
  const response = await fetch(`${BACKEND_URL}/api/firebaseConfig`);
  const data = await response.json();
  return data.firebaseConfig;
};

const initializeFirebase = async () => {
  const firebaseConfig = await fetchFirebaseConfig();

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
};

initializeFirebase();

export const auth = firebase.auth(); 
export default firebase;