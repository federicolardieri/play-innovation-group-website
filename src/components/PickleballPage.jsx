import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProductPageTemplate from './ProductPageTemplate';
import QuoteSection from './QuoteSection';

const PickleballPage = () => {
    return (
        <div>
            <Helmet>
                <title>Costruzione Campi da Pickleball Professionali | Play Innovation Group</title>
                <meta name="description" content="Costruzione campi da pickleball indoor e outdoor con superficie acrilica multistrato. Dimensioni regolamentari, tracciatura UV-resistant. Soluzioni su misura. Preventivo gratuito." />
                <meta name="keywords" content="costruzione campi pickleball, campi pickleball professionali, installazione pickleball, pickleball italia, campo pickleball indoor, superficie acrilica pickleball" />
                <link rel="canonical" href="https://www.playinnovationgroup.com/prodotti/pickleball" />
                <script type="application/ld+json">{JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.playinnovationgroup.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Prodotti", "item": "https://www.playinnovationgroup.com/" },
                    { "@type": "ListItem", "position": 3, "name": "Campi da Pickleball", "item": "https://www.playinnovationgroup.com/prodotti/pickleball" }
                  ]
                })}</script>
                <script type="application/ld+json">{JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Service",
                  "name": "Costruzione Campi da Pickleball",
                  "description": "Installazione campi da pickleball indoor e outdoor con superfici acriliche multistrato certificate. Dimensioni regolamentari, tracciatura UV-resistant e reti professionali. Soluzioni su misura in tutta Italia.",
                  "provider": { "@type": "Organization", "name": "Play Innovation Group", "url": "https://www.playinnovationgroup.com" },
                  "areaServed": "IT",
                  "serviceType": "Costruzione Campi da Pickleball"
                })}</script>
                <script type="application/ld+json">{JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Cos'è il pickleball?",
                      "acceptedAnswer": { "@type": "Answer", "text": "Il pickleball è uno sport che combina elementi del tennis, del badminton e del ping pong. Si gioca su un campo di dimensioni ridotte (13,41m × 6,10m) con una rete bassa e palette solide. È lo sport con la crescita più rapida al mondo, in forte espansione in Europa e Italia." }
                    },
                    {
                      "@type": "Question",
                      "name": "Quali sono le dimensioni di un campo da pickleball?",
                      "acceptedAnswer": { "@type": "Answer", "text": "Un campo da pickleball regolamentare misura 13,41 metri di lunghezza per 6,10 metri di larghezza. Con le fasce di rispetto obbligatorie (3m laterali e 4,6m di fondo), l'area totale necessaria è circa 15m × 22m. Le dimensioni compatte permettono di ricavare più campi nello spazio di un singolo campo da tennis." }
                    },
                    {
                      "@type": "Question",
                      "name": "Quanto costa installare un campo da pickleball?",
                      "acceptedAnswer": { "@type": "Answer", "text": "Il costo di installazione di un campo da pickleball parte da circa 3.000-8.000€ per la sola posa del manto su struttura esistente, fino a 15.000-25.000€ per un impianto completo con opere civili, recinzioni e illuminazione." }
                    },
                    {
                      "@type": "Question",
                      "name": "Qual è la differenza tra pickleball e padel?",
                      "acceptedAnswer": { "@type": "Answer", "text": "Il pickleball si gioca con una pallina forata simile al wiffle ball, su un campo molto più piccolo del padel e senza pareti in vetro. La rete è più bassa (86cm al centro) rispetto al padel (88cm). Il pickleball è più accessibile a tutte le età, inclusi bambini e anziani." }
                    },
                    {
                      "@type": "Question",
                      "name": "Si può giocare a pickleball indoor e outdoor?",
                      "acceptedAnswer": { "@type": "Answer", "text": "Sì, installiamo campi da pickleball sia indoor che outdoor. Per l'outdoor utilizziamo superfici acriliche UV-resistant ad alta durabilità. Per l'indoor, superfici poliuretaniche o acriliche studiate per l'acustica e l'ammortizzamento. Sovrapponiamo il tracciato su superfici esistenti per minimizzare i costi." }
                    }
                  ]
                })}</script>
            </Helmet>
            <ProductPageTemplate
                titleKey="pickleballPage.title"
                subtitleKey="pickleballPage.subtitle"
                heroImage="/PICKLEBALL/Campi-fissi-da-Pickleball-Original-Pickleball-3.jpg"
                descriptionKey="pickleballPage.description"
                featuresKey="pickleballPage.features"
                materialsKey="pickleballPage.materials"
                surfacesKey="pickleballPage.surfaces"
                categoryKey="Pickleball"
            />
            <QuoteSection />
        </div>
    );
};

export default PickleballPage;
