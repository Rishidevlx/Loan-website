import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTopBtn from './components/UI/ScrollToTopBtn';
import FloatingContactWidget from './components/UI/FloatingContactWidget';
import ClickSparkEffect from './components/UI/ClickSparkEffect';
import PageTransitionLoader from './components/UI/PageTransitionLoader';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoanDetailPage from './pages/LoanDetailPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';
import { themeConfig } from './config/themeconfig';
import loansDetailsData, { getLoanBySlug } from './data/loansDetailsData';

/**
 * ScrollToTop helper: scrolls window to top on route change,
 * or scrolls smoothly to hash element if a hash exists.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__IS_PAGE_LOADER_ACTIVE__ = true;
    }
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}

/**
 * Dynamic loan route wrapper for /:slug and /loans/:slug
 */
function DynamicLoanRoute() {
  const { slug } = useParams();
  const location = useLocation();
  const loan = getLoanBySlug(location.pathname) || getLoanBySlug(slug);

  if (!loan) {
    return <NotFoundPage />;
  }
  return <LoanDetailPage loan={loan} />;
}

export default function App() {
  const location = useLocation();

  return (
    <div 
      className="min-h-screen flex flex-col antialiased selection:bg-blue-600 selection:text-white bg-white"
      style={{ 
        fontFamily: themeConfig.typography.fontFamily 
      }}
    >
      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* Cinematic Split Curtain Page Loader with loader.gif */}
      <PageTransitionLoader />

      {/* 1. Header with Animated Loans Dropdown & Quick Call */}
      <Navbar currentPath={location.pathname} />

      {/* 2. Dynamic Main Content Area with React Router Routes */}
      <main className="flex-1">
        <Routes location={location} key={location.pathname}>
          {/* Home */}
          <Route path="/" element={<HomePage />} />
          <Route path="/loans" element={<HomePage />} />

          {/* About Us (Single Canonical Route: /about-us; /about redirects to /about-us) */}
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/about" element={<Navigate to="/about-us" replace />} />
          <Route path="/about%20us" element={<Navigate to="/about-us" replace />} />

          {/* Contact & Application routes */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
          <Route path="/apply-now" element={<Navigate to="/contact" replace />} />
          <Route path="/apply" element={<Navigate to="/contact" replace />} />

          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsPage />} />
          <Route path="/terms" element={<Navigate to="/terms-and-conditions" replace />} />

          {/* 7 Explicit Primary Loan Routes */}
          <Route 
            path="/personal-loan-coimbatore" 
            element={<LoanDetailPage loan={loansDetailsData['personal-loan']} />} 
          />
          <Route 
            path="/business-loan-coimbatore" 
            element={<LoanDetailPage loan={loansDetailsData['business-loan']} />} 
          />
          <Route 
            path="/mortgage-loan-coimbatore" 
            element={<LoanDetailPage loan={loansDetailsData['mortgage-loan']} />} 
          />
          <Route 
            path="/car-loan-coimbatore" 
            element={<LoanDetailPage loan={loansDetailsData['car-loan']} />} 
          />
          <Route 
            path="/cc-loan-coimbatore" 
            element={<LoanDetailPage loan={loansDetailsData['cc-loan']} />} 
          />
          <Route 
            path="/term-loan-coimbatore" 
            element={<LoanDetailPage loan={loansDetailsData['term-loan']} />} 
          />
          <Route 
            path="/machinery-loan-coimbatore" 
            element={<LoanDetailPage loan={loansDetailsData['machinery-loan']} />} 
          />

          {/* Fallback & Shorthand Loan Routes (/loans/:slug and /:slug) */}
          <Route path="/loans/:slug" element={<DynamicLoanRoute />} />
          <Route path="/:slug" element={<DynamicLoanRoute />} />

          {/* 404 Catch-All */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* 3. Contrast Footer */}
      <Footer currentPath={location.pathname} />

      {/* 4. Floating Scroll-To-Top Button & Floating Contact Speed-Dial */}
      <ScrollToTopBtn />
      <FloatingContactWidget />

      {/* 5. Global Click Lines Burst Effect */}
      <ClickSparkEffect />
    </div>
  );
}
