import { faqsData as defaultFaqs } from './faqsData';

/**
 * Tailored FAQs for all 6 Loan Products
 * Specifically crafted for Coimbatore borrowers, businesses, and MSMEs.
 * Exactly 8 FAQs per loan type (4 left, 4 right) for balanced 2-column layout.
 */
export const loansFaqData = {
  'business-loan': [
    {
      id: 'bl-1',
      question: 'What is the maximum business loan amount I can avail in Coimbatore?',
      answer: 'Through our network of 16+ banking and NBFC partners, you can secure collateral-free business loans up to ₹50 Lakhs, and secured business loans up to ₹5 Crores depending on your annual turnover and profitability.'
    },
    {
      id: 'bl-2',
      question: 'Do I need to provide collateral or property security?',
      answer: 'No collateral is required for unsecured business loans. Approval is determined based on your banking turnover, GST returns, and business vintage. For higher funding requirements beyond ₹50 Lakhs, secured options with property or asset backing are available.'
    },
    {
      id: 'bl-3',
      question: 'What is the minimum business vintage and turnover required?',
      answer: 'Most of our lending partners require a minimum operating vintage of 2 to 3 years and an annual turnover of ₹25 Lakhs or above. However, for promising MSMEs in Coimbatore, we also partner with lenders who accommodate 1-year vintage with solid bank cash flow.'
    },
    {
      id: 'bl-4',
      question: 'How fast can I get business loan approval and disbursal?',
      answer: 'With our doorstep document collection and pre-vetting process, preliminary eligibility is assessed in hours, in-principle sanction is achieved in 24 hours, and direct account disbursal is completed within 48 to 72 hours.'
    },
    {
      id: 'bl-5',
      question: 'What documents are required to apply for a business loan?',
      answer: 'Basic KYC (Aadhaar & PAN), last 12 months operative bank statements, 2-3 years ITR with computation & audit reports, GST returns (3B & 1) for the past 12 months, and proof of business registration (MSME/Udyam, GST, or Partnership deed).'
    },
    {
      id: 'bl-6',
      question: 'What is the starting interest rate for business loans?',
      answer: 'Unsecured business loan interest rates start from 9.50% to 15% p.a. depending on your CIBIL score, financial health, and banking relationship. Secured business facility rates can start as low as 8.75% p.a.'
    },
    {
      id: 'bl-7',
      question: 'Can partnership firms, LLPs, and private limited companies apply?',
      answer: 'Yes. We cater to sole proprietorships, partnership firms, LLPs, and Private Limited companies across Coimbatore, Tirupur, and the western Tamil Nadu industrial corridor.'
    },
    {
      id: 'bl-8',
      question: 'Can I foreclose or prepay my business loan early?',
      answer: 'Yes. Most partner banks and NBFCs allow part-prepayment or full foreclosure after 6 to 12 EMIs. Several partner lenders offer zero foreclosure charges after a specified lock-in period.'
    }
  ],

  'mortgage-loan': [
    {
      id: 'ml-1',
      question: 'What types of property can be pledged for a Mortgage Loan (LAP)?',
      answer: 'You can pledge self-occupied or rented residential houses, apartments, commercial shops, office spaces, industrial buildings, or approved commercial land parcels located in and around Coimbatore.'
    },
    {
      id: 'ml-2',
      question: 'How much loan amount can I get against my property value (LTV)?',
      answer: 'Lenders typically offer between 60% to 75% of the prevailing market valuation for residential properties, and 50% to 65% for commercial or industrial properties, with loan amounts up to ₹25 Crores.'
    },
    {
      id: 'ml-3',
      question: 'Can I continue using or renting my property during the loan tenure?',
      answer: 'Yes, absolutely. You retain complete possession, ownership, and operational usage of the property. You can continue living in it or collecting rental income as usual while repaying the loan.'
    },
    {
      id: 'ml-4',
      question: 'What is the difference between a Home Loan and a Mortgage Loan?',
      answer: 'A Home Loan can only be used to purchase or construct a residential property. A Mortgage Loan (Loan Against Property) allows you to pledge an already-owned property to raise liquid funds for any legitimate personal or business purpose without restrictions.'
    },
    {
      id: 'ml-5',
      question: 'What is the typical repayment tenure and interest rate?',
      answer: 'Mortgage loans offer extended tenures ranging from 5 to 15 years, allowing for significantly lower monthly EMIs. Interest rates start from 8.65% to 10.50% p.a. across top commercial banks.'
    },
    {
      id: 'ml-6',
      question: 'How long does legal verification and property valuation take?',
      answer: 'Property valuation and title deed legal scrutiny typically take 3 to 5 business days. Our local Coimbatore team coordinates directly with bank empanelled lawyers and technical valuers to expedite clearance.'
    },
    {
      id: 'ml-7',
      question: 'Can self-employed individuals with non-standard income apply?',
      answer: 'Yes. We work with leading NBFCs and housing finance companies that evaluate surrogate income proofs, cash flow, and banking patterns even if formal ITR documentation is modest.'
    },
    {
      id: 'ml-8',
      question: 'What property documents are required for sanction?',
      answer: 'Original parent title deeds, prior title chain, Patta, approved building plan, latest property tax receipts, encumbrance certificate (EC) for the last 13 to 30 years, and possession certificate.'
    }
  ],

  'car-loan': [
    {
      id: 'cl-1',
      question: 'Can I get up to 100% on-road funding for a new car?',
      answer: 'Yes! Selected partner banks offer up to 100% on-road financing (including registration, road tax, and insurance) for eligible salaried individuals and established business owners in Coimbatore.'
    },
    {
      id: 'cl-2',
      question: 'Do you arrange financing for used or pre-owned vehicles?',
      answer: 'Yes, we finance pre-owned passenger cars from certified dealers as well as individual sellers, funding up to 80-90% of the vehicle valuation with tenure up to 5 years.'
    },
    {
      id: 'cl-3',
      question: 'What is the maximum loan tenure available for car loans?',
      answer: 'For new vehicles, the repayment tenure ranges from 1 to 7 years (84 months). For pre-owned vehicles, the maximum tenure is typically 5 years (subject to vehicle age not exceeding 10 years at loan maturity).'
    },
    {
      id: 'cl-4',
      question: 'What are the typical car loan interest rates?',
      answer: 'New car loan interest rates start from 8.50% to 9.75% p.a. on a reducing balance basis. Used car loans typically range between 11.50% to 14.50% p.a. based on vehicle model, age, and borrower profile.'
    },
    {
      id: 'cl-5',
      question: 'Do I need a guarantor or extra collateral security?',
      answer: 'No separate collateral is needed because the purchased vehicle itself serves as the hypothecated security. A guarantor is usually required only if the primary applicant has a border-line credit score or insufficient income.'
    },
    {
      id: 'cl-6',
      question: 'How fast is car loan approval and dealer payout?',
      answer: 'Preliminary sanction takes just 2 to 4 hours with digital KYC verification. Once you finalize the proforma invoice from the Coimbatore car showroom, formal disbursement to the dealer happens within 24 to 48 hours.'
    },
    {
      id: 'cl-7',
      question: 'What documents are needed to apply for a car loan?',
      answer: 'Salaried: Last 3 months salary slips, 6 months bank statement, Form 16, Aadhaar & PAN. Self-Employed: Last 2 years ITR with computation, 6 months bank statement, business registration, and vehicle proforma invoice.'
    },
    {
      id: 'cl-8',
      question: 'Can I foreclose or prepay my car loan early?',
      answer: 'Yes, all our lending partners allow part-payments and early foreclosure. Many top banks offer zero foreclosure charges on floating or fixed car loans after 12 to 24 successful monthly EMI payments.'
    }
  ],

  'cc-loan': [
    {
      id: 'ccl-1',
      question: 'How does a Cash Credit (CC) facility differ from a Term Loan?',
      answer: 'In a Term Loan, the full amount is disbursed upfront and interest is paid on the entire principal. In a Cash Credit facility, an approved credit limit is set in your current account and interest is charged only on the exact funds utilized on a day-to-day basis.'
    },
    {
      id: 'ccl-2',
      question: 'How is interest calculated on a Cash Credit account?',
      answer: 'Interest is calculated on the daily closing negative balance of your CC account and debited monthly. If you do not utilize the sanctioned limit on a particular day, zero interest is incurred for that day.'
    },
    {
      id: 'ccl-3',
      question: 'What security or collateral is required for setting up a CC limit?',
      answer: 'Primary security consists of hypothecation of your business stocks, inventory, and book debts (receivables). For limits above ₹2 Crores, collateral security such as residential, commercial, or industrial property is usually pledged.'
    },
    {
      id: 'ccl-4',
      question: 'How often is the Cash Credit facility renewed?',
      answer: 'Cash Credit facilities are sanctioned for a 12-month period and are seamlessly renewed annually upon review of your audited financial statements, turnover growth, and satisfactory account conduct.'
    },
    {
      id: 'ccl-5',
      question: 'What financial documents and stock statements are required?',
      answer: 'Last 3 years audited balance sheets & P&L statements, last 12 months operative current account statements, GST returns, sanction letters of existing loans, and monthly stock & book debt statements.'
    },
    {
      id: 'ccl-6',
      question: 'What is the typical CC credit limit range in Coimbatore?',
      answer: 'Limits typically range from ₹10 Lakhs up to ₹15 Crores depending on your projected annual turnover, operating cycle, drawing power, and eligible current asset margins.'
    },
    {
      id: 'ccl-7',
      question: 'Can Coimbatore textile manufacturers, foundries, and traders apply?',
      answer: 'Yes. Cash Credit is the primary working capital lifeline for Coimbatore’s textile spinning mills, foundries, CNC machining job shops, pump manufacturers, and wholesale trading enterprises.'
    },
    {
      id: 'ccl-8',
      question: 'Are there any commitment charges on unutilized credit limits?',
      answer: 'Most public and private sector banks waive commitment charges for MSMEs with limits up to ₹1 Crore. For larger corporate limits, we negotiate with bank zonal authorities to minimize or waive unutilized commitment fees.'
    }
  ],

  'term-loan': [
    {
      id: 'tl-1',
      question: 'What is a Business Term Loan and what can it be used for?',
      answer: 'A Term Loan provides a structured lump-sum capital amount with a fixed or floating interest rate and a defined repayment schedule. It is ideal for capital expenditure (CAPEX), expanding factories, purchasing long-term assets, or opening new branches.'
    },
    {
      id: 'tl-2',
      question: 'What is the maximum tenure available for Term Loans?',
      answer: 'Commercial term loans typically offer tenures from 3 to 10 years (up to 120 months) depending on the nature of the funded asset and economic life of the project.'
    },
    {
      id: 'tl-3',
      question: 'How do interest rates work—fixed vs floating?',
      answer: 'Borrowers can choose between floating rates linked to the bank’s Repo-Linked Lending Rate (RLLR / EBLR) or fixed rates. Floating rates currently start from 9.25% p.a. for strong credit profiles.'
    },
    {
      id: 'tl-4',
      question: 'Is a Detailed Project Report (DPR) required for large term loans?',
      answer: 'For term loans above ₹1 Crore intended for expansion or new plant setup, lenders require a Detailed Project Report with projected cash flows, DSCR, and CMA data. Our financial advisory team assists you in preparing bank-compliant CMA data.'
    },
    {
      id: 'tl-5',
      question: 'What security or collateral is required for a term loan?',
      answer: 'The primary security is the asset acquired using the loan proceeds (e.g., factory shed, machinery, or building). Collateral security such as existing real estate property may be requested for large ticket exposures.'
    },
    {
      id: 'tl-6',
      question: 'Can I avail a moratorium period before principal repayment starts?',
      answer: 'Yes. For industrial projects or construction phases, partner banks offer a moratorium period of 6 to 18 months where you only service the interest, with principal EMIs starting once commercial operations commence.'
    },
    {
      id: 'tl-7',
      question: 'How does Bharath Finserv help compare term loan options?',
      answer: 'We present your credit file simultaneously to 16+ banks and institutional lenders, comparing interest margins, processing fees, pre-closure clauses, and documentation requirements to secure the most favorable sanction.'
    },
    {
      id: 'tl-8',
      question: 'Can I make partial prepayments towards the term loan principal?',
      answer: 'Yes. Making prepayments helps reduce your total interest burden and tenure. Individual borrowers and MSME units with floating-rate term loans typically enjoy zero prepayment penalties under RBI directives.'
    }
  ],

  'machinery-loan': [
    {
      id: 'mcl-1',
      question: 'What percentage of the machinery cost can be financed?',
      answer: 'Lenders typically finance between 75% to 90% of the machinery invoice value (excluding GST or inclusive of GST depending on the bank), requiring a promoter contribution of just 10% to 25%.'
    },
    {
      id: 'mcl-2',
      question: 'Can I finance both imported and domestic industrial machinery?',
      answer: 'Yes. We finance domestic machinery from authorized Indian OEMs as well as imported machinery from Germany, Japan, Taiwan, China, and Italy, including Letter of Credit (LC) and buyer’s credit support.'
    },
    {
      id: 'mcl-3',
      question: 'Do you provide loans for second-hand or refurbished machinery?',
      answer: 'Yes, selected partner NBFCs and commercial banks finance pre-owned or imported refurbished machinery, subject to a chartered engineer’s valuation and residual useful life assessment of at least 5 to 7 years.'
    },
    {
      id: 'mcl-4',
      question: 'Is the purchased machine hypothecated as collateral security?',
      answer: 'Yes. The machine being purchased acts as the primary hypothecated collateral. For standard loan amounts up to ₹2 Crores under MSME CGTMSE schemes, no additional property collateral is required.'
    },
    {
      id: 'mcl-5',
      question: 'What is the typical interest rate and tenure for machinery loans?',
      answer: 'Machinery loan interest rates range from 9.00% to 13.50% p.a., with flexible repayment tenures spanning 3 to 7 years structured to align with your production cash flows.'
    },
    {
      id: 'mcl-6',
      question: 'Do I need to submit a proforma invoice or quotation from the supplier?',
      answer: 'Yes. A formal proforma invoice or quotation from the machine manufacturer or authorized dealer specifying technical specs, model name, delivery terms, and tax breakdown is mandatory for loan sanction.'
    },
    {
      id: 'mcl-7',
      question: 'How is disbursal made—to the borrower or directly to the machinery vendor?',
      answer: 'To ensure transparent end-use, the sanctioned loan amount is directly disbursed by the lending bank to the machinery manufacturer or authorized equipment vendor upon payment of your margin money.'
    },
    {
      id: 'mcl-8',
      question: 'What industries in Coimbatore can avail machinery financing?',
      answer: 'Textile spinning & weaving units, automotive foundries, CNC precision engineering workshops, plastic injection molding plants, solar & electrical manufacturers, and packaging industries.'
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
