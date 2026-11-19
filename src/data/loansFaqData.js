import { faqsData as defaultFaqs } from './faqsData';

/**
 * Tailored FAQs for all 6 Loan Products
 * Synchronized with official parameters:
 * - Business Loan: ₹5 Lakhs to ₹10 Cr | 13.5% to 26% | 1 to 3 Years | 2% fee + GST
 * - Car Loan: ₹1 Lakh to ₹1 Cr | New: 8.5%-9.5% (1-7 yr), Used: 11%-18% (1-5 yr), Refinance: 12.80%-18% (1-5 yr) | 1%-2% fee
 * - Mortgage Loan: ₹10 Lakhs to ₹25 Cr | 8.5% to 14% | 1 to 25 Years | 0.5%-1.5% fee
 * - CC Loan: ₹10 Lakhs to ₹25 Cr | 8.75% to 10% | Annual Renewal
 * - Machine Loan: ₹10 Lakhs to ₹25 Cr | 11% to 14% | 1 to 5 Years
 * - Term Loan: ₹10 Lakhs to ₹25 Cr | 8.5% to 14% | 1 to 25 Years | 0.5%-1.5% fee
 */
export const loansFaqData = {
  'personal-loan': [
    {
      id: 'pl-1',
      question: 'What is the loan amount range for a Personal Loan?',
      answer: 'Through our network of all leading partner banks and NBFCs, you can secure collateral-free personal loans ranging from ₹1 Lakh up to ₹25 Lakhs based on your monthly salary or business income profile.'
    },
    {
      id: 'pl-2',
      question: 'What is the interest rate (ROI) for Personal Loans?',
      answer: 'Personal loan interest rates start from 9.90% p.a. on a reducing balance basis, determined by your CIBIL score, monthly net income, employer profile, and lender terms.'
    },
    {
      id: 'pl-3',
      question: 'What is the repayment tenure for Personal Loans?',
      answer: 'Repayment tenures range from 1 to 3 Years (12 to 36 months), giving you flexible monthly EMIs that comfortably match your household budget.'
    },
    {
      id: 'pl-4',
      question: 'What are the applicable charges for Personal Loans?',
      answer: 'Standard lender charges include a minimal processing fee of 0.5% to 1.5% + Insurance + GST, documentation, and state stamp charges at actuals. Foreclosure charges may apply as per the lender’s policy.'
    },
    {
      id: 'pl-5',
      question: 'Do I need to provide any collateral or guarantor?',
      answer: 'No. Personal loans provided through Bharath Finserv are 100% unsecured and collateral-free. You do not need to pledge property, gold, or arrange a guarantor.'
    },
    {
      id: 'pl-6',
      question: 'How fast can a Personal Loan be approved and disbursed?',
      answer: 'Once basic KYC and income documents (last 3-6 months salary slips/bank statements) are collected from your doorstep, sanctions typically take just 24 to 48 hours with direct account credit.'
    }
  ],

  'business-loan': [
    {
      id: 'bl-1',
      question: 'What is the loan amount range for a Business Loan?',
      answer: 'Through our network of all leading banking and NBFC partners, you can secure business loans ranging from ₹5 Lakhs up to ₹10 Crores, tailored to your operating turnover, audited cash flows, and expansion requirements.'
    },
    {
      id: 'bl-2',
      question: 'What is the interest rate (ROI) for Business Loans?',
      answer: 'Business loan interest rates range from 13.5% p.a. on a reducing balance basis, based on your CIBIL score, annual turnover, financial health, and partner lender policy.'
    },
    {
      id: 'bl-3',
      question: 'What is the repayment tenure for Business Loans?',
      answer: 'Repayment tenures range from 1 to 3 Years (12 to 36 months) with structured monthly EMIs aligned to your business cash inflows.'
    },
    {
      id: 'bl-4',
      question: 'What are the applicable charges for Business Loans?',
      answer: 'Applicable lender charges include a processing fee of 2% + Insurance + GST, documentation charges, and state stamp charges at actuals. Foreclosure charges may apply as per the lender’s policy.'
    },
    {
      id: 'bl-5',
      question: 'Do I need to provide collateral or property security?',
      answer: 'Collateral-free options are available for eligible business profiles up to specified lender limits based on GST and banking turnover. For higher ticket funding up to ₹10 Crores, asset or property-backed options are available.'
    },
    {
      id: 'bl-6',
      question: 'What documents are required to apply for a business loan?',
      answer: 'Basic KYC (Aadhaar & PAN), last 12 months operative bank statements, 2-3 years ITR with computation & audit reports, GST returns (3B & 1), and proof of business registration (MSME/Udyam, GST, or Partnership deed).'
    },
    {
      id: 'bl-7',
      question: 'Can partnership firms, LLPs, and private limited companies apply?',
      answer: 'Yes. We cater to sole proprietorships, partnership firms, LLPs, and Private Limited companies across India.'
    },
    {
      id: 'bl-8',
      question: 'How fast can I get business loan approval and disbursal?',
      answer: 'With our doorstep document collection and pre-vetting process, preliminary assessment is completed within hours, in-principle sanction in 24 hours, and direct bank disbursal in 48 to 72 hours.'
    }
  ],

  'mortgage-loan': [
    {
      id: 'ml-1',
      question: 'What is the loan amount range available for a Mortgage Loan (LAP)?',
      answer: 'You can avail Mortgage Loans (Loan Against Property) from ₹10 Lakhs up to ₹25 Crores, with loan-to-value (LTV) funding up to 75% of your property’s prevailing market valuation.'
    },
    {
      id: 'ml-2',
      question: 'What is the interest rate (ROI) for Mortgage Loans?',
      answer: 'Mortgage loan interest rates range from 8.5% to 14% p.a. across top commercial banks and housing finance institutions, linked to repo rate benchmarks.'
    },
    {
      id: 'ml-3',
      question: 'What is the repayment tenure for Mortgage Loans?',
      answer: 'Mortgage loans offer extended repayment tenures from 1 to 25 Years, giving you the flexibility of comfortable, minimal monthly EMI commitments.'
    },
    {
      id: 'ml-4',
      question: 'What are the charges applicable on Mortgage Loans?',
      answer: 'Lender charges include a processing fee of 0.5% to 1.5% + Insurance + GST, documentation charge, and state stamp charges at actuals. Foreclosure charges may apply as per the lender’s policy.'
    },
    {
      id: 'ml-5',
      question: 'What types of property can be pledged for a Mortgage Loan?',
      answer: 'You can pledge self-occupied or rented residential houses, apartments, commercial shops, office buildings, industrial properties, or approved open plots across India.'
    },
    {
      id: 'ml-6',
      question: 'Can I continue using or renting my property during the loan tenure?',
      answer: 'Yes, absolutely. You retain full possession, ownership, and operational usage of the property. You can continue living in it or collecting rental income as usual while servicing EMIs.'
    },
    {
      id: 'ml-7',
      question: 'How long does legal verification and property valuation take?',
      answer: 'Property valuation and title deed legal scrutiny typically take 3 to 5 business days. Our dedicated team coordinates directly with bank-empanelled lawyers and technical valuers to expedite clearance.'
    },
    {
      id: 'ml-8',
      question: 'What property documents are required for sanction?',
      answer: 'Original parent title deeds, prior title chain, Patta, approved building plan, latest property tax receipts, encumbrance certificate (EC) for 13 to 30 years, and possession certificate.'
    }
  ],

  'car-loan': [
    {
      id: 'cl-1',
      question: 'What is the loan amount range for Car Loans?',
      answer: 'Car loan funding is available from ₹1 Lakh up to ₹1 Crore, with up to 100% on-road funding for new cars covering ex-showroom price, road tax, and comprehensive insurance.'
    },
    {
      id: 'cl-2',
      question: 'What are the interest rates for New Car, Used Car, and Refinance?',
      answer: 'New Car rates range from 8.5% to 9.5% p.a. (tenure 1 to 7 Years). Used Car rates range from 11% to 18% p.a. (tenure 1 to 5 Years). Car Refinance rates range from 12.80% to 18% p.a. (tenure 1 to 5 Years).'
    },
    {
      id: 'cl-3',
      question: 'What is the repayment tenure for Car Loans?',
      answer: 'Repayment tenures range from 1 to 7 Years for brand-new passenger cars, and 1 to 5 Years for pre-owned cars and auto refinancing.'
    },
    {
      id: 'cl-4',
      question: 'What are the charges applicable on Car Loans?',
      answer: 'Lender charges include a processing fee of 1% to 2% + Insurance + GST, documentation charges, and state stamp charges at actuals. Foreclosure charges may apply as per the lender’s policy.'
    },
    {
      id: 'cl-5',
      question: 'Do I need a separate guarantor or extra collateral security?',
      answer: 'No separate collateral is needed because the vehicle itself serves as the hypothecated security. A co-applicant or guarantor is only required if credit score or income eligibility needs reinforcement.'
    },
    {
      id: 'cl-6',
      question: 'Do you arrange financing for pre-owned or used cars?',
      answer: 'Yes. We finance certified pre-owned passenger cars from authorized dealership networks as well as verified direct sellers, funding up to 80% to 90% of valuation with tenure up to 5 years.'
    },
    {
      id: 'cl-7',
      question: 'What documents are required to apply for a Car Loan?',
      answer: 'Salaried: Last 3 months salary slips, 6 months bank statement, Form 16, Aadhaar & PAN. Self-Employed: Last 2 years ITR with computation, 6 months bank statement, business proof, and vehicle showroom proforma invoice.'
    },
    {
      id: 'cl-8',
      question: 'How fast is car loan approval and dealer payout?',
      answer: 'Preliminary sanction is issued in 2 to 4 hours with digital verification. Upon submission of the dealer proforma invoice, direct disbursal to the showroom is completed within 24 to 48 hours.'
    }
  ],

  'cc-loan': [
    {
      id: 'ccl-1',
      question: 'What is the loan amount range for a Cash Credit (CC) Facility?',
      answer: 'Cash Credit facilities are sanctioned from ₹10 Lakhs up to ₹25 Crores, structured to finance your daily business working capital, inventory holding, and receivables cycle.'
    },
    {
      id: 'ccl-2',
      question: 'What is the interest rate for Cash Credit (CC) Loans?',
      answer: 'Interest rates for Cash Credit facilities range from 8.75% to 10% p.a., charged exclusively on the daily utilized balance in your account rather than the total sanctioned limit.'
    },
    {
      id: 'ccl-3',
      question: 'How does interest calculation work on a Cash Credit account?',
      answer: 'Interest is calculated on the daily closing negative balance of your CC account and debited monthly. If you do not utilize the sanctioned limit on a particular day, zero interest is incurred.'
    },
    {
      id: 'ccl-4',
      question: 'What are the applicable charges for Cash Credit facilities?',
      answer: 'Applicable lender charges include processing fees, Insurance + GST, documentation charges, and stamp duty at actuals. Foreclosure charges may apply as per the lender’s policy.'
    },
    {
      id: 'ccl-5',
      question: 'What primary security or collateral is required for CC limits?',
      answer: 'Primary security consists of hypothecation of your business stocks, inventory, and trade debtors (receivables). For higher exposures, collateral backing such as commercial, residential, or industrial property is pledged.'
    },
    {
      id: 'ccl-6',
      question: 'How often is the Cash Credit facility renewed?',
      answer: 'Cash Credit limits are typically sanctioned for 12 months and seamlessly renewed annually upon submission of audited financial statements, GST returns, and stock audit verification.'
    },
    {
      id: 'ccl-7',
      question: 'What financial documents and stock statements are required?',
      answer: 'Last 3 years audited balance sheets & P&L statements, last 12 months operative current account statements, GST returns, existing loan sanction letters, and periodic stock & book debt statements.'
    },
    {
      id: 'ccl-8',
      question: 'Can MSME manufacturers and traders across India apply?',
      answer: 'Yes. Cash Credit is the primary working capital lifeline for MSME manufacturers, engineering units, spinning mills, foundries, and wholesale trading enterprises across India.'
    }
  ],

  'machinery-loan': [
    {
      id: 'mcl-1',
      question: 'What is the loan amount range for Machinery Loans?',
      answer: 'Machinery financing is available from ₹10 Lakhs up to ₹25 Crores, funding up to 90% of the equipment quotation value for new, imported, or certified refurbished machinery.'
    },
    {
      id: 'mcl-2',
      question: 'What is the interest rate (ROI) for Machinery Loans?',
      answer: 'Interest rates range from 11% to 14% p.a., structured competitive asset-financing rates designed to align with industrial production cash flows.'
    },
    {
      id: 'mcl-3',
      question: 'What is the repayment tenure for Machinery Loans?',
      answer: 'Repayment tenures span from 1 to 5 Years, allowing you to service equipment EMIs smoothly through generated production revenue.'
    },
    {
      id: 'mcl-4',
      question: 'What are the charges applicable on Machinery Loans?',
      answer: 'Lender charges include bank processing fees, Insurance + GST, documentation charges, and machine hypothecation stamp charges at actuals. Foreclosure charges may apply as per the lender’s policy.'
    },
    {
      id: 'mcl-5',
      question: 'Can I finance both domestic and imported machinery?',
      answer: 'Yes. We finance domestic machinery from authorized Indian manufacturers as well as imported equipment from Germany, Japan, Taiwan, China, and Italy, with Letter of Credit (LC) support.'
    },
    {
      id: 'mcl-6',
      question: 'Is the purchased machine hypothecated as security?',
      answer: 'Yes. The machine being financed serves as the primary hypothecated collateral. For standard loan values under MSME schemes, no separate property collateral is required.'
    },
    {
      id: 'mcl-7',
      question: 'Do I need to submit a proforma invoice or supplier quotation?',
      answer: 'Yes. A formal proforma invoice or quotation from the machinery OEM or authorized distributor detailing technical specifications, delivery terms, and tax breakdown is required for sanction.'
    },
    {
      id: 'mcl-8',
      question: 'How is disbursal made—to the borrower or directly to the machinery vendor?',
      answer: 'To ensure transparent capital utilization, the sanctioned loan amount is directly disbursed by the lender to the machinery vendor upon promoter margin money payment.'
    }
  ],

  'term-loan': [
    {
      id: 'tl-1',
      question: 'What is the loan amount range for a Business Term Loan?',
      answer: 'Commercial Term Loans are available from ₹10 Lakhs up to ₹25 Crores, structured for capital expenditure (CAPEX), plant expansion, industrial buildings, and long-term business investments.'
    },
    {
      id: 'tl-2',
      question: 'What is the interest rate (ROI) for Term Loans?',
      answer: 'Commercial Term Loan interest rates range from 8.5% to 14% p.a., offering competitive repo-linked floating and fixed commercial borrowing options.'
    },
    {
      id: 'tl-3',
      question: 'What is the repayment tenure for Term Loans?',
      answer: 'Repayment tenures range from 1 to 25 Years, structured to project completion milestones and long-term cash flow capabilities.'
    },
    {
      id: 'tl-4',
      question: 'What are the applicable charges for Term Loans?',
      answer: 'Lender charges include a processing fee of 0.5% to 1.5% + Insurance + GST, documentation charges, and security mortgage stamp charges at actuals. Foreclosure charges may apply as per the lender’s policy.'
    },
    {
      id: 'tl-5',
      question: 'Can I avail a moratorium period before principal EMI repayment begins?',
      answer: 'Yes. For project setup or factory construction phases, partner banks offer an initial moratorium period where only interest is serviced, with principal EMIs starting after commercial operations begin.'
    },
    {
      id: 'tl-6',
      question: 'Is a Detailed Project Report (DPR) or CMA data required?',
      answer: 'For term loans above ₹1 Crore intended for expansion or new plant setup, lenders require CMA data and projected cash flows. Our financial advisory team assists you in preparing complete bank-compliant CMA files.'
    },
    {
      id: 'tl-7',
      question: 'What security or collateral is required for a commercial Term Loan?',
      answer: 'The primary security is the asset created using loan proceeds (such as industrial shed, building, or plant). Real estate property or commercial assets may be pledged for large exposures.'
    },
    {
      id: 'tl-8',
      question: 'Can I make partial prepayments towards the term loan principal?',
      answer: 'Yes. Making prepayments helps reduce your total interest burden and tenure. Foreclosure and part-prepayment terms apply as per the respective lender’s policy.'
    }
  ]
};

/**
 * Helper to fetch tailored FAQs for any loan key or slug
 */
export function getLoanFaqs(loanOrSlug) {
  if (!loanOrSlug) return defaultFaqs;

  const key = typeof loanOrSlug === 'string'
    ? loanOrSlug.toLowerCase().trim().replace(/^\/loans\//, '').replace(/^\//, '').replace(/-coimbatore$/, '')
    : loanOrSlug.id;

  if (loansFaqData[key]) {
    return loansFaqData[key];
  }

  // Check matching by slug substring
  for (const loanKey of Object.keys(loansFaqData)) {
    if (key.includes(loanKey)) {
      return loansFaqData[loanKey];
    }
  }

  return defaultFaqs;
}

export default loansFaqData;
