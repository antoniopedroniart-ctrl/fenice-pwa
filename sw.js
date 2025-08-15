const CACHE='fenice-v7';
const ASSETS=['./','./index.html','./fenice_diet_training_12w_all_ccapi.html','./tools.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));});
self.addEventListener('activate',e=>{e.waitUntil((async()=>{const ks=await caches.keys();await Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)));await self.clients.claim();})());});
self.addEventListener('fetch',e=>{e.respondWith((async()=>{const cached=await caches.match(e.request);try{const fresh=await fetch(e.request);caches.open(CACHE).then(c=>c.put(e.request,fresh.clone()));return fresh;}catch(err){return cached||Response.error();}})());});