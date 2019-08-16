// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyANFnDlxy6yvvQqzcudrodruDhqH6F-9kc",
    authDomain: "qvha-directory.firebaseapp.com",
    databaseURL: "https://qvha-directory.firebaseio.com",
    projectId: "qvha-directory",
    storageBucket: "",
    messagingSenderId: "653998072034",
    appId: "1:653998072034:web:6d2aa860b59e5cfd"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();

export { firebaseAuth };
