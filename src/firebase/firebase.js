import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBlkvvUPF7t777Avtaz4TDRGm9CRAxIkqw",
    authDomain: "facebook-clone-39dda.firebaseapp.com",
    databaseURL: "https://facebook-clone-39dda.firebaseio.com",
    projectId: "facebook-clone-39dda",
    storageBucket: "facebook-clone-39dda.appspot.com",
    messagingSenderId: "666705225737",
    appId: "1:666705225737:web:c6fbec496745d616e630d8",
    measurementId: "G-GWZ8D7XPFN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;