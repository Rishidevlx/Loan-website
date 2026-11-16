import React, { useEffect } from 'react';
import LoanHeroSection from '../components/sections/LoanHeroSection';
import LoanProcessSection from '../components/sections/LoanProcessSection';
import LoanTypicalProcessSection from '../components/sections/LoanTypicalProcessSection';
import LoanCtaBanner from '../components/sections/LoanCtaBanner';
import FaqSection from '../components/sections/FaqSection';
import { getLoanFaqs } from '../data/loansFaqData';
import { themeConfig } from '../config/themeconfig';

/**
 * Reusable Master Loan Detail Page
 * Features the pristine dynamic LoanHeroSection followed by the 3-column LoanProcessSection,
 * the Typical Loan Workflow Process Section, the Rectangular CTA Banner Card, and the Loan FAQ Section.
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

  // Load tailored FAQs specifically for this loan
  const loanFaqs = getLoanFaqs(loan);

  return (
    <div 
      className="bg-white min-h-[70vh]"
      style={{ fontFamily: themeConfig.typography.fontFamily }}
    >
      {/* 1. Dynamic Reusable Hero Section (Pure White Background) */}
      <LoanHeroSection loanData={loan} />

      {/* 2. 3-Column "How We Help You" Process Section (#EDF0EC Background) */}
      <LoanProcessSection loan={loan} />

      {/* 3. Typical Loan Workflow Process Section (Pure White Background) */}
      <LoanTypicalProcessSection loan={loan} />

      {/* 4. Rectangular CTA Banner Card (#EDF0EC Background with Outlined / Action Buttons & Hero Image) */}
      <LoanCtaBanner loan={loan} />

      {/* 5. Frequently Asked Questions (FAQ) Section loaded with tailored loan questions */}
      <FaqSection 
        faqs={loanFaqs}
        title={`Find Answers to ${loan.name} Questions`}
        subtitle={`We have compiled answers to common questions on ${loan.name.toLowerCase()} eligibility, doorstep verification, interest rates, and approval timelines in Coimbatore.`}
      />
    </div>
  );
}
