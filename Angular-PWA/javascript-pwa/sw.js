


const cache_name = 'cache-v1';
//Este evento se dispara cuando el service worker se instala
//Se ejecuta primero
//Guarda en cache los archivos estáticos
self.addEventListener('install', function (event) {

    console.log('SW - Service worker installing...');

    event.waitUntil(
        self.caches.open(cache_name).then(function (cache) {
            return cache.addAll(['index_con_sw.html']) 
        }));

    //LLamo al skipWaiting para que el service worker se active inmediatamente
    self.skipWaiting();

});

//Este evento se dispara cuando el service worker se activa
//Se ejecuta segundo
//Le dice al SW que tome control de la página inmediatamente
self.addEventListener('activate', function (event) {
    console.log('SW - Service worker activating...');

    // Le dice al SW que tome control de la página inmediatamente
    self.clients.claim();
});

self.addEventListener('fetch', function (event) {
    console.log('SW - Fetching:', event.request.url);

    if (!navigator.onLine 
        &&  event.request.url.includes('/api/datos') 
        && event.request.method === 'GET') {

        let body = {
            "personas": [{
                "id": 100,
                "nombre": "Desde",
                "apellido": "Service Worker",
                "edad": 2500
            }]
        };       
        let respuesta = new Response(JSON.stringify(body), { headers: {

                'Content-Type': 'application/json'
            }
        });

        //El respondWith se encarga de devolver una respuesta al navegador
        event.respondWith(respuesta);
    }

    //Si no hay conexión a internet
    else if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then(function (response) {
                if (response) {
                    console.log('SW - Estoy Offline - Cache hit:', event.request.url);
                    return response;
                } else {
                    console.log('SW - Estoy Offline - No hay Cache hit:', event.request.url);
                    return new Response('No hay conexión a internet y no tengo el dato en el cache');
                }
            })
        );
    }
    /*else {
        event.respondWith(
            fetch(event.request).then(function (response) {
                return response;
            })
        );
    }*/

});


