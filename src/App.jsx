import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import PageLayout from './components/PageLayout';
import Home from './pages/Home';
import PadelPage from './components/PadelPage';
import TennisPage from './components/TennisPage';
import PickleballPage from './components/PickleballPage';
import MultisportPage from './components/MultisportPage';
import CoperturePage from './components/CoperturePage';
import CompanyPage from './components/CompanyPage';
import ScrollToHash from './components/ScrollToHash';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToHash />
        <PageLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Adding placeholders for the new product routes */}
            <Route path="/prodotti/padel" element={<PadelPage />} />
            <Route path="/prodotti/tennis" element={<TennisPage />} />
            <Route path="/prodotti/pickleball" element={<PickleballPage />} />
            <Route path="/prodotti/multisport" element={<MultisportPage />} />
            <Route path="/prodotti/coperture" element={<CoperturePage />} />
            <Route path="/azienda" element={<CompanyPage />} />
          </Routes>
        </PageLayout>
      </Router>
    </LanguageProvider>
  );
}

export default App;
