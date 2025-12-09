// service-worker.js
// Perfect for your Herbs & Survival Offline PWA (2025–2030+)
// Works with your exact folder structure — no changes needed

const CACHE_NAME = 'herbs-survival-v25.12.09'; // ← change this number when you update the app
const VERSION_FILE = 'cache-version.txt';     // we will read this to auto-update

// All files you want instantly available offline
const FILES_TO_CACHE = [
  '/',                          // important for scope
  '/index.html',
  '/offline.html',              // your nice offline fallback page
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/README.md',

  // Fonts
  '/fonts/poppins-v20-latin-regular.woff2',
  '/fonts/poppins-v20-latin-500.woff2',
  '/fonts/poppins-v20-latin-600.woff2',

  // Swiper
  '/css/swiper-bundle.min.css',
  '/js/swiper-bundle.min.js',

  // Icons
  '/icons/icon-72.png',
  '/icons/icon-96.png',
  '/icons/icon-128.png',
  '/icons/icon-144.png',
  '/icons/icon-152.png',
  '/icons/icon-192.png',
  '/icons/icon-384.png',
  '/icons/icon-512.png',

  // Images
  '/images/logo.png',
  '/images/splash.png',
  '/images/fallback.png',

  // Optional: data & future AI
  '/data/herbs.json',
  // add more later like '/models/my-model.json' when ready
];

// INSTALL — cache everything on first visit
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Herbs App: Caching core files');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// ACTIVATE — clean up old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('Herbs App: Deleting old cache', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// FETCH — serve from cache first, fallback to network, then offline.html
self.addEventListener('fetch', (e) => {
  // Only handle GET requests
  if (e.request.method !== 'GET') return;

  // Special handling for herb images (so they never 404)
  if (e.request.url.includes('/images/herbs/')) {
    e.respondWith(
      caches.match(e.request).then((cached) => {
        return cached || fetch(e.request).catch(() => caches.match('/images/fallback.png'));
      })
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then((response) => {
      // Return cached version if exists
      if (response) return response;

      // Otherwise try network
      return fetch(e.request).catch(() => {
        // If network fails and it's an HTML request for HTML → show offline page
        if (e.request.destination === 'document') {
          return caches.match('/offline.html');
        }
        // For images, show fallback
        if (e.request.destination === 'image') {
          return caches.match('/images/fallback.png');
        }
        // For everything else, just fail silently
        return new Response('Offline — no cached version', {
          status: 503,
          statusText: 'Service Unavailable'
        });
      });
    })
  );
});

// AUTO-UPDATE when cache-version.txt changes (optional magic)
self.addEventListener('message', (e) => {
  if (e.data && e.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
