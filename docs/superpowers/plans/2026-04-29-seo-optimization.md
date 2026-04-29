# SEO Optimization — Play Innovation Group — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ottimizzare il sito playinnovationgroup.com per keyword "costruzione campi padel/tennis/calcio/pickleball/coperture sportive" con nuova pagina `/prodotti/calcio` e schema LocalBusiness completo.

**Architecture:** 17 task divisi per 3 agenti (seo-technical, seo-content, seo-pages) su file disgiunti. Il seo-content agent può partire in parallelo a seo-technical. Il seo-pages agent può partire in parallelo a entrambi — tutti i file sono indipendenti.

**Tech Stack:** React 19, react-helmet-async, JSON-LD (Schema.org), Vite, Tailwind CSS, i18n tramite it.json

---

## File Map

**seo-technical:** `index.html`, `public/sitemap.xml`

**seo-content:** `src/i18n/locales/it.json`

**seo-pages:** `src/components/CalcioPage.jsx` (create), `src/App.jsx`, `src/components/Navbar.jsx`, `src/components/Footer.jsx`, `src/pages/Home.jsx`, `src/components/PadelPage.jsx`, `src/components/TennisPage.jsx`, `src/components/PickleballPage.jsx`, `src/components/MultisportPage.jsx`, `src/components/CoperturePage.jsx`, `src/components/CompanyPage.jsx`

---

## ═══ AGENT: seo-technical ═══

### Task 1: Aggiorna `index.html` — LocalBusiness schema + meta

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Sostituisci lo schema Organization con LocalBusiness**

Individua il blocco `<script type="application/ld+json">` esistente in `index.html` (righe 47-62) e sostituiscilo con questo:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "SportsActivityLocation"],
  "name": "Play Innovation Group",
  "legalName": "Edilpadel S.R.L.",
  "url": "https://www.playinnovationgroup.com",
  "logo": "https://www.playinnovationgroup.com/logo.png",
  "image": "https://www.playinnovationgroup.com/logo.png",
  "description": "Progettazione e costruzione di campi da padel, tennis, calcio, pickleball, multisport e coperture sportive in tutta Italia.",
  "telephone": "+39 3349967161",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via Michele Amari 39",
    "postalCode": "00179",
    "addressLocality": "Roma",
    "addressRegion": "RM",
    "addressCountry": "IT"
  },
  "areaServed": "IT",
  "sameAs": [
    "https://www.instagram.com/play.innovationgroup/",
    "https://www.facebook.com/people/Play-Innovation-Group/61584137487806/",
    "https://www.linkedin.com/in/play-innovation-a5a8b1392/"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+39 3349967161",
    "contactType": "sales",
    "availableLanguage": ["Italian", "English", "German", "French", "Spanish"]
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Costruzione Impianti Sportivi",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Costruzione Campi da Padel" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Costruzione Campi da Tennis" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Costruzione Campi da Calcio e Calcetto" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Costruzione Campi da Pickleball" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Coperture Sportive" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Costruzione Campi Multisport" } }
    ]
  }
}
</script>
```

- [ ] **Step 2: Aggiorna `<title>`, `<meta name="description">`, `<meta name="keywords">`**

Sostituisci le righe 8-11 di `index.html`:

```html
<!-- Primary Meta Tags -->
<title>Costruzione Campi Sportivi Professionali | Play Innovation Group</title>
<meta name="description" content="Progettiamo e costruiamo campi da padel, tennis, calcio, calcetto, pickleball e coperture sportive in tutta Italia. Soluzioni chiavi in mano per club e centri sportivi. Richiedi preventivo gratuito." />
<meta name="keywords" content="costruzione campi padel, costruzione campi tennis, costruzione campi calcio, costruzione campi calcetto, costruzione campi pickleball, coperture sportive, costruzione campi sportivi, impianti sportivi italia, campi multisport" />
```

- [ ] **Step 3: Aggiorna i meta Open Graph**

Sostituisci i meta og:title e og:description (righe 17-20):

```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.playinnovationgroup.com/" />
<meta property="og:title" content="Costruzione Campi Sportivi Professionali | Play Innovation Group" />
<meta property="og:description" content="Progettiamo e costruiamo campi da padel, tennis, calcio, pickleball e coperture sportive in tutta Italia. Soluzioni chiavi in mano per club e centri sportivi." />
```

- [ ] **Step 4: Aggiorna i meta Twitter**

Sostituisci le righe 30-34:

```html
<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="https://www.playinnovationgroup.com/" />
<meta name="twitter:title" content="Costruzione Campi Sportivi Professionali | Play Innovation Group" />
<meta name="twitter:description" content="Progettiamo e costruiamo campi da padel, tennis, calcio, pickleball e coperture sportive in tutta Italia. Soluzioni chiavi in mano per club e centri sportivi." />
<meta name="twitter:image" content="https://www.playinnovationgroup.com/logo.png" />
```

- [ ] **Step 5: Verifica build**

```bash
npm run build
```

Atteso: build completata senza errori.

- [ ] **Step 6: Commit**

```bash
git add index.html
git commit -m "seo: aggiorna index.html con LocalBusiness schema e meta ottimizzati"
```

---

### Task 2: Aggiorna `public/sitemap.xml` — aggiungi `/prodotti/calcio`

**Files:**
- Modify: `public/sitemap.xml`

- [ ] **Step 1: Aggiungi URL calcio e aggiorna lastmod**

Sostituisci l'intero contenuto di `public/sitemap.xml` con:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <url>
    <loc>https://www.playinnovationgroup.com/</loc>
    <lastmod>2026-04-29</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="it" href="https://www.playinnovationgroup.com/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://www.playinnovationgroup.com/" />
    <xhtml:link rel="alternate" hreflang="de" href="https://www.playinnovationgroup.com/" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://www.playinnovationgroup.com/" />
    <xhtml:link rel="alternate" hreflang="es" href="https://www.playinnovationgroup.com/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.playinnovationgroup.com/" />
  </url>

  <url>
    <loc>https://www.playinnovationgroup.com/prodotti/padel</loc>
    <lastmod>2026-04-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="it" href="https://www.playinnovationgroup.com/prodotti/padel" />
    <xhtml:link rel="alternate" hreflang="en" href="https://www.playinnovationgroup.com/prodotti/padel" />
    <xhtml:link rel="alternate" hreflang="de" href="https://www.playinnovationgroup.com/prodotti/padel" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://www.playinnovationgroup.com/prodotti/padel" />
    <xhtml:link rel="alternate" hreflang="es" href="https://www.playinnovationgroup.com/prodotti/padel" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.playinnovationgroup.com/prodotti/padel" />
  </url>

  <url>
    <loc>https://www.playinnovationgroup.com/prodotti/tennis</loc>
    <lastmod>2026-04-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="it" href="https://www.playinnovationgroup.com/prodotti/tennis" />
    <xhtml:link rel="alternate" hreflang="en" href="https://www.playinnovationgroup.com/prodotti/tennis" />
    <xhtml:link rel="alternate" hreflang="de" href="https://www.playinnovationgroup.com/prodotti/tennis" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://www.playinnovationgroup.com/prodotti/tennis" />
    <xhtml:link rel="alternate" hreflang="es" href="https://www.playinnovationgroup.com/prodotti/tennis" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.playinnovationgroup.com/prodotti/tennis" />
  </url>

  <url>
    <loc>https://www.playinnovationgroup.com/prodotti/pickleball</loc>
    <lastmod>2026-04-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="it" href="https://www.playinnovationgroup.com/prodotti/pickleball" />
    <xhtml:link rel="alternate" hreflang="en" href="https://www.playinnovationgroup.com/prodotti/pickleball" />
    <xhtml:link rel="alternate" hreflang="de" href="https://www.playinnovationgroup.com/prodotti/pickleball" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://www.playinnovationgroup.com/prodotti/pickleball" />
    <xhtml:link rel="alternate" hreflang="es" href="https://www.playinnovationgroup.com/prodotti/pickleball" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.playinnovationgroup.com/prodotti/pickleball" />
  </url>

  <url>
    <loc>https://www.playinnovationgroup.com/prodotti/calcio</loc>
    <lastmod>2026-04-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="it" href="https://www.playinnovationgroup.com/prodotti/calcio" />
    <xhtml:link rel="alternate" hreflang="en" href="https://www.playinnovationgroup.com/prodotti/calcio" />
    <xhtml:link rel="alternate" hreflang="de" href="https://www.playinnovationgroup.com/prodotti/calcio" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://www.playinnovationgroup.com/prodotti/calcio" />
    <xhtml:link rel="alternate" hreflang="es" href="https://www.playinnovationgroup.com/prodotti/calcio" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.playinnovationgroup.com/prodotti/calcio" />
  </url>

  <url>
    <loc>https://www.playinnovationgroup.com/prodotti/multisport</loc>
    <lastmod>2026-04-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="it" href="https://www.playinnovationgroup.com/prodotti/multisport" />
    <xhtml:link rel="alternate" hreflang="en" href="https://www.playinnovationgroup.com/prodotti/multisport" />
    <xhtml:link rel="alternate" hreflang="de" href="https://www.playinnovationgroup.com/prodotti/multisport" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://www.playinnovationgroup.com/prodotti/multisport" />
    <xhtml:link rel="alternate" hreflang="es" href="https://www.playinnovationgroup.com/prodotti/multisport" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.playinnovationgroup.com/prodotti/multisport" />
  </url>

  <url>
    <loc>https://www.playinnovationgroup.com/prodotti/coperture</loc>
    <lastmod>2026-04-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="it" href="https://www.playinnovationgroup.com/prodotti/coperture" />
    <xhtml:link rel="alternate" hreflang="en" href="https://www.playinnovationgroup.com/prodotti/coperture" />
    <xhtml:link rel="alternate" hreflang="de" href="https://www.playinnovationgroup.com/prodotti/coperture" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://www.playinnovationgroup.com/prodotti/coperture" />
    <xhtml:link rel="alternate" hreflang="es" href="https://www.playinnovationgroup.com/prodotti/coperture" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.playinnovationgroup.com/prodotti/coperture" />
  </url>

  <url>
    <loc>https://www.playinnovationgroup.com/azienda</loc>
    <lastmod>2026-04-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="it" href="https://www.playinnovationgroup.com/azienda" />
    <xhtml:link rel="alternate" hreflang="en" href="https://www.playinnovationgroup.com/azienda" />
    <xhtml:link rel="alternate" hreflang="de" href="https://www.playinnovationgroup.com/azienda" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://www.playinnovationgroup.com/azienda" />
    <xhtml:link rel="alternate" hreflang="es" href="https://www.playinnovationgroup.com/azienda" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.playinnovationgroup.com/azienda" />
  </url>

</urlset>
```

