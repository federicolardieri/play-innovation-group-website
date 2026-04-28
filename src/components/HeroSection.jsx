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
    const videoRef = useRef(null);

    // iOS Safari fix: React's `muted` prop doesn't always set the HTML attribute.
    // Must set it imperatively on the DOM node.
    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;
        v.muted = true;
        v.defaultMuted = true;
        v.setAttribute('muted', '');
        v.setAttribute('playsinline', '');
        v.setAttribute('webkit-playsinline', '');
        v.load();
        v.play().catch(() => {
            // If autoplay is blocked, unlock on first touch
            const unlock = () => { v.play().catch(() => {}); };
            document.addEventListener('touchstart', unlock, { once: true });
            document.addEventListener('click', unlock, { once: true });
        });
    }, []);

    // GSAP initial animations — runs once on mount
    useEffect(() => {
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
        };
    }, []);

    // Overlay management — runs when products modal opens/closes
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

        return () => {
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
        <section
            id="home"
            ref={containerRef}
            className="relative w-full overflow-hidden min-h-[100dvh] flex flex-col"
        >
            {/* ─── BACKGROUND VIDEO ─────────────────────────────── */}
            <div className="absolute inset-0 z-0 bg-[#0E1116]">
                {/*
                  KEY iOS TRICK:
                  - Keep video opacity:0 until the 'play' event fires
                  - onPlay fades it in → the native play button is NEVER visible
                  - If autoplay blocked, video stays invisible until user touch unlocks it
                */}
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    disablePictureInPicture
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                        WebkitTransform: 'translateZ(0)',
                        transform: 'translateZ(0)',
                        filter: 'brightness(0.55)',
                        opacity: 0,
                        transition: 'opacity 0.5s ease',
                        objectPosition: 'center center',
                    }}
                    onPlay={(e) => { e.currentTarget.style.opacity = '1'; }}
                >
                    <source src="/padel-loop.mp4" type="video/mp4" />
                </video>

                {/* Gradient: subtle at top, soft at bottom to show through metrics */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to top, rgba(14,17,22,0) 0%, rgba(14,17,22,0.85) 25%, rgba(14,17,22,0.15) 75%, rgba(14,17,22,0.05) 100%)',
                    }}
                />

                {/* Noise overlay — very subtle */}
                <svg
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    style={{ opacity: 0.04, mixBlendMode: 'overlay' }}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <filter id="hNoiseFilter">
                        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#hNoiseFilter)" />
                </svg>
            </div>

            {/* ─── CONTENT ──────────────────────────────────────── */}
            <div className="relative z-10 flex flex-col justify-end flex-grow pt-32 md:pt-40 pb-16 md:pb-20 px-5 md:px-12 container mx-auto">
                <div className="max-w-3xl">
                    {/* Label pill */}
                    <div className="inline-block px-3 py-1 mb-4 md:mb-6 border border-brand-steel/30 rounded-full bg-[#0E1116]/50 backdrop-blur-sm">
                        <span className="text-[10px] md:text-xs font-mono font-medium tracking-widest text-brand-cyan uppercase">
                            {t('hero.label')}
                        </span>
                    </div>

                    {/* Headline */}
                    <h1
                        ref={headlineRef}
                        className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] mb-4 md:mb-6 tracking-tight text-white"
                    >
                        {t('hero.headline')}{' '}
                        <br className="hidden md:block" />
                        <span className="text-brand-cyan">{t('hero.headlineAccent')}</span>
                    </h1>

                    {/* Subheadline */}
                    <p
                        ref={subheadlineRef}
                        className="text-sm md:text-xl text-brand-steel mb-6 md:mb-10 max-w-2xl leading-relaxed"
                    >
                        {t('hero.subheadline')}
                    </p>

                    {/* CTAs */}
                    <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-3 md:gap-4">
                        <a
                            href="#quote"
                            className="btn-primary text-sm md:text-base px-8 py-3.5 md:py-4 text-center"
                        >
                            {t('hero.ctaPrimary')}
                        </a>
                        <button
                            onClick={() => setIsProductsOpen(true)}
                            className="btn-secondary text-sm md:text-base px-8 py-3.5 md:py-4"
                        >
                            {t('hero.ctaSecondary')}
                        </button>
                    </div>
                </div>

                {/* Metrics bar */}
                <div
                    ref={metricsRef}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-6 md:pt-10 mt-8 md:mt-12 border-t border-white/10 w-full max-w-4xl"
                >
                    {['expertise', 'structures', 'service', 'facilities'].map((key) => (
                        <div key={key} className="flex flex-col">
                            <span className="text-[10px] font-mono text-brand-steel uppercase tracking-wider mb-1 opacity-70">
                                {t(`hero.metrics.${key}.label`)}
                            </span>
                            <span className="text-xs md:text-base font-medium text-white">
                                {t(`hero.metrics.${key}.value`)}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ─── PRODUCTS OVERLAY ─────────────────────────────── */}
            {isProductsOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12">
                    <div
                        className="absolute inset-0 bg-brand-graphite/40 backdrop-blur-2xl cursor-pointer"
                        onClick={() => setIsProductsOpen(false)}
                    />
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
                            <span className="text-brand-cyan font-mono text-xs uppercase tracking-widest mb-2 block">
                                {t('navbar.products')}
                            </span>
                            <h3 className="text-3xl md:text-4xl font-bold text-white uppercase">
                                {t('hero.ctaSecondary')}
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                            {productList.map((product) => (
                                <Link
                                    key={product.id}
                                    to={product.path}
                                    onClick={() => setIsProductsOpen(false)}
                                    className="group flex items-center justify-between p-5 rounded-2xl bg-white/5 hover:bg-brand-cyan/10 border border-white/5 hover:border-brand-cyan/30 transition-all duration-300"
                                >
                                    <span className="text-lg md:text-xl font-medium text-white group-hover:text-brand-cyan transition-colors">
                                        {product.name}
                                    </span>
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
