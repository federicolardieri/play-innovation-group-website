import React from 'react';
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
