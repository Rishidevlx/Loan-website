/**
 * Loan Terms & Associated Charges Dataset
 * Standardized across all 6 loan products offered by Bharath Finserv.
 * Strictly adheres to user-provided loan details with zero extra filler text.
 */

export const loanTermsData = {
  'business-loan': {
    id: 'business-loan',
    loanName: 'Business Loan',
    amount: {
      min: '5 Lakhs',
      max: '10 Crores',
      display: '₹5 Lakhs to ₹10 Cr',
      description: 'Collateral-free and asset-backed business funding.',
    },
    roi: {
      min: '13.5%',
      max: '26%',
      display: '13.5% to 26% p.a.',
      description: 'Reducing balance rates from 16+ partner lenders.',
    },
    tenure: {
      min: '1 Year',
      max: '3 Years',
      display: '1 to 3 Years',
      description: 'Structured monthly EMIs aligned to cash flow.',
    },
    charges: [
      'Process fee 2% insurance+Gst',
      'Documents charge',
      'Stamp charge',
    ],
    note: "Foreclosure charges may apply as per the lender’s policy.",
  },

  'car-loan': {
    id: 'car-loan',
    loanName: 'Car Loan',
    amount: {
      min: '1 Lakh',
      max: '1 Crore',
      display: '₹1 Lakh to ₹1 Cr',
      description: 'Up to 100% on-road funding for all vehicle types.',
    },
    roi: {
      min: '8.5%',
      max: '18%',
      display: '8.5% to 18% p.a.',
      description: 'Lowest interest rates across new & used cars.',
    },
    tenure: {
      min: '1 Year',
      max: '7 Years',
      display: '1 to 7 Years',
      description: 'Comfortable monthly EMIs up to 7 years.',
    },
    carVariants: [
      {
        type: 'New Car',
        roi: '8.5% to 9.5%',
        tenure: '1 to 7 Years',
      },
      {
        type: 'Used Car',
        roi: '11% to 18%',
        tenure: '1 to 5 Years',
      },
      {
        type: 'Refinance',
        roi: '12.80% to 18%',
        tenure: '1 to 5 Years',
      },
    ],
    charges: [
      'Processing fee 1% to 2%',
      'Insurance + GST',
      'Documents charge',
      'Stamp charges',
    ],
    note: "Foreclosure charges may apply as per the lender’s policy.",
  },

  'mortgage-loan': {
    id: 'mortgage-loan',
    loanName: 'Mortgage Loan (LAP)',
    amount: {
      min: '10 Lakhs',
      max: '25 Crores',
      display: '₹10 Lakhs to ₹25 Cr',
      description: 'High-value funding up to 75% of property value.',
    },
    roi: {
      min: '8.5%',
      max: '14%',
      display: '8.5% to 14% p.a.',
      description: 'Lowest interest rates for residential & commercial.',
    },
    tenure: {
      min: '1 Year',
      max: '25 Years',
      display: '1 to 25 Years',
      description: 'Extended tenure for minimal monthly EMI burden.',
    },
    charges: [
      'Processing fee 0.5% to 1.5%',
      'Insurance + GST',
      'Documents charge',
      'Stamp charges',
    ],
    note: "Foreclosure charges may apply as per the lender’s policy.",
  },

  'cc-loan': {
    id: 'cc-loan',
    loanName: 'Cash Credit (CC) Loan',
    amount: {
      min: '10 Lakhs',
      max: '25 Crores',
      display: '₹10 Lakhs to ₹25 Cr',
      description: 'Revolving limit sanctioned against stocks & receivables.',
    },
    roi: {
      min: '8.75%',
      max: '10%',
      display: '8.75% to 10% p.a.',
      description: 'Pay interest only on utilized funds on daily basis.',
    },
    tenure: {
      min: '1 Year',
      max: 'Renewable',
      display: '1 Year (Annual Renewal)',
      description: 'Sanctioned for 12 months with easy annual renewal.',
    },
    charges: [
      'Processing fee',
      'Insurance + GST',
      'Documents charge',
      'Stamp charges',
    ],
    note: "Foreclosure charges may apply as per the lender’s policy.",
  },

  'machinery-loan': {
    id: 'machinery-loan',
    loanName: 'Machinery Loan',
    amount: {
      min: '10 Lakhs',
      max: '25 Crores',
      display: '₹10 Lakhs to ₹25 Cr',
      description: 'Up to 90% financing for industrial equipment.',
    },
    roi: {
      min: '11%',
      max: '14%',
      display: '11% to 14% p.a.',
      description: 'Asset finance rates matched to production cycles.',
    },
    tenure: {
      min: '1 Year',
      max: '5 Years',
      display: '1 to 5 Years',
      description: 'Flexible repayment with optional initial moratorium.',
    },
    charges: [
      'Processing fee',
      'Insurance + GST',
      'Documents charge',
      'Stamp charges',
    ],
    note: "Foreclosure charges may apply as per the lender’s policy.",
  },

  'term-loan': {
    id: 'term-loan',
    loanName: 'Business Term Loan',
    amount: {
      min: '10 Lakhs',
      max: '25 Crores',
      display: '₹10 Lakhs to ₹25 Cr',
      description: 'Long-term capital for expansion and fixed assets.',
    },
    roi: {
      min: '8.5%',
      max: '14%',
      display: '8.5% to 14% p.a.',
      description: 'Competitive floating & fixed commercial rates.',
    },
    tenure: {
      min: '1 Year',
      max: '25 Years',
      display: '1 to 25 Years',
      description: 'Customized tenure aligned to project milestones.',
    },
    charges: [
      'Processing fee 0.5% to 1.5%',
      'Insurance + GST',
      'Documents charge',
      'Stamp charges',
    ],
    note: "Foreclosure charges may apply as per the lender’s policy.",
  },
};

/**
 * Helper to fetch loan terms by loan object or slug
 */
export function getLoanTerms(loanOrSlug) {
  if (!loanOrSlug) return loanTermsData['business-loan'];

  const key = typeof loanOrSlug === 'string'
    ? loanOrSlug.toLowerCase().trim().replace(/^\/loans\//, '').replace(/^\//, '').replace(/-coimbatore$/, '')
    : loanOrSlug.id;

  if (loanTermsData[key]) {
    return loanTermsData[key];
  }

  // Fallback search
  for (const loanKey of Object.keys(loanTermsData)) {
    if (key.includes(loanKey)) {
      return loanTermsData[loanKey];
    }
  }

  return loanTermsData['business-loan'];
}
