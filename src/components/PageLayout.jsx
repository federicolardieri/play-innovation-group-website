import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatBot from './ChatBot';
import ScrollToTopButton from './ScrollToTopButton';

const PageLayout = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen bg-brand-graphite font-sans">
      <div className="noise-overlay pointer-events-none"></div>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      <ChatBot />
      <ScrollToTopButton />
    </div>
  );
};

export default PageLayout;
