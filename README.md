# Fenice — PWA
PWA per allenamento, nutrizione e studio. Carica i file in **root** del repository, attiva GitHub Pages su **Settings → Pages** (Branch `main`, root `/`) e apri l'URL.

## File principali
- `index.html` — Home con pulsante verso il piano completo, timer e forza aggiornamento.
- `fenice_diet_training_12w_all_ccapi.html` — Dieta 12 settimane + Allenamento + Galleria esercizi con **foto CC** (thumbnails da Wikimedia API) + Legenda + Calendari.
- `sw.js` — Service Worker (cache `fenice-v6`).
- `manifest.webmanifest`, `icon-192.png`, `icon-512.png` — PWA installabile.
- `.nojekyll` — disattiva Jekyll su GitHub Pages.
- `404.html` — redirect SPA.

## Passi
1. Upload di TUTTI i file in root del repo.
2. Settings → Pages → Branch: `main` (root). Save.
3. Hard refresh / Forza aggiornamento dalla Home.
