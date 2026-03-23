import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const productImages = [
    '/PANORAMICO/d2c91dc9-091a-4eb9-8ea8-43b085847629.JPG',
    '/TENNIS/Screenshot%202026-03-19%20alle%2011.14.36.jpeg',
    '/PICKLEBALL/pickleball3-d4646a0f.jpeg',
    '/MULTISPORT/PHOTO-2026-03-18-16-07-47.jpeg',
    '/Coperture/5f8dfcea-b006-4d33-8f01-b2c2bc32b043.jpeg'
];

const productIds = ['padel', 'tennis', 'pickleball', 'multisport', 'coperture'];

const ProductsSection = () => {
    const { t } = useTranslation();
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        let ctx = gsap.context(() => {
            cardsRef.current.forEach((card, i) => {
                gsap.fromTo(card,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const items = t('products.items');
    const products = (Array.isArray(items) ? items : []).map((item, i) => ({
        ...item,
        id: productIds[i],
        image: productImages[i]
    }));

    return (
        <section ref={sectionRef} id="products" className="py-20 md:py-24 bg-brand-graphite relative z-10">
            <div className="container mx-auto px-4 md:px-12">
                <div className="mb-12 md:mb-20 max-w-2xl">
                    <span className="text-brand-cyan font-mono text-xs uppercase tracking-wider mb-4 block">
                        {t('products.label')}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('products.title')}</h2>
                    <p className="text-brand-steel text-base md:text-lg">
                        {t('products.subtitle')}
                    </p>
                </div>

                <div className="flex flex-col gap-16 md:gap-24 items-center">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            ref={el => cardsRef.current[index] = el}
                            className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 md:gap-16 group w-full ${index % 2 !== 0 ? 'lg:justify-end' : 'lg:justify-start'}`}
                        >
                            {/* Image Box */}
                            <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[450px] overflow-hidden rounded-[1.5rem] md:rounded-[2rem] relative max-w-lg lg:max-w-none mx-auto lg:mx-0">
                                <div className="absolute inset-0 bg-brand-graphite/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                            </div>

                            {/* Content Box */}
                            <div className="w-full lg:w-1/2 flex flex-col justify-center max-w-lg lg:max-w-none mx-auto lg:mx-0">
                                <div className="text-brand-steel font-mono text-[10px] md:text-sm mb-4">0{index + 1} // {product.title?.toUpperCase()}</div>
                                <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">{product.title}</h3>
                                <p className="text-brand-steel text-sm md:text-base leading-relaxed mb-6 md:mb-8">{product.desc}</p>

                                <ul className="mb-8 md:mb-10 space-y-3 md:space-y-4 border-l border-white/10 pl-6">
                                    {(product.features || []).map((feature, idx) => (
                                        <li key={idx} className="text-white text-xs md:text-sm flex items-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mr-4"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link 
                                    to={`/prodotti/${product.id}`}
                                    className="flex items-center text-brand-cyan text-sm md:text-base font-medium hover:text-white transition-colors w-fit group/btn"
                                >
                                    {t('products.cta')}
                                    <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
