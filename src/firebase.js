import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAeaz7KxcoUjt2pHJwAw4Lv4d6fniBe3xE",
    authDomain: "otp-demo-327ff.firebaseapp.com",
    projectId: "otp-demo-327ff",
    storageBucket: "otp-demo-327ff.appspot.com",
    messagingSenderId: "826537557299",
    appId: "1:826537557299:web:56a8ac85f50dd4b2c81246"
}

firebase.initializeApp(config)
export default firebase;