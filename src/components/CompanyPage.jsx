import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../i18n/LanguageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import QuoteSection from './QuoteSection';

gsap.registerPlugin(ScrollTrigger);

const CompanyPage = () => {
    const { t } = useTranslation();
    const pageRef = useRef(null);
    const heroContentRef = useRef(null);
    const aboutRef = useRef(null);
    const timelineRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Hero Animation
            gsap.fromTo(heroContentRef.current.children,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    delay: 0.2
                }
            );

            // About Reveal
            gsap.fromTo(aboutRef.current,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: aboutRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Values Stagger
            const valueItems = gsap.utils.toArray('.value-item');
            gsap.fromTo(valueItems,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: timelineRef.current,
                        start: "top 75%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Background Parallax
            gsap.to('.hero-bg', {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: ".hero-section",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    const values = t('companyPage.values.items') || [];

    return (
        <div ref={pageRef} className="pt-24 md:pt-20 bg-brand-graphite min-h-screen">
            <Helmet>
                <title>Costruttori di Impianti Sportivi Premium in Italia | Play Innovation Group</title>
                <meta name="description" content="Play Innovation Group: esperienza nella progettazione e costruzione di impianti sportivi di alta qualità in tutta Italia. Scopri chi siamo." />
                <meta name="keywords" content="costruttori impianti sportivi, costruzione impianti sportivi italia, progettazione campi sportivi, play innovation group, edilpadel" />
                <link rel="canonical" href="https://www.playinnovationgroup.com/azienda" />
            </Helmet>
            {/* Hero Section */}
            <section className="hero-section relative h-[60dvh] md:h-[70vh] flex items-center justify-center overflow-hidden">
                <div 
                    className="hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542650059-e970a09eace0?auto=format&fit=crop&q=80")' }}
                >
                    <div className="absolute inset-0 bg-brand-graphite/80 backdrop-blur-sm"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
                    <div ref={heroContentRef} className="max-w-4xl mx-auto flex flex-col items-center">
                        {/* Enlarged Logo for Hero */}
                        <div className="mb-8 md:mb-10 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full border-2 border-brand-cyan/20 p-2 glass-panel overflow-hidden">
                             <img src="/logo.png" alt="PlayInnovation Logo" className="w-full h-full object-cover rounded-full" />
                        </div>
                        
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tight">
                            {t('companyPage.hero.title')}
                        </h1>
                        <p className="text-lg md:text-2xl text-brand-steel max-w-2xl mx-auto">
                            {t('companyPage.hero.subtitle')}
                        </p>
                    </div>
                </div>
            </section>

            {/* About / Mission Section */}
            <section ref={aboutRef} className="py-16 md:py-24 relative z-10">
                <div className="container mx-auto px-4 md:px-12">
                    <div className="max-w-4xl mx-auto text-center glass-panel p-8 md:p-16 rounded-[2rem] md:rounded-[2.5rem] border border-white/5">
                        <span className="text-brand-cyan font-mono text-xs uppercase tracking-wider mb-6 block">
                            {t('companyPage.about.title')}
                        </span>
                        <p className="text-xl md:text-3xl lg:text-4xl leading-relaxed text-brand-offwhite font-light">
                            {t('companyPage.about.content')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Values / Method Section */}
            <section id="method" ref={timelineRef} className="py-16 md:py-24 bg-brand-slate relative z-10">
                <div className="container mx-auto px-4 md:px-12">
                     <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white">{t('companyPage.values.title')}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {Array.isArray(values) && values.map((val, idx) => (
                            <div key={idx} className="value-item glass-panel p-8 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border border-white/5 hover:border-brand-cyan/30 transition-colors duration-500 group">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-brand-graphite border border-white/10 flex items-center justify-center mb-6 md:mb-8 group-hover:bg-brand-cyan/10 transition-colors">
                                    <span className="text-brand-cyan font-mono text-lg md:text-xl">{`0${idx + 1}`}</span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{val.title}</h3>
                                <p className="text-brand-steel text-base md:text-lg leading-relaxed">
                                    {val.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Closing Quote Section */}
            <QuoteSection />
        </div>
    );
};

export default CompanyPage;
