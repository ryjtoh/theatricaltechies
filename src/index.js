import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import the function from the realtime database module
import { getDatabase } from 'firebase/database';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwylybAhAOrI-AQorergIrvCDs5-t04iU",
  authDomain: "theatricalthechies.firebaseapp.com",
  projectId: "theatricalthechies",
  storageBucket: "theatricalthechies.appspot.com",
  messagingSenderId: "324608368348",
  appId: "1:324608368348:web:86dd0862797a3ed3d39e19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const db = getDatabase();