import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProductPageTemplate from './ProductPageTemplate';
import QuoteSection from './QuoteSection';

const TennisPage = () => {
    return (
        <div>
            <Helmet>
                <title>Costruzione Campi da Tennis Indoor e Outdoor | Play Innovation Group</title>
                <meta name="description" content="Realizzazione campi da tennis in terra battuta, resina acrilica o erba sintetica certificati ITF. Indoor e outdoor per club e tornei internazionali. Richiedi preventivo gratuito." />
                <meta name="keywords" content="costruzione campi tennis, campi tennis indoor, campi tennis outdoor, terra battuta, resina acrilica tennis, erba sintetica tennis, certificazione ITF, campo tennis costo" />
                <link rel="canonical" href="https://www.playinnovationgroup.com/prodotti/tennis" />
                <script type="application/ld+json">{JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.playinnovationgroup.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Prodotti", "item": "https://www.playinnovationgroup.com/" },
                    { "@type": "ListItem", "position": 3, "name": "Campi da Tennis", "item": "https://www.playinnovationgroup.com/prodotti/tennis" }
                  ]
                })}</script>
                <script type="application/ld+json">{JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Service",
                  "name": "Costruzione Campi da Tennis",
                  "description": "Realizzazione campi da tennis indoor e outdoor in terra battuta, resina acrilica ed erba sintetica. Progettazione e installazione professionale certificata ITF per club e centri sportivi in tutta Italia.",
                  "provider": { "@type": "Organization", "name": "Play Innovation Group", "url": "https://www.playinnovationgroup.com" },
                  "areaServed": "IT",
                  "serviceType": "Costruzione Campi da Tennis"
                })}</script>
                <script type="application/ld+json">{JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Quanto costa costruire un campo da tennis?",
                      "acceptedAnswer": { "@type": "Answer", "text": "Il costo di un campo da tennis varia in base alla superficie scelta e alle opere civili necessarie. La terra battuta è generalmente l'opzione più economica, la resina acrilica offre il miglior rapporto qualità-prezzo per uso intensivo. Contattateci per un preventivo completo che includa drenaggio, recinzioni e illuminazione." }
                    },
                    {
                      "@type": "Question",
                      "name": "Quali superfici si usano per un campo da tennis?",
                      "acceptedAnswer": { "@type": "Answer", "text": "Costruiamo campi da tennis in tre tipologie di superficie: terra battuta rossa (con sottomanti porosi e vulcanici), resina acrilica (con shock pad integrati per ridurre i traumi articolari) ed erba sintetica (con intaso in sabbia silicea per bassa manutenzione). Ogni superficie è certificata ITF." }
                    },
                    {
                      "@type": "Question",
                      "name": "Cos'è la certificazione ITF per i campi da tennis?",
                      "acceptedAnswer": { "@type": "Answer", "text": "La certificazione ITF (International Tennis Federation) garantisce che la superficie del campo rispetti gli standard internazionali di velocità del rimbalzo, resistenza e sicurezza. I nostri campi sono testati e certificati ITF per ogni categoria di velocità (slow, medium, fast)." }
                    },
                    {
                      "@type": "Question",
                      "name": "Quali sono le dimensioni di un campo da tennis?",
                      "acceptedAnswer": { "@type": "Answer", "text": "Un campo da tennis regolamentare per il singolare misura 23,77m di lunghezza per 8,23m di larghezza (10,97m per il doppio). L'area totale con le fasce di rispetto è solitamente 36m × 18m per il singolare e 36m × 21m per il doppio." }
                    },
                    {
                      "@type": "Question",
                      "name": "Quanto tempo ci vuole per costruire un campo da tennis?",
                      "acceptedAnswer": { "@type": "Answer", "text": "La costruzione di un campo da tennis richiede generalmente 2-4 settimane, incluse le opere di scavo, il massetto, i sistemi di drenaggio, la posa della superficie e il tracciamento delle linee. I tempi variano in base alle condizioni del terreno e al tipo di superficie scelta." }
                    }
                  ]
                })}</script>
            </Helmet>
            <ProductPageTemplate
                titleKey="tennisPage.title"
                subtitleKey="tennisPage.subtitle"
                heroImage="/Tennis-indoor/copertura-tennis2.JPG"
                descriptionKey="tennisPage.description"
                featuresKey="tennisPage.features"
                materialsKey="tennisPage.materials"
                surfacesKey="tennisPage.surfaces"
                categoryKey="Tennis"
            />
            <QuoteSection />
        </div>
    );
};

export default TennisPage;
