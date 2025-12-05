const CACHE_NAME = 'horaires-priere-v1';
const BASE_PATH = '/app-Salet';

const urlsToCache = [
  `${BASE_PATH}/`,
  `${BASE_PATH}/index.html`,
  `${BASE_PATH}/style.css`,
  `${BASE_PATH}/script.js`,
  `${BASE_PATH}/icon-192.png`,
  `${BASE_PATH}/icon-512.png`,
  `${BASE_PATH}/adhan1.mp3`
];

// Installation du Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

// Activation et nettoyage des anciens caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// Stratégie de fetch
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Pour les APIs, toujours aller sur le réseau en premier
  if (url.hostname === 'api.aladhan.com' || 
      url.hostname === 'api.open-meteo.com') {
    event.respondWith(
      fetch(request)
        .catch(() => caches.match(request))
    );
    return;
  }

  // Pour les autres ressources, cache first
  event.respondWith(
    caches.match(request)
      .then(response => response || fetch(request))
  );
});
