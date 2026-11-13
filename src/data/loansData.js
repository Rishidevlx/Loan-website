import businessIcon from '../assets/Vectors/icons8-work-100.png';
import mortgageIcon from '../assets/Vectors/icons8-home-100.png';
import carIcon from '../assets/Vectors/icons8-car-100.png';
import ccIcon from '../assets/Vectors/icons8-coins-100.png';
import termIcon from '../assets/Vectors/icons8-loan-64.png';
import machineryIcon from '../assets/Vectors/icons8-settings-100.png';

export const loansProducts = [
  {
    id: "business-loan",
    name: "Business Loan",
    slug: "/business-loan-coimbatore",
    icon: businessIcon,
    desc: "Empower your business with tailored working capital, stock financing, and growth funding with fast lender approvals and competitive interest rates.",
    tag: "Working Capital"
  },
  {
    id: "mortgage-loan",
    name: "Mortgage Loan",
    slug: "/mortgage-loan-coimbatore",
    icon: mortgageIcon,
    desc: "Unlock high-value funding against your residential or commercial property with extended tenures, lower EMIs, and minimal paperwork.",
    tag: "High Value"
  },
  {
    id: "car-loan",
    name: "Car Loan",
    slug: "/car-loan-coimbatore",
    icon: carIcon,
    desc: "Drive your dream vehicle with fast new and used auto financing, competitive interest margins, and flexible repayment tenures.",
    tag: "Low Interest"
  },
  {
    id: "cc-loan",
    name: "CC Loan",
    slug: "/cc-loan-coimbatore",
    icon: ccIcon,
    desc: "Access revolving credit and overdraft lines designed to optimize operational liquidity and manage fluctuating business cash flows.",
    tag: "Flexible Limit"
  },
  {
    id: "term-loan",
    name: "Term Loan",
    slug: "/term-loan-coimbatore",
    icon: termIcon,
    desc: "Fuel major capital investments, facility upgrades, and planned business expansion with structured fixed-tenure loans.",
    tag: "Structured"
  },
  {
    id: "machinery-loan",
    name: "Machinery Loan",
    slug: "/machinery-loan-coimbatore",
    icon: machineryIcon,
    desc: "Expand manufacturing capabilities and acquire advanced industrial machinery with specialized equipment financing tailored for MSMEs.",
    tag: "Industrial"
  }
];

export default loansProducts;
