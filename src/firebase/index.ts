import { AngularFireModule, AuthMethods } from 'angularfire2';


const firebaseConfig = {
  apiKey: 'AIzaSyBqkZ2XprN22TORR0ca6KfGghI3Bg4zYt8',
  authDomain: 'ujourney-d697b.firebaseapp.com',
  databaseURL: 'https://ujourney-d697b.firebaseio.com',
  storageBucket: ''
};

const firebaseAuthConfig = {
  method: AuthMethods.Popup,
  remember: 'default'
};


export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);
