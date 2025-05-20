
const CACHE_NAME = 'my-cache-v1';  // Cache name for storing resources
const CACHE_URLS = [
    '/index.html',
];

self.addEventListener('install', (event) => {
    console.log('%c Service Worker: Installing...', 'color: blue; font-size: 20px; font-weight: bold;');
    self.skipWaiting();  // Skip waiting and activate the new service worker immediately

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('%c Service Worker: Caching index.html...', 'color: green; font-size: 16px;');
                return cache.addAll(CACHE_URLS);
            })
    );
});

self.addEventListener('activate', (event) => {
    console.log('%c Service Worker: Activating...', 'color: blue; font-size: 20px; font-weight: bold;');
    event.waitUntil(self.clients.claim());  // Claim control of all clients immediately after activation
});

self.addEventListener('fetch', (event) => {
    console.log('%c Service Worker: Fetching :  ' + event.request.url, 'color: blue; font-size: 20px; font-weight: bold;');

    if (event.request.url.includes('secreto')) {
        event.respondWith(new Response('This is a secret response!'));
    }
});