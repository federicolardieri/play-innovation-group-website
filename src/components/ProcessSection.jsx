import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from '../i18n/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const stepImages = [
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80',
    '/Padel-3d/PANORAMICO%203D.jpg'
];

const ProcessSection = () => {
    const { t } = useTranslation();
    const sectionRef = useRef(null);
    const stepsRef = useRef([]);
    const lineRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Animate the progress line fill
            gsap.fromTo(lineRef.current,
                { scaleY: 0 },
                {
                    scaleY: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                        end: "bottom 80%",
                        scrub: true
                    }
                }
            );

            // Animate each step card
            stepsRef.current.forEach((step, i) => {
                gsap.fromTo(step,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: step,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const steps = t('process.steps');
    const stepList = (Array.isArray(steps) ? steps : []).map((step, i) => ({
        ...step,
        image: stepImages[i]
    }));

    return (
        <section ref={sectionRef} id="process" className="py-24 bg-brand-graphite relative z-10 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-brand-orange font-mono text-xs uppercase tracking-wider mb-4 block">
                        {t('process.label')}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('process.title')}</h2>
                    <p className="text-brand-steel text-lg">
                        {t('process.subtitle')}
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Center line */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10 hidden md:block">
                        <div ref={lineRef} className="absolute inset-0 bg-brand-orange origin-top" style={{ transformOrigin: 'top' }}></div>
                    </div>

                    <div className="flex flex-col gap-16 md:gap-24">
                        {stepList.map((step, index) => (
                            <div
                                key={index}
                                ref={el => stepsRef.current[index] = el}
                                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className="w-full md:w-1/2">
                                    <div className="glass-panel p-8 rounded-3xl relative">
                                        <span className="text-brand-orange font-mono text-4xl font-bold opacity-30 absolute top-4 right-6">{step.num}</span>
                                        <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                                        <p className="text-brand-steel leading-relaxed text-sm">{step.desc}</p>
                                    </div>
                                </div>

                                {/* Center dot */}
                                <div className="hidden md:flex w-4 h-4 rounded-full bg-brand-orange border-4 border-brand-graphite z-10 shrink-0 shadow-[0_0_10px_rgba(255,140,0,0.4)]"></div>

                                <div className="w-full md:w-1/2">
                                    <div className="h-48 md:h-64 rounded-2xl overflow-hidden">
                                        <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
