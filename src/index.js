import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'animate.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6ntJWLRu9MIYKtOxuk1Fa4SIofSWO9ZA",
  authDomain: "thetaalpha-de54a.firebaseapp.com",
  databaseURL: "https://thetaalpha-de54a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "thetaalpha-de54a",
  storageBucket: "thetaalpha-de54a.appspot.com",
  messagingSenderId: "767850552950",
  appId: "1:767850552950:web:b208bc2a2baebd40d20957",
  measurementId: "G-CNX16NHXXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
