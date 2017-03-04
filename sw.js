self.addEventListener('install', event => {
    console.log("ServiceWorker installed");
});

self.addEventListener('fetch', event => {
    console.log("ServiceWorker capturing fetch event");
    return fetch(event.request);
});