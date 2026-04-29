import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProductPageTemplate from './ProductPageTemplate';
import QuoteSection from './QuoteSection';

const MultisportPage = () => {
    return (
        <div>
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
            <ProductPageTemplate
                titleKey="multisportPage.title"
                subtitleKey="multisportPage.subtitle"
                heroImage="/MULTISPORT/PHOTO-2026-03-18-16-07-47.jpeg" 
                descriptionKey="multisportPage.description"
                featuresKey="multisportPage.features"
                materialsKey="multisportPage.materials"
                surfacesKey="multisportPage.surfaces"
                categoryKey="Multisport"
            />
            <QuoteSection />
        </div>
    );
};

export default MultisportPage;
