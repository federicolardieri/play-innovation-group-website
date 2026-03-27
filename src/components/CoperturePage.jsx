import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProductPageTemplate from './ProductPageTemplate';
import QuoteSection from './QuoteSection';

const CoperturePage = () => {
    return (
        <div>
            <Helmet>
                <title>Coperture Sportive | Play Innovation Group</title>
                <meta name="description" content="Coperture per campi sportivi: strutture tensili, pressostatiche, in legno lamellare e acciaio zincato. Soluzioni indoor per giocare tutto l'anno." />
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
