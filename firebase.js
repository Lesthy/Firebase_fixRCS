import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";




// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCawlJO7DxbXuazUUsLQetf_aFzeYcZ5TI",
    authDomain: "latvianbook-f04e2.firebaseapp.com",
    projectId: "latvianbook-f04e2",
    storageBucket: "latvianbook-f04e2.appspot.com",
    messagingSenderId: "148630942176",
    appId: "1:148630942176:web:15cbbdca38834ffe39bb85",
    measurementId: "G-SZMNF7BF9C"
};

const app = initializeApp(firebaseConfig);



// if (firebase.apps.lenght === 0) {
//     app = firebase.initializeApp(firebaseConfig);
// } else {
//     app = firebase.app();
// }

export const auth = getAuth(app);