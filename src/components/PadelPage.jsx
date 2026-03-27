import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProductPageTemplate from './ProductPageTemplate';
import QuoteSection from './QuoteSection';
import PadelModelsSection from './PadelModelsSection';

const PadelPage = () => {
    return (
        <div>
            <Helmet>
                <title>Campi da Padel | Play Innovation Group</title>
                <meta name="description" content="Campi da padel panoramici, super panoramici e standard. Vetro temperato 12mm, illuminazione LED, strutture in acciaio zincato. Soluzioni chiavi in mano." />
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
