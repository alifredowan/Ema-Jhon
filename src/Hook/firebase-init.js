import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCpt6gyYcEF69cjaQE-OTATJh0iQyi1L1k",
  authDomain: "ema-jhon-8f023.firebaseapp.com",
  projectId: "ema-jhon-8f023",
  storageBucket: "ema-jhon-8f023.appspot.com",
  messagingSenderId: "684397201432",
  appId: "1:684397201432:web:b0b61adb61446f8ad95b6d",
  measurementId: "G-JJJH4GKZG7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;