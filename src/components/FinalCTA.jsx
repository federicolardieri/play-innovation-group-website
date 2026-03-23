import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

const FinalCTA = () => {
    const { t } = useTranslation();

    return (
        <section className="py-32 bg-brand-cyan relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(#02151D 2px, transparent 2px)', backgroundSize: '30px 30px' }}>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
                <h2 className="text-5xl md:text-7xl font-heading font-bold text-brand-graphite mb-8 leading-tight tracking-tight max-w-4xl">
                    {t('finalCta.headline')}
                </h2>

                <p className="text-brand-graphite/80 text-xl md:text-2xl mb-12 max-w-2xl font-medium">
                    {t('finalCta.subheadline')}
                </p>

                <a href="#quote" className="inline-flex items-center justify-center px-10 py-5 overflow-hidden font-bold text-lg text-white bg-brand-orange rounded-full hover:bg-brand-orange/90 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                    {t('finalCta.cta')}
                    <ArrowRight size={24} className="ml-3 group-hover:translate-x-2 transition-transform" />
                </a>
            </div>
        </section>
    );
};

export default FinalCTA;
