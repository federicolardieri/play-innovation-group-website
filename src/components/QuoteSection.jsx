import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const QuoteSection = () => {
    const { t } = useTranslation();
    const sectionRef = useRef(null);
    const formRef = useRef(null);
    const timerRef = useRef(null);
    const innerFormRef = useRef(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(formRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        timerRef.current = setTimeout(() => {
            setIsSubmitted(false);
            innerFormRef.current?.reset();
        }, 5000);
    };

    const benefits = t('quote.benefits');
    const benefitList = Array.isArray(benefits) ? benefits : [];
    const interests = t('quote.form.interests');
    const interestList = Array.isArray(interests) ? interests : [];

    return (
        <section ref={sectionRef} id="quote" className="py-20 md:py-24 bg-brand-slate relative border-t border-brand-cyan/10">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-graphite to-brand-slate opacity-50"></div>

            <div className="container mx-auto px-4 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    <div className="max-w-xl">
                        <span className="text-brand-cyan font-mono text-xs uppercase tracking-wider mb-4 block">
                            {t('quote.label')}
                        </span>
                        <h2 className="text-3xl md:text-6xl font-bold mb-6 text-white leading-tight">
                            {t('quote.title')} <br className="hidden md:block" />{t('quote.titleAccent')}
                        </h2>
                        <p className="text-brand-steel text-base md:text-lg mb-8 md:mb-10 leading-relaxed">
                            {t('quote.subtitle')}
                        </p>

                        <ul className="space-y-6">
                            {benefitList.map((point, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle2 size={24} className="text-brand-cyan shrink-0 mr-4" />
                                    <span className="text-white font-medium">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div ref={formRef} className="glass-panel p-8 md:p-12 rounded-[2rem] border-t border-white/10 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

                        {isSubmitted ? (
                            <div className="flex flex-col items-center justify-center py-20 text-center animate-pulse">
                                <div className="w-20 h-20 bg-brand-cyan/20 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle2 size={40} className="text-brand-cyan" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{t('quote.form.successTitle')}</h3>
                                <p className="text-brand-steel">{t('quote.form.successMessage')}</p>
                            </div>
                        ) : (
                            <form ref={innerFormRef} onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-mono text-brand-steel uppercase tracking-wider">{t('quote.form.name')} *</label>
                                        <input required type="text" className="w-full bg-brand-graphite border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-brand-cyan/50 transition-colors" placeholder={t('quote.form.namePlaceholder')} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-mono text-brand-steel uppercase tracking-wider">{t('quote.form.company')}</label>
                                        <input type="text" className="w-full bg-brand-graphite border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-brand-cyan/50 transition-colors" placeholder={t('quote.form.companyPlaceholder')} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-mono text-brand-steel uppercase tracking-wider">{t('quote.form.email')} *</label>
                                        <input required type="email" className="w-full bg-brand-graphite border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-brand-cyan/50 transition-colors" placeholder={t('quote.form.emailPlaceholder')} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-mono text-brand-steel uppercase tracking-wider">{t('quote.form.phone')} *</label>
                                        <input required type="tel" className="w-full bg-brand-graphite border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-brand-cyan/50 transition-colors" placeholder={t('quote.form.phonePlaceholder')} />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-mono text-brand-steel uppercase tracking-wider">{t('quote.form.interest')}</label>
                                    <div className="relative">
                                        <select className="w-full bg-brand-graphite border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-brand-cyan/50 transition-colors appearance-none cursor-pointer">
                                            {interestList.map((opt, idx) => (
                                                <option key={idx}>{opt}</option>
                                            ))}
                                        </select>
                                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-brand-steel">
                                            ▼
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-mono text-brand-steel uppercase tracking-wider">{t('quote.form.details')}</label>
                                    <textarea rows="4" className="w-full bg-brand-graphite border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-brand-cyan/50 transition-colors resize-none" placeholder={t('quote.form.detailsPlaceholder')}></textarea>
                                </div>

                                <button type="submit" className="btn-primary w-full py-4 mt-2 group/btn">
                                    {t('quote.form.submit')} <ArrowRight size={20} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                                <p className="text-xs text-brand-steel text-center mt-2">
                                    {t('quote.form.privacy')}
                                </p>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default QuoteSection;
