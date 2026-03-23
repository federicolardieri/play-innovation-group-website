import React, { useEffect, useRef, useState } from 'react';
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
            panelsRef.current.forEach((panel, i) => {
                gsap.fromTo(panel,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        scrollTrigger: {
                            trigger: panel,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
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
            <div className="container mx-auto px-4 md:px-8 pt-20 md:pt-24 pb-12 text-center flex flex-col items-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">{t('padelModels.title')}</h2>
                <p className="text-brand-steel text-base md:text-lg max-w-2xl mx-auto mb-8">{t('padelModels.subtitle')}</p>

                <button
                    onClick={() => setIsCompareOpen(true)}
                    className="flex items-center gap-2 px-8 py-3 bg-white/10 hover:bg-brand-cyan hover:text-brand-graphite border border-brand-cyan text-brand-cyan rounded-full font-bold transition-all duration-300"
                >
                    {t('padelModels.compare')}
                </button>
            </div>

            <div className="relative flex flex-col gap-8 md:gap-12 px-4 md:px-8">
                {models.map((model, index) => (
                    <div
                        key={model.id}
                        ref={el => panelsRef.current[index] = el}
                        className={`w-full flex items-center justify-center p-5 md:p-12 sticky top-24 bg-brand-slate rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl`}
                        style={{ zIndex: index, top: `${6 + index * 1.5}rem` }}
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
            {isCompareOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-graphite/90 backdrop-blur-md">
                    <div className="bg-brand-slate border border-brand-cyan/30 rounded-3xl w-full max-w-7xl max-h-[90vh] overflow-y-auto shadow-2xl relative">
                        <button
                            onClick={() => setIsCompareOpen(false)}
                            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-brand-orange text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">{t('padelModels.compareTitle')}</h2>
                            <p className="text-brand-steel text-center mb-12">{t('padelModels.compareSubtitle')}</p>

                            <div className="overflow-x-auto pb-4">
                                <table className="w-full min-w-[800px] text-left border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="p-4 border-b border-white/10 text-brand-steel font-medium font-mono">{t('padelModels.specs')}</th>
                                            {models.map(m => (
                                                <th key={m.id} className="p-4 border-b border-white/10 w-1/4">
                                                    <div className="flex flex-col items-center text-center">
                                                        <img src={m.image} alt={m.name} className="w-full h-32 object-cover rounded-lg mb-4 opacity-80" />
                                                        <span className="text-brand-cyan font-bold tracking-wider">{m.name}</span>
                                                    </div>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {specKeys.map((key, i) => (
                                            <tr key={i} className="hover:bg-white/5 transition-colors">
                                                <td className="p-4 text-brand-orange text-sm font-bold tracking-wider uppercase max-w-[150px]">{specLabels[key] || key}</td>
                                                {models.map(m => (
                                                    <td key={m.id} className="p-4 text-brand-steel text-sm">
                                                        {m.specs?.[key]}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                        <tr>
                                            <td className="p-4"></td>
                                            {models.map(m => (
                                                <td key={m.id} className="p-4 text-center">
                                                    <a href="#quote" onClick={() => setIsCompareOpen(false)} className="inline-flex mt-4 items-center justify-center px-4 py-2 bg-brand-graphite border border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-brand-graphite text-xs font-bold rounded-full transition-colors uppercase">
                                                        {t('padelModels.choose')} {m.name}
                                                    </a>
                                                </td>
                                            ))}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* Gallery Modal */}
            {isGalleryOpen && (
                <div 
                    onClick={() => setIsGalleryOpen(false)}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl transition-all duration-500 cursor-zoom-out"
                >
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsGalleryOpen(false);
                        }}
                        className="absolute top-6 right-6 p-4 rounded-full bg-white/10 hover:bg-brand-orange text-white transition-all z-[110] hover:scale-110 active:scale-90"
                        title="Close Gallery"
                    >
                        <X size={32} />
                    </button>

                    <div 
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-6xl max-h-[90vh] overflow-y-auto p-4 md:p-8 cursor-default"
                    >
                        <div className="mb-12 text-center">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                                {galleryTitle} <span className="text-brand-orange">Showcase</span>
                            </h2>
                            <div className="w-24 h-1 bg-brand-orange mx-auto"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                </div>
            )}

            {/* Photo Lightbox */}
            {selectedPhotoIndex !== null && (
                <div 
                    onClick={() => setSelectedPhotoIndex(null)}
                    className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/98 backdrop-blur-2xl transition-all duration-300 cursor-zoom-out"
                >
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedPhotoIndex(null);
                        }}
                        className="absolute top-6 right-6 p-4 rounded-full bg-white/10 hover:bg-brand-orange text-white transition-all z-[210] hover:scale-110 active:scale-90"
                        title="Close Photo"
                    >
                        <X size={32} />
                    </button>
                    
                    <button
                        onClick={handlePrevPhoto}
                        className="absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 hover:bg-brand-orange text-white transition-all z-[210] hover:scale-110 active:scale-90"
                        title="Previous Photo"
                    >
                        <ChevronLeft size={40} />
                    </button>

                    <button
                        onClick={handleNextPhoto}
                        className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 hover:bg-brand-orange text-white transition-all z-[210] hover:scale-110 active:scale-90"
                        title="Next Photo"
                    >
                        <ChevronRight size={40} />
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
                </div>
            )}
        </section>
    );
};

export default PadelModelsSection;
