// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATUZoObdN93qQrgCgnxUR_zsarrNlPI3Q",
  authDomain: "fir-622aa.firebaseapp.com",
  projectId: "fir-622aa",
  storageBucket: "fir-622aa.appspot.com",
  messagingSenderId: "924825771970",
  appId: "1:924825771970:web:6ef8fd6f85e48036f0005b",
  measurementId: "G-BGYLD03ZE4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);