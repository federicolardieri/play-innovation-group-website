import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const FAQItem = ({ faq, isOpen, onClick }) => {
    const contentRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
        }
    }, [faq.a, isOpen]);

    return (
        <div className="border-b border-white/10 py-6">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left focus:outline-none group"
                aria-expanded={isOpen}
            >
                <h3 className={`text-xl md:text-2xl font-medium transition-colors duration-300 pr-8 ${isOpen ? 'text-brand-cyan' : 'text-white group-hover:text-brand-cyan/80'}`}>
                    {faq.q}
                </h3>
                <div className="flex-shrink-0 text-brand-steel transition-transform duration-300">
                    {isOpen ? <Minus size={24} className="text-brand-cyan" /> : <Plus size={24} />}
                </div>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out`}
                style={{
                    maxHeight: isOpen ? `${height}px` : '0px',
                    opacity: isOpen ? 1 : 0,
                    marginTop: isOpen ? '1rem' : '0'
                }}
            >
                <div ref={contentRef} className="pb-2">
                    <p className="text-brand-steel leading-relaxed text-lg pr-8">
                        {faq.a}
                    </p>
                </div>
            </div>
        </div>
    );
};

const FAQSection = () => {
    const { t } = useTranslation();
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const listRef = useRef(null);
    const [openIndex, setOpenIndex] = useState(0);

    const titleRaw = t('faq.title') || '';
    const titleParts = titleRaw.split('.');
    const titleMain = titleParts[0];

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(headerRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    }
                }
            );

            gsap.fromTo(listRef.current.children,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: listRef.current,
                        start: "top 85%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const faqItems = t('faq.items') || [];
    const items = Array.isArray(faqItems) ? faqItems : [];

    return (
        <section ref={sectionRef} id="faq" className="py-24 bg-brand-slate relative z-10 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <div ref={headerRef} className="text-center mb-16 md:mb-24">
                    <span className="text-brand-cyan font-mono text-xs uppercase tracking-wider mb-4 block">
                        // {t('faq.label')}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        {titleMain}<span className="text-brand-cyan">.</span>
                    </h2>
                    <p className="text-brand-steel text-lg max-w-2xl mx-auto">
                        {t('faq.subtitle')}
                    </p>
                </div>

                <div ref={listRef} className="max-w-3xl mx-auto">
                    {items.map((faq, index) => (
                        <FAQItem
                            key={index}
                            faq={faq}
                            isOpen={index === openIndex}
                            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
