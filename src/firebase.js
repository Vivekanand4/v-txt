import firebase from "firebase"



const firebaseConfig = {
    apiKey: "AIzaSyDAllZM5fT7fVHshnGsxniWlnGDuohrPaY",
    authDomain: "v-text-1cbcf.firebaseapp.com",
    projectId: "v-text-1cbcf",
    storageBucket: "v-text-1cbcf.appspot.com",
    messagingSenderId: "593856127421",
    appId: "1:593856127421:web:74b24aa363c18ebd92f2d4",
    measurementId: "G-PCF96DBP66"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;