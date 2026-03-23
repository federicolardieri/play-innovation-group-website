import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useTranslation, LANGUAGES } from '../i18n/LanguageContext';

const Navbar = () => {
    const { t, language, setLanguage } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const langRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        if (location.pathname !== '/') {
            navigate(`/${targetId}`);
        } else {
            const element = document.querySelector(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close language dropdown on outside click
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
            className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <div 
                    className="flex items-center space-x-3 cursor-pointer group"
                    onClick={(e) => handleNavClick(e, '#home')}
                >
                    <img src="/logo.png" alt="PlayInnovation Logo" className="w-12 h-12 rounded-full object-cover border-2 border-brand-cyan/20 group-hover:border-brand-cyan transition-colors duration-300" />
                    <div className="text-xl md:text-2xl font-heading font-bold tracking-tight text-white hidden sm:block">
                        Play<span className="text-brand-cyan transition-colors duration-300">Innovation</span>
                        <span className="ml-2 text-brand-orange transition-colors">Group</span>
                    </div>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
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

                    {/* Language Switcher */}
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

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full glass-nav p-6 flex flex-col space-y-4 md:hidden border-t border-white/10 overflow-y-auto max-h-[80vh]">
                    <a href="#home" className="text-lg font-medium text-white" onClick={(e) => handleNavClick(e, '#home')}>{t('navbar.home')}</a>
                    
                    {/* Products Links Mobile */}
                    <div className="flex flex-col space-y-2">
                        <span className="text-lg font-medium text-brand-cyan">{t('navbar.products')}</span>
                        <div className="pl-4 flex flex-col space-y-3 border-l border-white/10 mt-2">
                            <Link to="/prodotti/padel" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-brand-offwhite">Campi da Padel</Link>
                            <Link to="/prodotti/tennis" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-brand-offwhite">Campi da Tennis</Link>
                            <Link to="/prodotti/pickleball" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-brand-offwhite">Campi da Pickleball</Link>
                            <Link to="/prodotti/multisport" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-brand-offwhite">Campi Multisport</Link>
                            <Link to="/prodotti/coperture" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-brand-offwhite">Coperture Sportive</Link>
                        </div>
                    </div>

                    <a href="#solutions" className="text-lg font-medium text-white" onClick={(e) => handleNavClick(e, '#solutions')}>{t('navbar.solutions')}</a>
                    <Link to="/azienda" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white">{t('navbar.company')}</Link>

                    {/* Mobile Language Selector */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                        {LANGUAGES.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => { setLanguage(lang.code); }}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-colors ${language === lang.code
                                    ? 'bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30'
                                    : 'bg-white/5 text-brand-steel hover:text-white border border-white/10'
                                    }`}
                            >
                                <span>{lang.flag}</span>
                                <span className="uppercase text-xs font-mono">{lang.code}</span>
                            </button>
                        ))}
                    </div>

                    <Link to="/#quote" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary w-full mt-4 text-center">
                        {t('navbar.cta')}
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Navbar;
