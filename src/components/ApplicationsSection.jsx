import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Building2, Landmark, Home } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const icons = [
    <Users size={28} />,
    <Building2 size={28} />,
    <Landmark size={28} />,
    <Home size={28} />
];

const appImages = [
    'https://images.unsplash.com/photo-1599586120429-48281b6f0ece?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80'
];

const ApplicationsSection = () => {
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

    const items = t('applications.items');
    const appList = (Array.isArray(items) ? items : []).map((item, i) => ({
        ...item,
        icon: icons[i],
        image: appImages[i]
    }));

    return (
        <section ref={sectionRef} id="solutions" className="py-24 bg-brand-slate relative z-10 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-3xl mb-20">
                    <span className="text-brand-cyan font-mono text-xs uppercase tracking-wider mb-4 block">
                        {t('applications.label')}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('applications.title')}</h2>
                    <p className="text-brand-steel text-lg">
                        {t('applications.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {appList.map((app, index) => (
                        <div
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                            className="rounded-3xl overflow-hidden group relative h-[400px] bg-brand-graphite"
                        >
                            <img src={app.image} alt={app.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-graphite via-brand-graphite/50 to-transparent"></div>

                            <div className="relative z-10 h-full flex flex-col justify-end p-8">
                                <div className="w-12 h-12 rounded-xl bg-brand-graphite/60 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-4 text-brand-cyan">
                                    {app.icon}
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">{app.title}</h4>
                                <p className="text-brand-steel text-sm leading-relaxed">{app.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ApplicationsSection;
