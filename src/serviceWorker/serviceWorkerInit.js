console.log("ok");

if ('serviceWorker' in navigator) {
    console.log("Serviceworker found!");
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(function (registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);

            registration.onupdatefound = function() {
                var installingWorker = registration.installing;

                installingWorker.onstatechange = function() {
                    switch (installingWorker.state) {
                        case 'installed':
                            if (navigator.serviceWorker.controller) {
                                console.log('New or updated content is available.');
                            } else {
                                console.log('Content is now available offline!');
                            }
                            break;

                        case 'redundant':
                            console.error('The installing service worker became redundant.');
                            break;
                    }
                };
            };
        }).catch(function (err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
} else {
    console.log("Geen serviceworker");
}