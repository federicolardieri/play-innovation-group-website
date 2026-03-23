import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HardHat, Shield, Zap, Box, Sun, Droplets, Anchor, Palette, Layout, Target, TreeDeciduous, Layers, Component } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
    'hard-hat': HardHat,
    'shield': Shield,
    'zap': Zap,
    'box': Box,
    'sun': Sun,
    'droplets': Droplets,
    'anchor': Anchor,
    'palette': Palette,
    'layout': Layout,
    'target': Target,
    'tree': TreeDeciduous,
    'layers': Layers,
    'component': Component
};

const ProductMaterials = ({ data }) => {
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
        <section ref={sectionRef} className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{data.title}</h2>
                    <p className="text-brand-steel text-lg">{data.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {data.items.map((item, idx) => {
                        const Icon = iconMap[item.icon] || Shield;
                        return (
                            <div 
                                key={idx}
                                ref={el => cardsRef.current[idx] = el}
                                className="glass-panel p-8 rounded-[2rem] border border-white/5 hover:border-brand-cyan/30 transition-colors group"
                            >
                                <div className="w-12 h-12 bg-brand-cyan/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-cyan/20 transition-colors">
                                    <Icon size={24} className="text-brand-cyan" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.name}</h3>
                                <p className="text-brand-steel leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProductMaterials;
