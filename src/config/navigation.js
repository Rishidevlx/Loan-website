import businessIcon from '../assets/Vectors/icons8-work-100.png';
import mortgageIcon from '../assets/Vectors/icons8-home-100.png';
import carIcon from '../assets/Vectors/icons8-car-100.png';
import ccIcon from '../assets/Vectors/icons8-coins-100.png';
import termIcon from '../assets/Vectors/icons8-loan-64.png';
import machineryIcon from '../assets/Vectors/icons8-settings-100.png';

/**
 * Navigation Configuration - Single Source of Truth
 */

export const loansDropdownItems = [
  { 
    name: "Business Loan", 
    slug: "/business-loan-coimbatore",
    icon: businessIcon
  },
  { 
    name: "Mortgage Loan", 
    slug: "/mortgage-loan-coimbatore",
    icon: mortgageIcon
  },
  { 
    name: "Car Loan", 
    slug: "/car-loan-coimbatore",
    icon: carIcon
  },
  { 
    name: "CC Loan", 
    slug: "/cc-loan-coimbatore",
    icon: ccIcon
  },
  { 
    name: "Term Loan", 
    slug: "/term-loan-coimbatore",
    icon: termIcon
  },
  { 
    name: "Machinery Loan", 
    slug: "/machinery-loan-coimbatore",
    icon: machineryIcon
  }
];

export const mainNavLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about-us" },
  { 
    name: "Loans", 
    path: "#", 
    hasDropdown: true,
    dropdownItems: loansDropdownItems 
  },
  { name: "Contact", path: "/contact" }
];

export const footerQuickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "All Loan Products", path: "/#loans-products" },
  { name: "EMI Calculator", path: "/emi-calculator" },
  { name: "FAQs", path: "/faqs" },
  { name: "Banking Partners", path: "/banking-nbfc-partners" },
  { name: "Contact Us", path: "/contact" }
];

export const footerLegalLinks = [
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms & Conditions", path: "/terms-and-conditions" }
];
