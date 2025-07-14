self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('kavac-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/logo-kavac-studio.png',
        '/kavac-icon-192.png',
        '/kavac-icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
