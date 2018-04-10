importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-messaging.js');

firebase.initializeApp({
  'messagingSenderId': '862565107217'
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(payload =>
  console.log('[firebase-messaging-sw.js] Received background message ', payload)
);

