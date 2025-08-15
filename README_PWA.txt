# Fenice PWA (Pages-ready)

## Cosa contiene
- index.html (Home)
- fenice_diet_training_12w_all_ccapi.html (Dieta 12w + Allenamento con contatori + Reset)
- tools.html (Timer)
- manifest.json (PWA)
- service-worker.js (cache + fallback)
- icons/icon-192.png, icons/icon-512.png

## Istruzioni (GitHub Pages)
1. Carica **tutti** i file nella **root** del branch di Pages (es. `main`).
2. Commit & push.
3. Apri il sito e fai **hard refresh** (Cmd+Shift+R / Ctrl+F5).
4. Se non vedi il prompt "Aggiungi alla schermata home":
   - Mobile Chrome: Menu → Aggiungi alla schermata Home.
   - Mobile Safari: Share → Add to Home Screen.

## Note
- Il service worker serve `index.html` come app shell per la navigazione (SPA friendly).
- Se cambi i file, incrementa la versione del cache in `service-worker.js` (es. `fenice-v2`) e ricarica.
