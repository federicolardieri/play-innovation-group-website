import React from 'react';
import ProductPageTemplate from './ProductPageTemplate';
import QuoteSection from './QuoteSection';

const MultisportPage = () => {
    return (
        <div>
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
