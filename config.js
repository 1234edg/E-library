import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDJPDBsEhDaaPBf8iJ5dekxZ5n_lcSkJ-0",
  authDomain: "c77sa-69aac.firebaseapp.com",
  projectId: "c77sa-69aac",
  storageBucket: "c77sa-69aac.appspot.com",
  messagingSenderId: "860933350485",
  appId: "1:860933350485:web:464c17dc8ba169c10d60dc"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
