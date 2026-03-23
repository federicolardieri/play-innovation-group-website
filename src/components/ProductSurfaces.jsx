import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProductSurfaces = ({ data }) => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        let ctx = gsap.context(() => {
            cardsRef.current.forEach((card, i) => {
                gsap.fromTo(card,
                    { y: 30, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        delay: i * 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                        }
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [data]);

    if (!data || !data.items) return null;

    return (
        <section ref={sectionRef} className="py-20 relative overflow-hidden bg-brand-slate/30">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{data.title}</h2>
                    <p className="text-brand-steel text-lg">{data.subtitle}</p>
                </div>

                <div className="flex flex-col gap-6">
                    {data.items.map((item, idx) => (
                        <div 
                            key={idx}
                            ref={el => cardsRef.current[idx] = el}
                            className="glass-panel p-8 rounded-[2rem] border border-white/5 hover:border-brand-cyan/20 transition-all group flex flex-col md:flex-row md:items-center gap-6"
                        >
                            <div className="md:w-2/3">
                                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                                    <CheckCircle2 size={24} className="text-brand-orange" />
                                    {item.name}
                                </h3>
                                <p className="text-brand-steel leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                            <div className="md:w-1/3 flex flex-col md:items-end justify-center">
                                <span className="text-brand-cyan font-mono text-xs uppercase tracking-widest mb-2 block">Colori Disponibili</span>
                                <p className="text-white text-lg font-medium tracking-tight">
                                    {item.color}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductSurfaces;
