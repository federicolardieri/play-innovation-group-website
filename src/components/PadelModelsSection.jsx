import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const modelImages = [
    '/Padel-3d/EXTRA%20SOLId%203D.png',
    '/Padel-3d/PANORAMICO%203D.jpg',
    '/Padel-3d/SUPER%20PANORAMICO%203D.png',
    '/Padel-3d/IBRIDO%203D.png'
];

const specKeys = ['structure', 'bolts', 'lighting', 'priceRange', 'glass'];

const galleryImages = {
    'extra-solid': [
        'https://images.unsplash.com/photo-1626224484214-40d5d9c37de0?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1592910710242-ca939bc99532?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2070&auto=format&fit=crop'
    ],
    'panoramico': [
        '/PANORAMICO/12fc4f7f-f49a-47f9-8fe7-ebd8cd05ace2.jpg',
        '/PANORAMICO/19dfeb79-6e90-4678-aa41-90f25da37b27.jpg',
        '/PANORAMICO/462f8711-cef3-41cd-aa01-f4654ac42146.jpg',
        '/PANORAMICO/d2c91dc9-091a-4eb9-8ea8-43b085847629.JPG',
        '/PANORAMICO/ee6b6cd5-6f3b-4cdb-a941-259eb7bfc101.jpg'
    ],
    'super-panoramico': [
        '/SUPERPANORAMICO/PHOTO-2026-03-18-16-23-49.jpeg',
        '/SUPERPANORAMICO/PHOTO-2026-03-18-16-23-49%202.jpeg',
        '/SUPERPANORAMICO/PHOTO-2026-03-18-16-23-49%203.jpeg',
        '/SUPERPANORAMICO/PHOTO-2026-03-18-16-23-49%204.jpeg',
        '/SUPERPANORAMICO/PHOTO-2026-03-18-16-23-49%205.jpeg',
    ],
    'ibrido': [
        'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1626224484214-40d5d9c37de0?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1599586120429-48281b6f0ece?q=80&w=2070&auto=format&fit=crop'
    ]
};

