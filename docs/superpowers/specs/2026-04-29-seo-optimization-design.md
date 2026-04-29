# SEO Optimization — Play Innovation Group
**Data:** 2026-04-29  
**Stato:** Approvato

---

## Obiettivo

Ottimizzare il sito `playinnovationgroup.com` per apparire nei risultati di ricerca per query come:
- costruzione campi padel
- costruzione campi pickleball
- costruzione campi tennis
- costruzione campi calcetto / calcio a 5
- coperture sportive
- costruzione campi sportivi

Target geografico: Italia nazionale (fondamenta per future landing page per città).

---

## 1. Nuova Pagina `/prodotti/calcio`

### Razionale
La keyword "costruzione campi calcio" e "costruzione campi calcetto" non ha attualmente una pagina dedicata. Il calcetto è sepolto dentro `/prodotti/multisport`, che non ha nessun segnale SEO specifico per quella disciplina.

### File da creare
- `src/components/CalcioPage.jsx` — segue esattamente il pattern `ProductPageTemplate` (come `TennisPage`, `PickleballPage`, ecc.)
- Traduzione `calcioPage.*` aggiunta in `src/i18n/locales/it.json`

### Contenuto pagina calcio
- **Title H1**: "Costruzione Campi da Calcio e Calcetto"
- **Keyword primarie**: costruzione campi calcio, campi calcetto, campi calcio a 5, campi calcio a 7, erba sintetica calcio
- **Schema JSON-LD**: `Service` + `FAQPage` (5 domande) + `BreadcrumbList`
- **Hero image**: da cartella `/MULTISPORT/` (già disponibile)
- **Superfici**: Erba sintetica 40-60mm per calcio 5/7/11, Resina poliuretanica

### Aggiornamento `MultisportPage`
Rimuovere riferimenti a calcio/calcetto dal contenuto principale. La pagina si concentra su basket, pallavolo, tennis polivalente, hockey su prato.

---

## 2. Meta Tag Strategy — Tutti i Page Components

Pattern title: `[Keyword Azione] [Dettaglio Differenziante] | Play Innovation Group`

| Pagina | Title | Description (≤155 char) |
|---|---|---|
| Home | `Costruzione Campi Sportivi Professionali \| Play Innovation Group` | Progettiamo e costruiamo campi da padel, tennis, calcio e coperture sportive. Soluzioni chiavi in mano per club e centri sportivi. Richiedi preventivo. |
| `/prodotti/padel` | `Costruzione Campi da Padel Panoramici e Standard \| Play Innovation Group` | Costruzione campi da padel con vetri temperati 12mm, struttura zincata e LED asimmetrico. Modelli Extra Solid, Panoramico, Super Panoramico. Preventivo gratuito. |
| `/prodotti/tennis` | `Costruzione Campi da Tennis Indoor e Outdoor \| Play Innovation Group` | Realizzazione campi da tennis in terra battuta, resina acrilica o erba sintetica certificati ITF. Indoor e outdoor. Richiedi preventivo gratuito. |
| `/prodotti/pickleball` | `Costruzione Campi da Pickleball Professionali \| Play Innovation Group` | Costruzione campi da pickleball indoor e outdoor con superficie acrilica multistrato. Dimensioni regolamentari. Soluzioni su misura. Preventivo gratuito. |
| `/prodotti/calcio` | `Costruzione Campi da Calcio e Calcetto su Erba Sintetica \| Play Innovation Group` | Costruzione campi da calcio a 5, 7 e 11 con erba sintetica certificata FIFA. Campi calcetto indoor e outdoor chiavi in mano. Richiedi preventivo. |
| `/prodotti/multisport` | `Costruzione Campi Multisport Basket Volley Tennis \| Play Innovation Group` | Realizzazione campi multisport polivalenti per basket, pallavolo e tennis. Superfici certificate, recinzioni integrate. Soluzioni per scuole e comuni. |
| `/prodotti/coperture` | `Coperture Sportive per Campi da Padel e Tennis \| Play Innovation Group` | Tensostrutture e palloni pressostatici per coperture campi sportivi. Legno lamellare, acciaio, membrana PVC. Giocabilità 365 giorni l'anno. |
| `/azienda` | `Costruttori di Impianti Sportivi Premium \| Play Innovation Group` | Play Innovation Group: esperienza nella progettazione e costruzione di impianti sportivi di alta qualità in tutta Italia. Scopri chi siamo. |

### Keywords meta (aggiunto su ogni page component via `<Helmet>`)
Ogni pagina riceve 6-8 keyword specifiche alla disciplina.

---

## 3. Structured Data (JSON-LD)

