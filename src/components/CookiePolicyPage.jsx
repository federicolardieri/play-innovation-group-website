import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../i18n/LanguageContext';
import { setConsent, getConsent, hasConsented } from '../hooks/useCookieConsent';

const Section = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-xl md:text-2xl font-heading font-semibold text-white mb-4 pb-2 border-b border-white/10">
      {title}
    </h2>
    {children}
  </section>
);

const BulletList = ({ items }) => (
  <ul className="space-y-2 mt-2">
    {items.map((item, i) => (
      <li key={i} className="flex gap-2 text-brand-steel text-sm md:text-base leading-relaxed">
        <span className="text-brand-orange shrink-0 mt-1">—</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const CookieTable = ({ p }) => {
  const headers = [
    p('s2ColName'), p('s2ColCategory'), p('s2ColProvider'),
    p('s2ColDuration'), p('s2ColPurpose'), p('s2ColConsent'),
  ];
  const rows = p('s2Rows');

  return (
    <div className="overflow-x-auto mt-4 -mx-4 md:mx-0">
      <table className="w-full text-xs md:text-sm border-collapse min-w-[640px] md:min-w-0">
        <thead>
          <tr className="border-b border-white/20">
            {headers.map((h, i) => (
              <th key={i} className="text-left text-white font-medium py-2 pr-3 font-heading text-xs uppercase tracking-wider first:pl-4 md:first:pl-0">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-white/5">
              {row.map((cell, j) => (
                <td key={j} className={`text-brand-steel py-3 pr-3 leading-relaxed ${j === 0 ? 'font-mono text-brand-cyan first:pl-4 md:first:pl-0' : ''} ${j === 5 ? (cell === 'No' || cell === 'Nein' || cell === 'Non' ? 'text-brand-steel/60' : 'text-brand-orange') : ''}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const CookiePolicyPage = () => {
  const { t } = useTranslation();
  const p = (key) => t(`cookiePage.${key}`);

  const currentConsent = hasConsented() ? getConsent() : null;
  const [advertising, setAdvertising] = useState(currentConsent?.advertising ?? false);
  const [saved, setSaved] = useState(false);

  const savePreferences = () => {
    setConsent(advertising);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <>
      <Helmet>
        <title>{p('title')} | Play Innovation Group</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://www.playinnovationgroup.com/cookie-policy" />
      </Helmet>

      <div className="min-h-screen bg-brand-graphite pt-28 pb-24">
        <div className="container mx-auto px-4 md:px-12 max-w-4xl">

          {/* Header */}
          <div className="mb-12">
            <p className="text-xs font-mono text-brand-orange uppercase tracking-[0.2em] mb-3">
              Legal
            </p>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
              {p('title')}
            </h1>
            <p className="text-brand-steel/60 text-xs">{p('lastUpdate')}</p>
          </div>

          {/* Sezione 1 */}
          <Section title={p('s1Title')}>
            <p className="text-brand-steel text-sm md:text-base leading-relaxed">{p('s1')}</p>
          </Section>

          {/* Sezione 2 */}
          <Section title={p('s2Title')}>
            <CookieTable p={p} />
            <div className="mt-4 p-3 rounded-lg bg-brand-cyan/5 border border-brand-cyan/20">
              <p className="text-brand-steel/80 text-xs leading-relaxed italic">{p('s2Note')}</p>
            </div>
          </Section>

          {/* Sezione 3 */}
          <Section title={p('s3Title')}>
            <p className="text-brand-steel text-sm md:text-base leading-relaxed">{p('s3')}</p>
          </Section>

          {/* Sezione 4 */}
          <Section title={p('s4Title')}>
            <p className="text-brand-steel text-sm md:text-base leading-relaxed mb-3">{p('s4Intro')}</p>
            <BulletList items={p('s4Items')} />
          </Section>

          {/* Sezione 5 */}
          <Section title={p('s5Title')}>
            <BulletList items={p('s5Items')} />
          </Section>

          {/* Sezione 6 */}
          <Section title={p('s6Title')}>
            <p className="text-brand-steel text-sm md:text-base leading-relaxed">{p('s6')}</p>
          </Section>

          {/* Gestione preferenze */}
          <div className="mt-4 p-6 rounded-2xl bg-brand-slate border border-white/10">
            <h2 className="text-white font-heading font-semibold text-lg mb-4">{p('changePrefs')}</h2>

            {/* Cookie tecnici */}
            <div className="flex items-start justify-between gap-4 mb-3 p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="flex-1">
                <p className="text-white text-sm font-medium mb-0.5">{t('cookieBanner.requiredLabel')}</p>
                <p className="text-brand-steel text-xs leading-relaxed">{t('cookieBanner.requiredDesc')}</p>
              </div>
              <span className="shrink-0 text-xs font-mono text-brand-cyan uppercase tracking-wider mt-1">
                {t('cookieBanner.alwaysActive')}
              </span>
            </div>

            {/* Cookie advertising */}
            <div className="flex items-start justify-between gap-4 mb-5 p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="flex-1">
                <p className="text-white text-sm font-medium mb-0.5">{t('cookieBanner.advertisingLabel')}</p>
                <p className="text-brand-steel text-xs leading-relaxed">{t('cookieBanner.advertisingDesc')}</p>
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

            <div className="flex items-center gap-3">
              <button
                onClick={savePreferences}
                className="px-5 py-2.5 rounded-lg bg-brand-orange text-white text-sm font-medium hover:bg-brand-orange/90 transition-colors"
              >
                {t('cookieBanner.savePreferences')}
              </button>
              {saved && (
                <span className="text-brand-cyan text-sm">✓ Salvato</span>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default CookiePolicyPage;
