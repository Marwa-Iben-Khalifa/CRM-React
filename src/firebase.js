import firebase from "firebase/app";
import "firebase/firestore";
const config = {
  apiKey: "AIzaSyDTnyTK6ZtDBtaJVfz8yMKjl-AqFEZmqpA",
  authDomain: "crm-marwa.firebaseapp.com",
  projectId: "crm-marwa",
  storageBucket: "crm-marwa.appspot.com",
  messagingSenderId: "513596386134",
  appId: "1:513596386134:web:8e1c2666d4a5a78e4744f7",
  measurementId: "G-L668Y28WKV",
};
firebase.initializeApp(config);
export default firebase;
