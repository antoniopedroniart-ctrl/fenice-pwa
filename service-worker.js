
const CACHE = 'fenice-v13';
const ASSETS = [
  './index.html',
  './fenice_diet_training_12w_all_ccapi.html',
  './tools.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
,
  './Fenice_Work.ics',
  './Fenice_Training.ics',
  './Fenice_Study.ics',
  './Fenice_Classes.ics',
  './Fenice_Internship.ics'
,
  './study.html'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE ? caches.delete(k) : null)))
  );
  self.clients.claim();
});

// App-shell: serve cached for navigations, then network
self.addEventListener('fetch', (e) => {
  const req = e.request;
  const url = new URL(req.url);
  // Navigation requests -> return cached index for SPA routing
  if (req.mode === 'navigate') {
    e.respondWith(
      caches.match('./index.html').then(resp => resp || fetch('./index.html'))
    );
    return;
  }
  // Other requests
  e.respondWith(
    caches.match(req).then(resp => resp || fetch(req).then(r => {
      const copy = r.clone();
      caches.open(CACHE).then(c => c.put(req, copy));
      return r;
    }).catch(() => caches.match('./index.html')))
  );
});


self.addEventListener('message', (event) => {
  if(event.data && event.data.type === 'SKIP_WAITING'){
    self.skipWaiting();
  }
});
