import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';
import { themeConfig } from './config/themeconfig';

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    return typeof window !== 'undefined' ? window.location.pathname : '/';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handleLocationChange);

    // Global delegated link interceptor for seamless client-side SPA routing
    const handleLinkClick = (e) => {
      const anchor = e.target.closest('a');
      if (
        anchor &&
        anchor.target !== '_blank' &&
        anchor.href &&
        anchor.origin === window.location.origin &&
        !anchor.hasAttribute('download')
      ) {
        const url = new URL(anchor.href);
        const targetPath = url.pathname;
        const hash = url.hash;

        // If staying on the same path and only scrolling to a section hash
        if (targetPath === window.location.pathname && hash) {
          return;
        }
        
        e.preventDefault();
        if (targetPath !== window.location.pathname) {
          window.history.pushState({}, '', targetPath + hash);
          setCurrentPath(targetPath);
          if (hash) {
            const element = document.querySelector(hash);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
              return;
            }
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleLinkClick);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  // Determine active view
  const renderCurrentPage = () => {
    if (currentPath === '/' || currentPath === '') {
      return <HomePage />;
    }
    if (currentPath === '/contact') {
      return <ContactPage />;
    }
    if (currentPath === '/privacy-policy') {
      return <PrivacyPolicyPage />;
    }
    if (currentPath === '/terms-and-conditions') {
      return <TermsPage />;
    }
    return <NotFoundPage />;
  };

  return (
    <div 
      className="min-h-screen flex flex-col antialiased selection:bg-blue-100 selection:text-blue-700 bg-white"
      style={{ 
        fontFamily: themeConfig.typography.fontFamily 
      }}
    >
      {/* 1. Header with Animated Loans Dropdown & Quick Call */}
      <Navbar currentPath={currentPath} />

      {/* 2. Dynamic Main Content Area */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* 3. Contrast Footer */}
      <Footer currentPath={currentPath} />
    </div>
  );
}