const PadelModelsSection = () => {
    const { t } = useTranslation();
    const containerRef = useRef(null);
    const panelsRef = useRef([]);
    const [isCompareOpen, setIsCompareOpen] = useState(false);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [selectedGallery, setSelectedGallery] = useState([]);
    const [galleryTitle, setGalleryTitle] = useState("");
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

    useEffect(() => {
        if (isGalleryOpen || isCompareOpen || selectedPhotoIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                setIsGalleryOpen(false);
                setIsCompareOpen(false);
                setSelectedPhotoIndex(null);
            }
        };
        window.addEventListener('keydown', handleEsc);
        
        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isGalleryOpen, isCompareOpen, selectedPhotoIndex]);

    const handleNextPhoto = (e) => {
        if (e) e.stopPropagation();
        setSelectedPhotoIndex((prev) => (prev + 1) % selectedGallery.length);
    };

    const handlePrevPhoto = (e) => {
        if (e) e.stopPropagation();
        setSelectedPhotoIndex((prev) => (prev - 1 + selectedGallery.length) % selectedGallery.length);
    };

    useEffect(() => {
        if (selectedPhotoIndex === null) return;

        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') handleNextPhoto();
            if (e.key === 'ArrowLeft') handlePrevPhoto();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedPhotoIndex, selectedGallery]);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Configuration for smoother mobile performance
            gsap.config({ force3D: true });
            
            const isMobile = window.innerWidth < 768;

            panelsRef.current.forEach((panel, i) => {
                gsap.fromTo(panel,
                    { opacity: 0, y: isMobile ? 0 : 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        scrollTrigger: {
                            trigger: panel,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                            fastScrollEnd: true,
                            preventOverlaps: true
                        }
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Get translated models
    const translatedModels = t('padelModels.models');
    const models = (Array.isArray(translatedModels) ? translatedModels : []).map((model, i) => ({
        ...model,
        image: modelImages[i],
        id: ['extra-solid', 'panoramico', 'super-panoramico', 'ibrido'][i]
    }));

    // Get translated spec labels
    const specLabels = t('padelModels.specLabels') || {};

    return (
        <section ref={containerRef} id="padel-models" className="bg-brand-graphite relative z-10 text-white pb-20 md:pb-32">
            <div className="container mx-auto px-6 md:px-8 pt-0 md:pt-24 pb-12 text-center flex flex-col items-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">{t('padelModels.title')}</h2>
                <p className="text-brand-steel text-base md:text-lg max-w-2xl mx-auto mb-8">{t('padelModels.subtitle')}</p>

                <button
                    onClick={() => setIsCompareOpen(true)}
                    className="flex items-center gap-2 px-8 py-3 bg-white/10 hover:bg-brand-cyan hover:text-brand-graphite border border-brand-cyan text-brand-cyan rounded-full font-bold transition-all duration-300"
                >
                    {t('padelModels.compare')}
                </button>
            </div>

            <div className="relative flex flex-col gap-8 md:gap-12 px-6 md:px-8">
                {models.map((model, index) => (
                    <div
                        key={model.id}
                        ref={el => panelsRef.current[index] = el}
                        className={`w-full flex items-center justify-center p-6 md:p-12 md:sticky top-24 bg-brand-slate rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl transition-all duration-300`}
                        style={{ 
                            zIndex: index, 
                            top: typeof window !== 'undefined' && window.innerWidth >= 768 ? `${6 + index * 1.5}rem` : 'auto' 
                        }}
                    >
                        <div className="w-full max-w-7xl">
                            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                                 {/* Left Side: Title, Image */}
                                <div className="w-full lg:w-1/2 flex flex-col">
                                    <h3 className="text-3xl md:text-6xl font-bold text-brand-orange mb-2 tracking-wide uppercase">{model.name}</h3>
                                    <p className="text-brand-steel text-xs md:text-base tracking-widest uppercase mb-6 md:mb-8">{model.subtitle}</p>
 
                                    <div className="relative w-full aspect-video md:aspect-[4/3] rounded-sm mt-4">
                                        <div className="absolute top-0 left-0 w-[90%] h-[90%] bg-brand-orange z-0 transform -translate-x-3 -translate-y-3 md:-translate-x-4 md:-translate-y-4 rounded-tl-[2rem] md:rounded-tl-[3rem] rounded-br-[2rem] md:rounded-br-[3rem]"></div>
                                        <img src={model.image} alt={model.name} className="relative z-10 w-full h-full object-cover shadow-2xl" />
                                    </div>
                                </div>

                                {/* Right Side: Descriptions and CTA */}
                                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                    <div className="space-y-4 mb-10 border-l-2 border-brand-orange/30 pl-6">
                                        {(model.paragraphs || []).map((p, idx) => (
                                            <p key={idx} className="text-brand-offwhite leading-relaxed text-[15px]">{p}</p>
                                        ))}
                                    </div>

                                     <div className="mt-4 mb-8 md:mb-10 w-full rounded-xl bg-brand-graphite/50 overflow-hidden border border-brand-orange/10">
                                        <div className="grid grid-cols-2 gap-4 p-5 md:p-6">
                                            {specKeys.map((key, idx) => (
                                                <div key={idx} className="flex flex-col justify-start">
                                                    <h4 className="text-brand-orange text-[10px] md:text-xs tracking-widest mb-1 uppercase opacity-80">{specLabels[key] || key}</h4>
                                                    <p className="text-brand-steel text-xs md:text-sm leading-tight">{model.specs?.[key]}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4 mt-4">
                                        <a href="#quote" className="btn-primary flex-1 text-center justify-center text-sm tracking-wider uppercase group">
                                            {t('padelModels.requestQuote')}
                                            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                        <button 
                                            onClick={() => {
                                                setSelectedGallery(galleryImages[model.id] || []);
                                                setGalleryTitle(model.name);
                                                setIsGalleryOpen(true);
                                            }}
                                            className="px-6 py-3 bg-white/5 hover:bg-brand-orange hover:text-white border border-white/20 text-white rounded-full font-bold transition-all duration-300 text-sm tracking-wider uppercase"
                                        >
                                            {t('padelModels.gallery')}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Compare Modal */}
            {isCompareOpen && createPortal(
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-2 md:p-4 bg-brand-graphite/98 backdrop-blur-xl">
                    <div className="bg-brand-slate border border-brand-cyan/30 rounded-2xl md:rounded-3xl w-full max-w-7xl h-full max-h-[100dvh] md:max-h-[90vh] shadow-2xl relative flex flex-col overflow-hidden">
                        <button
                            onClick={() => setIsCompareOpen(false)}
                            className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-white/10 hover:bg-brand-orange text-white transition-colors z-[10000]"
                        >
                            <X size={24} />
                        </button>

                        <div className="p-4 pt-16 md:p-12 flex-1 flex flex-col h-full overflow-hidden">
                            <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 text-center shrink-0">{t('padelModels.compareTitle')}</h2>
                            <p className="text-brand-steel text-sm md:text-base text-center mb-6 md:mb-12 shrink-0">{t('padelModels.compareSubtitle')}</p>

                            <div className="flex overflow-x-auto overflow-y-hidden pb-4 md:pb-8 -mx-4 px-4 snap-x snap-mandatory gap-4 md:gap-6 hide-scrollbar flex-1">
                                {models.map((m, idx) => (
                                    <div key={m.id} className="w-[85vw] md:min-w-[320px] max-w-[320px] flex-none snap-center bg-brand-graphite rounded-3xl border border-brand-cyan/20 flex flex-col shadow-2xl relative group overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-b from-brand-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                        <div className="p-4 md:p-6 flex flex-col items-center text-center bg-white/5 border-b border-white/10 relative z-10 shrink-0">
                                            <div className="relative w-full h-28 md:h-48 mb-4 md:mb-6 shrink-0">
                                                <div className="absolute inset-0 bg-brand-orange/20 rounded-xl blur-xl transform translate-y-2 opacity-50"></div>
                                                <img src={m.image} alt={m.name} className={`relative z-10 w-full h-full rounded-xl shadow-lg border border-white/10 ${idx === 1 ? 'object-cover' : 'object-contain'}`} />
                                            </div>
                                            <h3 className="text-brand-cyan font-bold text-xl md:text-2xl tracking-wider uppercase mb-1">{m.name}</h3>
                                            <span className="text-[10px] md:text-xs text-brand-steel uppercase tracking-widest opacity-80 font-mono">Premium Series</span>
                                        </div>
                                        <div className="p-4 md:p-8 flex flex-col gap-4 flex-1 overflow-y-auto bg-gradient-to-b from-brand-graphite to-brand-slate/50 relative z-10">
                                            {specKeys.map((key, i) => (
                                                <div key={i} className="flex flex-col border-l-2 border-brand-orange/30 pl-3 md:pl-4">
                                                    <span className="text-brand-orange text-[9px] md:text-[11px] font-bold tracking-[0.2em] uppercase opacity-90 mb-1">{specLabels[key] || key}</span>
                                                    <span className="text-brand-offwhite text-xs md:text-sm leading-relaxed">{m.specs?.[key]}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="p-4 md:p-8 mt-auto border-t border-white/10 bg-brand-slate relative z-10 shrink-0">
                                            <a href="#quote" onClick={() => setIsCompareOpen(false)} className="w-full flex items-center justify-center px-4 md:px-6 py-3 bg-transparent border-2 border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-brand-graphite text-xs md:text-[13px] font-bold rounded-xl transition-all uppercase tracking-[0.15em]">
                                                {t('padelModels.choose')} {m.name}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            {/* Mobile Swipe Indicator */}
                            <div className="flex md:hidden justify-center items-center mt-2 gap-3 text-brand-steel text-[10px] uppercase tracking-widest font-mono shrink-0">
                                <span className="animate-pulse">←</span> Scorri per confrontare <span className="animate-pulse">→</span>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
            {/* Gallery Modal */}
            {isGalleryOpen && createPortal(
                <div 
                    onClick={() => setIsGalleryOpen(false)}
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl transition-all duration-500 cursor-zoom-out"
                >
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsGalleryOpen(false);
                        }}
                        className="fixed top-6 right-6 mt-[env(safe-area-inset-top)] p-4 rounded-full bg-white/10 hover:bg-brand-orange text-white transition-all z-[10000] hover:scale-110 active:scale-90"
                        title="Close Gallery"
                    >
                        <X size={32} />
                    </button>

                    <div 
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-6xl max-h-[100dvh] overflow-y-auto p-4 pt-16 md:p-8 cursor-default"
                    >
                        <div className="mb-8 md:mb-12 text-center mt-4">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                                {galleryTitle} <span className="text-brand-orange block md:inline mt-1">Showcase</span>
                            </h2>
                            <div className="w-24 h-1 bg-brand-orange mx-auto"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
                            {selectedGallery.map((img, idx) => (
                                <div 
                                    key={idx} 
                                    onClick={() => setSelectedPhotoIndex(idx)}
                                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 hover:border-brand-orange/50 transition-all duration-500 shadow-2xl cursor-zoom-in"
                                >
                                    <img 
                                        src={img} 
                                        alt={`${galleryTitle} detail ${idx + 1}`} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                        <p className="text-white font-mono text-xs tracking-widest uppercase">Visual Reference 0{idx + 1}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>,
                document.body
            )}

            {/* Photo Lightbox */}
            {selectedPhotoIndex !== null && createPortal(
                <div 
                    onClick={() => setSelectedPhotoIndex(null)}
                    className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/98 backdrop-blur-2xl transition-all duration-300 cursor-zoom-out"
                >
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedPhotoIndex(null);
                        }}
                        className="fixed top-6 right-6 mt-[env(safe-area-inset-top)] p-4 rounded-full bg-white/10 hover:bg-brand-orange text-white transition-all z-[10010] hover:scale-110 active:scale-90"
                        title="Close Photo"
                    >
                        <X size={32} />
                    </button>
                    
                    <button
                        onClick={handlePrevPhoto}
                        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/5 hover:bg-brand-orange text-white transition-all z-[10010] hover:scale-110 active:scale-90"
                        title="Previous Photo"
                    >
                        <ChevronLeft size={32} className="md:w-10 md:h-10" />
                    </button>

                    <button
                        onClick={handleNextPhoto}
                        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/5 hover:bg-brand-orange text-white transition-all z-[10010] hover:scale-110 active:scale-90"
                        title="Next Photo"
                    >
                        <ChevronRight size={32} className="md:w-10 md:h-10" />
                    </button>
                    
                    <div className="relative max-w-7xl max-h-[90vh] flex flex-col items-center justify-center">
                        <img 
                            src={selectedGallery[selectedPhotoIndex]} 
                            alt="Full size view" 
                            className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-lg border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <p className="text-brand-steel mt-6 font-mono text-sm tracking-widest uppercase">
                            Photo {selectedPhotoIndex + 1} / {selectedGallery.length}
                        </p>
                    </div>
                </div>,
                document.body
            )}
        </section>
    );
};

export default PadelModelsSection;
