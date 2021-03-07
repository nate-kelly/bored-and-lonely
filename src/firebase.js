import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA7Xaz-vDuhk60EAuyFjm1evAT94f0trIM",
  authDomain: "bored-and-lonely.firebaseapp.com",
  projectId: "bored-and-lonely",
  storageBucket: "bored-and-lonely.appspot.com",
  messagingSenderId: "294821262518",
  appId: "1:294821262518:web:224198aff401fc45076217"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
