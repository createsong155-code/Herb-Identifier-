// service-worker.js
// Herbs & Survival PWA – Fully Offline (December 2025+)
// Updated to match your exact folder structure

const CACHE_NAME = 'herbs-survival-v25.12.17'; // ← Bump this when you update the app
const FILES_TO_CACHE = [
  '/',                          // Root – important for scope
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',

  // === FONTS (your actual folder is "font" – not "fonts") ===
  '/font/poppins-regular.woff2',
  '/font/poppins-italic.woff2',
  '/font/poppins-medium.woff2',
  '/font/poppins-semibold.woff2',
  '/font/poppins-bold.woff2',

  // === SWIPER (if you have local files) ===
  // Uncomment these if you downloaded them locally:
  // '/css/swiper-bundle.min.css',
  // '/js/swiper-bundle.min.js',

  // === ICONS ===
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  // Add more if you have them (72, 96, etc.)

  // === FALLBACK PAGES / IMAGES (create these for better UX) ===
  '/offline.html',              // Optional: nice "You're offline" page
  '/images/fallback.png',       // Optional: placeholder for missing herb photos

  // CUSTOM HERB MODEL (add these lines)
  '/models/ph-herbs-v1/model.json',
  '/models/ph-herbs-v1/group1-shard1of1.bin',
  '/models/ph-herbs-v1/group1-shard2of1.bin',  // add every shard you have
  '/models/ph-herbs-v1/group1-shard3of1.bin',
  '/models/ph-herbs-v1/group1-shard4of1.bin',
  // ... continue for all shards
];

// INSTALL – Cache all core files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('🌿 Herbs App: Caching essential files');
        return cache.addAll(FILES_TO_CACHE);
      })
      .catch((err) => console.warn('Cache failed (maybe file missing):', err))
  );
  self.skipWaiting(); // Force new version to activate immediately
});

// ACTIVATE – Remove old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME)
          .map((key) => {
            console.log('🗑️ Deleting old cache:', key);
            return caches.delete(key);
          })
      );
    })
  );
  self.clients.claim();
});

// FETCH – Cache-first strategy
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Return cached version if available
        if (cachedResponse) return cachedResponse;

        // Otherwise try network
        return fetch(event.request).then((networkResponse) => {
          // Cache successful network responses (optional: only cache same-origin)
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        }).catch(() => {
          // Offline fallbacks
          if (event.request.destination === 'document') {
            return caches.match('/index.html'); // or '/offline.html'
          }
          if (event.request.destination === 'image') {
            return caches.match('/images/fallback.png') || new Response('', { status: 404 });
          }
        });
      })
  );
});

// Allow instant update from app (optional)
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
