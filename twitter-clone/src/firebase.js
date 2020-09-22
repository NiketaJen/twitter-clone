// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBW7SFv7KMheZjNao_DuRBZxaw5E7SrUDI",
    authDomain: "twitter-clone-87e0a.firebaseapp.com",
    databaseURL: "https://twitter-clone-87e0a.firebaseio.com",
    projectId: "twitter-clone-87e0a",
    storageBucket: "twitter-clone-87e0a.appspot.com",
    messagingSenderId: "691452770181",
    appId: "1:691452770181:web:298a856e2b8a5416ea36ec",
    measurementId: "G-81GT7JEMDW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  export default db;