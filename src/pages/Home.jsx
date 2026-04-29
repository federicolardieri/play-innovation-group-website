import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import PadelModelsSection from '../components/PadelModelsSection';
import ProductsSection from '../components/ProductsSection';
import WhySection from '../components/WhySection';
import GallerySection from '../components/GallerySection';
import CategorizedGallery from '../components/CategorizedGallery';
import ProcessSection from '../components/ProcessSection';
import ApplicationsSection from '../components/ApplicationsSection';
import FAQSection from '../components/FAQSection';
import QuoteSection from '../components/QuoteSection';
import FinalCTA from '../components/FinalCTA';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Costruzione Campi Sportivi Professionali | Play Innovation Group</title>
        <meta name="description" content="Progettiamo e costruiamo campi da padel, tennis, calcio, calcetto, pickleball e coperture sportive in tutta Italia. Soluzioni chiavi in mano per club e centri sportivi. Preventivo gratuito." />
        <meta name="keywords" content="costruzione campi padel, costruzione campi tennis, costruzione campi calcio, costruzione campi calcetto, costruzione campi pickleball, coperture sportive, costruzione campi sportivi, impianti sportivi italia" />
        <link rel="canonical" href="https://www.playinnovationgroup.com/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Quanto costa costruire un campo da padel?",
              "acceptedAnswer": { "@type": "Answer", "text": "Il costo di costruzione di un campo da padel varia in base al modello scelto (Extra Solid, Panoramico, Super Panoramico), al tipo di terreno e agli optional. I prezzi partono da circa 20.000€ per il modello entry-level fino a oltre 40.000€ per il Super Panoramico. Offriamo preventivi su misura dopo un'attenta analisi preliminare." }
            },
            {
              "@type": "Question",
              "name": "Quali permessi ci vogliono per costruire un campo sportivo?",
              "acceptedAnswer": { "@type": "Answer", "text": "La costruzione di impianti sportivi e coperture richiede solitamente permessi comunali (CILA, SCIA o Permesso di Costruire) a seconda del comune e dei vincoli locali. Il nostro team, su richiesta, fornisce supporto tecnico per agevolare l'iter burocratico." }
            },
            {
              "@type": "Question",
              "name": "Che tipo di coperture sportive avete?",
              "acceptedAnswer": { "@type": "Answer", "text": "Progettiamo e installiamo coperture per campi da padel, tennis e multisport: palloni pressostatici ad alta efficienza energetica, tensostrutture in legno lamellare o acciaio con membrane PVC a doppia spalmatura, per garantire giocabilità 365 giorni l'anno." }
            },
            {
              "@type": "Question",
              "name": "I campi costruiti da Play Innovation Group sono certificati?",
              "acceptedAnswer": { "@type": "Answer", "text": "Sì. Tutti i nostri impianti sono realizzati nel rispetto delle normative strutturali NTC 2018. I campi da tennis seguono le certificazioni ITF, i campi da padel rispettano le normative WPT e FITP, i campi da calcio usano manti certificati FIFA Quality Pro." }
            },
            {
              "@type": "Question",
              "name": "Quanto costa costruire un campo da calcio a 5?",
              "acceptedAnswer": { "@type": "Answer", "text": "Il costo di costruzione di un campo da calcio a 5 parte da circa 25.000€ per una superficie in erba sintetica standard (dimensioni 40m × 20m). Il prezzo finale dipende dal tipo di manto, dai sistemi di drenaggio, dalle recinzioni e dall'illuminazione. Contattateci per un preventivo su misura." }
            },
            {
              "@type": "Question",
              "name": "Quali sport si possono praticare su un campo multisport?",
              "acceptedAnswer": { "@type": "Answer", "text": "Un campo multisport PlayInnovation può ospitare basket, pallavolo, tennis, badminton e hockey da sala sulla stessa superficie grazie alla tracciatura multicolore. I nostri impianti sono progettati per massimizzare la versatilità senza compromettere le performance di nessuna disciplina." }
            }
          ]
        })}</script>
      </Helmet>
      <HeroSection />
      <PadelModelsSection />
      <ProductsSection />
      <WhySection />
      <GallerySection />
      <CategorizedGallery />
      <ProcessSection />
      <ApplicationsSection />
      <FAQSection />
      <QuoteSection />
      <FinalCTA />
    </>
  );
};

export default Home;
