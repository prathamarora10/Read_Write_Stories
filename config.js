import * as firebase from 'firebase';
require("@firebase/firestore")

var firebaseConfig = {
  apiKey: 'AIzaSyAtJxdZAnXP7gR7NVuzd_Nf71nQtRlnrJ4',
  authDomain: 'read-write-stories.firebaseapp.com',
  projectId: 'read-write-stories',
  storageBucket: 'read-write-stories.appspot.com',
  messagingSenderId: '891279536707',
  appId: '1:891279536707:web:f5041e78166dbe0b0f1af6',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
