import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Crosshair, Wrench, BarChart } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const icons = [
    <ShieldCheck size={32} className="text-brand-cyan" />,
    <Crosshair size={32} className="text-brand-cyan" />,
    <Wrench size={32} className="text-brand-cyan" />,
    <BarChart size={32} className="text-brand-cyan" />,
];

const WhySection = () => {
    const { t } = useTranslation();
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(cardsRef.current,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const features = t('why.features');
    const featureList = Array.isArray(features) ? features : [];

    return (
        <section ref={sectionRef} id="company" className="py-24 bg-brand-slate relative border-t border-b border-white/5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-brand-cyan font-mono text-xs uppercase tracking-wider mb-4 block">
                        {t('why.label')}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('why.title')}</h2>
                    <p className="text-brand-steel text-lg">
                        {t('why.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featureList.map((feature, index) => (
                        <div
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                            className="glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-brand-graphite border border-white/10 flex items-center justify-center mb-6 group-hover:border-brand-cyan/50 transition-colors">
                                {icons[index]}
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4">{feature.title}</h4>
                            <p className="text-brand-steel text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhySection;
