import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useTranslation } from '../i18n/LanguageContext';
import { Link } from 'react-router-dom';
import { ChevronRight, X } from 'lucide-react';

const HeroSection = () => {
    const { t } = useTranslation();
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const containerRef = useRef(null);
    const headlineRef = useRef(null);
    const subheadlineRef = useRef(null);
    const buttonsRef = useRef(null);
    const metricsRef = useRef(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        if (isProductsOpen) {
            document.body.style.overflow = 'hidden';
            gsap.fromTo(overlayRef.current,
                { opacity: 0, scale: 0.95 },
                { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
            );
        } else {
            document.body.style.overflow = 'unset';
        }

        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.fromTo(headlineRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, delay: 0.2 }
            )
                .fromTo(subheadlineRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1, delay: -0.6 }
                )
                .fromTo(buttonsRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, delay: -0.6 }
                )
                .fromTo(metricsRef.current.children,
                    { y: 15, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: -0.4 }
                );
        }, containerRef);

        return () => {
            ctx.revert();
            document.body.style.overflow = 'unset';
        };
    }, [isProductsOpen]);

    const productList = [
        { id: 'padel', name: 'Campi da Padel', path: '/prodotti/padel' },
        { id: 'tennis', name: 'Campi da Tennis', path: '/prodotti/tennis' },
        { id: 'pickleball', name: 'Campi da Pickleball', path: '/prodotti/pickleball' },
        { id: 'multisport', name: 'Campi Multisport & Calcio', path: '/prodotti/multisport' },
        { id: 'coperture', name: 'Coperture Sportive', path: '/prodotti/coperture' },
    ];

    return (
        <section id="home" ref={containerRef} className="relative h-[100dvh] w-full flex items-center justify-start overflow-hidden pt-20">
            {/* Background Video & Overlay */}
            <div className="absolute inset-0 z-0 bg-brand-slate">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover brightness-50 mix-blend-overlay"
                >
                    <source src="/S.Teresa%20Drone%202.MOV" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-graphite/90 via-brand-graphite/60 to-transparent"></div>
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                    style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }}>
                </div>
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-12 pt-20 md:pt-16 flex flex-col justify-end pb-12 md:pb-20 h-full">
                <div className="max-w-3xl">
                    <div className="inline-block px-3 py-1 mb-4 md:mb-6 border border-brand-steel/30 rounded-full bg-brand-graphite/40 backdrop-blur-sm">
                        <span className="text-[10px] md:text-xs font-mono font-medium tracking-widest text-brand-cyan uppercase">{t('hero.label')}</span>
                    </div>

                    <h1 ref={headlineRef} className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
                        {t('hero.headline')} <br className="hidden md:block" /><span className="text-brand-cyan">{t('hero.headlineAccent')}</span>
                    </h1>

                    <p ref={subheadlineRef} className="text-base md:text-xl text-brand-steel mb-8 md:mb-10 max-w-2xl leading-relaxed">
                        {t('hero.subheadline')}
                    </p>

                    <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-16">
                        <a href="#quote" className="btn-primary text-sm md:text-base px-8 py-3.5 md:py-4 text-center">{t('hero.ctaPrimary')}</a>
                        <button 
                            onClick={() => setIsProductsOpen(true)}
                            className="btn-secondary text-sm md:text-base px-8 py-3.5 md:py-4"
                        >
                            {t('hero.ctaSecondary')}
                        </button>
                    </div>
                </div>

                <div ref={metricsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-8 md:pt-10 border-t border-white/10 w-full max-w-4xl">
                    {['expertise', 'structures', 'service', 'facilities'].map((key) => (
                        <div key={key} className="flex flex-col">
                            <span className="text-[10px] font-mono text-brand-steel uppercase tracking-wider mb-1 opacity-70">{t(`hero.metrics.${key}.label`)}</span>
                            <span className="text-xs md:text-base font-medium text-white">{t(`hero.metrics.${key}.value`)}</span>
                        </div>
                    ))}
                </div>
            </div>
            {/* Products Overlay */}
            {isProductsOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12">
                    <div 
                        className="absolute inset-0 bg-brand-graphite/40 backdrop-blur-2xl cursor-pointer"
                        onClick={() => setIsProductsOpen(false)}
                    ></div>
                    
                    <div 
                        ref={overlayRef}
                        className="relative w-full max-w-2xl glass-panel rounded-[2.5rem] border border-white/10 p-8 md:p-12 shadow-2xl overflow-hidden"
                    >
                        <button 
                            onClick={() => setIsProductsOpen(false)}
                            className="absolute top-8 right-8 p-2 rounded-full hover:bg-white/10 text-brand-steel transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="mb-10">
                            <span className="text-brand-cyan font-mono text-xs uppercase tracking-widest mb-2 block">{t('navbar.products')}</span>
                            <h3 className="text-3xl md:text-4xl font-bold text-white uppercase">{t('hero.ctaSecondary')}</h3>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                            {productList.map((product) => (
                                <Link
                                    key={product.id}
                                    to={product.path}
                                    onClick={() => setIsProductsOpen(false)}
                                    className="group flex items-center justify-between p-5 rounded-2xl bg-white/5 hover:bg-brand-cyan/10 border border-white/5 hover:border-brand-cyan/30 transition-all duration-300"
                                >
                                    <span className="text-lg md:text-xl font-medium text-white group-hover:text-brand-cyan transition-colors">{product.name}</span>
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-cyan group-hover:text-brand-graphite transition-all">
                                        <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default HeroSection;
