import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProductPageTemplate from './ProductPageTemplate';
import QuoteSection from './QuoteSection';
import PadelModelsSection from './PadelModelsSection';

const PadelPage = () => {
    return (
        <div>
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
            <ProductPageTemplate
                titleKey="padelPage.title"
                subtitleKey="padelPage.subtitle"
                heroImage="/PANORAMICO/d2c91dc9-091a-4eb9-8ea8-43b085847629.JPG"
                descriptionKey="padelPage.description"
                featuresKey="padelPage.features"
                materialsKey="padelPage.materials"
                surfacesKey="padelPage.surfaces"
                categoryKey="Padel"
            />
            {/* Specific extra section for Padel displaying the various models */}
            <div className="bg-brand-graphite -mt-24 relative z-20">
                 <PadelModelsSection /> 
            </div>
            <QuoteSection />
        </div>
    );
};

export default PadelPage;