### `index.html` — LocalBusiness (sostituisce Organization)
```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "SportsActivityLocation"],
  "name": "Play Innovation Group",
  "legalName": "Edilpadel S.R.L.",
  "url": "https://www.playinnovationgroup.com",
  "logo": "https://www.playinnovationgroup.com/logo.png",
  "image": "https://www.playinnovationgroup.com/logo.png",
  "description": "Progettazione e costruzione di campi da padel, tennis, calcio, pickleball e coperture sportive in Italia.",
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
  "sameAs": [],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+39 3349967161",
    "contactType": "sales",
    "availableLanguage": ["Italian", "English", "German", "French", "Spanish"]
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Impianti Sportivi",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Costruzione Campi da Padel" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Costruzione Campi da Tennis" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Costruzione Campi da Calcio" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Costruzione Campi da Pickleball" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Coperture Sportive" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Campi Multisport" } }
    ]
  }
}
```

### Ogni pagina prodotto — `Service` schema (aggiunto via Helmet)
Campi inclusi: `@type: "Service"`, `name`, `description`, `provider`, `areaServed: "IT"`, `serviceType`.

### Ogni pagina prodotto — `FAQPage` schema (aggiunto via Helmet)
3-5 domande specifiche per disciplina.

**Padel**: costo campo padel, dimensioni campo padel, permessi costruzione, vetri temperati, tempi realizzazione  
**Tennis**: costo campo tennis, superfici disponibili, certificazione ITF, terra battuta vs resina  
**Pickleball**: dimensioni campo pickleball, differenza pickleball padel, costo installazione  
**Calcio**: dimensioni campo calcio a 5/7/11, erba sintetica FIFA, costo campo calcio, manutenzione  
**Multisport**: costo campo multisport, discipline supportate, superfici certificate  
**Coperture**: tipi copertura sportiva, costo copertura padel, pallone pressostatico vs tensostruttura  

---

## 4. Ottimizzazione Contenuti `it.json`

### Pagine prodotto — titoli H1 (campo `title`)
- Padel: `"Costruzione Campi da Padel Professionali"`
- Tennis: `"Costruzione Campi da Tennis"`
- Pickleball: `"Costruzione Campi da Pickleball"`
- Calcio (nuovo): `"Costruzione Campi da Calcio e Calcetto"`
- Multisport: `"Costruzione Campi Multisport"`
- Coperture: `"Coperture Sportive"`

### Pagine prodotto — subtitle
Ogni subtitle include una keyword long-tail naturale. Esempio padel:
`"Progettazione e costruzione campi da padel panoramici, standard e indoor. Strutture certificate per club, resort e centri sportivi."`

### Descrizioni sezioni (`description`)
Revisione per includere verbi d'azione SEO: "costruiamo", "realizziamo", "installiamo", "progettiamo" + discipline specifiche.

### FAQ Home — ampliamento
Aggiungere 2 domande:
- "Quanto costa costruire un campo da calcio a 5?"
- "Quali sport si possono fare su un campo multisport?"

### Multisport — pulizia
Rimuovere riferimenti a calcio/calcetto, aggiungere focus su basket, volley, hockey da sala.

---

## 5. Technical SEO

### `sitemap.xml`
- Aggiungere URL `/prodotti/calcio` con `priority: 0.8`, `changefreq: monthly`
- Aggiornare `lastmod` di tutte le URL a `2026-04-29`

### `index.html`
- Aggiornare `<meta name="keywords">` con tutti i termini target incluso "costruzione campi calcio"
- Aggiornare `<meta name="description">` per includere calcio

### Canonical e hreflang
- Verificare che ogni Helmet abbia `<link rel="canonical">` (già presenti, verificare CalcioPage)
- Foundation per city pages: struttura `LocalBusiness` già pronta per ereditare indirizzo

---

## 6. Routing e Navigazione

### `App.jsx`
```jsx
const CalcioPage = lazy(() => import('./components/CalcioPage'));
// Aggiungere route:
<Route path="/prodotti/calcio" element={<CalcioPage />} />
```

### Navbar
Aggiungere "Campi da Calcio" nel dropdown prodotti, linkato a `/prodotti/calcio`.

### Footer
Aggiungere link "Campi da Calcio" nella sezione prodotti del footer (e aggiornare `it.json` per la traduzione).

---

## 7. Divisione lavoro per Agent Team

| Agente | Responsabilità | File principali |
|---|---|---|
| **seo-technical** | index.html (LocalBusiness schema, keywords meta), sitemap.xml | `index.html`, `public/sitemap.xml` |
| **seo-content** | Riscrittura it.json (titoli, subtitle, descrizioni, FAQ home, multisport pulizia), content calcioPage | `src/i18n/locales/it.json` |
| **seo-pages** | CalcioPage.jsx, aggiornamento MultisportPage, App.jsx route, Navbar, Footer, meta tag Helmet su tutte le pagine prodotto | `src/components/*.jsx`, `src/App.jsx` |

---

## Criteri di successo

- Ogni URL ha title con keyword primaria, description ≤155 char con keyword + CTA
- `LocalBusiness` schema valido con telefono e indirizzo
- Schema `Service` + `FAQPage` su ogni pagina prodotto
- Pagina `/prodotti/calcio` live e indicizzabile
- Sitemap aggiornata con la nuova URL
- Zero errori di validazione su Google Rich Results Test
