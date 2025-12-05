// Service Worker pour l'application Horaires de Prière
const CACHE_NAME = 'horaires-priere-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/adhan1.mp3',
  '/ramadan.mp4',
  '/ramadan.gif',
  '/fajr-bg.jpg',
  '/dhuhr-bg.jpg',
  '/asr-bg.jpg',
  '/maghrib-bg.jpg',
  '/isha-bg.jpg',
  '/manifest.json'
];

// Installation du Service Worker
self.addEventListener('install', event => {
  console.log('Service Worker: Installation en cours...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Mise en cache des fichiers');
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.log('Service Worker: Erreur de mise en cache', err);
      })
  );
});

// Activation du Service Worker
self.addEventListener('activate', event => {
  console.log('Service Worker: Activation');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Suppression ancien cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// Stratégie de cache: Network First, fallback sur Cache
self.addEventListener('fetch', event => {
  // Ignorer les requêtes non-GET
  if (event.request.method !== 'GET') return;
  
  // Ignorer les requêtes vers l'API (toujours fetch fresh data)
  if (event.request.url.includes('api.aladhan.com')) {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          return new Response(JSON.stringify({ error: 'Pas de connexion' }), {
            headers: { 'Content-Type': 'application/json' }
          });
        })
    );
    return;
  }
  
  // Pour les autres ressources: Network First, puis Cache
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Clone la réponse
        const responseToCache = response.clone();
        
        // Mise à jour du cache
        caches.open(CACHE_NAME)
          .then(cache => {
            cache.put(event.request, responseToCache);
          });
        
        return response;
      })
      .catch(() => {
        // Si le réseau échoue, utiliser le cache
        return caches.match(event.request)
          .then(response => {
            if (response) {
              return response;
            }
            // Si pas dans le cache, retourner une page d'erreur basique
            return new Response('Contenu non disponible hors ligne', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({
                'Content-Type': 'text/plain'
              })
            });
          });
      })
  );
});

// Gestion des notifications push (pour les notifications en arrière-plan)
self.addEventListener('push', event => {
  console.log('Service Worker: Push notification reçue');
  
  const options = {
    body: event.data ? event.data.text() : 'C\'est l\'heure de la prière',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    vibrate: [200, 100, 200],
    tag: 'prayer-notification',
    requireInteraction: true
  };
  
  event.waitUntil(
    self.registration.showNotification('🕌 Horaires de Prière', options)
  );
});

// Gestion du clic sur la notification
self.addEventListener('notificationclick', event => {
  console.log('Service Worker: Notification cliquée');
  
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('/')
  );
});

// Synchronisation en arrière-plan (pour vérifier les horaires de prière)
self.addEventListener('sync', event => {
  if (event.tag === 'check-prayer-times') {
    event.waitUntil(checkPrayerTimes());
  }
});

// Fonction pour vérifier les horaires de prière
async function checkPrayerTimes() {
  try {
    // Cette fonction sera appelée périodiquement
    // Pour l'instant, on log juste
    console.log('Service Worker: Vérification des horaires de prière');
    
    // Vous pouvez ajouter ici la logique pour vérifier l'heure
    // et envoyer des notifications si nécessaire
    
    return Promise.resolve();
  } catch (error) {
    console.error('Service Worker: Erreur lors de la vérification', error);
    return Promise.reject(error);
  }
}
