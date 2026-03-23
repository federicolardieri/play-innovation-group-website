import React from 'react';
import ProductPageTemplate from './ProductPageTemplate';
import QuoteSection from './QuoteSection';

// You might consider moving the "models" part to the ProductPageTemplate eventually if you want it on all pages,
// but for now, we'll keep the PadelModelsSection out to avoid duplication unless it fits here perfectly.
// Since Padel has specific models, we can display them here:
import PadelModelsSection from './PadelModelsSection';

const PadelPage = () => {
    return (
        <div>
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
