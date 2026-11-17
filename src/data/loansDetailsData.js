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
    ],
    processSteps: [
      {
        title: 'Check Eligibility & Compare 16+ Banks',
        description: 'Tell us your business requirement. We evaluate 16+ top banks & NBFCs to secure you the highest loan amount at the lowest commercial rates.'
      },
      {
        title: 'Hassle-Free Doorstep Documentation',
        description: 'Zero bank branch visits. Our dedicated loan experts collect required GST, ITR, and banking papers right from your business premises across India.'
      },
      {
        title: 'Fast Sanction & Direct Disbursal',
        description: 'Receive your formal bank sanction in 24 to 48 hours with 100% transparent terms, followed by direct disbursement to your business account.'
      }
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
    ],
    processSteps: [
      {
        title: 'Property Valuation & Bank Comparison',
        description: 'Share your property details. We evaluate 16+ leading lenders to maximize your loan-to-value ratio and find the lowest interest margin.'
      },
      {
        title: 'Doorstep Legal & Paperwork Support',
        description: 'Our team visits your location to collect title deeds and KYC documents, coordinating swift legal and technical verification with zero hassle.'
      },
      {
        title: 'Quick Sanction & Direct Disbursal',
        description: 'Get your high-value loan sanctioned smoothly with extended repayment tenure and lower EMIs credited directly to your bank account.'
      }
    ]
  },

  'car-loan': {
    id: 'car-loan',
    name: 'Car Loan',
    slugs: ['/car-loan-coimbatore', '/loans/car-loan', '/car-loan'],
    badge: 'UP TO 100% ON-ROAD FUNDING • NEW & USED CARS',
    headline: 'Drive Your Dream Car with Fast Loan Approvals',
    subtitle: 'Get hassle-free auto loans for brand new and pre-owned passenger vehicles. Enjoy instant approvals, minimal processing fees, and doorstep documentation support across India.',
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
    ],
    processSteps: [
      {
        title: 'Choose Vehicle & Compare 16+ Banks',
        description: 'Select your preferred new or pre-owned car. We compare vehicle loan rates and processing charges across 16+ lenders for maximum on-road funding.'
      },
      {
        title: 'Doorstep Paperwork & Fast Processing',
        description: 'Skip showroom delays. Our advisors collect your income proofs and KYC at your doorstep for instant priority verification and processing.'
      },
      {
        title: 'Instant Approval & Dealer Payout',
        description: 'Enjoy fast sanction within 24 to 48 hours with flexible tenure up to 7 years, enabling immediate delivery of your dream vehicle.'
      }
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
    ],
    processSteps: [
      {
        title: 'Working Capital Assessment',
        description: 'Tell us your business turnover and stock needs. We compare revolving credit limits across 16+ banks to minimize your margin requirements.'
      },
      {
        title: 'Doorstep Financial & Stock Audit Support',
        description: 'Our specialists visit your workplace to assist with stock statements, turnover proofs, and banking papers, handling all lender formalities.'
      },
      {
        title: 'Limit Sanction & Seamless Access',
        description: 'Get your Cash Credit or Overdraft limit sanctioned with interest charged only on utilized amounts and flexible renewal options.'
      }
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
    ],
    processSteps: [
      {
        title: 'Capital Planning & Multi-Bank Matching',
        description: 'Define your long-term capital expenditure or expansion goals. We source customized repayment schedules and rates across 16+ financial institutions.'
      },
      {
        title: 'Hassle-Free Doorstep Document Pickup',
        description: 'Our local team handles project reports, financial audits, and compliance documentation directly from your doorstep with zero branch hassle.'
      },
      {
        title: 'Transparent Sanction & Direct Disbursal',
        description: 'Secure structured term funding with competitive interest rates and extended repayment tenures up to 10 years credited directly to your project.'
      }
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
    ],
    processSteps: [
      {
        title: 'Invoice Review & Lender Comparison',
        description: 'Share your machinery quotation or proforma invoice. We compare equipment financing terms across 16+ banks to fund up to 90% of equipment cost.'
      },
      {
        title: 'Doorstep Technical & Paperwork Coordination',
        description: 'We collect machine supplier details, quotation papers, and business KYC from your premises, expediting credit team sanctions.'
      },
      {
        title: 'Direct Disbursal to Equipment Supplier',
        description: 'Swift sanction within 24 to 48 hours with direct payout to machinery manufacturers or dealers, getting your production line rolling.'
      }
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
