import { useTranslation } from '../i18n/LanguageContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SocialIcon = ({ type, href }) => {
    const icons = {
        instagram: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
        ),
        facebook: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
        ),
        linkedin: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
        tiktok: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
        ),
    };

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-steel hover:text-brand-cyan hover:border-brand-cyan/50 hover:bg-brand-cyan/10 transition-all duration-300"
        >
            {icons[type]}
        </a>
    );
};

const Footer = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    const productLinks = t('footer.productLinks');
    const companyLinks = t('footer.companyLinks');

    const productPaths = [
        "/prodotti/padel",
        "/prodotti/tennis",
        "/prodotti/pickleball",
        "/prodotti/multisport",
        "/prodotti/coperture"
    ];

    const handleNavClick = (e, path) => {
        // If it's a simple path without hash, let Link handle it or navigate normally
        if (!path.includes('#')) return;

        e.preventDefault();
        const [url, hash] = path.split('#');
        const targetId = hash ? `#${hash}` : '';

        // Case 1: On the same page as the target URL (or it's just a hash)
        if (location.pathname === url || (url === '' && location.pathname === '/') || (url === '/' && location.pathname === '/')) {
            const element = document.querySelector(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Case 2: On a different page
            navigate(path);
        }
    };

    const companyPaths = [
        "/azienda",
        "/azienda#method",
        "/#progetti",
        "/#quote"
    ];

    return (
        <footer className="bg-brand-graphite py-12 md:py-16 border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent"></div>

            <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
                <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
                    <div 
                        className="flex items-center space-x-3 cursor-pointer group"
                        onClick={(e) => handleNavClick(e, '/#home')}
                    >
                        <img src="/logo.png" alt="PlayInnovation Logo" className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-brand-cyan/20 group-hover:border-brand-cyan transition-colors duration-300" />
                        <div className="text-2xl md:text-3xl font-heading font-bold tracking-tight text-white leading-tight">
                            Play<span className="text-brand-cyan">Innovation</span>
                            <div className="text-xs md:text-sm text-brand-orange uppercase tracking-[0.2em] font-mono mt-0.5">Group</div>
                        </div>
                    </div>
                    <p className="text-brand-steel text-sm leading-relaxed max-w-sm mt-4">
                        {t('footer.tagline')}
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-3 mt-6">
                        <SocialIcon type="instagram" href="https://www.instagram.com/play.innovationgroup/" />
                        <SocialIcon type="facebook" href="https://www.facebook.com/people/Play-Innovation-Group/61584137487806/" />
                        <SocialIcon type="linkedin" href="https://www.linkedin.com/in/play-innovation-a5a8b1392/" />
                        <SocialIcon type="tiktok" href="https://www.tiktok.com/@play.innovation.group?_r=1&_t=ZN-94nRCNkyNPC" />
                    </div>

                    <div className="flex items-center space-x-2 mt-6">
                        <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></div>
                        <span className="text-[10px] font-mono text-brand-steel uppercase tracking-wider">{t('footer.systemReady')}</span>
                        <span className="text-[10px] font-mono text-brand-steel uppercase tracking-wider ml-4">|</span>
                        <span className="text-[10px] font-mono text-brand-steel uppercase tracking-wider ml-4 hidden md:inline">{t('footer.consultingAvailable')}</span>
                    </div>
                </div>

                <div className="text-center md:text-left">
                    <h4 className="text-white font-medium mb-6 text-base md:text-lg">{t('footer.productsTitle')}</h4>
                    <ul className="space-y-3">
                        {(Array.isArray(productLinks) ? productLinks : []).map((link, idx) => (
                            <li key={idx}>
                                <Link 
                                    to={productPaths[idx] || "#"} 
                                    className="text-brand-steel text-sm hover:text-brand-cyan transition-colors"
                                >
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="text-center md:text-left">
                    <h4 className="text-white font-medium mb-6 text-base md:text-lg">{t('footer.companyTitle')}</h4>
                    <ul className="space-y-3">
                        {(Array.isArray(companyLinks) ? companyLinks : []).map((link, idx) => (
                            <li key={idx}>
                                <Link 
                                    to={companyPaths[idx] || "#"} 
                                    onClick={(e) => handleNavClick(e, companyPaths[idx] || "#")}
                                    className="text-brand-steel text-sm hover:text-brand-cyan transition-colors"
                                >
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="text-center md:text-left">
                    <h4 className="text-white font-medium mb-6 text-base md:text-lg">{t('footer.contactsTitle')}</h4>
                    <ul className="space-y-3 text-sm text-brand-steel transition-all">
                        <li className="hover:text-brand-cyan transition-colors line-clamp-1">
                            <a href="mailto:info@playinnovationgroup.com">info@playinnovationgroup.com</a>
                        </li>
                        <li className="hover:text-brand-cyan transition-colors">
                            <a href="tel:+393349967161">+39 334 996 7161</a>
                        </li>
                        <li className="pt-4 flex justify-center md:justify-start">
                            <Link 
                                to="/#quote" 
                                onClick={(e) => handleNavClick(e, "/#quote")}
                                className="text-brand-cyan font-medium hover:underline flex items-center group"
                            >
                                {t('footer.requestQuote')}
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-12 mt-12 md:mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-brand-steel gap-4">
                <p>&copy; {new Date().getFullYear()} PlayInnovation Group. {t('footer.rights')}</p>
                <div className="flex space-x-6">
                    <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
                    <a href="#" className="hover:text-white transition-colors">{t('footer.cookie')}</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
