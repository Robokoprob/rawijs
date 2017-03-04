if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(function (registration) {
            console.log("ServiceWorker registration completed");
        }).catch(function (err) {
            console.error('ServiceWorker registration failed: ', err);
        });
    });
} else {
    console.log("No ServiceWorker API available");
}