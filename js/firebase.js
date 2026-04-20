const firebaseConfig = {
  apiKey: "AIzaSyDKDSCrBRHumGO3x3eTDFEjWTDHk55kPv8",
  authDomain: "school-aap-74c3a.firebaseapp.com",
  projectId: "school-aap-74c3a",
  storageBucket: "school-aap-74c3a.firebasestorage.app",
  messagingSenderId: "680602465701",
  appId: "1:680602465701:web:1d7223c07ea71a1585644c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


window.db = firebase.firestore();