- [ ] **Step 2: Commit**

```bash
git add public/sitemap.xml
git commit -m "seo: aggiunge /prodotti/calcio a sitemap e aggiorna lastmod"
```

---

## ═══ AGENT: seo-content ═══

### Task 3: Aggiorna `it.json` — titoli, subtitle e descrizioni pagine prodotto

**Files:**
- Modify: `src/i18n/locales/it.json`

Tutte le modifiche sono nel file `src/i18n/locales/it.json`. Apri il file e applica i seguenti cambiamenti.

- [ ] **Step 1: Aggiorna `hero.subheadline`**

Trova:
```json
"subheadline": "Dove ingegneria, architettura moderna e visione prendono forma. Realizziamo impianti e coperture progettati per durare e per massimizzare le performance."
```

Sostituisci con:
```json
"subheadline": "Costruiamo impianti sportivi e coperture premium in tutta Italia: campi da padel, tennis, calcio, pickleball e multisport progettati per durare e massimizzare le performance."
```

- [ ] **Step 2: Aggiorna `padelPage.title` e `padelPage.subtitle`**

Trova:
```json
"title": "Campi da Padel",
"subtitle": "Spettacolo visivo e ingegneria estrema. Il padel premium firmato PlayInnovation.",
```

Sostituisci con:
```json
"title": "Costruzione Campi da Padel Professionali",
"subtitle": "Progettazione e costruzione campi da padel panoramici, standard e indoor. Strutture certificate per club, resort e centri sportivi in tutta Italia.",
```

- [ ] **Step 3: Aggiorna `padelPage.description`**

Trova:
```json
"description": "I nostri campi da padel non sono semplici recinzioni, ma ecosistemi sportivi avanzati. Dalla progettazione del layout strutturale fino alla scelta dei microdettagli (come l'inclinazione dei fari e lo spessore dei vetri), ogni componente è pensato per la massima giocabilità e per resistere agli agenti atmosferici più aggressivi.\n\nChe si tratti del modello Extra Solid, progettato per il massimo carico di lavoro, o del Super Panoramico dedicato al puro spettacolo visivo, garantiamo un'installazione millimetrica che eleverà il prestigio del tuo club sportivo."
```

Sostituisci con:
```json
"description": "La costruzione di un campo da padel richiede precisione millimetrica: dalla scelta dell'acciaio per la struttura portante all'angolazione dei fari LED, ogni dettaglio incide sulla qualità del gioco. PlayInnovation Group realizza campi da padel panoramici, super panoramici e standard in tutta Italia, garantendo installazioni conformi alle normative WPT e FITP.\n\nChe si tratti di costruire il tuo primo campo padel o di realizzare un impianto multi-campo per un club sportivo, offriamo soluzioni chiavi in mano che includono progettazione, autorizzazioni, installazione e collaudo. Ogni campo viene consegnato pronto all'uso con garanzia sulle strutture e supporto post-vendita."
```

- [ ] **Step 4: Aggiorna `tennisPage.title` e `tennisPage.subtitle`**

Trova:
```json
"title": "Campi da Tennis",
"subtitle": "Dal circolo amatoriale ai tornei ATP. Superfici ingegnerizzate per la perfezione del rimbalzo.",
```

Sostituisci con:
```json
"title": "Costruzione Campi da Tennis",
"subtitle": "Realizzazione campi da tennis indoor e outdoor in terra battuta, resina acrilica ed erba sintetica. Certificati ITF per ogni livello di gioco.",
```

- [ ] **Step 5: Aggiorna `tennisPage.description`**

Trova:
```json
"description": "Sappiamo che nel tennis il millimetro fa la differenza. Per questo realizziamo campi curando in modo maniacale le pendenze per il deflusso dell'acqua e la omogeneità dei manti.\n\nSia che si tratti del fascino senza tempo della terra battuta rossa (realizzata con i migliori sottomanti porosi e vulcanici) o dell'high-tech delle resine sintetiche (con shock pad integrati per ridurre i traumi articolari), curiamo l'installazione di recinzioni, impianti d'illuminazione e componenti accessori per fornire un impianto premium senza pari."
```

Sostituisci con:
```json
"description": "La costruzione di un campo da tennis richiede competenze specifiche: pendenze millimetriche per il drenaggio, sottomanti certificati ITF e superfici omogenee che garantiscono il rimbalzo corretto a ogni velocità di gioco. PlayInnovation Group realizza campi da tennis indoor e outdoor di ogni livello, dal circolo amatoriale agli impianti per tornei internazionali.\n\nOffriamo tre tipologie di superficie — terra battuta rossa, resina acrilica e erba sintetica — ognuna con sistemi di sottofondo progettati per ridurre i traumi articolari. L'installazione comprende recinzioni, impianti LED e il collaudo finale secondo le normative ITF."
```

- [ ] **Step 6: Aggiorna `pickleballPage.title` e `pickleballPage.subtitle`**

Trova:
```json
"title": "Campi da Pickleball",
"subtitle": "Il format sportivo con la crescita più rapida al mondo. Progettati per la pura azione.",
```

Sostituisci con:
```json
"title": "Costruzione Campi da Pickleball",
"subtitle": "Progettazione e installazione campi da pickleball indoor e outdoor con superficie acrilica multistrato. Il format sportivo che cresce più velocemente al mondo.",
```

- [ ] **Step 7: Aggiorna `pickleballPage.description`**

Trova:
```json
"description": "Il Pickleball richiede una superficie che offra il giusto compromesso tra scivolamento e grip, con una visibilità perfetta del tracciato. Installiamo campi sia indoor che outdoor ottimizzando gli spazi a disposizione.\n\nLe nostre superfici sintetiche multistrato sono studiate per attutire gli urti, ridurre la fatica dei giocatori e garantire un rimbalzo accurato e costante della pallina in ogni zona del campo. La dimensione compatta del campo ci permette di trasformare facilmente aree in disuso in centri di profitto altamente redditizi per il tuo club."
```

Sostituisci con:
```json
"description": "La costruzione di un campo da pickleball rappresenta oggi uno degli investimenti più redditizi nel settore degli impianti sportivi: dimensioni compatte (13,41m × 6,10m), costi di realizzazione contenuti e domanda in forte crescita in tutta Italia. PlayInnovation Group installa campi da pickleball indoor e outdoor con superfici acriliche multistrato certificate.\n\nI nostri impianti includono tracciatura ad alta visibilità UV-resistant, reti professionali con sistema di tensionamento a cricchetto e pavimentazioni studiate per attutire gli urti. Trasformiamo facilmente spazi esistenti in centri di profitto, sovrapponendo il tracciato pickleball su superfici già in uso."
```

- [ ] **Step 8: Aggiorna `coperturePage.title` e `coperturePage.subtitle`**

