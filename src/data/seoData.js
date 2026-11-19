/**
 * Centralized SEO Metadata Store
 * Extracted directly from: Requirement/Bharath Finserv – Website Content & SEO Plan.docx
 * 
 * Provides exact Meta Titles, Descriptions, Keywords, Canonicals, Open Graph (OG),
 * Twitter Cards, and Schema.org Structured Data for all routes.
 */

const SITE_URL = 'https://www.bharathfinserve.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.jpeg`;

// Local Business / FinancialService Schema (Section 4 in SEO Plan doc)
const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "Bharath Finserv",
  "url": SITE_URL,
  "telephone": "+91-9944400022",
  "email": "bharathfinser@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "481/1, Thilakar Street, Thelugupalayam, Velandipalayam",
    "addressLocality": "Coimbatore",
    "addressRegion": "Tamil Nadu",
    "postalCode": "641025",
    "addressCountry": "IN"
  },
  "openingHours": "Mo-Sa 09:30-19:00",
  "areaServed": "Coimbatore"
};

export const seoData = {
  // 3.1 Home – slug: /
  '/': {
    title: 'Loan Consultants in Coimbatore | Bharath Finserv',
    description: 'Bharath Finserv helps you get business, property, car and personal loans in Coimbatore from 16+ leading banks and NBFCs. Call 99444 00022 today.',
    keywords: 'loan consultant Coimbatore, loans in Coimbatore, business loan Coimbatore, loan against property Coimbatore, car loan Coimbatore, personal loan Coimbatore, Bharath Finserv',
    canonical: `${SITE_URL}/`,
    ogTitle: 'Loan Consultants in Coimbatore | Bharath Finserv',
    ogDescription: 'Bharath Finserv helps you get business, property, car and personal loans in Coimbatore from 16+ leading banks and NBFCs. Call 99444 00022 today.',
    ogUrl: `${SITE_URL}/`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
    schema: LOCAL_BUSINESS_SCHEMA
  },

  // 3.2 About Us – slug: /about-us
  '/about-us': {
    title: 'About Bharath Finserv | Loan Advisors in Coimbatore',
    description: 'Know Bharath Finserv, a Coimbatore loan advisory firm built on trust and transparency. We connect you with leading banks and NBFCs for the right loan.',
    keywords: 'about Bharath Finserv, loan advisor Coimbatore, loan agency Coimbatore, financial services Velandipalayam',
    canonical: `${SITE_URL}/about-us`,
    ogTitle: 'About Bharath Finserv | Loan Advisors in Coimbatore',
    ogDescription: 'Know Bharath Finserv, a Coimbatore loan advisory firm built on trust and transparency. We connect you with leading banks and NBFCs for the right loan.',
    ogUrl: `${SITE_URL}/about-us`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website'
  },

  // 3.15 Contact – slug: /contact
  '/contact': {
    title: 'Contact Bharath Finserv | Velandipalayam, Coimbatore',
    description: 'Visit or call Bharath Finserv at Thilakar Street, Velandipalayam, Coimbatore 641025. Phone 99444 00022. Open Mon–Sat, 9:30 AM–7:00 PM.',
    keywords: 'Bharath Finserv contact, loan consultant near me, loan agency Velandipalayam, Coimbatore loan office',
    canonical: `${SITE_URL}/contact`,
    ogTitle: 'Contact Bharath Finserv | Velandipalayam, Coimbatore',
    ogDescription: 'Visit or call Bharath Finserv at Thilakar Street, Velandipalayam, Coimbatore 641025. Phone 99444 00022. Open Mon–Sat, 9:30 AM–7:00 PM.',
    ogUrl: `${SITE_URL}/contact`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
    schema: LOCAL_BUSINESS_SCHEMA
  },

  // 3.4 Business Loan – slug: /business-loan-coimbatore
  '/business-loan-coimbatore': {
    title: 'Business Loan in Coimbatore | Bharath Finserv',
    description: 'Get a business loan in Coimbatore for expansion, stock, machinery or working capital. Bharath Finserv compares top banks and NBFCs for you. Apply now.',
    keywords: 'business loan Coimbatore, MSME loan Coimbatore, working capital loan, loan for small business, machinery loan, business loan consultant',
    canonical: `${SITE_URL}/business-loan-coimbatore`,
    ogTitle: 'Business Loan in Coimbatore | Bharath Finserv',
    ogDescription: 'Get a business loan in Coimbatore for expansion, stock, machinery or working capital. Bharath Finserv compares top banks and NBFCs for you. Apply now.',
    ogUrl: `${SITE_URL}/business-loan-coimbatore`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'article'
  },

  // 3.5 Loan Against Property / Mortgage Loan – slug: /mortgage-loan-coimbatore
  '/mortgage-loan-coimbatore': {
    title: 'Loan Against Property in Coimbatore | Bharath Finserv',
    description: 'Unlock your property\'s value with a loan against property in Coimbatore. Compare rates and tenure from leading banks and NBFCs with Bharath Finserv.',
    keywords: 'loan against property Coimbatore, LAP Coimbatore, mortgage loan Coimbatore, property loan, home equity loan, mortgage loan consultant',
    canonical: `${SITE_URL}/mortgage-loan-coimbatore`,
    ogTitle: 'Loan Against Property in Coimbatore | Bharath Finserv',
    ogDescription: 'Unlock your property\'s value with a loan against property in Coimbatore. Compare rates and tenure from leading banks and NBFCs with Bharath Finserv.',
    ogUrl: `${SITE_URL}/mortgage-loan-coimbatore`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'article'
  },

  // 3.6 Car Loan – slug: /car-loan-coimbatore
  '/car-loan-coimbatore': {
    title: 'Car Loan in Coimbatore | New & Used | Bharath Finserv',
    description: 'Drive home your dream car with an easy car loan in Coimbatore. Quick approval support, flexible EMI and top bank options. Call Bharath Finserv now.',
    keywords: 'car loan Coimbatore, new car loan, used car loan Coimbatore, vehicle loan, auto loan, car finance Coimbatore',
    canonical: `${SITE_URL}/car-loan-coimbatore`,
    ogTitle: 'Car Loan in Coimbatore | New & Used | Bharath Finserv',
    ogDescription: 'Drive home your dream car with an easy car loan in Coimbatore. Quick approval support, flexible EMI and top bank options. Call Bharath Finserv now.',
    ogUrl: `${SITE_URL}/car-loan-coimbatore`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'article'
  },

  // 3.7 Personal Loan – slug: /personal-loan-coimbatore
  '/personal-loan-coimbatore': {
    title: 'Personal Loan in Coimbatore | Bharath Finserv',
    description: 'Need money fast? Get a personal loan in Coimbatore for medical, wedding, travel or home needs. Simple process, trusted lenders. Apply with Bharath Finserv.',
    keywords: 'personal loan Coimbatore, instant personal loan, urgent loan Coimbatore, salaried personal loan, unsecured loan',
    canonical: `${SITE_URL}/personal-loan-coimbatore`,
    ogTitle: 'Personal Loan in Coimbatore | Bharath Finserv',
    ogDescription: 'Need money fast? Get a personal loan in Coimbatore for medical, wedding, travel or home needs. Simple process, trusted lenders. Apply with Bharath Finserv.',
    ogUrl: `${SITE_URL}/personal-loan-coimbatore`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'article'
  },

  // 3.8 Term Loan – slug: /term-loan-coimbatore
  '/term-loan-coimbatore': {
    title: 'Term Loan in Coimbatore | Bharath Finserv',
    description: 'Plan big investments with a long-term loan in Coimbatore. Fixed tenure, structured EMIs and lender comparison from Bharath Finserv. Enquire today.',
    keywords: 'term loan Coimbatore, long term business loan, business term loan, project loan, fixed tenure loan',
    canonical: `${SITE_URL}/term-loan-coimbatore`,
    ogTitle: 'Term Loan in Coimbatore | Bharath Finserv',
    ogDescription: 'Plan big investments with a long-term loan in Coimbatore. Fixed tenure, structured EMIs and lender comparison from Bharath Finserv. Enquire today.',
    ogUrl: `${SITE_URL}/term-loan-coimbatore`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'article'
  },

  // Cash Credit (CC) Loan – slug: /cc-loan-coimbatore
  '/cc-loan-coimbatore': {
    title: 'Cash Credit (CC) Loan in Coimbatore | Bharath Finserv',
    description: 'Secure flexible cash credit and working capital overdraft limits in Coimbatore. Compare 16+ top banks & NBFCs with Bharath Finserv. Apply now.',
    keywords: 'cash credit loan Coimbatore, CC loan Coimbatore, working capital loan Coimbatore, business overdraft facility, MSME credit limit',
    canonical: `${SITE_URL}/cc-loan-coimbatore`,
    ogTitle: 'Cash Credit (CC) Loan in Coimbatore | Bharath Finserv',
    ogDescription: 'Secure flexible cash credit and working capital overdraft limits in Coimbatore. Compare 16+ top banks & NBFCs with Bharath Finserv. Apply now.',
    ogUrl: `${SITE_URL}/cc-loan-coimbatore`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'article'
  },

  // Machinery Loan – slug: /machinery-loan-coimbatore
  '/machinery-loan-coimbatore': {
    title: 'Machinery Loan in Coimbatore | Equipment Finance | Bharath Finserv',
    description: 'Finance new or used industrial machinery and equipment in Coimbatore with low interest rates, flexible tenure, and fast sanction through Bharath Finserv.',
    keywords: 'machinery loan Coimbatore, equipment finance Coimbatore, plant machinery loan, industrial equipment loan, MSME machinery finance',
    canonical: `${SITE_URL}/machinery-loan-coimbatore`,
    ogTitle: 'Machinery Loan in Coimbatore | Equipment Finance | Bharath Finserv',
    ogDescription: 'Finance new or used industrial machinery and equipment in Coimbatore with low interest rates, flexible tenure, and fast sanction through Bharath Finserv.',
    ogUrl: `${SITE_URL}/machinery-loan-coimbatore`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'article'
  },

  // 3.16 Privacy Policy – slug: /privacy-policy
  '/privacy-policy': {
    title: 'Privacy Policy | Bharath Finserv',
    description: 'How Bharath Finserv collects, uses and protects your personal and financial information.',
    keywords: 'Bharath Finserv privacy policy, data protection, loan advisory privacy',
    canonical: `${SITE_URL}/privacy-policy`,
    ogTitle: 'Privacy Policy | Bharath Finserv',
    ogDescription: 'How Bharath Finserv collects, uses and protects your personal and financial information.',
    ogUrl: `${SITE_URL}/privacy-policy`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website'
  },

  // 3.16 Terms & Conditions – slug: /terms-and-conditions
  '/terms-and-conditions': {
    title: 'Terms & Conditions | Bharath Finserv',
    description: 'Terms of use for the Bharath Finserv website and loan advisory services.',
    keywords: 'Bharath Finserv terms, conditions of service, loan advisory terms',
    canonical: `${SITE_URL}/terms-and-conditions`,
    ogTitle: 'Terms & Conditions | Bharath Finserv',
    ogDescription: 'Terms of use for the Bharath Finserv website and loan advisory services.',
    ogUrl: `${SITE_URL}/terms-and-conditions`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website'
  }
};

/**
 * Helper to fetch SEO data by pathname or loan identifier
 */
export function getSEOData(pathname, loanId) {
  const cleanPath = (pathname || '').toLowerCase().trim();

  // 1. Direct path lookup
  if (seoData[cleanPath]) {
    return seoData[cleanPath];
  }

  // 2. Loan ID lookup fallback
  if (loanId) {
    const loanPath = `/${loanId}-coimbatore`;
    if (seoData[loanPath]) {
      return seoData[loanPath];
    }
  }

  // 3. Fallback to homepage data
  return seoData['/'];
}

export default seoData;
