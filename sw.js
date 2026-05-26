const CACHE = 'carmotors-v1';
const ARCHIVOS = [
  '/',
  '/index.html',
  '/ventas.html',
  '/clientes.html',
  '/ordenes.html',
  '/admin.html',
  '/agendar.html'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ARCHIVOS))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      return cached || fetch(e.request);
    })
  );
});
