# LDD 
> Lighthouse driven development

## 1. What is Lighthouse

- Audits tab in Google Chrome
- Chrome Extension
- CLI

## 2. What is a PWA

- Responsive
- Connectivity-independent
- Interactive with a feel like a native app’s 
- Always up-to-date
- Safe
- Discoverable
- Re-engageable
- Installable
- Linkable

### 2.1 JS basics
- DOM manipulation
- Array methods (map, filter, reduce)
- Fetch
- Promises

## 2.2 Application Shell

## 3. Service Worker

- Runs in its own global script context
- No DOM access
- HTTPS only
- It's a separate file
- It need to be registered

### 3.1 Registration
 ```javascript
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => {
      console.log('Oh yeah mate ✌️');
    })
    .catch(err => {
      console.log('☠️ Oh no!', err);
    });
}
 ```

## 3.2 Lifecycle

## 4. Cache API
- differencies between Browser Cache

```javascript
self.addEventListener('install', function(e) {
  e.waitUntil(
   caches.open('mycache-v1').then(function(cache) {
     return cache.addAll([
       '/',
       '/src/main.css',
       '/src/main.min.js'
     ]);
   })
 );
});
```

### 4.1 Clean old caches
```javascript
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keyList => 
      Promise.all(keyList.map(key => {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }))
    )
  )
});
```

## 5. Intercept requests
- The `fetch` event

```javascript
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  )
});
```

## The web app manifest

```json
{
  "name": "Progressive web app",
  "short_name": "PWA",
  "start_url": "/index.html",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#000000",
  "icons": [{
    "src": "homescreen.png",
    "sizes": "192x192",
    "type": "image/png"
  }, {
    "src": "homescreen-144.png",
    "sizes": "144x144",
    "type": "image/png"
  }]
}
```

```html
<link rel="manifest" href="/manifest.json">
```

### Add to home screen
- You need a manifest.json file
- Your manifest file needs a start URL
- You need a 144 x 144 PNG icon

---

## LDD
- create a SW
- register the SW
- cache the home page
- create a manifest.json
- add theme colors, splash screen

---

## Push Notifications
- [Push Companion](https://web-push-codelab.glitch.me/)
- Create a project on [Firebase](https://firebase.google.com/)
- Settings > Cloud Messaging

```json
{
  "gcm_sender_id": "SENDER_ID"
}
```
> manifest.json

### Feature detect
```javascript
  if ('serviceWorker' in navigator && 'PushManager' in window) { ... }
```

### Notification opt-in

```javascript
const subscribe = (reg) => {  
    reg.pushManager.subscribe({userVisibleOnly: true});
}
```

## BackgroundSync

## Debugging Service Workers


## Tools
- [Workbox](https://developers.google.com/web/tools/workbox/)
- [Firebase](https://firebase.google.com/)

## Are PWA ready?
