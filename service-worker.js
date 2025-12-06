// service-worker.js
const CACHE_NAME = "herb-app-cache-v2";
const RUNTIME_CACHE = "herb-runtime-cache";
const ASSETS = [
  "/", // make sure your server serves index.html on root
  "/index.html",
  "/community.html",
  "/style.css",
  "/script.js",
  "/offline-db.js",
  "/offline-community.js",
  "/community.js",
  "/supabase-client.js",
  "/manifest.json",
  "/css/swiper-bundle.min.css",
  "/js/swiper-bundle.min.js",
  "/fonts/poppins-v20-latin-regular.woff2",
  "/fonts/poppins-v20-latin-500.woff2",
  "/fonts/poppins-v20-latin-600.woff2"
  // add icons and key images you want cached immediately
];

// Install: pre-cache app shell
self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Activate: clean old caches
self.addEventListener("activate", (event) => {
  clients.claim();
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME && key !== RUNTIME_CACHE) return caches.delete(key);
        })
      )
    )
  );
});

// Fetch: Cache-first for app shell, network-first for API (runtime)
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Ignore non-GET
  if (event.request.method !== "GET") return;

  // Files that belong to our origin -> try cache first
  if (url.origin === location.origin) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return caches.open(RUNTIME_CACHE).then((cache) =>
          fetch(event.request)
            .then((response) => {
              // Put a copy in runtime cache
              if (response && response.status === 200) {
                cache.put(event.request, response.clone());
              }
              return response;
            })
            .catch(() =>
              // fallback: if HTML request fails, serve offline page if any
              caches.match("/index.html")
            )
        );
      })
    );
    return;
  }

  // For cross-origin (e.g., Supabase or other CDN), use network-first with fallback to cache
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Optionally cache responses from CDNs (careful with large storage)
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
