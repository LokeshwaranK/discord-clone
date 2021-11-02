import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcoAeJhtvZ-rmx1dYX28pV6xZnyQX_Ni8",
    authDomain: "discord-clone-da226.firebaseapp.com",
    databaseURL: "https://discord-clone-da226.firebaseio.com",
    projectId: "discord-clone-da226",
    storageBucket: "discord-clone-da226.appspot.com",
    messagingSenderId: "676903060926",
    appId: "1:676903060926:web:6f2a3a51925c65ea75e5ef",
    measurementId: "G-YKT63XVSGQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;