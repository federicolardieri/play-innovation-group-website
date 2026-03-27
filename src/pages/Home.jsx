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
        <title>Play Innovation Group | Campi da Padel, Tennis e Pickleball</title>
        <meta name="description" content="Play Innovation Group progetta e costruisce campi da padel, tennis, pickleball e multisport di alta qualità. Soluzioni chiavi in mano con materiali premium per club, hotel e centri sportivi." />
        <link rel="canonical" href="https://www.playinnovationgroup.com/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Quanto costa costruire un campo da padel?",
              "acceptedAnswer": { "@type": "Answer", "text": "Il costo varia in base al modello scelto (Extra Solid, Panoramico, Super Panoramico), al tipo di terreno e agli optional (illuminazione LED avanzata, spessori vetri). Offriamo preventivi su misura dopo un'attenta analisi preliminare in modo da ottimizzare il tuo investimento." }
            },
            {
              "@type": "Question",
              "name": "Quali permessi ci vogliono?",
              "acceptedAnswer": { "@type": "Answer", "text": "L'installazione di impianti sportivi e coperture richiede solitamente permessi comunali (come CILA, SCIA o Permesso di Costruire) a seconda dei vincoli locali. Il nostro team, su richiesta, fornisce il supporto tecnico necessario per agevolare l'iter burocratico." }
            },
            {
              "@type": "Question",
              "name": "Che tipo di coperture avete?",
              "acceptedAnswer": { "@type": "Answer", "text": "Progettiamo e installiamo diverse soluzioni: palloni pressostatici ad alta efficienza energetica, tensostrutture premium in legno lamellare o acciaio, tutte studiate per assicurare la giocabilità 365 giorni all'anno." }
            },
            {
              "@type": "Question",
              "name": "I campi sono certificati?",
              "acceptedAnswer": { "@type": "Answer", "text": "Assolutamente sì. Lavoriamo nel rispetto delle regole strutturali vigenti (NTC 2018). Tutti i nostri materiali e installazioni rispondono alle più severe normative europee in materia di prestazioni e sicurezza sportiva." }
            },
            {
              "@type": "Question",
              "name": "Quanto è grande un campo da tennis?",
              "acceptedAnswer": { "@type": "Answer", "text": "Un campo da tennis regolamentare per il singolare misura 23,77 m di lunghezza per 8,23 m di larghezza (10,97 m per il doppio). A queste dimensioni si aggiungono le fasce di rispetto laterali e di fondo campo." }
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
