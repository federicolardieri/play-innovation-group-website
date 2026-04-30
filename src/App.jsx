import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './i18n/LanguageContext';
import PageLayout from './components/PageLayout';
import Home from './pages/Home';
import ScrollToHash from './components/ScrollToHash';
import ErrorBoundary from './components/ErrorBoundary';
import CookieBanner from './components/CookieBanner';

// Lazy-loaded pages for code splitting
const PadelPage = lazy(() => import('./components/PadelPage'));
const TennisPage = lazy(() => import('./components/TennisPage'));
const PickleballPage = lazy(() => import('./components/PickleballPage'));
const CalcioPage = lazy(() => import('./components/CalcioPage'));
const MultisportPage = lazy(() => import('./components/MultisportPage'));
const CoperturePage = lazy(() => import('./components/CoperturePage'));
const CompanyPage = lazy(() => import('./components/CompanyPage'));
const PrivacyPolicyPage = lazy(() => import('./components/PrivacyPolicyPage'));
const CookiePolicyPage = lazy(() => import('./components/CookiePolicyPage'));
const TerminiCondizioniPage = lazy(() => import('./components/TerminiCondizioniPage'));

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          <ScrollToHash />
          <ErrorBoundary>
            <PageLayout>
              <Suspense fallback={<div className="min-h-screen bg-brand-graphite" />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/prodotti/padel" element={<PadelPage />} />
                  <Route path="/prodotti/tennis" element={<TennisPage />} />
                  <Route path="/prodotti/pickleball" element={<PickleballPage />} />
                  <Route path="/prodotti/calcio" element={<CalcioPage />} />
                  <Route path="/prodotti/multisport" element={<MultisportPage />} />
                  <Route path="/prodotti/coperture" element={<CoperturePage />} />
                  <Route path="/azienda" element={<CompanyPage />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                  <Route path="/cookie-policy" element={<CookiePolicyPage />} />
                  <Route path="/termini-condizioni" element={<TerminiCondizioniPage />} />
                </Routes>
              </Suspense>
              <CookieBanner />
            </PageLayout>
          </ErrorBoundary>
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
