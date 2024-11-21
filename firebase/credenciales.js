import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyBdOKYLBHQh4t8kBLcJyW1zJt_Db95sSP0",
    authDomain: "sesion-feca3.firebaseapp.com",
    projectId: "sesion-feca3",
    storageBucket: "sesion-feca3.firebasestorage.app",
    messagingSenderId: "451468366293",
    appId: "1:451468366293:web:f085f0806af6b7ca54ad5c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;