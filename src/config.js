import firebase from 'firebase';

const config= {
  firebase_config: {
    apiKey: "AIzaSyATIwZCBzZ0qvUaIPQ_sU7snnm9sjgK5qA",
    authDomain: "ecommerce-21aa5.firebaseapp.com",
    databaseURL: "https://ecommerce-21aa5.firebaseio.com/",
    projectId: "ecommerce-21aa5",
    storageBucket: "ecommerce-21aa5.appspot.com/",
    messagingSenderId: "857484447716"
  },
  firebase_config_dev: {
    apiKey: "AIzaSyATIwZCBzZ0qvUaIPQ_sU7snnm9sjgK5qA-Z0",
    authDomain: "ecommerce-21aa5.firebaseapp.com",
    databaseURL: "https://ecommerce-21aa5.firebaseio.com/",
    projectId: "ecommerce-21aa5",
    storageBucket: "ecommerce-21aa5.appspot.com/",
    messagingSenderId: "857484447716"
  },
  firebase_providers: [
    firebase.auth.GoogleAuthProvider
    // firebase.auth.FacebookAuthProvider,
    // firebase.auth.TwitterAuthProvider,
    // firebase.auth.GithubAuthProvider,
    // firebase.auth.EmailAuthProvider,
    // firebase.auth.PhoneAuthProvider
  ],
  initial_state: {
    theme: 'light',
    locale: 'en'
  },
  drawer_width: 256
}

export default config;
