import businessLoanImg from '../assets/loans/Business-loan.png';
import mortgageLoanImg from '../assets/loans/Mortage-loan.png';
import carLoanImg from '../assets/loans/car-loan.png';
import ccLoanImg from '../assets/loans/cc-loan.png';
import termLoanImg from '../assets/loans/Term-loan.png';
import machineryLoanImg from '../assets/loans/machinery-loan.png';

/**
 * Comprehensive Data Store for all 6 Loan Pages
 * Single source of truth for dynamic loan hero sections, details, and future modules.
 */
export const loansDetailsData = {
  'business-loan': {
    id: 'business-loan',
    name: 'Business Loan',
    slugs: ['/business-loan-coimbatore', '/loans/business-loan', '/business-loan'],
    badge: 'GET UP TO ₹5 CRORES • UNSECURED & SECURED',
    headline: 'Fast & Tailored Business Loans for Your Growth',
    subtitle: 'Empower your enterprise with collateral-free working capital, trade finance, and expansion funding. Compare 16+ leading banks & NBFCs with interest rates starting from minimum % p.a.',
    image: businessLoanImg,
    primaryCtaText: 'Apply for Business Loan',
    secondaryCtaText: 'Check Eligibility',
    highlights: [
      { text: 'Fast 24-48 Hr Disbursal', iconType: 'zap' },
      { text: 'Minimal Documentation', iconType: 'file' },
      { text: '16+ Banking Partners', iconType: 'bank' }
    ],
    stats: [
      { label: 'Max Loan Amount', value: 'Up to ₹5 Cr' },
      { label: 'Interest Rate', value: 'From 9.50% p.a.' },
      { label: 'Flexible Tenure', value: '12 to 60 Months' }
    ]
  },

  'mortgage-loan': {
    id: 'mortgage-loan',
    name: 'Mortgage Loan',
    slugs: ['/mortgage-loan-coimbatore', '/loans/mortgage-loan', '/mortgage-loan'],
    badge: 'UP TO 75% PROPERTY VALUE • HIGH VALUE FUNDING',
    headline: 'High-Value Mortgage Loans Against Your Property',
    subtitle: 'Unlock substantial liquidity against residential, commercial, or industrial properties at competitive interest rates with extended tenures and lower EMIs for your financial goals.',
    image: mortgageLoanImg,
    primaryCtaText: 'Apply for Mortgage Loan',
    secondaryCtaText: 'Check Eligibility',
    highlights: [
      { text: 'Fast 24-48 Hr Disbursal', iconType: 'zap' },
      { text: 'Minimal Documentation', iconType: 'file' },
      { text: '16+ Banking Partners', iconType: 'bank' }
    ],
    stats: [
      { label: 'Max Loan Amount', value: 'Up to ₹25 Cr' },
      { label: 'Interest Rate', value: 'From 8.65% p.a.' },
      { label: 'Extended Tenure', value: 'Up to 15 Years' }
    ]
  },

  'car-loan': {
    id: 'car-loan',
    name: 'Car Loan',
    slugs: ['/car-loan-coimbatore', '/loans/car-loan', '/car-loan'],
    badge: 'UP TO 100% ON-ROAD FUNDING • NEW & USED CARS',
    headline: 'Drive Your Dream Car with Fast Loan Approvals',
    subtitle: 'Get hassle-free auto loans for brand new and pre-owned passenger vehicles. Enjoy instant approvals, minimal processing fees, and doorstep documentation support across Coimbatore.',
    image: carLoanImg,
    primaryCtaText: 'Apply for Car Loan',
    secondaryCtaText: 'Check Eligibility',
    highlights: [
      { text: 'Fast 24-48 Hr Disbursal', iconType: 'zap' },
      { text: 'Minimal Documentation', iconType: 'file' },
      { text: '16+ Banking Partners', iconType: 'bank' }
    ],
    stats: [
      { label: 'Financing Limit', value: 'Up to 100%' },
      { label: 'Interest Rate', value: 'From 8.50% p.a.' },
      { label: 'Repayment Tenure', value: 'Up to 7 Years' }
    ]
  },

  'cc-loan': {
    id: 'cc-loan',
    name: 'Cash Credit (CC) Loan',
    slugs: ['/cc-loan-coimbatore', '/loans/cc-loan', '/cc-loan'],
    badge: 'REVOLVING WORKING CAPITAL • PAY ONLY FOR USAGE',
    headline: 'Smart Cash Credit & Overdraft Lines for MSMEs',
    subtitle: 'Maintain seamless business operations and bridge liquidity gaps with dedicated Cash Credit and Overdraft facilities. Pay interest only on the exact funds utilized, with flexible renewal.',
    image: ccLoanImg,
    primaryCtaText: 'Apply for CC Loan',
    secondaryCtaText: 'Check Eligibility',
    highlights: [
      { text: 'Fast 24-48 Hr Disbursal', iconType: 'zap' },
      { text: 'Minimal Documentation', iconType: 'file' },
      { text: '16+ Banking Partners', iconType: 'bank' }
    ],
    stats: [
      { label: 'Credit Limit', value: '₹10 Lakh - ₹15 Cr' },
      { label: 'Interest Type', value: 'Per-Day Usage' },
      { label: 'Tenure', value: '12 Months (Renewable)' }
    ]
  },

  'term-loan': {
    id: 'term-loan',
    name: 'Term Loan',
    slugs: ['/term-loan-coimbatore', '/loans/term-loan', '/term-loan'],
    badge: 'STRUCTURED CAPITAL • GET UP TO ₹10 CRORES',
    headline: 'Structured Term Loans for Fast Business Expansion',
    subtitle: 'Scale commercial operations, acquire long-term assets, or build new industrial facilities with structured fixed-tenure loans. Benefit from predictable repayment schedules and favorable bank rates.',
    image: termLoanImg,
    primaryCtaText: 'Apply for Term Loan',
    secondaryCtaText: 'Check Eligibility',
    highlights: [
      { text: 'Fast 24-48 Hr Disbursal', iconType: 'zap' },
      { text: 'Minimal Documentation', iconType: 'file' },
      { text: '16+ Banking Partners', iconType: 'bank' }
    ],
    stats: [
      { label: 'Max Loan Amount', value: 'Up to ₹10 Cr' },
      { label: 'Interest Rate', value: 'From 9.25% p.a.' },
      { label: 'Loan Tenure', value: '3 to 10 Years' }
    ]
  },

  'machinery-loan': {
    id: 'machinery-loan',
    name: 'Machinery Loan',
    slugs: ['/machinery-loan-coimbatore', '/loans/machinery-loan', '/machinery-loan'],
    badge: 'UP TO 90% EQUIPMENT FINANCING • FAST SANCTIONS',
    headline: 'Advanced Machinery & Equipment Financing for MSMEs',
    subtitle: 'Upgrade manufacturing capabilities, acquire modern CNC, textile, or industrial machinery without exhausting your working capital. Get up to 90% of equipment invoices funded smoothly.',
    image: machineryLoanImg,
    primaryCtaText: 'Apply for Machinery Loan',
    secondaryCtaText: 'Check Eligibility',
    highlights: [
      { text: 'Fast 24-48 Hr Disbursal', iconType: 'zap' },
      { text: 'Minimal Documentation', iconType: 'file' },
      { text: '16+ Banking Partners', iconType: 'bank' }
    ],
    stats: [
      { label: 'Funding Coverage', value: 'Up to 90%' },
      { label: 'Interest Rate', value: 'From 9.00% p.a.' },
      { label: 'Repayment Tenure', value: 'Up to 7 Years' }
    ]
  }
};

/**
 * Helper to match any incoming URL path to the corresponding loan object
 */
export function getLoanBySlug(pathOrSlug = '') {
  if (!pathOrSlug) return null;
  const normalized = pathOrSlug.toLowerCase().trim().replace(/\/$/, '');

  for (const key of Object.keys(loansDetailsData)) {
    const loan = loansDetailsData[key];
    if (loan.id === normalized || normalized === `/loans/${loan.id}`) {
      return loan;
    }
    if (loan.slugs && loan.slugs.some(slug => slug === normalized)) {
      return loan;
    }
  }
  return null;
}

export default loansDetailsData;
