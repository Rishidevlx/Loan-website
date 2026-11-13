import { FiBriefcase, FiHome, FiCreditCard, FiTrendingUp, FiCpu } from 'react-icons/fi';
import { FaCarSide } from 'react-icons/fa6';

/**
 * Navigation Configuration - Single Source of Truth
 */

export const loansDropdownItems = [
  { 
    name: "Business Loan", 
    slug: "/business-loan-coimbatore",
    icon: FiBriefcase
  },
  { 
    name: "Mortgage Loan", 
    slug: "/mortgage-loan-coimbatore",
    icon: FiHome
  },
  { 
    name: "Car Loan", 
    slug: "/car-loan-coimbatore",
    icon: FaCarSide
  },
  { 
    name: "CC Loan", 
    slug: "/cc-loan-coimbatore",
    icon: FiCreditCard
  },
  { 
    name: "Term Loan", 
    slug: "/term-loan-coimbatore",
    icon: FiTrendingUp
  },
  { 
    name: "Machinery Loan", 
    slug: "/machinery-loan-coimbatore",
    icon: FiCpu
  }
];

export const mainNavLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about-us" },
  { 
    name: "Loans", 
    path: "/loans", 
    hasDropdown: true,
    dropdownItems: loansDropdownItems 
  },
  { name: "Contact", path: "/contact" }
];

export const footerQuickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "All Loan Products", path: "/loans" },
  { name: "EMI Calculator", path: "/emi-calculator" },
  { name: "FAQs", path: "/faqs" },
  { name: "Banking Partners", path: "/banking-nbfc-partners" },
  { name: "Contact Us", path: "/contact" }
];

export const footerLegalLinks = [
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms & Conditions", path: "/terms-and-conditions" },
  { name: "Disclaimer", path: "/disclaimer" }
];
