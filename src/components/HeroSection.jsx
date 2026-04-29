import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from '../i18n/LanguageContext';
import { Link } from 'react-router-dom';
import { ChevronRight, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const { t } = useTranslation();
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const wrapperRef = useRef(null);   // sezione esterna alta (scroll driver)
    const stickyRef = useRef(null);    // contenuto sticky 100dvh
    const videoRef = useRef(null);
    const labelRef = useRef(null);
    const decorLineRef = useRef(null);
    const headlineRef = useRef(null);
    const subheadlineRef = useRef(null);
    const buttonsRef = useRef(null);
    const metricsRef = useRef(null);
    const overlayRef = useRef(null);

    // Video: autoplay loop su mobile, scroll-driven su desktop
    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;

        // Imposta muted come proprietà JS E come attributo DOM
        // (workaround bug React: l'attributo muted non viene trasferito correttamente nel DOM reale,
        //  iOS Safari controlla l'attributo al momento di valutare la policy autoplay)
        v.muted = true;
        v.defaultMuted = true;
        v.playsInline = true;
        v.setAttribute('muted', '');
        v.setAttribute('playsinline', '');
        v.setAttribute('webkit-playsinline', '');

        const isMobile = !window.matchMedia('(min-width: 768px)').matches;

        // ── MOBILE: autoplay loop, NO v.load() ──────────────────────────────────
        // v.load() resetta il media element e cancella l'autoplay in corso su iOS Safari.
        // Su mobile carichiamo tramite preload="auto" (attributo HTML) e chiamiamo
        // v.play() esplicitamente via evento canplay, con muted già impostato correttamente.
        if (isMobile) {
            v.loop = true;
            const tryPlay = () => {
                v.play().catch(() => {});
            };
            if (v.readyState >= 3) {
                tryPlay();
            } else {
                // Listener prima di load() per non perdere l'evento
                v.addEventListener('canplay', tryPlay, { once: true });
                // iOS Safari ignora preload="auto": serve v.load() esplicito per avviare il download
                v.load();
            }
            return;
        }

        // ── DESKTOP: scroll-driven scrubbing ────────────────────────────────────
        v.preload = 'auto';
        v.load();

        let st;
        let rafId;
        let latestProgress = 0;

        const seekVideo = () => {
            rafId = undefined;
            if (v.duration && isFinite(v.duration)) {
                v.currentTime = v.duration * latestProgress;
            }
        };

        const setupScrub = () => {
            v.pause();
            v.loop = false;
            v.currentTime = 0;

            st = ScrollTrigger.create({
                trigger: wrapperRef.current,
                start: 'top top',
                end: 'bottom bottom',
                onUpdate: (self) => {
                    latestProgress = self.progress;
                    if (rafId === undefined) {
                        rafId = requestAnimationFrame(seekVideo);
                    }
                },
            });
        };

        if (v.readyState >= 2) {
            setupScrub();
        } else {
            v.addEventListener('loadeddata', setupScrub, { once: true });
        }

        return () => {
            st?.kill();
            if (rafId !== undefined) cancelAnimationFrame(rafId);
        };
    }, []);

    // Animazioni di entrata al mount
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.fromTo(labelRef.current,
                { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
                { clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 0.7 },
                0.1
            )
            .fromTo(decorLineRef.current.querySelector('div'),
                { width: 0 },
                { width: 96, duration: 0.8, ease: 'power2.inOut' },
                0.3
            )
            .fromTo(headlineRef.current.children[0],
                { clipPath: 'inset(110% 0 0 0)', y: 20 },
                { clipPath: 'inset(0% 0 0 0)', y: 0, duration: 0.9 },
                0.5
            )
            .fromTo(headlineRef.current.children[1],
                { clipPath: 'inset(110% 0 0 0)', y: 20 },
                { clipPath: 'inset(0% 0 0 0)', y: 0, duration: 0.8 },
                0.72
            )
            .fromTo(subheadlineRef.current,
                { y: 24, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                0.9
            )
            .fromTo(buttonsRef.current.children,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7, stagger: 0.08 },
                1.05
            )
            .fromTo(metricsRef.current.children,
                { y: 15, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
                1.2
            );

            const buttons = buttonsRef.current.querySelectorAll('a, button');
            buttons.forEach(btn => {
                btn.addEventListener('mouseenter', () =>
                    gsap.to(btn, { scale: 1.03, duration: 0.2, ease: 'power1.out' })
                );
                btn.addEventListener('mouseleave', () =>
                    gsap.to(btn, { scale: 1, duration: 0.3, ease: 'elastic.out(1, 0.5)' })
                );
            });
        }, stickyRef);

        return () => ctx.revert();
    }, []);

    // Overlay modal prodotti
    useEffect(() => {
        if (isProductsOpen) {
            document.body.style.overflow = 'hidden';
            gsap.fromTo(overlayRef.current,
                { opacity: 0, scale: 0.95 },
                { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' }
            );
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isProductsOpen]);

    const productList = [
        { id: 'padel', name: 'Campi da Padel', path: '/prodotti/padel' },
        { id: 'tennis', name: 'Campi da Tennis', path: '/prodotti/tennis' },
        { id: 'pickleball', name: 'Campi da Pickleball', path: '/prodotti/pickleball' },
        { id: 'multisport', name: 'Campi Multisport & Calcio', path: '/prodotti/multisport' },
        { id: 'coperture', name: 'Coperture Sportive', path: '/prodotti/coperture' },
    ];

    return (
        /*
          Mobile: 100dvh (no scroll driver, video in autoplay loop)
          Desktop: 250dvh fa da "binario" per il trigger scroll-driven
        */
        <div id="home" ref={wrapperRef} className="h-[100dvh] md:h-[250dvh]">
            <div
                ref={stickyRef}
                className="sticky top-0 w-full overflow-hidden"
                style={{ height: '100dvh' }}
            >
                {/* ─── LAYER 0: base colore ─── */}
                <div className="absolute inset-0 z-0 bg-brand-graphite" />

                {/* ─── LAYER 1: video scroll-driven ─── */}
                <div className="absolute inset-0 z-[1]">
                    <video
                        ref={videoRef}
                        muted
                        playsInline
                        preload="auto"
                        className="absolute inset-0 w-full h-full object-cover object-[center_35%] md:object-center"
                        style={{ filter: 'brightness(0.72) contrast(1.08)' }}
                    >
                        <source src="/HERO-SECTION.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* ─── LAYER 2: dot grid CSS ─── */}
                <div
                    className="absolute inset-0 z-[2] pointer-events-none"
                    style={{
                        opacity: 0.035,
                        backgroundImage: 'radial-gradient(circle, rgba(138,148,166,0.8) 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                    }}
                />

                {/* ─── LAYER 3: vignette gradient ─── */}
                <div
                    className="absolute inset-0 z-[3] pointer-events-none"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(2,21,29,0.6) 0%, rgba(2,21,29,0.05) 20%, rgba(2,21,29,0.1) 60%, rgba(2,21,29,0.8) 100%)',
                    }}
                />

                {/* ─── LAYER 4: noise SVG ─── */}
                <svg
                    className="pointer-events-none absolute inset-0 h-full w-full z-[4]"
                    style={{ opacity: 0.04, mixBlendMode: 'overlay' }}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <filter id="hNoiseFilter">
                        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#hNoiseFilter)" />
                </svg>

                {/* ─── CONTENT ─── */}
                <div className="relative z-10 flex flex-col justify-end h-full pb-6 md:pb-20 px-5 md:px-12 pt-20 md:pt-40 container mx-auto">
                    <div className="max-w-3xl">

                        {/* Label pill */}
                        <div
                            ref={labelRef}
                            className="inline-block px-3 py-1 mb-3 md:mb-6 border border-brand-steel/30 rounded-full bg-brand-graphite/50 backdrop-blur-sm"
                        >
                            <span className="text-[10px] md:text-xs font-mono font-medium tracking-widest text-brand-cyan uppercase">
                                {t('hero.label')}
                            </span>
                        </div>

                        {/* Linea decorativa — nascosta su mobile */}
                        <div ref={decorLineRef} className="mb-3 md:mb-6 hidden md:flex items-center gap-3">
                            <div
                                className="h-[1px] bg-gradient-to-r from-brand-cyan to-transparent"
                                style={{ width: 0 }}
                            />
                            <span className="text-[10px] font-mono text-brand-steel/60 uppercase tracking-[0.2em]">
                                Play Innovation
                            </span>
                        </div>

                        {/* Headline split */}
                        <h1 ref={headlineRef} className="mb-3 md:mb-6 leading-none tracking-tight">
                            <span className="block text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-bold text-white">
                                {t('hero.headline')}
                            </span>
                            <span className="block text-xl sm:text-2xl md:text-4xl xl:text-5xl font-light text-brand-cyan mt-1 md:mt-2">
                                {t('hero.headlineAccent')}
                            </span>
                        </h1>

                        {/* Subheadline */}
                        <p
                            ref={subheadlineRef}
                            className="text-sm md:text-xl text-brand-steel mb-5 md:mb-10 max-w-2xl leading-relaxed"
                        >
                            {t('hero.subheadline')}
                        </p>

                        {/* CTAs */}
                        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-2.5 md:gap-4">
                            <a
                                href="#quote"
                                className="btn-primary text-sm md:text-base px-8 py-3 md:py-4 text-center"
                            >
                                {t('hero.ctaPrimary')}
                            </a>
                            <button
                                onClick={() => setIsProductsOpen(true)}
                                className="btn-secondary text-sm md:text-base px-8 py-3 md:py-4"
                            >
                                {t('hero.ctaSecondary')}
                            </button>
                        </div>
                    </div>

                    {/* Metrics bar */}
                    <div
                        ref={metricsRef}
                        className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 pt-4 md:pt-10 mt-5 md:mt-12 border-t border-white/10 w-full max-w-4xl"
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

                {/* ─── PRODUCTS OVERLAY (invariato) ─── */}
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
            </div>
        </div>
    );
};

export default HeroSection;
