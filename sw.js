self.addEventListener('install', event => {
    console.log("ServiceWorker installed");
});

self.addEventListener('fetch', event => {
    console.groupCollapsed("ServiceWorker capturing fetch event");
    let requestUrl = new URL(event.request.url);
    console.log(`Url: ${requestUrl.pathname}`);

    if (event.request.headers.has('X-Force-Fetch')) {
        console.log("Force refresh header set, don't respond from cache");

        if (requestUrl.pathname.endsWith("/data/articles.json")) {
            console.log("Request for data called");

        }
    } else {
        if (requestUrl.pathname.endsWith("/data/articles.json")) {
            console.log("Request for data called");
            let responseBody = {
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
            let responseInit = {
                status: 200,
                statusText: "OK",
                headers: {
                    "Content-Type": "application/json"
                }
            };
            let mockResponse = new Response(JSON.stringify(responseBody), responseInit);

            event.respondWith(mockResponse);
        }
    }
    console.groupEnd();
});