Trova:
```json
"title": "Coperture Sportive",
"subtitle": "Schermatura totale, luce perfetta. Massimizza la rendita del tuo impianto.",
```

Sostituisci con:
```json
"title": "Coperture Sportive per Campi da Padel e Tennis",
"subtitle": "Tensostrutture e palloni pressostatici per coprire campi sportivi indoor. Giocabilità garantita 365 giorni l'anno con efficienza energetica massima.",
```

- [ ] **Step 9: Aggiorna `coperturePage.description`**

Trova:
```json
"description": "Una copertura sportiva professionale trasforma un campo stagionale in una struttura a reddito continuo 365 giorni all'anno, indipendentemente dalle condizioni meteorologiche. Progettiamo e installiamo coperture fisse e pressostatiche dal design contemporaneo e dall'elevata efficienza energetica.\n\nLe nostre tensostrutture premium sono realizzate con membrane in PVC a doppia spalmatura, specificamente trattate per l'isolamento termico e per mitigare l'effetto condensa. Grazie alla progettazione su misura, garantiamo altezze di giuoco ottimali per gli standard WPT, ITF e FITP, coniugando funzionalità estrema ed estetica architettonica."
```

Sostituisci con:
```json
"description": "La realizzazione di una copertura sportiva trasforma un campo stagionale in un impianto a reddito 365 giorni l'anno: ogni ora di pioggia diventa un'ora di prenotazioni. PlayInnovation Group progetta e installa coperture per campi da padel, tennis, calcio e multisport con strutture in acciaio, legno lamellare o sistemi pressostatici.\n\nLe nostre tensostrutture premium utilizzano membrane in PVC a doppia spalmatura da 900g/mq, trattate per l'isolamento termico e anti-condensa. Garantiamo altezze di gioco conformi agli standard WPT, ITF e FITP, con progettazione su misura che coniuga efficienza energetica e impatto architettonico."
```

- [ ] **Step 10: Commit parziale**

```bash
git add src/i18n/locales/it.json
git commit -m "seo: ottimizza titoli, subtitle e descrizioni pagine prodotto in it.json"
```

---

### Task 4: Aggiorna `it.json` — cleanup multisport (rimuovi riferimenti calcio)

**Files:**
- Modify: `src/i18n/locales/it.json`

- [ ] **Step 1: Aggiorna `multisportPage.title` e `multisportPage.subtitle`**

Trova:
```json
"title": "Campi Multisport & Calcio",
"subtitle": "Unico spazio, infinite possibilità. Ingegneria per la versatilità sportiva.",
```

Sostituisci con:
```json
"title": "Costruzione Campi Multisport",
"subtitle": "Realizzazione campi polivalenti per basket, pallavolo, tennis e hockey. Un unico spazio, infinite discipline sportive.",
```

- [ ] **Step 2: Aggiorna `multisportPage.description`**

Trova:
```json
"description": "Ottimizzare lo spazio è fondamentale per scuole, comuni e centri sportivi polivalenti. Progettiamo e realizziamo aree multisport che permettono di praticare calcio a 5, basket, pallavolo e tennis sulla stessa superficie, abbattendo i costi di gestione senza compromessi sulle performance.\n\nScegliamo manti polivalenti ad alta durabilità (resine o erba sintetica a ridotta manutenzione) resistenti al calpestio intensivo e all'utilizzo con calzature diverse. Integrando attrezzature convertibili e recinzioni anti-scavalco, creiamo arene sicure, resistenti al vandalismo e pronte all'uso 365 giorni l'anno."
```

Sostituisci con:
```json
"description": "La costruzione di un campo multisport è la soluzione ideale per scuole, comuni e centri sportivi polivalenti che vogliono massimizzare lo spazio disponibile senza rinunciare alla qualità. PlayInnovation Group realizza impianti che permettono di praticare basket, pallavolo, tennis e hockey da sala sulla stessa superficie.\n\nUtilizziamo pavimentazioni poliuretaniche e resine certificate FIBA, con sistemi di tracciatura multicolore per identificare chiaramente ogni disciplina. Recinzioni anti-scavalco, canestri integrati, reti regolabili e sistemi di illuminazione LED completano ogni installazione chiavi in mano."
```

- [ ] **Step 3: Aggiorna `multisportPage.features` (rimuovi calcio)**

Trova:
```json
"features": [
    "Superfici polivalenti certificate per basket, volley, calcetto e tennis.",
    "Erba sintetica di altissima durabilità con intaso prestazionale per campi da Calcio a 5/7/11.",
    "Sistemi di tracciatura multicolore per una chiara identificazione di ogni sport.",
    "Strutture accessorie: porte integrate con canestri, reti regolabili e panchine.",
    "Recinzioni a pannelli rigidi ad altissima resistenza perimetrale e reti para-palloni."
],
```

Sostituisci con:
```json
"features": [
    "Superfici polivalenti certificate FIBA per basket, pallavolo, tennis e hockey da sala.",
    "Pavimentazioni poliuretaniche antitrauma senza giunte per massimo assorbimento degli urti.",
    "Sistemi di tracciatura multicolore per la chiara identificazione di ogni disciplina sportiva.",
    "Attrezzature convertibili: canestri pieghevoli, porte integrate, reti regolabili e panchine.",
    "Recinzioni a pannelli rigidi anti-vandalismo h 4.00m con trattamento anticorrosione."
],
```

- [ ] **Step 4: Aggiorna `multisportPage.surfaces.items` (rimuovi Multi-Turf calcio)**

Trova:
```json
"items": [
    { "name": "Multi-Turf", "desc": "Erba sintetica 22mm specifica per calcio a 5 e tennis amatoriale.", "color": "Verde / Rosso" },
    { "name": "Poliuretanica", "desc": "Superficie elastica senza giunte per basket e attività scolastiche.", "color": "Arancio / Blu" }
]
```

Sostituisci con:
```json
"items": [
    { "name": "Poliuretanica Premium", "desc": "Superficie elastica senza giunte, certificata FIBA per basket e pallavolo indoor.", "color": "Rosso / Blu / Arancio" },
    { "name": "Resina Acrilica", "desc": "Finitura liscia ad alta resistenza per ambienti outdoor, tennis e attività scolastiche.", "color": "Verde / Blu / Arancio" }
]
```

- [ ] **Step 5: Commit**

```bash
git add src/i18n/locales/it.json
git commit -m "seo: separa multisport da calcio, rimuove riferimenti calcetto dalla pagina multisport"
```

---

### Task 5: Aggiunge `calcioPage` in `it.json`

**Files:**
- Modify: `src/i18n/locales/it.json`

- [ ] **Step 1: Aggiungi la sezione `calcioPage` dopo `multisportPage`**

Apri `src/i18n/locales/it.json`. Individua la chiusura di `"multisportPage": { ... }` (la `}` che chiude la sezione), poi aggiungi una virgola e inserisci il seguente blocco:

```json
"calcioPage": {
    "title": "Costruzione Campi da Calcio e Calcetto",
    "subtitle": "Progettazione e realizzazione campi da calcio a 5, 7 e 11 con erba sintetica certificata FIFA. Soluzioni chiavi in mano per club, scuole e comuni.",
    "description": "La costruzione di un campo da calcio richiede competenze specifiche: sistemi di drenaggio certificati, sottofondi in macadam, geotessuti e manti in erba sintetica di ultima generazione. PlayInnovation Group realizza campi da calcio a 5, calcio a 7 e calcio a 11 in tutta Italia, per uso indoor e outdoor.\n\nI nostri impianti calcistici sono progettati per un utilizzo intensivo e continuativo: dalle scuole calcio ai centri sportivi comunali, dai club amatoriali alle strutture federali. Ogni installazione chiavi in mano include recinzioni, illuminazione LED, marcatura linee e collaudo finale conforme alle normative federali.",
    "features": [
        "Manti in erba sintetica certificata FIFA Quality Pro per calcio a 5, 7 e 11.",
        "Sistemi di drenaggio certificati con sottofondi in macadam e geotessuto anti-radice.",
        "Recinzioni perimetrali anti-scavalco h 4.00m con pannelli rigidi zincati a caldo.",
        "Illuminazione LED professionale con calcolo illuminotecnico per il gioco serale.",
        "Tracciatura multicolore per calcio a 5, calcio a 7 e calcio a 11 sulla stessa superficie.",
        "Fornitura e installazione porte in acciaio zincato omologate FIGC."
    ],
    "materials": {
        "title": "I Materiali",
        "subtitle": "Qualità e durabilità per il gioco più amato al mondo.",
        "items": [
            { "name": "Erba Sintetica", "desc": "Filati in polietilene texturizzato, altezza 40-60mm, certificazione FIFA Quality Pro.", "icon": "layers" },
            { "name": "Intaso", "desc": "Granuli di gomma EPDM riciclata con sabbia silicea per il massimo ammortizzamento e sicurezza.", "icon": "component" },
            { "name": "Recinzione", "desc": "Pannelli rigidi zincati a caldo h 4.00m con trattamento anticorrosione e rete para-palloni.", "icon": "layout" }
        ]
    },
    "surfaces": {
        "title": "I Nostri Manti",
        "subtitle": "Certificati per ogni disciplina calcistica.",
        "items": [
            { "name": "Erba Sintetica 40mm", "desc": "Ideale per calcio a 5 indoor e outdoor, bassa manutenzione e grip ottimale.", "color": "Verde / Bianco" },
            { "name": "Erba Sintetica 60mm", "desc": "Specifica per calcio a 7 e calcio a 11, certificata FIFA Quality Pro per l'uso federale.", "color": "Verde" },
            { "name": "Poliuretanica Indoor", "desc": "Superficie senza intaso per calcio a 5 indoor ad alta intensità e palasport.", "color": "Verde / Arancio" }
        ]
    }
}
```

