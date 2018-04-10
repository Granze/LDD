import firebase from '@firebase/app';
import '@firebase/messaging';

firebase.initializeApp({
  'messagingSenderId': '862565107217'
});

const msgButton = document.querySelector('#notification');
const messaging = firebase.messaging();

messaging.usePublicVapidKey('BOKq00ci6XQ7aglXfpItWYjG51hG32MRNhI7ztkLktgUS-SsAp8h233YNhwgiu6U9cy1xjkao8eMcs5gT83QyGI');

messaging.requestPermission()
  .then(() => {
    return messaging.getToken();
  })
  .then(token => {
    console.log(token);
  })
  .catch(err => {
    console.log('Unable to get permission', err);
  });

messaging.onMessage(payload => {
  console.log('on message:', payload);
});





