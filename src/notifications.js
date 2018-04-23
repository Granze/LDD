import firebase from '@firebase/app';
import '@firebase/messaging';

firebase.initializeApp({
  'messagingSenderId': '862565107217'
});
const messaging = firebase.messaging();
messaging.usePublicVapidKey('BOKq00ci6XQ7aglXfpItWYjG...');

messaging.requestPermission()
  .then(() => messaging.getToken())
  .then(token => console.log(token))
  .catch(err => console.log('Unable to get permission', err)

messaging.onMessage(payload => console.log('on message:', payload));