- [ ] **Step 2: Verifica validità JSON**

```bash
node -e "JSON.parse(require('fs').readFileSync('src/i18n/locales/it.json', 'utf8')); console.log('JSON valido')"
```

Atteso: `JSON valido`

- [ ] **Step 3: Commit**

```bash
git add src/i18n/locales/it.json
git commit -m "seo: aggiunge sezione calcioPage in it.json"
```

---

### Task 6: Aggiorna `it.json` — footer productLinks + FAQ Home

**Files:**
- Modify: `src/i18n/locales/it.json`

- [ ] **Step 1: Aggiorna `footer.productLinks` — aggiungi calcio**

Trova:
```json
"productLinks": [
    "Campi Padel",
    "Campi Tennis",
    "Campi Pickleball",
    "Impianti Multisport",
    "Coperture Sportive"
],
```

Sostituisci con:
```json
"productLinks": [
    "Campi Padel",
    "Campi Tennis",
    "Campi Pickleball",
    "Campi da Calcio",
    "Impianti Multisport",
    "Coperture Sportive"
],
```

- [ ] **Step 2: Espandi `faq.items` — aggiungi 2 domande su calcio e multisport**

Trova la chiusura dell'array `faq.items` (l'ultimo oggetto termina con `}` prima del `]`). Aggiungi dopo l'ultimo item:

```json
,
{
    "q": "Quanto costa costruire un campo da calcio a 5?",
    "a": "Il costo di costruzione di un campo da calcio a 5 varia in base alle dimensioni, al tipo di manto in erba sintetica (FIFA Quality o standard) e alle opere civili necessarie. I prezzi partono indicativamente da 25.000€ per una superficie in erba sintetica standard. Contattateci per un preventivo su misura che includa drenaggio, recinzioni e illuminazione."
},
{
    "q": "Quali sport si possono praticare su un campo multisport?",
    "a": "Un campo multisport PlayInnovation può ospitare basket, pallavolo, tennis, badminton e hockey da sala sulla stessa superficie grazie alla tracciatura multicolore. I nostri impianti sono progettati per massimizzare la versatilità senza compromettere le performance di nessuna disciplina."
}
```

- [ ] **Step 3: Verifica validità JSON**

```bash
node -e "JSON.parse(require('fs').readFileSync('src/i18n/locales/it.json', 'utf8')); console.log('JSON valido')"
```

Atteso: `JSON valido`

- [ ] **Step 4: Commit**

```bash
git add src/i18n/locales/it.json
git commit -m "seo: aggiunge link calcio in footer e espande FAQ con campi calcio e multisport"
```

---

## ═══ AGENT: seo-pages ═══

### Task 7: Crea `src/components/CalcioPage.jsx`

**Files:**
- Create: `src/components/CalcioPage.jsx`

- [ ] **Step 1: Crea il file**

```jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProductPageTemplate from './ProductPageTemplate';
import QuoteSection from './QuoteSection';

const CalcioPage = () => {
    return (
        <div>
            <Helmet>
                <title>Costruzione Campi da Calcio e Calcetto su Erba Sintetica | Play Innovation Group</title>
                <meta name="description" content="Costruzione campi da calcio a 5, 7 e 11 con erba sintetica certificata FIFA. Campi calcetto indoor e outdoor chiavi in mano per club e centri sportivi. Preventivo gratuito." />
                <meta name="keywords" content="costruzione campi calcio, campi calcetto, calcio a 5, calcio a 7, erba sintetica calcio, campo calcio indoor, impianti calcistici, calcetto" />
                <link rel="canonical" href="https://www.playinnovationgroup.com/prodotti/calcio" />
                <script type="application/ld+json">{JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.playinnovationgroup.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Prodotti", "item": "https://www.playinnovationgroup.com/" },
                    { "@type": "ListItem", "position": 3, "name": "Campi da Calcio", "item": "https://www.playinnovationgroup.com/prodotti/calcio" }
                  ]
                })}</script>
                <script type="application/ld+json">{JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Service",
                  "name": "Costruzione Campi da Calcio e Calcetto",
                  "description": "Progettazione e costruzione campi da calcio a 5, 7 e 11 con erba sintetica certificata FIFA. Soluzioni chiavi in mano per club, scuole e comuni in tutta Italia.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Play Innovation Group",
                    "url": "https://www.playinnovationgroup.com"
                  },
                  "areaServed": "IT",
                  "serviceType": "Costruzione Impianti Calcistici"
                })}</script>
                <script type="application/ld+json">{JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Quali sono le dimensioni di un campo da calcio a 5?",
                      "acceptedAnswer": { "@type": "Answer", "text": "Un campo da calcio a 5 regolamentare misura tra 25 e 42 metri di lunghezza e tra 16 e 25 metri di larghezza. La dimensione più comune per uso amatoriale è 40m × 20m. Per il calcio a 7 le dimensioni sono 50-65m × 35-45m, mentre il calcio a 11 richiede 90-120m × 45-90m." }
                    },
                    {
                      "@type": "Question",
                      "name": "Cos'è la certificazione FIFA Quality Pro per l'erba sintetica?",
                      "acceptedAnswer": { "@type": "Answer", "text": "La certificazione FIFA Quality Pro è il massimo livello di qualità per i manti in erba sintetica da calcio. Garantisce prestazioni ottimali in termini di rimbalzo della palla, trazione, ammortizzamento degli urti e resistenza all'usura. I nostri manti certificati sono adatti a competizioni federali e allenamenti professionali." }
                    },
                    {
                      "@type": "Question",
                      "name": "Quanto costa costruire un campo da calcio a 5?",
                      "acceptedAnswer": { "@type": "Answer", "text": "Il costo di costruzione di un campo da calcio a 5 varia in base alle dimensioni, al tipo di manto in erba sintetica e alle opere civili necessarie. I prezzi partono indicativamente da 25.000€ per una superficie standard. Contattateci per un preventivo su misura che includa drenaggio, recinzioni e illuminazione." }
                    },
                    {
                      "@type": "Question",
                      "name": "Quanto dura l'erba sintetica di un campo da calcio?",
                      "acceptedAnswer": { "@type": "Answer", "text": "Un manto in erba sintetica di qualità, con la corretta manutenzione, ha una durata media di 8-12 anni. La longevità dipende dall'intensità d'uso, dalla qualità del manto installato e dalla manutenzione periodica (spazzolatura, integrazioni di intaso). Utilizziamo solo manti di produttori certificati FIFA." }
                    },
                    {
                      "@type": "Question",
                      "name": "Si può costruire un campo da calcio a 5 indoor?",
                      "acceptedAnswer": { "@type": "Answer", "text": "Sì, costruiamo campi da calcio a 5 sia indoor che outdoor. Per le soluzioni indoor utilizziamo pavimentazioni poliuretaniche senza intaso ad alta durabilità. Per gli impianti outdoor, i manti in erba sintetica con intaso in EPDM garantiscono giocabilità in qualsiasi condizione atmosferica." }
                    }
                  ]
                })}</script>
            </Helmet>
            <ProductPageTemplate
                titleKey="calcioPage.title"
                subtitleKey="calcioPage.subtitle"
                heroImage="/MULTISPORT/PHOTO-2026-03-18-16-07-47.jpeg"
                descriptionKey="calcioPage.description"
                featuresKey="calcioPage.features"
                materialsKey="calcioPage.materials"
                surfacesKey="calcioPage.surfaces"
                categoryKey="Multisport"
            />
            <QuoteSection />
        </div>
    );
};

export default CalcioPage;
```

- [ ] **Step 2: Verifica che il file sia creato correttamente**

```bash
ls src/components/CalcioPage.jsx
```

Atteso: file presente.

- [ ] **Step 3: Commit**

