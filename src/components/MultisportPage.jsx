import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProductPageTemplate from './ProductPageTemplate';
import QuoteSection from './QuoteSection';

const MultisportPage = () => {
    return (
        <div>
            <Helmet>
                <title>Costruzione Campi Multisport Basket Pallavolo Tennis | Play Innovation Group</title>
                <meta name="description" content="Realizzazione campi multisport polivalenti per basket, pallavolo e tennis. Superfici certificate, recinzioni integrate. Soluzioni per scuole e comuni." />
                <meta name="keywords" content="costruzione campi multisport, campi polivalenti, campi basket, campi pallavolo, campi tennis multisport, superficie resina sportiva, impianti sportivi scuole" />
                <link rel="canonical" href="https://www.playinnovationgroup.com/prodotti/multisport" />
                <script type="application/ld+json">{JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.playinnovationgroup.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Prodotti", "item": "https://www.playinnovationgroup.com/" },
                    { "@type": "ListItem", "position": 3, "name": "Costruzione Campi Multisport", "item": "https://www.playinnovationgroup.com/prodotti/multisport" }
                  ]
                })}</script>
                <script type="application/ld+json">{JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Service",
                  "name": "Costruzione Campi Multisport",
                  "description": "Realizzazione campi multisport polivalenti per basket, pallavolo e tennis con superfici certificate e recinzioni integrate. Soluzioni per scuole, comuni e centri sportivi.",
                  "provider": { "@type": "Organization", "name": "Play Innovation Group", "url": "https://www.playinnovationgroup.com" },
                  "areaServed": "IT",
                  "serviceType": "Costruzione Campi Sportivi"
                })}</script>
                <script type="application/ld+json">{JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": [
                    { "@type": "Question", "name": "Quanto costa un campo multisport?", "acceptedAnswer": { "@type": "Answer", "text": "Il costo di un campo multisport dipende dalle dimensioni, dalla superficie scelta e dai servizi aggiuntivi. Generalmente si parte da 40.000€ per soluzioni standard. Contattateci per un preventivo personalizzato." } },
                    { "@type": "Question", "name": "Quali sport si possono praticare su un campo multisport?", "acceptedAnswer": { "@type": "Answer", "text": "I nostri campi multisport supportano basket, pallavolo, tennis, badminton e hockey da sala. La superficie e le linee di gioco vengono personalizzate in base alle discipline richieste." } },
                    { "@type": "Question", "name": "Quali superfici sono disponibili per un campo multisport?", "acceptedAnswer": { "@type": "Answer", "text": "Utilizziamo resina poliuretanica, parquet sportivo indoor e superfici acriliche outdoor, tutte certificate per uso sportivo intensivo e sicurezza degli atleti." } },
                    { "@type": "Question", "name": "Costruite campi multisport per scuole e comuni?", "acceptedAnswer": { "@type": "Answer", "text": "Sì, siamo specializzati in campi multisport per istituti scolastici, comuni e centri sportivi pubblici. Gestiamo l'intero iter progettuale incluse eventuali pratiche amministrative." } },
                    { "@type": "Question", "name": "Quanto tempo richiede la costruzione di un campo multisport?", "acceptedAnswer": { "@type": "Answer", "text": "La costruzione di un campo multisport richiede mediamente 4-6 settimane, dalla preparazione del piano di posa al completamento delle superfici e delle recinzioni." } }
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
