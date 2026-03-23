import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-28 right-6 p-4 rounded-full bg-brand-graphite/80 backdrop-blur-xl border border-white/10 text-brand-cyan shadow-2xl transition-all duration-500 z-[90] group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
            } hover:bg-brand-cyan hover:text-brand-graphite hover:scale-110 active:scale-95`}
            title="Back to Top"
        >
            <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        </button>
    );
};

export default ScrollToTopButton;
