import React from 'react';
import ProductPageTemplate from './ProductPageTemplate';
import QuoteSection from './QuoteSection';

const PickleballPage = () => {
    return (
        <div>
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
