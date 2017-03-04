var CACHE_NAME = "rawijs-cache";
var urlsToCache = [
];

self.addEventListener('install', event => {
    //console.log("SW started");

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log("cache opened");
                
            })
    )
});

self.addEventListener('fetch', event => {
    return fetch(event.request);
});