```bash
git add src/components/CalcioPage.jsx
git commit -m "feat: aggiunge CalcioPage con schema Service, FAQPage e BreadcrumbList"
```

---

### Task 8: Aggiorna `src/App.jsx` — lazy import + route calcio

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Aggiungi lazy import**

Individua il blocco lazy imports in `src/App.jsx` (righe 11-16):

```jsx
const PadelPage = lazy(() => import('./components/PadelPage'));
const TennisPage = lazy(() => import('./components/TennisPage'));
const PickleballPage = lazy(() => import('./components/PickleballPage'));
const MultisportPage = lazy(() => import('./components/MultisportPage'));
const CoperturePage = lazy(() => import('./components/CoperturePage'));
const CompanyPage = lazy(() => import('./components/CompanyPage'));
```

Sostituisci con:

```jsx
const PadelPage = lazy(() => import('./components/PadelPage'));
const TennisPage = lazy(() => import('./components/TennisPage'));
const PickleballPage = lazy(() => import('./components/PickleballPage'));
const CalcioPage = lazy(() => import('./components/CalcioPage'));
const MultisportPage = lazy(() => import('./components/MultisportPage'));
const CoperturePage = lazy(() => import('./components/CoperturePage'));
const CompanyPage = lazy(() => import('./components/CompanyPage'));
```

- [ ] **Step 2: Aggiungi la route**

Individua il blocco Routes in `src/App.jsx`. Trova:

```jsx
<Route path="/prodotti/pickleball" element={<PickleballPage />} />
<Route path="/prodotti/multisport" element={<MultisportPage />} />
```

Sostituisci con:

```jsx
<Route path="/prodotti/pickleball" element={<PickleballPage />} />
<Route path="/prodotti/calcio" element={<CalcioPage />} />
<Route path="/prodotti/multisport" element={<MultisportPage />} />
```

- [ ] **Step 3: Verifica build**

```bash
npm run build
```

Atteso: build completata senza errori.

- [ ] **Step 4: Commit**

```bash
git add src/App.jsx
git commit -m "feat: aggiunge route /prodotti/calcio in App.jsx"
```

---

### Task 9: Aggiorna `src/components/Navbar.jsx` — aggiunge link calcio

**Files:**
- Modify: `src/components/Navbar.jsx`

- [ ] **Step 1: Aggiorna dropdown desktop**

Individua nel dropdown desktop (righe 120-124):

```jsx
<Link to="/prodotti/padel" className="px-4 py-2.5 text-sm text-brand-offwhite hover:bg-white/5 hover:text-brand-cyan transition-colors block">Campi da Padel</Link>
<Link to="/prodotti/tennis" className="px-4 py-2.5 text-sm text-brand-offwhite hover:bg-white/5 hover:text-brand-cyan transition-colors block">Campi da Tennis</Link>
<Link to="/prodotti/pickleball" className="px-4 py-2.5 text-sm text-brand-offwhite hover:bg-white/5 hover:text-brand-cyan transition-colors block">Campi da Pickleball</Link>
<Link to="/prodotti/multisport" className="px-4 py-2.5 text-sm text-brand-offwhite hover:bg-white/5 hover:text-brand-cyan transition-colors block">Campi Multisport & Calcio</Link>
<Link to="/prodotti/coperture" className="px-4 py-2.5 text-sm text-brand-offwhite hover:bg-white/5 hover:text-brand-cyan transition-colors block">Coperture Sportive</Link>
```

Sostituisci con:

```jsx
<Link to="/prodotti/padel" className="px-4 py-2.5 text-sm text-brand-offwhite hover:bg-white/5 hover:text-brand-cyan transition-colors block">Campi da Padel</Link>
<Link to="/prodotti/tennis" className="px-4 py-2.5 text-sm text-brand-offwhite hover:bg-white/5 hover:text-brand-cyan transition-colors block">Campi da Tennis</Link>
<Link to="/prodotti/pickleball" className="px-4 py-2.5 text-sm text-brand-offwhite hover:bg-white/5 hover:text-brand-cyan transition-colors block">Campi da Pickleball</Link>
<Link to="/prodotti/calcio" className="px-4 py-2.5 text-sm text-brand-offwhite hover:bg-white/5 hover:text-brand-cyan transition-colors block">Campi da Calcio</Link>
<Link to="/prodotti/multisport" className="px-4 py-2.5 text-sm text-brand-offwhite hover:bg-white/5 hover:text-brand-cyan transition-colors block">Campi Multisport</Link>
<Link to="/prodotti/coperture" className="px-4 py-2.5 text-sm text-brand-offwhite hover:bg-white/5 hover:text-brand-cyan transition-colors block">Coperture Sportive</Link>
```

- [ ] **Step 2: Aggiorna mobile menu**

Individua nel mobile menu (righe 237-241):

```jsx
<Link to="/prodotti/padel" onClick={closeMobileMenu} className="text-lg text-brand-offwhite hover:text-brand-cyan transition-colors">Campi da Padel</Link>
<Link to="/prodotti/tennis" onClick={closeMobileMenu} className="text-lg text-brand-offwhite hover:text-brand-cyan transition-colors">Campi da Tennis</Link>
<Link to="/prodotti/pickleball" onClick={closeMobileMenu} className="text-lg text-brand-offwhite hover:text-brand-cyan transition-colors">Campi da Pickleball</Link>
<Link to="/prodotti/multisport" onClick={closeMobileMenu} className="text-lg text-brand-offwhite hover:text-brand-cyan transition-colors">Campi Multisport</Link>
<Link to="/prodotti/coperture" onClick={closeMobileMenu} className="text-lg text-brand-offwhite hover:text-brand-cyan transition-colors">Coperture Sportive</Link>
```

Sostituisci con:

```jsx
<Link to="/prodotti/padel" onClick={closeMobileMenu} className="text-lg text-brand-offwhite hover:text-brand-cyan transition-colors">Campi da Padel</Link>
<Link to="/prodotti/tennis" onClick={closeMobileMenu} className="text-lg text-brand-offwhite hover:text-brand-cyan transition-colors">Campi da Tennis</Link>
<Link to="/prodotti/pickleball" onClick={closeMobileMenu} className="text-lg text-brand-offwhite hover:text-brand-cyan transition-colors">Campi da Pickleball</Link>
<Link to="/prodotti/calcio" onClick={closeMobileMenu} className="text-lg text-brand-offwhite hover:text-brand-cyan transition-colors">Campi da Calcio</Link>
<Link to="/prodotti/multisport" onClick={closeMobileMenu} className="text-lg text-brand-offwhite hover:text-brand-cyan transition-colors">Campi Multisport</Link>
<Link to="/prodotti/coperture" onClick={closeMobileMenu} className="text-lg text-brand-offwhite hover:text-brand-cyan transition-colors">Coperture Sportive</Link>
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Navbar.jsx
git commit -m "feat: aggiunge link Campi da Calcio in navbar desktop e mobile"
```

---

### Task 10: Aggiorna `src/components/Footer.jsx` — aggiunge path calcio

**Files:**
- Modify: `src/components/Footer.jsx`

- [ ] **Step 1: Aggiorna array `productPaths`**

Individua in `src/components/Footer.jsx` (righe 60-66):

```jsx
const productPaths = [
    "/prodotti/padel",
    "/prodotti/tennis",
    "/prodotti/pickleball",
    "/prodotti/multisport",
    "/prodotti/coperture"
];
```

Sostituisci con:

```jsx
const productPaths = [
    "/prodotti/padel",
    "/prodotti/tennis",
    "/prodotti/pickleball",
    "/prodotti/calcio",
    "/prodotti/multisport",
    "/prodotti/coperture"
];
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Footer.jsx
git commit -m "feat: aggiunge /prodotti/calcio in productPaths del Footer"
```

---

### Task 11: Aggiorna `src/pages/Home.jsx` — Helmet ottimizzato

**Files:**
- Modify: `src/pages/Home.jsx`

- [ ] **Step 1: Aggiorna il blocco Helmet**

Sostituisci il blocco `<Helmet>` in `src/pages/Home.jsx` (righe 18-52) con:

