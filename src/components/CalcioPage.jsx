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
                      "acceptedAnswer": { "@type": "Answer", "text": "Un manto in erba sintetica di qualità, con la corretta manutenzione, ha una durata media di 8-12 anni. La longevità dipende dall'intensità d'uso, dalla qualità del manto installato e dalla manutenzione periodica. Utilizziamo solo manti di produttori certificati FIFA." }
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
