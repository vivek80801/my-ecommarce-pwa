const cacheName = "v1";

const cacheAssets = [
  "/",
  "/index.html",
  "/favicon.ico",
  "/logo192.png",
  "/manifest.json",
  "/static/js/0.chunk.js",
  "/static/js/bundle.js",
  "/static/js/main.chunk.js",
  "/img/macaroni1.jpg",
  "/img/macaroni2.jpg",
  "/img/pasta1.jpg",
  "/img/pasta2.jpg",
  "/img/pasta3.jpg",
  "/img/phofi.jpg",
  "/img/plate.jpg",
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