```jsx
<Helmet>
  <title>Costruzione Campi Sportivi Professionali | Play Innovation Group</title>
  <meta name="description" content="Progettiamo e costruiamo campi da padel, tennis, calcio, calcetto, pickleball e coperture sportive in tutta Italia. Soluzioni chiavi in mano per club e centri sportivi. Preventivo gratuito." />
  <meta name="keywords" content="costruzione campi padel, costruzione campi tennis, costruzione campi calcio, costruzione campi calcetto, costruzione campi pickleball, coperture sportive, costruzione campi sportivi, impianti sportivi italia" />
  <link rel="canonical" href="https://www.playinnovationgroup.com/" />
  <script type="application/ld+json">{JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quanto costa costruire un campo da padel?",
        "acceptedAnswer": { "@type": "Answer", "text": "Il costo di costruzione di un campo da padel varia in base al modello scelto (Extra Solid, Panoramico, Super Panoramico), al tipo di terreno e agli optional. I prezzi partono da circa 20.000€ per il modello entry-level fino a oltre 40.000€ per il Super Panoramico. Offriamo preventivi su misura dopo un'attenta analisi preliminare." }
      },
      {
        "@type": "Question",
        "name": "Quali permessi ci vogliono per costruire un campo sportivo?",
        "acceptedAnswer": { "@type": "Answer", "text": "La costruzione di impianti sportivi e coperture richiede solitamente permessi comunali (CILA, SCIA o Permesso di Costruire) a seconda del comune e dei vincoli locali. Il nostro team, su richiesta, fornisce supporto tecnico per agevolare l'iter burocratico." }
      },
      {
        "@type": "Question",
        "name": "Che tipo di coperture sportive avete?",
        "acceptedAnswer": { "@type": "Answer", "text": "Progettiamo e installiamo coperture per campi da padel, tennis e multisport: palloni pressostatici ad alta efficienza energetica, tensostrutture in legno lamellare o acciaio con membrane PVC a doppia spalmatura, per garantire giocabilità 365 giorni l'anno." }
      },
      {
        "@type": "Question",
        "name": "I campi costruiti da Play Innovation Group sono certificati?",
        "acceptedAnswer": { "@type": "Answer", "text": "Sì. Tutti i nostri impianti sono realizzati nel rispetto delle normative strutturali NTC 2018. I campi da tennis seguono le certificazioni ITF, i campi da padel rispettano le normative WPT e FITP, i campi da calcio usano manti certificati FIFA Quality Pro." }
      },
      {
        "@type": "Question",
        "name": "Quanto costa costruire un campo da calcio a 5?",
        "acceptedAnswer": { "@type": "Answer", "text": "Il costo di costruzione di un campo da calcio a 5 parte da circa 25.000€ per una superficie in erba sintetica standard (dimensioni 40m × 20m). Il prezzo finale dipende dal tipo di manto, dai sistemi di drenaggio, dalle recinzioni e dall'illuminazione. Contattateci per un preventivo su misura." }
      },
      {
        "@type": "Question",
        "name": "Quali sport si possono praticare su un campo multisport?",
        "acceptedAnswer": { "@type": "Answer", "text": "Un campo multisport PlayInnovation può ospitare basket, pallavolo, tennis, badminton e hockey da sala sulla stessa superficie grazie alla tracciatura multicolore. I nostri impianti sono progettati per massimizzare la versatilità senza compromettere le performance di nessuna disciplina." }
      }
    ]
  })}</script>
</Helmet>
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/Home.jsx
git commit -m "seo: ottimizza Helmet Home con title, description, keywords e FAQ schema espanso"
```

---

### Task 12: Aggiorna `src/components/PadelPage.jsx` — Helmet completo

**Files:**
- Modify: `src/components/PadelPage.jsx`

- [ ] **Step 1: Sostituisci il blocco Helmet**

Sostituisci il blocco `<Helmet>` esistente in `src/components/PadelPage.jsx` con:

```jsx
<Helmet>
  <title>Costruzione Campi da Padel Panoramici e Standard | Play Innovation Group</title>
  <meta name="description" content="Costruzione campi da padel con vetri temperati 12mm, struttura in acciaio zincato e LED asimmetrico. Modelli Extra Solid, Panoramico e Super Panoramico. Preventivo gratuito." />
  <meta name="keywords" content="costruzione campi padel, campi padel panoramici, campo padel costo, installazione campo padel, campo padel super panoramico, vetri temperati padel, padel italia" />
  <link rel="canonical" href="https://www.playinnovationgroup.com/prodotti/padel" />
  <script type="application/ld+json">{JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.playinnovationgroup.com/" },
      { "@type": "ListItem", "position": 2, "name": "Prodotti", "item": "https://www.playinnovationgroup.com/" },
      { "@type": "ListItem", "position": 3, "name": "Campi da Padel", "item": "https://www.playinnovationgroup.com/prodotti/padel" }
    ]
  })}</script>
  <script type="application/ld+json">{JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Costruzione Campi da Padel",
    "description": "Progettazione e costruzione campi da padel panoramici, standard e indoor con strutture in acciaio zincato, vetri temperati 12mm e illuminazione LED asimmetrica. Soluzioni chiavi in mano in tutta Italia.",
    "provider": { "@type": "Organization", "name": "Play Innovation Group", "url": "https://www.playinnovationgroup.com" },
    "areaServed": "IT",
    "serviceType": "Costruzione Campi da Padel"
  })}</script>
  <script type="application/ld+json">{JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quanto costa costruire un campo da padel?",
        "acceptedAnswer": { "@type": "Answer", "text": "Il costo di costruzione di un campo da padel varia da circa 20.000€ per il modello Extra Solid a oltre 40.000€ per il Super Panoramico. Il prezzo include struttura in acciaio zincato, vetri temperati, illuminazione LED e manto sintetico. Contattateci per un preventivo su misura." }
      },
      {
        "@type": "Question",
        "name": "Quali sono le dimensioni di un campo da padel?",
        "acceptedAnswer": { "@type": "Answer", "text": "Un campo da padel regolamentare misura 20 metri di lunghezza per 10 metri di larghezza, con un'altezza minima di 6 metri. L'area di gioco è delimitata da pareti in vetro temperato e reti metalliche, con una superficie di gioco di 200 mq." }
      },
      {
        "@type": "Question",
        "name": "Quali permessi servono per costruire un campo da padel?",
        "acceptedAnswer": { "@type": "Answer", "text": "Per la costruzione di un campo da padel è generalmente richiesta una CILA, SCIA o Permesso di Costruire a seconda del comune e dei vincoli locali. Il nostro team fornisce supporto tecnico per l'iter burocratico su tutto il territorio nazionale." }
      },
      {
        "@type": "Question",
        "name": "Quanto tempo ci vuole per installare un campo da padel?",
        "acceptedAnswer": { "@type": "Answer", "text": "L'installazione di un campo da padel richiede tipicamente 5-10 giorni lavorativi, inclusa la preparazione del fondo, il montaggio della struttura, la posa dei vetri e l'installazione del manto sintetico. I tempi possono variare in base alle condizioni del sito." }
      },
      {
        "@type": "Question",
        "name": "I campi da padel Play Innovation Group sono certificati WPT e FITP?",
        "acceptedAnswer": { "@type": "Answer", "text": "Sì. Tutti i nostri campi da padel rispettano le normative strutturali NTC 2018 e utilizzano materiali conformi agli standard WPT e FITP. I vetri temperati sono omologati e le strutture in acciaio sono certificate secondo le più severe normative europee di sicurezza sportiva." }
      }
    ]
  })}</script>
</Helmet>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/PadelPage.jsx
git commit -m "seo: aggiunge Service, FAQPage schema e keywords meta a PadelPage"
```

---

### Task 13: Aggiorna `src/components/TennisPage.jsx` — Helmet completo

**Files:**
- Modify: `src/components/TennisPage.jsx`

- [ ] **Step 1: Sostituisci il blocco Helmet**

