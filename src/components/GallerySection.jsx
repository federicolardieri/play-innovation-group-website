import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

const images = [
    '/Tennis-indoor/copertura-tennis3.JPG',
    '/SUPERPANORAMICO/PHOTO-2026-03-18-16-23-49%205.jpeg',
    '/PANORAMICO/19dfeb79-6e90-4678-aa41-90f25da37b27.jpg',
    '/PANORAMICO/d2c91dc9-091a-4eb9-8ea8-43b085847629.JPG',
    '/Padel-indoor/Copertura-padel2.JPG',
    '/MULTISPORT/PHOTO-2026-03-18-16-07-47.jpeg',
    '/Coperture/5f8dfcea-b006-4d33-8f01-b2c2bc32b043.jpeg',
];

const altTexts = [
    'Copertura tensostruttura per campo da tennis indoor',
    'Struttura superpanoramica per campo sportivo esterno',
    'Copertura panoramica per impianto sportivo',
    'Vista interna copertura panoramica per struttura sportiva',
    'Tensostruttura per campo da padel indoor',
    'Copertura multisport per palestra o campo polifunzionale',
    'Struttura di copertura per impianto sportivo all-around',
];

const GallerySection = () => {
    const { t } = useTranslation();
    const scrollContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    useEffect(() => {
        if (lightboxOpen) {
            document.body.style.overflow = 'hidden';
            const handleKeyDown = (e) => {
                if (e.key === 'Escape') setLightboxOpen(false);
                if (e.key === 'ArrowLeft') setLightboxIndex(prev => (prev - 1 + images.length) % images.length);
                if (e.key === 'ArrowRight') setLightboxIndex(prev => (prev + 1) % images.length);
            };
            window.addEventListener('keydown', handleKeyDown);
            return () => {
                document.body.style.overflow = 'unset';
                window.removeEventListener('keydown', handleKeyDown);
            };
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [lightboxOpen]);

    const handleImageClick = (index) => {
        if (!isDragging) {
            setLightboxIndex(index);
            setLightboxOpen(true);
        }
    };

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const clientWidth = scrollContainerRef.current.clientWidth;
            const scrollAmount = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section className="py-20 md:py-24 bg-brand-graphite flex flex-col justify-center relative border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-4 md:px-12 z-10 w-full mb-10 md:mb-12 flex flex-col items-center text-center md:flex-row md:justify-between md:items-end md:text-left gap-6 md:gap-8">
                <div className="flex flex-col items-center md:items-start max-w-2xl px-2">
                    <span className="text-brand-cyan font-mono text-xs uppercase tracking-wider mb-3 md:mb-4 block">
                        {t('gallery.label')}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">{t('gallery.title')}</h2>
                    <p className="text-brand-steel text-sm md:text-base max-w-lg">{t('gallery.subtitle')}</p>
                </div>

                <div className="flex justify-center md:justify-end gap-4 z-20 w-full md:w-auto mt-2 md:mt-0">
                    <button
                        onClick={() => scroll('left')}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-cyan hover:text-brand-graphite hover:border-brand-cyan transition-colors"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-cyan hover:text-brand-graphite hover:border-brand-cyan transition-colors"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            <div
                ref={scrollContainerRef}
                className={`flex gap-6 px-6 md:px-12 overflow-x-auto snap-x snap-mandatory scrollbar-hide cursor-${isDragging ? 'grabbing' : 'grab'}`}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {images.map((src, index) => (
                    <div key={index} className="h-[40vh] md:h-[60vh] w-[85vw] md:w-[60vw] lg:w-[45vw] shrink-0 snap-center rounded-[2rem] overflow-hidden relative group select-none">
                        <div className="absolute inset-0 bg-brand-graphite/20 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
                        <img
                            src={src}
                            alt={altTexts[index]}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 pointer-events-none"
                            draggable="false"
                        />
                        {/* Wrapper for click handling separate from drag */}
                        <div 
                            className="absolute inset-0 cursor-pointer z-20" 
                            onClick={(e) => { 
                                e.stopPropagation(); 
                                if (!isDragging) handleImageClick(index); 
                            }}
                        ></div>
                        <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <span className="bg-brand-graphite/80 backdrop-blur-md text-white text-xs px-4 py-2 rounded-full font-mono">DETAIL 0{index + 1}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Gallery Lightbox */}
            {lightboxOpen && createPortal(
                <div 
                    onClick={() => setLightboxOpen(false)}
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/98 backdrop-blur-2xl transition-all duration-300 cursor-zoom-out"
                >
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setLightboxOpen(false);
                        }}
                        aria-label="Chiudi"
                        className="fixed top-6 right-6 mt-[env(safe-area-inset-top)] p-4 rounded-full bg-white/10 hover:bg-brand-orange text-white transition-all z-[10000] hover:scale-110 active:scale-90"
                    >
                        <X size={32} />
                    </button>
                    
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setLightboxIndex(prev => (prev - 1 + images.length) % images.length);
                        }}
                        aria-label="Immagine precedente"
                        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/5 hover:bg-brand-orange text-white transition-all z-[10000] hover:scale-110 active:scale-90"
                    >
                        <ChevronLeft size={32} className="md:w-10 md:h-10" />
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setLightboxIndex(prev => (prev + 1) % images.length);
                        }}
                        aria-label="Immagine successiva"
                        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/5 hover:bg-brand-orange text-white transition-all z-[10000] hover:scale-110 active:scale-90"
                    >
                        <ChevronRight size={32} className="md:w-10 md:h-10" />
                    </button>
                    
                    <div className="relative max-w-7xl max-h-[90vh] flex flex-col items-center justify-center">
                        <img 
                            src={images[lightboxIndex]} 
                            alt={altTexts[lightboxIndex]}
                            className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-lg border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <p className="text-brand-steel mt-6 font-mono text-sm tracking-widest uppercase">
                            Photo {lightboxIndex + 1} / {images.length}
                        </p>
                    </div>
                </div>,
                document.body
            )}

        </section>
    );
};

export default GallerySection;
