const CACHE_NAME = 'tarjeta-v1';
const assets = [
  './',
  './index.html',
  './style.css',
  './images/logo_2.jpeg',
  './images/logo.jpg',
  './images/QR.png'
];

// Instalar y guardar en caché
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(assets))
  );
});

// Servir desde caché cuando no hay red
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
