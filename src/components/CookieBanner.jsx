import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageContext';
import { hasConsented, setConsent, getConsent } from '../hooks/useCookieConsent';

const CookieBanner = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [advertising, setAdvertising] = useState(false);

  useEffect(() => {
    if (!hasConsented()) {
      setVisible(true);
    }
  }, []);

  const acceptAll = () => {
    setConsent(true);
    setVisible(false);
  };

  const rejectAll = () => {
    setConsent(false);
    setVisible(false);
  };

  const saveCustom = () => {
    setConsent(advertising);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={t('cookieBanner.title')}
      aria-modal="false"
      className="fixed bottom-0 left-0 right-0 z-[9999] bg-brand-slate border-t border-white/10 shadow-2xl"
    >
      <div className="container mx-auto px-4 md:px-12 py-5">
        {!expanded ? (
          /* Layer 1 — banner compatto */
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1 min-w-0">
              <p className="text-white font-heading font-semibold text-base mb-1">
                {t('cookieBanner.title')}
              </p>
              <p className="text-brand-steel text-sm leading-relaxed">
                {t('cookieBanner.description')}{' '}
                <Link to="/cookie-policy" className="text-brand-cyan hover:underline">
                  {t('cookieBanner.learnMore')}
                </Link>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                onClick={() => setExpanded(true)}
                className="px-4 py-2 rounded-lg border border-white/20 text-brand-steel text-sm hover:border-white/40 hover:text-white transition-colors"
              >
                {t('cookieBanner.customize')}
              </button>
              <button
                onClick={rejectAll}
                className="px-4 py-2 rounded-lg border border-white/20 text-white text-sm font-medium hover:border-white/40 transition-colors"
              >
                {t('cookieBanner.rejectAll')}
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 rounded-lg border border-white/20 text-white text-sm font-medium hover:border-white/40 transition-colors"
              >
                {t('cookieBanner.acceptAll')}
              </button>
            </div>
          </div>
        ) : (
          /* Layer 2 — personalizzazione */
          <div className="space-y-4">
            <p className="text-white font-heading font-semibold text-base">
              {t('cookieBanner.title')}
            </p>

            {/* Cookie tecnici — sempre attivi */}
            <div className="flex items-start justify-between gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="flex-1">
                <p className="text-white text-sm font-medium mb-0.5">
                  {t('cookieBanner.requiredLabel')}
                </p>
                <p className="text-brand-steel text-xs leading-relaxed">
                  {t('cookieBanner.requiredDesc')}
                </p>
              </div>
              <span className="shrink-0 text-xs font-mono text-brand-cyan uppercase tracking-wider mt-1">
                {t('cookieBanner.alwaysActive')}
              </span>
            </div>

            {/* Cookie pubblicitari — toggle */}
            <div className="flex items-start justify-between gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="flex-1">
                <p className="text-white text-sm font-medium mb-0.5">
                  {t('cookieBanner.advertisingLabel')}
                </p>
                <p className="text-brand-steel text-xs leading-relaxed">
                  {t('cookieBanner.advertisingDesc')}
                </p>
              </div>
              <button
                role="switch"
                aria-checked={advertising}
                onClick={() => setAdvertising(v => !v)}
                className={`shrink-0 relative w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan mt-0.5 ${
                  advertising ? 'bg-brand-orange' : 'bg-white/20'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
                    advertising ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-2 pt-1">
              <button
                onClick={rejectAll}
                className="px-4 py-2 rounded-lg border border-white/20 text-white text-sm font-medium hover:border-white/40 transition-colors"
              >
                {t('cookieBanner.rejectAll')}
              </button>
              <button
                onClick={saveCustom}
                className="px-4 py-2 rounded-lg border border-white/20 text-white text-sm font-medium hover:border-white/40 transition-colors"
              >
                {t('cookieBanner.savePreferences')}
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 rounded-lg border border-white/20 text-white text-sm font-medium hover:border-white/40 transition-colors"
              >
                {t('cookieBanner.acceptAll')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;