```jsx
<Helmet>
  <title>Costruzione Campi da Tennis Indoor e Outdoor | Play Innovation Group</title>
  <meta name="description" content="Realizzazione campi da tennis in terra battuta, resina acrilica o erba sintetica certificati ITF. Indoor e outdoor per club e tornei internazionali. Richiedi preventivo gratuito." />
  <meta name="keywords" content="costruzione campi tennis, campi tennis indoor, campi tennis outdoor, terra battuta, resina acrilica tennis, erba sintetica tennis, certificazione ITF, campo tennis costo" />
  <link rel="canonical" href="https://www.playinnovationgroup.com/prodotti/tennis" />
  <script type="application/ld+json">{JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.playinnovationgroup.com/" },
      { "@type": "ListItem", "position": 2, "name": "Prodotti", "item": "https://www.playinnovationgroup.com/" },
      { "@type": "ListItem", "position": 3, "name": "Campi da Tennis", "item": "https://www.playinnovationgroup.com/prodotti/tennis" }
    ]
  })}</script>
  <script type="application/ld+json">{JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Costruzione Campi da Tennis",
    "description": "Realizzazione campi da tennis indoor e outdoor in terra battuta, resina acrilica ed erba sintetica. Progettazione e installazione professionale certificata ITF per club e centri sportivi in tutta Italia.",
    "provider": { "@type": "Organization", "name": "Play Innovation Group", "url": "https://www.playinnovationgroup.com" },
    "areaServed": "IT",
    "serviceType": "Costruzione Campi da Tennis"
  })}</script>
  <script type="application/ld+json">{JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quanto costa costruire un campo da tennis?",
        "acceptedAnswer": { "@type": "Answer", "text": "Il costo di un campo da tennis varia in base alla superficie scelta e alle opere civili necessarie. La terra battuta è generalmente l'opzione più economica, la resina acrilica offre il miglior rapporto qualità-prezzo per uso intensivo. Contattateci per un preventivo completo che includa drenaggio, recinzioni e illuminazione." }
      },
      {
        "@type": "Question",
        "name": "Quali superfici si usano per un campo da tennis?",
        "acceptedAnswer": { "@type": "Answer", "text": "Costruiamo campi da tennis in tre tipologie di superficie: terra battuta rossa (con sottomanti porosi e vulcanici), resina acrilica (con shock pad integrati per ridurre i traumi articolari) ed erba sintetica (con intaso in sabbia silicea per bassa manutenzione). Ogni superficie è certificata ITF." }
      },
      {
        "@type": "Question",
        "name": "Cos'è la certificazione ITF per i campi da tennis?",
        "acceptedAnswer": { "@type": "Answer", "text": "La certificazione ITF (International Tennis Federation) garantisce che la superficie del campo rispetti gli standard internazionali di velocità del rimbalzo, resistenza e sicurezza. I nostri campi sono testati e certificati ITF per ogni categoria di velocità (slow, medium, fast)." }
      },
      {
        "@type": "Question",
        "name": "Quali sono le dimensioni di un campo da tennis?",
        "acceptedAnswer": { "@type": "Answer", "text": "Un campo da tennis regolamentare per il singolare misura 23,77m di lunghezza per 8,23m di larghezza (10,97m per il doppio). L'area totale con le fasce di rispetto è solitamente 36m × 18m per il singolare e 36m × 21m per il doppio." }
      },
      {
        "@type": "Question",
        "name": "Quanto tempo ci vuole per costruire un campo da tennis?",
        "acceptedAnswer": { "@type": "Answer", "text": "La costruzione di un campo da tennis richiede generalmente 2-4 settimane, incluse le opere di scavo, il massetto, i sistemi di drenaggio, la posa della superficie e il tracciamento delle linee. I tempi variano in base alle condizioni del terreno e al tipo di superficie scelta." }
      }
    ]
  })}</script>
</Helmet>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/TennisPage.jsx
git commit -m "seo: aggiunge Service, FAQPage schema e keywords meta a TennisPage"
```

---

### Task 14: Aggiorna `src/components/PickleballPage.jsx` — Helmet completo

**Files:**
- Modify: `src/components/PickleballPage.jsx`

- [ ] **Step 1: Sostituisci il blocco Helmet**

```jsx
<Helmet>
  <title>Costruzione Campi da Pickleball Professionali | Play Innovation Group</title>
  <meta name="description" content="Costruzione campi da pickleball indoor e outdoor con superficie acrilica multistrato. Dimensioni regolamentari, tracciatura UV-resistant. Soluzioni su misura. Preventivo gratuito." />
  <meta name="keywords" content="costruzione campi pickleball, campi pickleball professionali, installazione pickleball, pickleball italia, campo pickleball indoor, superficie acrilica pickleball" />
  <link rel="canonical" href="https://www.playinnovationgroup.com/prodotti/pickleball" />
  <script type="application/ld+json">{JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.playinnovationgroup.com/" },
      { "@type": "ListItem", "position": 2, "name": "Prodotti", "item": "https://www.playinnovationgroup.com/" },
      { "@type": "ListItem", "position": 3, "name": "Campi da Pickleball", "item": "https://www.playinnovationgroup.com/prodotti/pickleball" }
    ]
  })}</script>
  <script type="application/ld+json">{JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Costruzione Campi da Pickleball",
    "description": "Installazione campi da pickleball indoor e outdoor con superfici acriliche multistrato certificate. Dimensioni regolamentari, tracciatura UV-resistant e reti professionali. Soluzioni su misura in tutta Italia.",
    "provider": { "@type": "Organization", "name": "Play Innovation Group", "url": "https://www.playinnovationgroup.com" },
    "areaServed": "IT",
    "serviceType": "Costruzione Campi da Pickleball"
  })}</script>
  <script type="application/ld+json">{JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Cos'è il pickleball?",
        "acceptedAnswer": { "@type": "Answer", "text": "Il pickleball è uno sport che combina elementi del tennis, del badminton e del ping pong. Si gioca su un campo di dimensioni ridotte (13,41m × 6,10m) con una rete bassa e palette solide. È lo sport con la crescita più rapida al mondo, con milioni di praticanti negli USA e in forte espansione in Europa e Italia." }
      },
      {
        "@type": "Question",
        "name": "Quali sono le dimensioni di un campo da pickleball?",
        "acceptedAnswer": { "@type": "Answer", "text": "Un campo da pickleball regolamentare misura 13,41 metri di lunghezza per 6,10 metri di larghezza. Con le fasce di rispetto obbligatorie (3m laterali e 4,6m di fondo), l'area totale necessaria è circa 15m × 22m. Le dimensioni compatte permettono di ricavare più campi nello spazio di un singolo campo da tennis." }
      },
      {
        "@type": "Question",
        "name": "Quanto costa installare un campo da pickleball?",
        "acceptedAnswer": { "@type": "Answer", "text": "Il costo di installazione di un campo da pickleball è significativamente inferiore rispetto ad altri sport: il costo di una superficie acrilica parte da circa 3.000-8.000€ per la sola posa del manto su struttura esistente, fino a 15.000-25.000€ per un impianto completo con opere civili, recinzioni e illuminazione." }
      },
      {
        "@type": "Question",
        "name": "Qual è la differenza tra pickleball e padel?",
        "acceptedAnswer": { "@type": "Answer", "text": "Il pickleball si gioca con una pallina forata simile a quella del wiffle ball, su un campo molto più piccolo del padel e senza pareti in vetro. La rete è più bassa (86cm al centro) rispetto al padel (88cm). Il pickleball è più accessibile a tutte le età, inclusi bambini e anziani." }
      },
      {
        "@type": "Question",
        "name": "Si può giocare a pickleball indoor e outdoor?",
        "acceptedAnswer": { "@type": "Answer", "text": "Sì, installiamo campi da pickleball sia indoor che outdoor. Per l'outdoor utilizziamo superfici acriliche UV-resistant ad alta durabilità. Per l'indoor, superfici poliuretaniche o acriliche studiate per l'acustica e l'ammortizzamento. Sovrapponiamo il tracciato su superfici esistenti per minimizzare i costi." }
      }
    ]
  })}</script>
</Helmet>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/PickleballPage.jsx
git commit -m "seo: aggiunge Service, FAQPage schema e keywords meta a PickleballPage"
```

---

### Task 15: Aggiorna `src/components/MultisportPage.jsx` — Helmet completo

**Files:**
- Modify: `src/components/MultisportPage.jsx`

- [ ] **Step 1: Sostituisci il blocco Helmet**

