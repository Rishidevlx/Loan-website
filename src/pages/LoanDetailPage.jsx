import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LoanHeroSection from '../components/sections/LoanHeroSection';
import LoanProcessSection from '../components/sections/LoanProcessSection';
import LoanTypicalProcessSection from '../components/sections/LoanTypicalProcessSection';
import LoanDocumentsSection from '../components/sections/LoanDocumentsSection';
import LoanTermsChargesSection from '../components/sections/LoanTermsChargesSection';
import LoanCtaBanner from '../components/sections/LoanCtaBanner';
import FaqSection from '../components/sections/FaqSection';
import SEO from '../components/common/SEO';
import { getLoanFaqs } from '../data/loansFaqData';
import { getSEOData } from '../data/seoData';
import { themeConfig } from '../config/themeconfig';

/**
 * Reusable Master Loan Detail Page
 * Sequence:
 * 1. Hero Section (White)
 * 2. "How We Help You" Process Section (#EDF0EC)
 * 3. Typical Loan Workflow Process Section (White)
 * 4. Documents Required by Business Type Section (#EDF0EC)
 * 5. Loan Terms & Associated Charges Section (White - FINVIEW 2-Column Layout)
 * 6. Rectangular CTA Banner Card (White with #EDF0EC card)
 * 7. FAQ Section (White)
 * 
 * Keyed by loan.id / location.pathname to ensure clean unmount and fresh entrance
 * animations whenever navigating between different loan products.
 */
export default function LoanDetailPage({ loan }) {
  const location = useLocation();

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
  const activeKey = loan.id || loan.slug || location.pathname;

  return (
    <div
      key={activeKey}
      className="bg-white min-h-[70vh]"
      style={{ fontFamily: themeConfig.typography.fontFamily }}
    >
      {/* Page SEO Meta Tags, Canonical & Open Graph */}
      <SEO {...getSEOData(location.pathname, loan?.id)} />

      {/* 1. Dynamic Reusable Hero Section (Pure White Background) */}
      <LoanHeroSection key={`hero-${activeKey}`} loanData={loan} />

      {/* 2. 3-Column "How We Help You" Process Section (#EDF0EC Background) */}
      <LoanProcessSection key={`process-${activeKey}`} loan={loan} />

      {/* 3. Typical Loan Workflow Process Section (Pure White Background) */}
      <LoanTypicalProcessSection key={`workflow-${activeKey}`} loan={loan} />

      {/* 4. 3-Column Entity Document Section (#EDF0EC Background) - Business Loan ONLY */}
      {loan.id === 'business-loan' && (
        <LoanDocumentsSection key={`docs-${activeKey}`} loan={loan} />
      )}

      {/* 5. FINVIEW-Style 2-Column Loan Terms & Charges Section (Pure White Background) */}
      <LoanTermsChargesSection key={`terms-${activeKey}`} loan={loan} />

      {/* 6. Rectangular CTA Banner Card (#EDF0EC Card with Outlined / Action Buttons & Hero Image) */}
      <LoanCtaBanner key={`cta-${activeKey}`} loan={loan} />

      {/* 7. Frequently Asked Questions (FAQ) Section loaded with tailored loan questions */}
      <FaqSection
        key={`faqs-${activeKey}`}
        faqs={loanFaqs}
        title={`Find Answers to ${loan.name} Questions`}
        subtitle={`We have compiled answers to common questions on ${loan.name.toLowerCase()} eligibility, doorstep verification, interest rates, and approval timelines across India.`}
      />
    </div>
  );
}
