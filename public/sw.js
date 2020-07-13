const cacheName = "v1";

const cacheAssets = [
  "/",
  "/index.html",
  "/favicon.ico",
  "/logo192.png",
  "/manifest.json",
  "/static/js/0.chunk.js",
  "/static/js/1.chunk.js",
  "/static/js/bundle.js",
  "/static/js/main.chunk.js",
  "/static/js/2.87831dbc.chunk.js",
  "/static/js/main.41b70167.chunk.js",
  "/static/css/main.a9521b40.chunk.css",
  "/static/js/runtime-main.272c8f49.js",
  "/static/js/main.80c86b7b.chunk.js",
  "/img/macaroni1.jpg",
  "/img/macaroni2.jpg",
  "/img/pasta1.jpg",
  "/img/pasta2.jpg",
  "/img/pasta3.jpg",
  "/img/phofi.jpg",
  "/img/plate.jpg",
  "/img/not-found.jpg",
];
// call install event
self.addEventListener("install", (e) => {
  console.log("service worker installed");

  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log("service worker: caching files");
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// call activate event
self.addEventListener("activate", (e) => {
  console.log("service worker activate");
  //   remove un wanted caches
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log("clearing old cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// call fetch event
self.addEventListener("fetch", (e) => {
  console.log("fetching...");
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
