// ========== SERVICE WORKER AVEC NOTIFICATIONS BACKGROUND ==========
// Fichier: service-worker.js
// À placer à la RACINE de votre projet (à côté de index.html)

const CACHE_NAME = 'prayer-app-v1';
const BASE_PATH = '/app-Salet';

// Fichiers à mettre en cache
const urlsToCache = [
  `${BASE_PATH}/`,
  `${BASE_PATH}/index.html`,
  `${BASE_PATH}/style.css`,
  `${BASE_PATH}/script.js`,
  `${BASE_PATH}/icon-192.png`,
  `${BASE_PATH}/icon-512.png`,
  `${BASE_PATH}/adhan1.mp3`
];

// Installation du service worker
self.addEventListener('install', event => {
  console.log('[SW] Installation...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Mise en cache des fichiers');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Activation du service worker
self.addEventListener('activate', event => {
  console.log('[SW] Activation...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Suppression ancien cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Interception des requêtes
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

// ========== GESTION DES NOTIFICATIONS EN BACKGROUND ==========

// Stocker les horaires de prière
let prayerTimes = {};
let prayerSettings = {};
let notificationTimers = [];

// Message depuis l'application
self.addEventListener('message', event => {
  console.log('[SW] Message reçu:', event.data);
  
  if (event.data.type === 'UPDATE_PRAYER_TIMES') {
    prayerTimes = event.data.times;
    prayerSettings = event.data.settings;
    console.log('[SW] Horaires mis à jour:', prayerTimes);
    console.log('[SW] Paramètres:', prayerSettings);
    
    // Planifier toutes les notifications
    schedulePrayerNotifications();
    
    // Confirmer à l'app
    event.ports[0].postMessage({
      type: 'PRAYERS_SCHEDULED',
      success: true
    });
  }
  
  if (event.data.type === 'TEST_NOTIFICATION') {
    console.log('[SW] Test notification demandé');
    showNotification('Test', 'Ceci est un test', '🧪');
    
    // Jouer l'adhan (envoyer message à l'app)
    self.clients.matchAll().then(clients => {
      clients.forEach(client => {
        client.postMessage({ type: 'PLAY_ADHAN' });
      });
    });
  }
});

// Planifier les notifications
function schedulePrayerNotifications() {
  console.log('[SW] Planification des notifications...');
  
  // Annuler les anciens timers
  notificationTimers.forEach(timer => clearTimeout(timer));
  notificationTimers = [];
  
  if (!prayerTimes || Object.keys(prayerTimes).length === 0) {
    console.log('[SW] Pas d\'horaires disponibles');
    return;
  }
  
  const now = new Date();
  const prayers = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
  const prayerNames = {
    fajr: { fr: 'Fajr (Aube)', icon: '🌅' },
    dhuhr: { fr: 'Dhuhr (Midi)', icon: '☀️' },
    asr: { fr: 'Asr (Après-midi)', icon: '🌤️' },
    maghrib: { fr: 'Maghrib (Coucher)', icon: '🌆' },
    isha: { fr: 'Isha (Nuit)', icon: '🌙' }
  };
  
  prayers.forEach(prayer => {
    // Vérifier si la prière est activée
    if (!prayerSettings[prayer]) {
      console.log(`[SW] ${prayer} désactivée, ignorée`);
      return;
    }
    
    const time = prayerTimes[prayer];
    if (!time) {
      console.log(`[SW] Pas d'horaire pour ${prayer}`);
      return;
    }
    
    try {
      const [hours, minutes] = time.split(':').map(Number);
      const prayerDate = new Date();
      prayerDate.setHours(hours, minutes, 0, 0);
      
      // Si l'heure est passée, planifier pour demain
      if (prayerDate <= now) {
        prayerDate.setDate(prayerDate.getDate() + 1);
      }
      
      const delay = prayerDate.getTime() - now.getTime();
      const delayMinutes = Math.round(delay / 1000 / 60);
      
      console.log(`[SW] ${prayer} à ${time} dans ${delayMinutes} min`);
      
      // Créer le timer
      const timer = setTimeout(() => {
        console.log(`[SW] 🔔 DÉCLENCHEMENT ${prayer}`);
        
        // Afficher la notification
        const prayerInfo = prayerNames[prayer];
        showNotification(
          `🕌 ${prayerInfo.icon} ${prayerInfo.fr}`,
          `C'est l'heure de la prière - ${time}`,
          prayer
        );
        
        // Envoyer message à l'app pour jouer l'adhan
        self.clients.matchAll().then(clients => {
          clients.forEach(client => {
            client.postMessage({
              type: 'PLAY_ADHAN',
              prayer: prayer,
              time: time
            });
          });
        });
        
        // Replanifier pour demain
        setTimeout(() => schedulePrayerNotifications(), 2000);
        
      }, delay);
      
      notificationTimers.push(timer);
      
    } catch (error) {
      console.error(`[SW] Erreur planification ${prayer}:`, error);
    }
  });
  
  console.log(`[SW] ${notificationTimers.length} notifications planifiées`);
}

// Afficher une notification
function showNotification(title, body, tag) {
  console.log('[SW] Affichage notification:', title);
  
  const options = {
    body: body,
    icon: `${BASE_PATH}/icon-512.png`,
    badge: `${BASE_PATH}/icon-192.png`,
    tag: tag,
    requireInteraction: true,
    vibrate: [200, 100, 200, 100, 200],
    data: { url: BASE_PATH }
  };
  
  return self.registration.showNotification(title, options);
}

// Clic sur notification
self.addEventListener('notificationclick', event => {
  console.log('[SW] Notification cliquée');
  event.notification.close();
  
  // Ouvrir ou focus l'app
  event.waitUntil(
    self.clients.matchAll({ type: 'window' }).then(clients => {
      // Si l'app est déjà ouverte, la focus
      for (let client of clients) {
        if (client.url.includes(BASE_PATH) && 'focus' in client) {
          return client.focus();
        }
      }
      // Sinon, ouvrir l'app
      if (self.clients.openWindow) {
        return self.clients.openWindow(BASE_PATH);
      }
    })
  );
});

// Fermeture de notification
self.addEventListener('notificationclose', event => {
  console.log('[SW] Notification fermée');
});

// Au démarrage du service worker, recharger les paramètres
self.addEventListener('activate', event => {
  console.log('[SW] Service Worker activé');
  
  // Envoyer message aux clients pour récupérer les horaires
  event.waitUntil(
    self.clients.matchAll().then(clients => {
      clients.forEach(client => {
        client.postMessage({ type: 'REQUEST_PRAYER_TIMES' });
      });
    })
  );
});

console.log('[SW] Service Worker chargé');
