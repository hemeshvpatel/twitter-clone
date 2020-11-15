import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCYcaP09oFBMjCIpfpHSCTezXpAKJ4s6Vc",
    authDomain: "twitter-clone-a690d.firebaseapp.com",
    databaseURL: "https://twitter-clone-a690d.firebaseio.com",
    projectId: "twitter-clone-a690d",
    storageBucket: "twitter-clone-a690d.appspot.com",
    messagingSenderId: "133225512313",
    appId: "1:133225512313:web:fd827fcab4e7ab672d03a8",
    measurementId: "G-0CE0QS6L5D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

export default db;