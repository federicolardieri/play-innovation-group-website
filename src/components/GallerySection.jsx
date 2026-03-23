import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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

const GallerySection = () => {
    const { t } = useTranslation();
    const scrollContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

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
        <section className="py-24 bg-brand-graphite flex flex-col justify-center relative border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 z-10 w-full mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <span className="text-brand-cyan font-mono text-xs uppercase tracking-wider mb-4 block">
                        {t('gallery.label')}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">{t('gallery.title')}</h2>
                    <p className="text-brand-steel text-sm md:text-base">{t('gallery.subtitle')}</p>
                </div>

                <div className="flex gap-4">
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
                            alt={`Project Gallery ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 pointer-events-none"
                            draggable="false"
                        />
                        <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <span className="bg-brand-graphite/80 backdrop-blur-md text-white text-xs px-4 py-2 rounded-full font-mono">DETAIL 0{index + 1}</span>
                        </div>
                    </div>
                ))}
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}} />
        </section>
    );
};

export default GallerySection;
