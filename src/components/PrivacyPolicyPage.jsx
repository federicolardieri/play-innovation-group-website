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

const Paragraph = ({ text }) => (
  <>
    {String(text).split('\n').map((line, i) => (
      <p key={i} className="text-brand-steel text-sm md:text-base leading-relaxed mb-2">
        {line}
      </p>
    ))}
  </>
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

const Table = ({ headers, rows }) => (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="border-b border-white/20">
          {headers.map((h, i) => (
            <th key={i} className="text-left text-white font-medium py-2 pr-4 font-heading text-xs uppercase tracking-wider">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b border-white/5">
            {row.map((cell, j) => (
              <td key={j} className="text-brand-steel py-3 pr-4 leading-relaxed">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const PrivacyPolicyPage = () => {
  const { t } = useTranslation();
  const p = (key) => t(`privacyPage.${key}`);

  const canonicalMap = {
    it: 'https://www.playinnovationgroup.com/privacy-policy',
    en: 'https://www.playinnovationgroup.com/privacy-policy',
    de: 'https://www.playinnovationgroup.com/privacy-policy',
    fr: 'https://www.playinnovationgroup.com/privacy-policy',
    es: 'https://www.playinnovationgroup.com/privacy-policy',
  };

  return (
    <>
      <Helmet>
        <title>{p('title')} | Play Innovation Group</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={canonicalMap.it} />
      </Helmet>

      <div className="min-h-screen bg-brand-graphite pt-28 pb-24">
        <div className="container mx-auto px-4 md:px-12 max-w-4xl">

          {/* Header */}
          <div className="mb-12">
            <p className="text-xs font-mono text-brand-orange uppercase tracking-[0.2em] mb-3">
              Legal
            </p>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
              {p('title')}
            </h1>
            <p className="text-brand-steel text-base mb-2">{p('subtitle')}</p>
            <p className="text-brand-steel/60 text-xs">{p('lastUpdate')}</p>
            <div className="mt-4 p-3 rounded-lg bg-brand-orange/10 border border-brand-orange/20">
              <p className="text-brand-orange text-xs leading-relaxed">{p('legalNote')}</p>
            </div>
          </div>

          {/* Sezione 1 */}
          <Section title={p('s1Title')}>
            <Paragraph text={p('s1')} />
          </Section>

          {/* Sezione 2 */}
          <Section title={p('s2Title')}>
            <h3 className="text-white font-medium mb-2 text-base">{p('s2aTitle')}</h3>
            <p className="text-brand-steel text-sm md:text-base leading-relaxed mb-5">{p('s2a')}</p>

            <h3 className="text-white font-medium mb-2 text-base">{p('s2bTitle')}</h3>
            <p className="text-brand-steel text-sm md:text-base leading-relaxed mb-5">{p('s2b')}</p>

            <h3 className="text-white font-medium mb-2 text-base">{p('s2cTitle')}</h3>
            <p className="text-brand-steel text-sm md:text-base leading-relaxed">{p('s2c')}</p>
          </Section>

          {/* Sezione 3 */}
          <Section title={p('s3Title')}>
            <Table
              headers={[p('s3ColFinalita'), p('s3ColBase')]}
              rows={p('s3Rows')}
            />
            <p className="text-brand-steel/70 text-xs leading-relaxed mt-4 italic">{p('s3Note')}</p>
          </Section>

          {/* Sezione 4 */}
          <Section title={p('s4Title')}>
            <p className="text-brand-steel text-sm md:text-base leading-relaxed mb-3">{p('s4Intro')}</p>
            <BulletList items={p('s4Items')} />
            <p className="text-brand-steel/70 text-sm leading-relaxed mt-4 italic">{p('s4Note')}</p>
          </Section>

          {/* Sezione 5 */}
          <Section title={p('s5Title')}>
            <BulletList items={p('s5Items')} />
          </Section>

          {/* Sezione 6 */}
          <Section title={p('s6Title')}>
            <p className="text-brand-steel text-sm md:text-base leading-relaxed mb-3">{p('s6Intro')}</p>
            <BulletList items={p('s6Items')} />
            <p className="text-brand-steel text-sm md:text-base leading-relaxed mt-4">{p('s6Contact')}</p>
          </Section>

          {/* Sezione 7 */}
          <Section title={p('s7Title')}>
            <p className="text-brand-steel text-sm md:text-base leading-relaxed">{p('s7')}</p>
          </Section>

          {/* Sezione 8 */}
          <Section title={p('s8Title')}>
            <p className="text-brand-steel text-sm md:text-base leading-relaxed">{p('s8')}</p>
          </Section>

        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
