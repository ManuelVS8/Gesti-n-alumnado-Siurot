const CACHE_NAME = 'mi-app-cache-v1';
const urlsToCache = [
  './',
  './index.html' // <-- ¡IMPORTANTE! Cambia 'index.html' por el nombre de tu archivo HTML
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});