import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useTranslation, LANGUAGES } from '../i18n/LanguageContext';
import gsap from 'gsap';

const Navbar = () => {
    const { t, language, setLanguage } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const langRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        
        if (isMobileMenuOpen) {
            closeMobileMenu();
        }

        if (location.pathname !== '/') {
            navigate(`/${targetId}`);
        } else {
            const element = document.querySelector(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const closeMobileMenu = () => {
        gsap.to(mobileMenuRef.current, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => setIsMobileMenuOpen(false)
        });
    };

    const toggleMobileMenu = () => {
        if (isMobileMenuOpen) {
            closeMobileMenu();
        } else {
            setIsMobileMenuOpen(true);
        }
    };

    useEffect(() => {
        if (isMobileMenuOpen && mobileMenuRef.current) {
            gsap.fromTo(mobileMenuRef.current,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
            );
        }
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20); // More sensitive for mobile
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (langRef.current && !langRef.current.contains(e.target)) {
                setIsLangOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const currentLang = LANGUAGES.find(l => l.code === language);

    return (
        <header
            className={`fixed top-0 w-full z-[100] transition-all duration-500 ease-in-out ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-3 md:py-6'
                }`}
        >
            <div className="container mx-auto px-4 md:px-12 flex justify-between items-center h-full">
                {/* Logo */}
                <div 
                    className="flex items-center space-x-2 md:space-x-4 cursor-pointer group"
                    onClick={(e) => handleNavClick(e, '#home')}
                >
                    <img src="/logo.png" alt="PlayInnovation Logo" className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-brand-cyan/20 group-hover:border-brand-cyan transition-colors duration-300" />
                    <div className="flex flex-col md:block text-xl md:text-3xl font-heading font-bold tracking-tight text-white leading-none">
                        <span>Play<span className="text-brand-cyan">Innovation</span></span>
                        <span className="text-[10px] md:text-sm text-brand-orange uppercase tracking-[0.2em] font-mono md:ml-3 block md:inline-block mt-1 md:mt-0">Group</span>
                    </div>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center space-x-8">
                    <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-sm font-medium text-brand-offwhite hover:text-brand-cyan transition-colors">{t('navbar.home')}</a>
                    
                    {/* Products Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 text-sm font-medium text-brand-offwhite hover:text-brand-cyan transition-colors py-2">
                            {t('navbar.products')}
                            <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                        </button>
                        <div className="absolute top-full left-0 mt-2 w-56 glass-panel rounded-xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl flex flex-col py-2 z-50">
                            <Link to="/prodotti/padel" className="px-4 py-2.5 text-sm text-brand-offwhite hover:bg-white/5 hover:text-brand-cyan transition-colors block">Campi da Padel</Link>
                            <Link to="/prodotti/tennis" className="px-4 py-2.5 text-sm text-brand-offwhite hover:bg-white/5 hover:text-brand-cyan transition-colors block">Campi da Tennis</Link>
                            <Link to="/prodotti/pickleball" className="px-4 py-2.5 text-sm text-brand-offwhite hover:bg-white/5 hover:text-brand-cyan transition-colors block">Campi da Pickleball</Link>
                            <Link to="/prodotti/multisport" className="px-4 py-2.5 text-sm text-brand-offwhite hover:bg-white/5 hover:text-brand-cyan transition-colors block">Campi Multisport & Calcio</Link>
                            <Link to="/prodotti/coperture" className="px-4 py-2.5 text-sm text-brand-offwhite hover:bg-white/5 hover:text-brand-cyan transition-colors block">Coperture Sportive</Link>
                        </div>
                    </div>

                    <a href="#solutions" onClick={(e) => handleNavClick(e, '#solutions')} className="text-sm font-medium text-brand-offwhite hover:text-brand-cyan transition-colors">{t('navbar.solutions')}</a>
                    <Link to="/azienda" className="text-sm font-medium text-brand-offwhite hover:text-brand-cyan transition-colors">{t('navbar.company')}</Link>

                    {/* Language Switcher Desktop */}
                    <div ref={langRef} className="relative">
                        <button
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            className="flex items-center gap-1.5 text-sm font-medium text-brand-offwhite hover:text-brand-cyan transition-colors px-2 py-1 rounded-lg hover:bg-white/5"
                        >
                            <span className="text-base">{currentLang?.flag}</span>
                            <span className="uppercase text-xs font-mono tracking-wider">{language}</span>
                            <ChevronDown size={14} className={`transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isLangOpen && (
                            <div className="absolute top-full right-0 mt-2 w-44 glass-panel rounded-xl border border-white/10 overflow-hidden shadow-2xl animate-fadeIn">
                                {LANGUAGES.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => { setLanguage(lang.code); setIsLangOpen(false); }}
                                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${language === lang.code
                                            ? 'bg-brand-cyan/10 text-brand-cyan'
                                            : 'text-brand-offwhite hover:bg-white/5 hover:text-white'
                                            }`}
                                    >
                                        <span className="text-base">{lang.flag}</span>
                                        <span className="font-medium">{lang.label}</span>
                                        {language === lang.code && <span className="ml-auto text-brand-cyan text-xs">●</span>}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="w-px h-4 bg-white/20"></div>
                    <Link to="/#quote" className="btn-primary py-2 px-5 text-sm">
                        {t('navbar.cta')}
                    </Link>
                </nav>

                {/* Mobile & Tablet Controls */}
                <div className="flex items-center gap-1 lg:hidden">
                    {/* Compact Language Selector for Mobile Header */}
                    <div className="relative mr-2">
                        <button 
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-brand-offwhite"
                        >
                            <span className="text-lg">{currentLang?.flag}</span>
                        </button>
                        {isLangOpen && (
                            <div className="absolute top-full right-0 mt-2 w-44 glass-panel rounded-xl border border-white/10 overflow-hidden shadow-2xl z-[110]">
                                {LANGUAGES.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => { setLanguage(lang.code); setIsLangOpen(false); }}
                                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${language === lang.code
                                            ? 'bg-brand-cyan/10 text-brand-cyan'
                                            : 'text-brand-offwhite hover:bg-white/5 hover:text-white'
                                            }`}
                                    >
                                        <span className="text-base">{lang.flag}</span>
                                        <span className="font-medium">{lang.label}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <button
                        className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white"
                        onClick={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Full Screen Overlay - Premium GSAP driven */}
            {isMobileMenuOpen && (
                <div 
                    ref={mobileMenuRef}
                    className="fixed inset-0 top-[60px] md:top-[70px] bg-brand-graphite/98 backdrop-blur-2xl z-[90] flex flex-col p-6 lg:hidden border-t border-white/10 overflow-y-auto"
                >
                    <div className="flex flex-col space-y-6 md:space-y-8 mt-4">
                        <a href="#home" className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-4" onClick={(e) => handleNavClick(e, '#home')}>
                            <span className="text-brand-cyan text-xs font-mono opacity-50">01</span>
                            {t('navbar.home')}
                        </a>
                        
                        <div className="flex flex-col">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-brand-cyan text-xs font-mono opacity-50">02</span>
                                <span className="text-2xl md:text-3xl font-bold text-brand-cyan tracking-tight">{t('navbar.products')}</span>
                            </div>
                            <div className="flex flex-col space-y-3 pl-8 border-l border-white/10">
                                <Link to="/prodotti/padel" onClick={closeMobileMenu} className="text-lg text-brand-offwhite hover:text-brand-cyan transition-colors">Campi da Padel</Link>
                                <Link to="/prodotti/tennis" onClick={closeMobileMenu} className="text-lg text-brand-offwhite hover:text-brand-cyan transition-colors">Campi da Tennis</Link>
                                <Link to="/prodotti/pickleball" onClick={closeMobileMenu} className="text-lg text-brand-offwhite hover:text-brand-cyan transition-colors">Campi da Pickleball</Link>
                                <Link to="/prodotti/multisport" onClick={closeMobileMenu} className="text-lg text-brand-offwhite hover:text-brand-cyan transition-colors">Campi Multisport</Link>
                                <Link to="/prodotti/coperture" onClick={closeMobileMenu} className="text-lg text-brand-offwhite hover:text-brand-cyan transition-colors">Coperture Sportive</Link>
                            </div>
                        </div>
 
                        <a href="#solutions" className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-4" onClick={(e) => handleNavClick(e, '#solutions')}>
                            <span className="text-brand-cyan text-xs font-mono opacity-50">03</span>
                            {t('navbar.solutions')}
                        </a>
                        <Link to="/azienda" onClick={closeMobileMenu} className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-4">
                            <span className="text-brand-cyan text-xs font-mono opacity-50">04</span>
                            {t('navbar.company')}
                        </Link>
                    </div>
 
                    <div className="mt-auto pt-8 pb-4">
                        <Link to="/#quote" onClick={closeMobileMenu} className="btn-primary w-full py-4 text-base flex items-center justify-center rounded-2xl">
                            {t('navbar.cta')}
                        </Link>
                        <p className="text-center text-brand-steel text-[10px] font-mono uppercase tracking-widest mt-6 opacity-40">
                            PlayInnovation Group — Premium Infrastructure
                        </p>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
