const cacheName = 'mycache-v5';
const resToCache = [
  '/',
  'index.html',
  'main.css',
  'bundle.js',
  'img/lighthouse.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(resToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches
      .match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keyList => {
      Promise.all(
        keyList.map(key => {
          if (key !== cacheName) {
            console.log('removing cache:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
});
