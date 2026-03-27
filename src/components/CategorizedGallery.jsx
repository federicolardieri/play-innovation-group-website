import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

import { projects } from '../data/projects';

const CategorizedGallery = () => {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState(0);
    const [lightbox, setLightbox] = useState({ open: false, projectIdx: null, imageIdx: 0 });

    const categories = t('categorizedGallery.categories');
    const categoryList = Array.isArray(categories) ? categories : ['Tutti', 'Padel', 'Coperture'];

    const projectsMeta = t('categorizedGallery.projects');
    const projectList = Array.isArray(projectsMeta) ? projectsMeta : [];

    const filteredProjects = activeCategory === 0
        ? projects
        : projects.filter(p => {
            const keys = p.categoryKeys || [];
            if (activeCategory === 1) return keys.includes('Padel');
            if (activeCategory === 2) return keys.includes('Tennis');
            if (activeCategory === 3) return keys.includes('Pickleball');
            if (activeCategory === 4) return keys.includes('Coperture');
            if (activeCategory === 5) return keys.includes('Multisport');
            return true;
        });

    const openLightbox = (projectIdx, imgIdx = 0) => {
        setLightbox({ open: true, projectIdx, imageIdx: imgIdx });
    };

    const closeLightbox = useCallback(() => {
        setLightbox({ open: false, projectIdx: null, imageIdx: 0 });
    }, []);

    const navigateLightbox = useCallback((dir) => {
        setLightbox(prev => {
            const project = projects[prev.projectIdx];
            if (!project) return prev;
            const total = project.images.length;
            return { ...prev, imageIdx: (prev.imageIdx + dir + total) % total };
        });
    }, []);

    // ESC key and arrow keys to navigate/close
    useEffect(() => {
        if (!lightbox.open) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') navigateLightbox(-1);
            if (e.key === 'ArrowRight') navigateLightbox(1);
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [lightbox.open, closeLightbox, navigateLightbox]);

    const getProjectCategory = (project) => {
        const keys = project.categoryKeys || [];
        if (keys.includes('Padel')) return categoryList[1] || 'Padel';
        if (keys.includes('Tennis')) return categoryList[2] || 'Tennis';
        if (keys.includes('Pickleball')) return categoryList[3] || 'Pickleball';
        if (keys.includes('Coperture')) return categoryList[4] || 'Coperture';
        if (keys.includes('Multisport')) return categoryList[5] || 'Multisport';
        return keys[0] || '';
    };

    return (
        <section id="progetti" className="py-20 md:py-24 bg-brand-slate relative z-10 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <span className="text-brand-cyan font-mono text-xs uppercase tracking-wider mb-4 block">
                        {t('categorizedGallery.label')}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">{t('categorizedGallery.title')}</h2>
                    <p className="text-brand-steel text-base md:text-lg">
                        {t('categorizedGallery.subtitle')}
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-16">
                    {categoryList.map((cat, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveCategory(idx)}
                            className={`px-5 md:px-6 py-2 rounded-full font-medium transition-all duration-300 text-xs md:text-sm ${activeCategory === idx
                                ? 'bg-brand-cyan text-brand-graphite shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                                : 'bg-white/5 text-white hover:bg-white/10'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {filteredProjects.map((project) => {
                        const globalIdx = projects.indexOf(project);
                        const meta = projectList[globalIdx] || {};
                        const heroImage = project.images[0];
                        const thumbs = project.images.slice(1);
 
                        return (
                            <div
                                key={project.id}
                                className="group relative bg-brand-graphite rounded-[2rem] overflow-hidden border border-white/5 hover:border-brand-cyan/30 transition-all duration-500 w-full max-w-lg mx-auto"
                            >
                                {/* Hero Image */}
                                <div
                                    className="relative h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden cursor-pointer"
                                    onClick={() => openLightbox(globalIdx, 0)}
                                >
                                    <img
                                        src={heroImage}
                                        alt={meta.title || project.id}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-graphite via-brand-graphite/20 to-transparent" />
 
                                    {/* Project Info Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                        <span className="text-brand-cyan font-mono text-xs uppercase tracking-wider mb-2 block">
                                            {getProjectCategory(project)}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                            {meta.title || project.id}
                                        </h3>
                                        <p className="text-brand-steel text-sm max-w-md">
                                            {meta.description || ''}
                                        </p>
                                    </div>
 
                                    {/* Photo Count Badge */}
                                    <div className="absolute top-4 right-4 bg-brand-graphite/80 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2">
                                        <Maximize2 size={14} className="text-brand-cyan" />
                                        <span className="text-white text-xs font-mono">{project.images.length} {t('categorizedGallery.photosLabel') || 'foto'}</span>
                                    </div>
                                </div>
 
                                {/* Thumbnail Strip */}
                                <div className="flex gap-2 p-4">
                                    {thumbs.map((thumb, tIdx) => (
                                        <div
                                            key={tIdx}
                                            className="flex-1 h-16 sm:h-20 md:h-24 rounded-xl overflow-hidden cursor-pointer relative group/thumb"
                                            onClick={() => openLightbox(globalIdx, tIdx + 1)}
                                        >
                                            <img
                                                src={thumb}
                                                alt={`${meta.title || project.id} ${tIdx + 2}`}
                                                loading="lazy"
                                                decoding="async"
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-brand-graphite/30 group-hover/thumb:bg-transparent transition-colors duration-300" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Lightbox */}
            {lightbox.open && lightbox.projectIdx !== null && (
                <div
                    className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center"
                    onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}
                >
                    {/* Close Button - Very visible */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 md:top-6 md:right-6 z-[10000] w-14 h-14 bg-brand-orange hover:bg-red-500 rounded-full flex items-center justify-center text-white transition-colors shadow-lg shadow-brand-orange/30"
                        aria-label="Close"
                    >
                        <X size={28} strokeWidth={3} />
                    </button>

                    {/* Project Info */}
                    <div className="absolute top-4 left-4 md:top-6 md:left-6 z-[10000]">
                        <span className="text-brand-cyan font-mono text-xs uppercase tracking-wider block mb-1">
                            {getProjectCategory(projects[lightbox.projectIdx])}
                        </span>
                        <h3 className="text-white font-bold text-lg">
                            {(projectList[lightbox.projectIdx] || {}).title || projects[lightbox.projectIdx]?.id}
                        </h3>
                        <span className="text-brand-steel text-sm font-mono">
                            {lightbox.imageIdx + 1} / {projects[lightbox.projectIdx]?.images.length}
                        </span>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
                        className="absolute left-3 md:left-8 z-[10000] w-14 h-14 bg-white/15 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                        <ChevronLeft size={28} />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
                        className="absolute right-3 md:right-8 z-[10000] w-14 h-14 bg-white/15 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                        <ChevronRight size={28} />
                    </button>

                    {/* Main Image */}
                    <img
                        src={projects[lightbox.projectIdx]?.images[lightbox.imageIdx]}
                        alt=""
                        className="max-w-[85vw] max-h-[75vh] object-contain rounded-2xl shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />

                    {/* Thumbnail Bar */}
                    <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-[10000]">
                        {projects[lightbox.projectIdx]?.images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={(e) => { e.stopPropagation(); setLightbox(prev => ({ ...prev, imageIdx: idx })); }}
                                className={`w-16 h-12 md:w-20 md:h-14 rounded-lg overflow-hidden border-2 transition-all duration-300 ${idx === lightbox.imageIdx
                                        ? 'border-brand-cyan shadow-[0_0_10px_rgba(0,240,255,0.4)] scale-110'
                                        : 'border-white/20 opacity-60 hover:opacity-100'
                                    }`}
                            >
                                <img src={img} alt="" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>

                    {/* ESC hint */}
                    <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-[10000]">
                        <span className="text-white/40 text-xs font-mono bg-white/5 px-3 py-1.5 rounded-full">ESC</span>
                    </div>
                </div>
            )}
        </section>
    );
};

export default CategorizedGallery;
