import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProductPageTemplate from './ProductPageTemplate';
import QuoteSection from './QuoteSection';

const CoperturePage = () => {
    return (
        <div>
            <Helmet>
                <title>Coperture Sportive per Campi da Padel e Tennis | Play Innovation Group</title>
                <meta name="description" content="Tensostrutture e palloni pressostatici per coperture campi sportivi. Legno lamellare, acciaio, membrana PVC. Giocabilità 365 giorni l'anno." />
                <meta name="keywords" content="coperture sportive, coperture campi padel, coperture campi tennis, tensostruttura sportiva, pallone pressostatico, copertura campo sportivo indoor" />
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
                  "description": "Progettazione e installazione di coperture sportive con tensostrutture, palloni pressostatici e strutture in legno lamellare per campi da padel, tennis e altri sport.",
                  "provider": { "@type": "Organization", "name": "Play Innovation Group", "url": "https://www.playinnovationgroup.com" },
                  "areaServed": "IT",
                  "serviceType": "Coperture Sportive"
                })}</script>
                <script type="application/ld+json">{JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": [
                    { "@type": "Question", "name": "Quali tipi di coperture sportive esistono?", "acceptedAnswer": { "@type": "Answer", "text": "Realizziamo tensostrutture con membrana PVC, palloni pressostatici, strutture in legno lamellare e coperture in acciaio zincato. La scelta dipende dal tipo di campo, dal budget e dall'utilizzo previsto." } },
                    { "@type": "Question", "name": "Quanto costa una copertura per un campo da padel?", "acceptedAnswer": { "@type": "Answer", "text": "Il costo di una copertura per campo da padel varia in base alla tipologia strutturale e alle dimensioni. Un pallone pressostatico parte da circa 80.000€, una tensostruttura permanente da circa 120.000€. Contattateci per un preventivo dettagliato." } },
                    { "@type": "Question", "name": "Qual è la differenza tra pallone pressostatico e tensostruttura?", "acceptedAnswer": { "@type": "Answer", "text": "Il pallone pressostatico è una struttura gonfiabile tenuta in pressione, più economica e rapida da installare ma stagionale. La tensostruttura è una struttura permanente in acciaio e membrana PVC, più robusta e adatta all'uso tutto l'anno." } },
                    { "@type": "Question", "name": "Le coperture sportive richiedono permessi edilizi?", "acceptedAnswer": { "@type": "Answer", "text": "Le coperture permanenti come tensostrutture e strutture in legno lamellare richiedono generalmente permessi edilizi. Vi assistiamo nella gestione delle pratiche burocratiche per garantire la conformità normativa." } },
                    { "@type": "Question", "name": "Costruite coperture per campi da tennis?", "acceptedAnswer": { "@type": "Answer", "text": "Sì, realizziamo coperture per campi da tennis indoor con tensostrutture, palloni pressostatici e strutture in legno lamellare, permettendo la giocabilità 365 giorni l'anno." } }
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
