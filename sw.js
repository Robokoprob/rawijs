const DEBUG = true;
const DELAY_TIME_IN_MS = 1000;
const CACHE_NAME = "rawijs_v2";
const CACHE_URLS = [
    "/data/articles.json"
];

self.addEventListener('install', event => {
    console.log("ServiceWorker installed");
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("Opened Cache", cache);
            return cache.addAll(CACHE_URLS);
        })
    );
});

self.addEventListener('activate', event => {
    console.log("ServiceWorker activated");
    event.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(keyList.map(key => {
                if (CACHE_NAME.indexOf(key) === -1) { // Delete old caches
                    return caches.delete(key);
                }
            }));
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(resp => {
            if (resp) { // Cache hit, return cached response
                return resp;
            }
            
            console.log(`No cache hit was found for url ${event.request.url}, fetch from server`);
            let fetchRequest = event.request.clone(); // Request (stream) will be used again in the cache, clone it!
            
            return fetch(fetchRequest).then(response => { // Fetch the request if there was no cache hit
                if(!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                }

                var responseToCache = response.clone();

                caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, responseToCache);
                });
                return response;
            });
        })
    );
});

const mockArticlesResponse = {
    articles: [
        {
            "id": 1,
            "url": "art1",
            "description": "Dit is artikel 1"
        },
        {
            "id": 2,
            "url": "art2",
            "description": "Dit is artikel 2"
        },
        {
            "id": 3,
            "url": "art3",
            "description": "Dit is artikel 3"
        }
    ]
};

const mockJsonResponseInit = {
    status: 200,
    statusText: "OK",
    headers: {
        "Content-Type": "application/json"
    }
};