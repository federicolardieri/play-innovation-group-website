import React from 'react';
import ProductPageTemplate from './ProductPageTemplate';
import QuoteSection from './QuoteSection';

const TennisPage = () => {
    return (
        <div>
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
