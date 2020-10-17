import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDzDeKTduZcDUpcjeP508kwyav1M60y1qs",
    authDomain: "discord-clone-d302d.firebaseapp.com",
    databaseURL: "https://discord-clone-d302d.firebaseio.com",
    projectId: "discord-clone-d302d",
    storageBucket: "discord-clone-d302d.appspot.com",
    messagingSenderId: "480503395874",
    appId: "1:480503395874:web:75057cc24f01eb56be7c7b"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export{auth,provider};
  export default db;
