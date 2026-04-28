# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Comandi principali

```bash
npm run dev       # avvia il dev server con HMR (Vite)
npm run build     # build di produzione in dist/
npm run preview   # anteprima del build di produzione
npm run lint      # ESLint sul codice sorgente
```

Il dev server Vite fa il proxy di `/api/*` verso `http://localhost:3000` (vedere [vite.config.js](vite.config.js)).

## Architettura

### Stack
- **React 19** + **Vite 7** — SPA con code splitting tramite `React.lazy` + `Suspense`
- **Tailwind CSS v3** — utility-first; i token brand sono in [tailwind.config.js](tailwind.config.js)
- **GSAP 3 + ScrollTrigger** — tutte le animazioni scroll; usare sempre `gsap.context()` con cleanup `ctx.revert()`
- **react-router-dom v7** — routing client-side
- **react-helmet-async** — SEO meta tag per-page
- **Vercel Serverless Functions** — `api/chat.js` espone un endpoint POST per il chatbot AI

### Struttura delle pagine
- [src/App.jsx](src/App.jsx) è l'orchestratore: router, provider globali (`HelmetProvider`, `LanguageProvider`, `ErrorBoundary`, `PageLayout`)
- [src/pages/Home.jsx](src/pages/Home.jsx) compone tutte le sezioni della home page
- Le pagine prodotto (`/prodotti/padel`, `/prodotti/tennis`, ecc.) sono lazy-loaded e usano tutte [src/components/ProductPageTemplate.jsx](src/components/ProductPageTemplate.jsx) come base comune

### Internazionalizzazione (i18n)
- [src/i18n/LanguageContext.jsx](src/i18n/LanguageContext.jsx) gestisce lingua corrente (default `it`) e la funzione `t(key)`
- Le traduzioni sono in [src/i18n/locales/](src/i18n/locales/) (it, en, de, fr, es)
- In tutti i componenti usare `const { t } = useTranslation()` e chiavi dot-notation: `t('section.key')`

### Animazioni
- Usare il hook condiviso [src/hooks/useScrollAnimation.js](src/hooks/useScrollAnimation.js) per il pattern `fromTo(y, opacity)` ripetuto — evitare di duplicare logica GSAP nei componenti
- Pattern nelle animazioni custom: `gsap.context(() => { ... }, ref)` dentro `useEffect`, cleanup con `ctx.revert()`
- Easing standard: `power3.out`, `power2.inOut`

### Design system (Tailwind)
| Token | Valore |
|---|---|
| `brand-graphite` | `#02151D` (sfondo principale) |
| `brand-slate` | `#0D2A38` (sfondo secondario) |
| `brand-offwhite` | `#F5F7FA` |
| `brand-orange` | `#FF5000` (accento principale) |
| `brand-cyan` | `#00F0FF` (accento secondario) |
| `font-heading` | Space Grotesk |
| `font-sans` | Inter |
| `font-mono` | JetBrains Mono |

### Chatbot AI (Willy)
- Frontend: [src/components/ChatBot.jsx](src/components/ChatBot.jsx), la system prompt e la knowledge base sono in [src/utils/aiKnowledge.js](src/utils/aiKnowledge.js)
- Backend: [api/chat.js](api/chat.js) usa `@google/genai` SDK con il modello `gemini-3-flash-preview`
- La variabile d'ambiente richiesta è `GEMINI_API_KEY` (configurata su Vercel)
- Il timeout Vercel per le serverless functions è 30s (configurato in [vercel.json](vercel.json))

### Deploy
- Deploy automatico su Vercel; il build produce `dist/`
- `public/sitemap.xml` e `public/robots.txt` sono già configurati per SEO
