import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProductPageTemplate from './ProductPageTemplate';
import QuoteSection from './QuoteSection';

const TennisPage = () => {
    return (
        <div>
            <Helmet>
                <title>Campi da Tennis | Play Innovation Group</title>
                <meta name="description" content="Campi da tennis indoor e outdoor con superfici in resina o erba sintetica. Progettazione e costruzione professionale per club e centri sportivi." />
                <link rel="canonical" href="https://www.playinnovationgroup.com/prodotti/tennis" />
                <script type="application/ld+json">{JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.playinnovationgroup.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Prodotti", "item": "https://www.playinnovationgroup.com/" },
                    { "@type": "ListItem", "position": 3, "name": "Campi da Tennis", "item": "https://www.playinnovationgroup.com/prodotti/tennis" }
                  ]
                })}</script>
            </Helmet>
            <ProductPageTemplate
                titleKey="tennisPage.title"
                subtitleKey="tennisPage.subtitle"
                heroImage="/Tennis-indoor/copertura-tennis2.JPG"
                descriptionKey="tennisPage.description"
                featuresKey="tennisPage.features"
                materialsKey="tennisPage.materials"
                surfacesKey="tennisPage.surfaces"
                categoryKey="Tennis"
            />
            <QuoteSection />
        </div>
    );
};

export default TennisPage;
