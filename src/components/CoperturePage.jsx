import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProductPageTemplate from './ProductPageTemplate';
import QuoteSection from './QuoteSection';

const CoperturePage = () => {
    return (
        <div>
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
                      "acceptedAnswer": { "@type": "Answer", "text": "Il costo di una copertura per campo da padel varia in base alla tipologia: un pallone pressostatico parte da circa 30.000€, mentre una tensostruttura in acciaio o legno lamellare per un singolo campo può superare i 60.000-80.000€. I prezzi per impianti multi-campo vengono definiti su preventivo specifico." }
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
            <ProductPageTemplate
                titleKey="coperturePage.title"
                subtitleKey="coperturePage.subtitle"
                heroImage="/Coperture/5f8dfcea-b006-4d33-8f01-b2c2bc32b043.jpeg"
                descriptionKey="coperturePage.description"
                featuresKey="coperturePage.features"
                materialsKey="coperturePage.materials"
                surfacesKey="coperturePage.surfaces"
                categoryKey="Coperture"
            />
            <QuoteSection />
        </div>
    );
};

export default CoperturePage;
