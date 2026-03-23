import React, { useEffect, useRef } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import gsap from 'gsap';
import ProductMaterials from './ProductMaterials';
import ProductSurfaces from './ProductSurfaces';
import ProductGallery from './ProductGallery';

const ProductPageTemplate = ({ 
    titleKey, 
    subtitleKey, 
    heroImage, 
    descriptionKey, 
    featuresKey,
    materialsKey,
    surfacesKey,
    categoryKey
}) => {
    const { t } = useTranslation();
    const headerRef = useRef(null);

    useEffect(() => {
        // Scroll to top when page loads
        window.scrollTo(0, 0);

        let ctx = gsap.context(() => {
            gsap.fromTo(headerRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    delay: 0.2
                }
            );
        });

        return () => ctx.revert();
    }, []);

    const features = t(featuresKey) || [];
    const items = Array.isArray(features) ? features : [];

    return (
        <div className="bg-brand-graphite min-h-screen pt-16 md:pt-24 pb-20">
            {/* Hero Section */}
            <div className="relative w-full h-[50dvh] md:h-[70vh] flex items-end pb-8 md:pb-12 overflow-hidden">
                <div className="absolute inset-0">
                    <img src={heroImage} alt={t(titleKey)} className="w-full h-full object-cover scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-graphite onto-brand-slate/40"></div>
                </div>

                <div className="container mx-auto px-4 md:px-12 relative z-10" ref={headerRef}>
                    <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-white mb-4">
                        {t(titleKey)}
                    </h1>
                    <p className="text-lg md:text-2xl text-brand-cyan max-w-2xl font-light">
                        {t(subtitleKey)}
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 md:px-12 py-12 md:py-24">
                <div className="flex flex-col lg:flex-row gap-12 md:gap-24">
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white border-l-4 border-brand-orange pl-4">
                            Il Progetto
                        </h2>
                        <p className="text-brand-steel text-base md:text-lg leading-relaxed whitespace-pre-line">
                            {t(descriptionKey)}
                        </p>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="glass-panel rounded-[1.5rem] md:rounded-2xl p-6 md:p-8">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Caratteristiche Tecniche</h3>
                            <ul className="space-y-4">
                                {items.map((feature, idx) => (
                                    <li key={idx} className="flex items-start text-brand-offwhite text-sm md:text-base">
                                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-cyan mt-2 mr-4 flex-shrink-0"></div>
                                        <span className="leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* New Detailed Sections */}
            {materialsKey && (
                <ProductMaterials data={t(materialsKey)} />
            )}
            
            {surfacesKey && (
                <ProductSurfaces data={t(surfacesKey)} />
            )}
            
            {categoryKey && (
                <ProductGallery categoryKey={categoryKey} />
            )}
        </div>
    );
};

export default ProductPageTemplate;
