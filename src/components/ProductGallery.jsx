import React, { useState, useCallback, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { projects } from '../data/projects';

const ProductGallery = ({ categoryKey }) => {
    const { t } = useTranslation();
    const [lightbox, setLightbox] = useState({ open: false, projectIdx: null, imageIdx: 0 });

    const projectsMeta = t('categorizedGallery.projects') || [];
    
    // Filter projects for this specific category
    const filteredProjects = projects.filter(p => p.categoryKeys?.includes(categoryKey));

    const openLightbox = (project, imgIdx = 0) => {
        const globalIdx = projects.indexOf(project);
        setLightbox({ open: true, projectIdx: globalIdx, imageIdx: imgIdx });
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

    if (filteredProjects.length === 0) return null;

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">I Nostri Progetti</h2>
                    <p className="text-brand-steel text-lg">Realizzazioni d'eccellenza nel settore {categoryKey}.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredProjects.map((project) => {
                        const globalIdx = projects.indexOf(project);
                        const meta = projectsMeta[globalIdx] || {};
                        return (
                            <div 
                                key={project.id}
                                className="group relative bg-brand-graphite rounded-[2rem] overflow-hidden border border-white/5 hover:border-brand-cyan/30 transition-all cursor-pointer"
                                onClick={() => openLightbox(project, 0)}
                            >
                                <div className="h-[300px] overflow-hidden">
                                    <img 
                                        src={project.images[0]} 
                                        alt={meta.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-graphite via-transparent to-transparent" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <h3 className="text-2xl font-bold text-white mb-2">{meta.title}</h3>
                                    <div className="flex items-center gap-2 text-brand-cyan font-mono text-xs uppercase">
                                        <Maximize2 size={14} />
                                        <span>{project.images.length} foto</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Reused Lightbox Logic */}
            {lightbox.open && lightbox.projectIdx !== null && (
                <div className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center">
                    <button onClick={closeLightbox} className="absolute top-6 right-6 z-[10000] w-14 h-14 bg-brand-orange hover:bg-red-500 rounded-full flex items-center justify-center text-white"><X size={28} /></button>
                    <button onClick={() => navigateLightbox(-1)} className="absolute left-8 z-[10000] w-14 h-14 bg-white/15 rounded-full flex items-center justify-center text-white"><ChevronLeft size={28} /></button>
                    <button onClick={() => navigateLightbox(1)} className="absolute right-8 z-[10000] w-14 h-14 bg-white/15 rounded-full flex items-center justify-center text-white"><ChevronRight size={28} /></button>
                    <img src={projects[lightbox.projectIdx]?.images[lightbox.imageIdx]} alt="" className="max-w-[85vw] max-h-[75vh] object-contain rounded-2xl" />
                </div>
            )}
        </section>
    );
};

export default ProductGallery;
