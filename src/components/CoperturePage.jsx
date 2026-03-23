import React from 'react';
import ProductPageTemplate from './ProductPageTemplate';
import QuoteSection from './QuoteSection';

const CoperturePage = () => {
    return (
        <div>
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
