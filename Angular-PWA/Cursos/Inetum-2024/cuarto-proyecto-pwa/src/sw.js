const cacheName = "demo";

self.addEventListener('install', function (event) {
    console.log('Service Worker installing.');
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll([
                `/`,
                `/index.html`,
                'polyfills.js',
                "main.js",
            ])
                .then(() => self.skipWaiting());
        })
    );
});

self.addEventListener('activate', function (event) {
    console.log('Service Worker activating.');
});

self.addEventListener('fetch', function (event) {
    console.log('Service Worker fetching. ' + event.request.url);
  
    if (navigator.onLine) {
        event.respondWith(
            fetch(event.request).then(response => {
                return caches.open(cacheName).then(cache => {
                    cache.put(event.request, response.clone());
                    return response;
                });
            })
        );
    }


    if (!navigator.onLine) {

        event.respondWith(
            caches.open(cacheName)
                .then(cache => cache.match(event.request, { ignoreSearch: true }))
                .then(response => {
                    if (response) { console.log('Found ', event.request.url, ' in cache');}
                    return response || fetch(event.request);
                })
        );
    }
});