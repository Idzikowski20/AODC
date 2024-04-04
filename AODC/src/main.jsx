import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { JobContextProvider } from './Context/JobContext';
import './index.css';
import 'swiper/swiper.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'react-toastify/dist/ReactToastify.css';
import 'rc-slider/assets/index.css';
import { ToastContainer } from 'react-toastify';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ72IHH-N6ZPCx38WpMorpVmUQ3o78_Tg",
  authDomain: "aodc-137ee.firebaseapp.com",
  projectId: "aodc-137ee",
  storageBucket: "aodc-137ee.appspot.com",
  messagingSenderId: "119391765708",
  appId: "1:119391765708:web:861d629176aab4d5882e69",
  measurementId: "G-DKK6JZM483"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <JobContextProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <App />
    </JobContextProvider>
  </React.StrictMode>
);
