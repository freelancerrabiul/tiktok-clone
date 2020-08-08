import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyCTKrh3PGXPA2xQsDns7l_Jv8lRg6a__Wo",
    authDomain: "tikmug.firebaseapp.com",
    databaseURL: "https://tikmug.firebaseio.com",
    projectId: "tikmug",
    storageBucket: "tikmug.appspot.com",
    messagingSenderId: "802637914185",
    appId: "1:802637914185:web:21b855a76c52082985df98",
    measurementId: "G-72FFHBL6TZ"
  };
  const firebaseApp=
  firebase.initializeApp(firebaseConfig); 
  const db =firebaseApp.firestore();
  export default db;