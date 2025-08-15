const CACHE = 'fenice-v6';
const ASSETS = [
  './',
  './index.html',
  './fenice_diet_training_12w.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './Fenice_Work.ics',
  './Fenice_Training.ics',
  './Fenice_Study.ics',
  './Fenice_Classes.ics',
  './Fenice_Internship.ics'
];

self.addEventListener('install', e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
});

self.addEventListener('activate', e=>{
  e.waitUntil((async()=>{
    const keys = await caches.keys();
    await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e=>{
  e.respondWith((async()=>{
    const cached = await caches.match(e.request);
    try{
      const fresh = await fetch(e.request);
      const copy = fresh.clone();
      caches.open(CACHE).then(c=>c.put(e.request, copy)).catch(()=>{});
      return fresh;
    }catch(err){
      return cached || Response.error();
    }
  })());
});