```jsx
<Helmet>
  <title>Costruzione Campi Multisport Basket Pallavolo Tennis | Play Innovation Group</title>
  <meta name="description" content="Realizzazione campi multisport polivalenti per basket, pallavolo e tennis. Superfici certificate FIBA, recinzioni integrate. Soluzioni chiavi in mano per scuole e comuni. Preventivo." />
  <meta name="keywords" content="costruzione campi multisport, campi basket, campi pallavolo, impianti polivalenti, pavimentazione sportiva multisport, campi scolastici, impianti comunali" />
  <link rel="canonical" href="https://www.playinnovationgroup.com/prodotti/multisport" />
  <script type="application/ld+json">{JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.playinnovationgroup.com/" },
      { "@type": "ListItem", "position": 2, "name": "Prodotti", "item": "https://www.playinnovationgroup.com/" },
      { "@type": "ListItem", "position": 3, "name": "Campi Multisport", "item": "https://www.playinnovationgroup.com/prodotti/multisport" }
    ]
  })}</script>
  <script type="application/ld+json">{JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Costruzione Campi Multisport",
    "description": "Realizzazione campi multisport polivalenti per basket, pallavolo, tennis e hockey. Superfici certificate FIBA, tracciatura multicolore e attrezzature integrate. Soluzioni chiavi in mano per scuole, comuni e centri sportivi in tutta Italia.",
    "provider": { "@type": "Organization", "name": "Play Innovation Group", "url": "https://www.playinnovationgroup.com" },
    "areaServed": "IT",
    "serviceType": "Costruzione Campi Multisport"
  })}</script>
  <script type="application/ld+json">{JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quali sport si possono praticare su un campo multisport?",
        "acceptedAnswer": { "@type": "Answer", "text": "Un campo multisport PlayInnovation può ospitare basket, pallavolo, tennis, badminton e hockey da sala sulla stessa superficie grazie alla tracciatura multicolore. Gli spazi sono dimensionati per rispettare le misure regolamentari di almeno due discipline principali." }
      },
      {
        "@type": "Question",
        "name": "Quanto costa costruire un campo multisport?",
        "acceptedAnswer": { "@type": "Answer", "text": "Il costo di un campo multisport varia in base alle dimensioni e alla tipologia di superficie: una pavimentazione poliuretanica standard parte da circa 15.000-30.000€, incluse recinzioni e tracciatura. I costi per impianti con copertura o dimensioni maggiori vengono definiti su preventivo." }
      },
      {
        "@type": "Question",
        "name": "Quali superfici sono certificate per i campi multisport?",
        "acceptedAnswer": { "@type": "Answer", "text": "Utilizziamo pavimentazioni poliuretaniche certificate FIBA per basket e pallavolo, e resine acriliche per ambienti outdoor. Tutte le superfici sono testate per assorbimento degli urti, resistenza all'usura e sicurezza degli atleti secondo le normative europee EN 14904." }
      },
      {
        "@type": "Question",
        "name": "Quali sono le dimensioni tipiche di un campo multisport?",
        "acceptedAnswer": { "@type": "Answer", "text": "Le dimensioni di un campo multisport dipendono dalle discipline che deve ospitare. Un campo da basket standard misura 28m × 15m, uno da pallavolo 18m × 9m. Un campo multisport tipico è 30m × 15m per ospitare entrambe le discipline con le fasce di rispetto." }
      },
      {
        "@type": "Question",
        "name": "Si possono installare campi multisport in ambienti indoor?",
        "acceptedAnswer": { "@type": "Answer", "text": "Sì, costruiamo campi multisport sia indoor che outdoor. Per le soluzioni indoor utilizziamo pavimentazioni poliuretaniche senza giunte con eccellenti proprietà fonoassorbenti. Possiamo abbinare la realizzazione del campo a strutture di copertura su misura per ambienti non ancora dotati di tetto." }
      }
    ]
  })}</script>
</Helmet>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/MultisportPage.jsx
git commit -m "seo: aggiunge Service, FAQPage schema e keywords meta a MultisportPage"
```

---

### Task 16: Aggiorna `src/components/CoperturePage.jsx` — Helmet completo

**Files:**
- Modify: `src/components/CoperturePage.jsx`

- [ ] **Step 1: Sostituisci il blocco Helmet**

```jsx
<Helmet>
  <title>Coperture Sportive per Campi da Padel e Tennis | Play Innovation Group</title>
  <meta name="description" content="Tensostrutture e palloni pressostatici per coperture campi sportivi. Legno lamellare, acciaio, membrana PVC anti-condensa. Giocabilità 365 giorni l'anno. Preventivo gratuito." />
  <meta name="keywords" content="coperture sportive, coperture campi padel, tensostrutture sportive, palloni pressostatici, copertura campo tennis, strutture sportive indoor, copertura campo calcio" />
  <link rel="canonical" href="https://www.playinnovationgroup.com/prodotti/coperture" />
  <script type="application/ld+json">{JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.playinnovationgroup.com/" },
      { "@type": "ListItem", "position": 2, "name": "Prodotti", "item": "https://www.playinnovationgroup.com/" },
      { "@type": "ListItem", "position": 3, "name": "Coperture Sportive", "item": "https://www.playinnovationgroup.com/prodotti/coperture" }
    ]
  })}</script>
  <script type="application/ld+json">{JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Coperture Sportive",
    "description": "Progettazione e installazione coperture per campi sportivi: tensostrutture in legno lamellare o acciaio e palloni pressostatici per campi da padel, tennis, calcio e multisport. Soluzioni indoor con efficienza energetica in tutta Italia.",
    "provider": { "@type": "Organization", "name": "Play Innovation Group", "url": "https://www.playinnovationgroup.com" },
    "areaServed": "IT",
    "serviceType": "Coperture Sportive"
  })}</script>
  <script type="application/ld+json">{JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quali tipi di copertura sportiva esistono?",
        "acceptedAnswer": { "@type": "Answer", "text": "Installiamo tre tipologie principali di copertura sportiva: palloni pressostatici (struttura gonfiabile ad alta efficienza energetica), tensostrutture ad arco in acciaio zincato e tensostrutture in legno lamellare con membrane PVC. Ogni soluzione è progettata su misura in base alle dimensioni del campo e alle esigenze estetiche." }
      },
      {
        "@type": "Question",
        "name": "Quanto costa una copertura per un campo da padel?",
        "acceptedAnswer": { "@type": "Answer", "text": "Il costo di una copertura per campo da padel varia significativamente in base alla tipologia: un pallone pressostatico parte da circa 30.000€, mentre una tensostruttura in acciaio o legno lamellare per un singolo campo può superare i 60.000-80.000€. I prezzi per impianti multi-campo vengono definiti su preventivo specifico." }
      },
      {
        "@type": "Question",
        "name": "Qual è la differenza tra pallone pressostatico e tensostruttura?",
        "acceptedAnswer": { "@type": "Answer", "text": "Il pallone pressostatico è una struttura gonfiabile in PVC tenuta in pressione da un impianto di pressurizzazione: costi contenuti e installazione rapida. La tensostruttura è una struttura permanente in acciaio o legno lamellare con membrane PVC: maggiore durata, estetica superiore e nessuna spesa per la pressurizzazione." }
      },
      {
        "@type": "Question",
        "name": "Servono permessi per installare una copertura sportiva?",
        "acceptedAnswer": { "@type": "Answer", "text": "Sì, la realizzazione di una copertura sportiva richiede generalmente un permesso edilizio (SCIA o Permesso di Costruire) a seconda del comune e delle dimensioni della struttura. Il nostro team fornisce assistenza tecnica completa per le pratiche burocratiche su tutto il territorio nazionale." }
      },
      {
        "@type": "Question",
        "name": "Quanto dura una copertura sportiva?",
        "acceptedAnswer": { "@type": "Answer", "text": "Una tensostruttura in acciaio o legno lamellare con membrana PVC di qualità ha una durata di 20-30 anni con la corretta manutenzione. I palloni pressostatici hanno una vita utile di 10-15 anni. La membrana PVC può essere sostituita senza ricostruire la struttura portante." }
      }
    ]
  })}</script>
</Helmet>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/CoperturePage.jsx
git commit -m "seo: aggiunge Service, FAQPage schema e keywords meta a CoperturePage"
```

---

### Task 17: Aggiorna `src/components/CompanyPage.jsx` — Helmet ottimizzato

**Files:**
- Modify: `src/components/CompanyPage.jsx`

- [ ] **Step 1: Sostituisci il blocco Helmet**

Individua il blocco `<Helmet>` in `src/components/CompanyPage.jsx` (righe 87-90) e sostituiscilo con:

```jsx
<Helmet>
  <title>Costruttori di Impianti Sportivi Premium in Italia | Play Innovation Group</title>
  <meta name="description" content="Play Innovation Group: esperienza nella progettazione e costruzione di impianti sportivi di alta qualità in tutta Italia. Campi da padel, tennis, calcio e coperture sportive. Scopri chi siamo." />
  <meta name="keywords" content="costruttori impianti sportivi, progettazione impianti sportivi, azienda costruzione campi sportivi, Play Innovation Group, Edilpadel" />
  <link rel="canonical" href="https://www.playinnovationgroup.com/azienda" />
</Helmet>
```

- [ ] **Step 2: Verifica build finale**

```bash
npm run build && npm run lint
```

Atteso: build e lint completati senza errori.

- [ ] **Step 3: Commit finale**

```bash
git add src/components/CompanyPage.jsx
git commit -m "seo: ottimizza Helmet CompanyPage con title, description e keywords"
```

---

## Self-Review Checklist

- [x] **Spec coverage:** Tutte le 6 sezioni della spec hanno task corrispondenti
- [x] **Placeholder scan:** Nessun TBD, TODO o "simile al task N"
- [x] **Type consistency:** Le chiavi it.json (`calcioPage.*`) sono definite nel Task 5 e usate nel Task 7 (CalcioPage.jsx con `titleKey="calcioPage.title"` ecc.)
- [x] **Coordinamento Footer/it.json:** Task 6 aggiunge `"Campi da Calcio"` in `footer.productLinks` (6 items), Task 10 aggiunge `/prodotti/calcio` in `productPaths` (6 items) — array allineati
- [x] **Navbar:** Sia desktop che mobile aggiornate nel Task 9
- [x] **CalcioPage gallery:** Usa `categoryKey="Multisport"` per evitare gallery vuota (categoria "Calcio" non esiste ancora in projects.js)
- [x] **JSON validity:** Task 5 include verifica `node -e "JSON.parse(...)"` per catturare errori di sintassi
