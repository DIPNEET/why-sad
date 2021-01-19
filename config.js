import firebase  from 'firebase'
require ('@firebase/firestore')

const firebaseConfig = {
   apiKey: "AIzaSyBLlmYhBd8dk16mHSh4ie5823wE-bwjkes",
    authDomain: "ambika-s-project.firebaseapp.com",
    databaseURL: "https://ambika-s-project.firebaseio.com",
    projectId: "ambika-s-project",
    storageBucket: "ambika-s-project.appspot.com",
    messagingSenderId: "805020720441",
    appId: "1:805020720441:web:2f951a465cc0277ebc5ce8"
  };
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

  export default firebase.firestore();