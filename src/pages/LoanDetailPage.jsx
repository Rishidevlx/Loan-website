import React, { useEffect } from 'react';
import LoanHeroSection from '../components/sections/LoanHeroSection';
import { themeConfig } from '../config/themeconfig';

/**
 * Reusable Master Loan Detail Page
 * Focuses on the pristine dynamic LoanHeroSection.
 */
export default function LoanDetailPage({ loan }) {
  useEffect(() => {
    if (loan?.name) {
      document.title = `${loan.name} in Coimbatore | Bharath Finserv`;
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [loan]);

  if (!loan) {
    return (
      <div className="py-20 text-center bg-white">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Loan Product Not Found</h2>
        <p className="text-slate-500 mb-6">The loan product you requested does not exist or has been moved.</p>
        <a 
          href="/" 
          className="inline-flex px-6 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
        >
          Return to Home
        </a>
      </div>
    );
  }

  return (
    <div 
      className="bg-white min-h-[70vh]"
      style={{ fontFamily: themeConfig.typography.fontFamily }}
    >
      {/* 1. Dynamic Reusable Hero Section */}
      <LoanHeroSection loanData={loan} />
    </div>
  );
}
