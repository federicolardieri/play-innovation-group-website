import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProductPageTemplate from './ProductPageTemplate';
import QuoteSection from './QuoteSection';

const PickleballPage = () => {
    return (
        <div>
            <Helmet>
                <title>Campi da Pickleball | Play Innovation Group</title>
                <meta name="description" content="Campi da pickleball professionali con superficie in resina. Lo sport in più rapida crescita al mondo. Soluzioni su misura per ogni esigenza." />
                <link rel="canonical" href="https://www.playinnovationgroup.com/prodotti/pickleball" />
                <script type="application/ld+json">{JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.playinnovationgroup.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Prodotti", "item": "https://www.playinnovationgroup.com/" },
                    { "@type": "ListItem", "position": 3, "name": "Campi da Pickleball", "item": "https://www.playinnovationgroup.com/prodotti/pickleball" }
                  ]
                })}</script>
            </Helmet>
            <ProductPageTemplate
                titleKey="pickleballPage.title"
                subtitleKey="pickleballPage.subtitle"
                heroImage="/PICKLEBALL/Campi-fissi-da-Pickleball-Original-Pickleball-3.jpg"
                descriptionKey="pickleballPage.description"
                featuresKey="pickleballPage.features"
                materialsKey="pickleballPage.materials"
                surfacesKey="pickleballPage.surfaces"
                categoryKey="Pickleball"
            />
            <QuoteSection />
        </div>
    );
};

export default PickleballPage;
