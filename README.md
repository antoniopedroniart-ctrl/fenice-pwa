# Fenice • Fitness & Study (PWA)

PWA per allenamento, nutrizione e studio con strumenti offline.
Questa cartella è pronta per **GitHub Pages**.

## Distribuzione rapida (GitHub Pages)
1. Crea un repository su GitHub (es. `fenice-pwa`).
2. Carica **tutti** i file di questa cartella nella root del repo.
3. Vai su **Settings → Pages** e imposta:
   - Source: **Deploy from a branch**
   - Branch: **main** / `/ (root)`
4. Attendi 1–2 minuti: il sito sarà disponibile su `https://<utente>.github.io/<repo>/`

## Aggiunta alla schermata Home
- **Android/Chrome**: apri l’URL, menu ⋮ → *Installa app*.
- **iOS/Safari**: tasto Condividi → *Aggiungi a schermata Home*.

## Aggiornamenti
- Ho impostato `CACHE = 'fenice-v2'` in `sw.js`. Se modifichi i file chiave, incrementa la versione per forzare l’update del service worker.
- Se non vedi cambiamenti: hard refresh, cancella dati sito dal browser o *Uninstall app* e reinstalla.

## File
- `index.html` — App principale (tabs: Home, Nutrizione, Allenamento, Programmazione, Strumenti).
- `manifest.webmanifest` — Manifest PWA.
- `sw.js` — Service Worker con cache offline.
- `icon-192.png`, `icon-512.png` — Icone app.
- `.nojekyll` — Disattiva Jekyll su Pages.
- `404.html` — Reindirizza alla home per i deep link (utile su PWA).

## QR codes (opzionali)
Una volta online, puoi generare un QR verso l'URL pubblico e sostituire gli URL placeholder nella sezione **QR Hub** dell'app.

## Deploy KIT incluso
- **GitHub Actions**: `.github/workflows/pages.yml` — ogni push su `main` pubblica automaticamente su GitHub Pages.
- **Netlify**: `netlify.toml` — trascina la cartella su app.netlify.com e pubblica.
- **Vercel**: `vercel.json` — Importa il repo su vercel.com, Build Command vuoto (statico).

### Passi rapidi (GitHub)
1. Crea repo (privato o pubblico), branch `main`.
2. Carica tutti i file (inclusa cartella `.github/`).
3. Vai su **Settings → Pages**: “Build and deployment → Source: GitHub Actions”.
4. Fai un push su `main`: al termine vedrai l’URL della pagina nel tab **Actions** e in **Pages**.
