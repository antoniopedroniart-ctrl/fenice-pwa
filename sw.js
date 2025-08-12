const CACHE = 'fenice-v4';
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./assets/anterior_muscles.png",
  "./assets/posterior_muscles.png",
  "./assets/arms.png",
  "./assets/shoulders.png",
  "./assets/core.png",
  "./assets/legs.png",
  "./assets/bench_press.png",
  "./assets/back_squat.png",
  "./assets/pull_up.png",
  "./assets/shoulder_press.png",
  "./assets/plank.png",
  "./assets/biceps_curl.png"
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
  e.respondWith(
    caches.match(e.request).then(res=> res || fetch(e.request).then(resp=>{
      try {
        const copy = resp.clone();
        caches.open(CACHE).then(c=>c.put(e.request, copy)).catch(()=>{});
      } catch(e){}
      return resp;
    }).catch(()=>res))
  );
});
