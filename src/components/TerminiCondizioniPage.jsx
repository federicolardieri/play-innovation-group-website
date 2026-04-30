import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../i18n/LanguageContext';

const Section = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-xl md:text-2xl font-heading font-semibold text-white mb-4 pb-2 border-b border-white/10">
      {title}
    </h2>
    {children}
  </section>
);

const TerminiCondizioniPage = () => {
  const { t } = useTranslation();
  const p = (key) => t(`terminiPage.${key}`);

  return (
    <>
      <Helmet>
        <title>{p('title')} | Play Innovation Group</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://www.playinnovationgroup.com/termini-condizioni" />
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
            <div className="mt-4 p-3 rounded-lg bg-brand-orange/10 border border-brand-orange/20">
              <p className="text-brand-orange text-xs leading-relaxed">{p('legalNote')}</p>
            </div>
          </div>

          <Section title={p('s1Title')}>
            <p className="text-brand-steel text-sm md:text-base leading-relaxed">{p('s1')}</p>
          </Section>

          <Section title={p('s2Title')}>
            <p className="text-brand-steel text-sm md:text-base leading-relaxed">{p('s2')}</p>
          </Section>

          <Section title={p('s3Title')}>
            <p className="text-brand-steel text-sm md:text-base leading-relaxed">{p('s3')}</p>
          </Section>

          <Section title={p('s4Title')}>
            <p className="text-brand-steel text-sm md:text-base leading-relaxed">{p('s4')}</p>
          </Section>

          <Section title={p('s5Title')}>
            <p className="text-brand-steel text-sm md:text-base leading-relaxed">{p('s5')}</p>
          </Section>

          <Section title={p('s6Title')}>
            <p className="text-brand-steel text-sm md:text-base leading-relaxed">{p('s6')}</p>
          </Section>

          <Section title={p('s7Title')}>
            <p className="text-brand-steel text-sm md:text-base leading-relaxed">{p('s7')}</p>
          </Section>

        </div>
      </div>
    </>
  );
};

export default TerminiCondizioniPage;
