const appShell = 'appcache-v2';
const filesToCache = ['/', 'index.html', 'img/lighthouse.png', 'bundle.js', 'main.css'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(appShell).then(cache => cache.addAll(filesToCache))
  )
});

self.addEventListener('fetch', event => {
  event.respondWith(
   caches.match(event.request)
     .then( response => response || fetch(event.request))
  )
});
