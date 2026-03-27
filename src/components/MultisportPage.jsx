import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProductPageTemplate from './ProductPageTemplate';
import QuoteSection from './QuoteSection';

const MultisportPage = () => {
    return (
        <div>
            <Helmet>
                <title>Campi Multisport | Play Innovation Group</title>
                <meta name="description" content="Campi multisport per basket, calcetto, tennis, volley, hockey e atletica. Soluzioni polivalenti personalizzabili per ogni disciplina sportiva." />
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
