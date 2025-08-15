# Fenice PWA — Deploy & Maintenance

Questo repository contiene la PWA **Fenice** con:
- `index.html` (home con pulsante **Piano 12 settimane** e strumenti)
- `fenice_diet_training_12w.html` (dieta 12 settimane + allenamento + legenda + calendari)
- File calendario `.ics`: `Fenice_Work.ics`, `Fenice_Training.ics`, `Fenice_Study.ics`, `Fenice_Classes.ics`, `Fenice_Internship.ics`
- `sw.js` (service worker **fenice-v5**, cache-busting)
- `manifest.webmanifest`, icone (`icon-192.png`, `icon-512.png`)
- `404.html` (pagina di cortesia per GitHub Pages)

> **Timezone:** Europe/Rome

---

## 1) Pubblicazione con GitHub Pages
1. Vai su **Settings → Pages**.
2. In **Build and deployment** seleziona **Deploy from a branch**.
3. **Branch:** `main` • **Folder:** `/ (root)` → **Save**.
4. L’URL pubblico apparirà sotto (“Your site is live”).

> Alternativa: **GitHub Actions**. In tal caso aggiungi un workflow `pages.yml` e deploya ad ogni push.

---

## 2) Aggiornare i contenuti
- Sovrascrivi i file modificati (ad es. `fenice_diet_training_12w.html` o i `.ics`) e fai **Commit** su `main`.
- Se hai già la PWA installata, dal menu **Strumenti → Forza aggiornamento** (svuota cache + ricarica).
- In caso di dubbi: disinstalla la PWA dal telefono, riapri l’URL e **Installa** di nuovo.

**Cache versioning:** `sw.js` usa la cache `fenice-v5`. Cambiando il nome (es. `fenice-v6`) forzi l’update per tutti.

---

## 3) Struttura dei file
```
/
├── index.html                         # Home PWA (pulsante Piano 12 settimane)
├── fenice_diet_training_12w.html      # Dieta 12 settimane + Allenamento + Legenda + Calendari
├── Fenice_Work.ics                    # Lavoro
├── Fenice_Training.ics                # Allenamenti
├── Fenice_Study.ics                   # Studio
├── Fenice_Classes.ics                 # Lezioni (placeholder giorni)
├── Fenice_Internship.ics              # Tirocinio 2026
├── sw.js                              # Service worker (cache-busting)
├── manifest.webmanifest               # Manifest PWA
├── icon-192.png                       # Icona
├── icon-512.png                       # Icona
└── 404.html                           # Pagina 404
```

---

## 4) Calendari dinamici (consigliato: **sottoscrizione**)
Per ricevere aggiornamenti automatici dei calendari:
1. Carica/aggiorna i `.ics` in root.
2. Sottoscrivi dal tuo Calendar con l’URL completo, ad esempio:
   - `https://<utente>.github.io/<repo>/Fenice_Work.ics`
   - `https://<utente>.github.io/<repo>/Fenice_Training.ics`
   - `https://<utente>.github.io/<repo>/Fenice_Study.ics`
   - `https://<utente>.github.io/<repo>/Fenice_Classes.ics`
   - `https://<utente>.github.io/<repo>/Fenice_Internship.ics`

> Google Calendar: **Altri calendari → Da URL**.  
> Apple Calendar: **File → Nuova iscrizione calendario…**

---

## 5) FAQ / Troubleshooting
**Non vedo gli aggiornamenti.**  
- Hard refresh (Win: `Ctrl+F5` • Mac: `Cmd+Shift+R`) o **Strumenti → Forza aggiornamento**.
- Verifica che `sw.js` sia l’ultima versione (cache `fenice-v5`).

**L’Indice rapido non naviga.**  
- Assicurati di usare l’HTML più recente. I link `href="#..."` sono intercettati dal router JS.

**I .ics non si importano.**  
- Scaricali e importali manualmente. Per aggiornamenti automatici, usa la **sottoscrizione via URL**.

**Come aggiungere un nuovo link nel menu?**  
- Modifica `index.html` e inserisci un nuovo `<a class="btn" href="...">` nella card “Strumenti” o crea una nuova card.

---

## 6) Note operative
- I pasti sono MRGE-friendly (no pomodoro/agrumi), 4 per giorno, con orari adattati a ferie/doppi turni/lezioni.  
- La scheda allenamento include illustrazioni e link a ricerche YouTube per forma corretta.  
- Per modifiche su giorni/turni/lezioni, rigenera e **sostituisci i `.ics`**.

---

## 7) Licenza
Contenuti personali ad uso privato. Non distribuire senza consenso.
