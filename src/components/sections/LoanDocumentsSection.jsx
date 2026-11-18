import React, { useState, useRef } from 'react';
import { FiCheck, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { themeConfig } from '../../config/themeconfig';
import ScrollReveal from '../common/ScrollReveal';

// User-specified 3 entity icons
import solePropIcon from '../../assets/loans/loan-colun-3.png';
import partnershipIcon from '../../assets/loans/icons8-handshake-96.png';
import pvtLtdIcon from '../../assets/Vectors/icons8-work-100.png';

/**
 * Documents Checklist by Business Entity Type
 * 1. Sole Proprietorship
 * 2. Partnership Company
 * 3. Private Limited (Pvt Ltd) Company
 */
const documentCategories = [
  {
    id: 'sole',
    entityType: 'Sole Proprietorship',
    iconImage: solePropIcon,
    summary: 'Simple documentation for proprietorship firms, retail traders, and self-employed professionals.',
    primaryDocs: [
      'PAN Card & Aadhaar Card (Proprietor)',
      'GST Registration Copy & MSME (Udyam)',
      'Last 12 Months Operative Bank Statement',
      'Last 2 Years ITR Papers with Computation',
    ],
    remainingDocs: [
      'Property Tax Receipt (Residential / Business)',
      'Company Registration Documents',
      'LEI Certificate (For loan exposure > ₹5 Cr)',
      'Current Year GST Return Filings (3B & 1)',
      'Existing CC Sanction Letter (if applicable)',
      'Other Running Loan Sanction Letters',
    ],
  },
  {
    id: 'partnership',
    entityType: 'Partnership Company',
    iconImage: partnershipIcon,
    summary: 'Standard documentation for registered partnership firms with two or more managing partners.',
    primaryDocs: [
      'Registered Partnership Deed & Firm PAN Card',
      'All Partners PAN & Aadhaar Cards',
      'GST Registration Certificate & MSME Copy',
      'Last 2 Years Audited ITR & Financial Statements',
    ],
    remainingDocs: [
      'Last 12 Months Firm Current Account Statement',
      'Partners Property Tax Receipts',
      'LEI Certificate (For large commercial exposures)',
      'Current Year GST Returns (3B & 1)',
      'Existing CC Facility Sanction Letter',
      'Other Active Loan Sanction Letters',
    ],
  },
  {
    id: 'pvtltd',
    entityType: 'Pvt Ltd Company',
    iconImage: pvtLtdIcon,
    summary: 'Comprehensive compliance paperwork for Private Limited companies and registered corporate entities.',
    primaryDocs: [
      'Certificate of Incorporation & Company PAN',
      'MOA & AOA (Memorandum & Articles of Association)',
      'All Directors PAN & Aadhaar Cards',
      'Last 2 Years Audited Balance Sheet & P&L',
    ],
    remainingDocs: [
      'Last 12 Months Operative Current Bank Statement',
      'Company GST Certificate & MSME Certificate',
      'Directors Property Tax Receipts',
      'LEI Certificate (Corporate Banking Exposure)',
      'Current Year GST Returns',
      'Existing CC & Term Loan Sanction Letters',
    ],
  },
];

/**
 * Individual Entity Card Component
 * Features:
 * - Dynamic cursor-aware radial expanding blue ripple matching Homepage "Our Loan Products".
 * - Fully independent expansion (opening one card does not stretch or alter remaining cards).
 * - All ticks (Core & Supporting) in green.
 * - Black text color for "View Full List" button + bouncing arrow.
 */
function DocumentEntityCard({ item, isExpanded, onToggle }) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setCoords({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
    setIsHovered(true);
  };

  const handleMouseLeave = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setCoords({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs flex flex-col justify-between self-start w-full transition-all duration-300"
      style={{
        boxShadow: isHovered ? '0 16px 36px rgba(37, 99, 235, 0.20)' : 'none',
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      {/* Dynamic Cursor-Aware Expanding Radial Circle (Brand Blue) - Calibrated ease-in spread & smooth ease-out retract */}
      <span
        className="absolute rounded-full pointer-events-none transition-transform"
        style={{
          left: `${coords.x}px`,
          top: `${coords.y}px`,
          width: '2000px',
          height: '2000px',
          backgroundColor: themeConfig.colors.primary,
          transform: isHovered 
            ? 'translate(-50%, -50%) scale(1)' 
            : 'translate(-50%, -50%) scale(0)',
          willChange: 'transform',
          transitionDuration: isHovered ? '800ms' : '600ms',
          transitionTimingFunction: isHovered ? 'ease-in' : 'ease-out',
        }}
      />

      {/* Card Content layer above the expanding background */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          {/* Entity Icon Container */}
          <div 
            className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 mb-5 transition-all duration-300"
            style={{
              backgroundColor: isHovered ? '#FFFFFF' : themeConfig.colors.sectionProductsBg,
              border: isHovered ? '1px solid #FFFFFF' : '1px solid rgba(0, 0, 0, 0.05)',
            }}
          >
            <img 
              src={item.iconImage} 
              alt={item.entityType}
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain select-none pointer-events-none transition-transform duration-300"
              style={{
                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
              }}
            />
          </div>

          {/* Entity Title */}
          <h3 
            className="text-lg sm:text-xl font-normal mb-2 tracking-tight transition-colors duration-500"
            style={{ 
              color: isHovered ? '#FFFFFF' : themeConfig.colors.textHeading 
            }}
          >
            {item.entityType}
          </h3>

          {/* Short Subtitle */}
          <p 
            className="text-xs sm:text-sm font-light leading-relaxed mb-5 transition-colors duration-500"
            style={{ 
              color: isHovered ? 'rgba(255, 255, 255, 0.9)' : '#666666' 
            }}
          >
            {item.summary}
          </p>

          {/* Primary Checklist (4 key items always visible) */}
          <div className="space-y-2.5 mb-4">
            <p 
              className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-500 ${
                isHovered ? 'text-blue-100' : 'text-slate-400'
              }`}
            >
              Core Checklist:
            </p>
            {item.primaryDocs.map((doc, dIdx) => (
              <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px]">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <FiCheck className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span 
                  className={`font-normal leading-snug transition-colors duration-500 ${
                    isHovered ? 'text-white' : 'text-slate-700'
                  }`}
                >
                  {doc}
                </span>
              </div>
            ))}
          </div>

          {/* Expandable Remaining Documents (Self-contained within this card only) */}
          <div 
            className={`space-y-2.5 overflow-hidden transition-all duration-300 ease-in-out ${
              isExpanded 
                ? `max-h-96 opacity-100 pt-2 border-t mb-4 ${isHovered ? 'border-blue-400/40' : 'border-slate-100'}` 
                : 'max-h-0 opacity-0'
            }`}
          >
            <p 
              className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-500 ${
                isHovered ? 'text-blue-100' : 'text-slate-400'
              }`}
            >
              Supporting Documents:
            </p>
            {item.remainingDocs.map((doc, rIdx) => (
              <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px]">
                {/* Green tick for supporting documents as requested */}
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <FiCheck className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span 
                  className={`font-light leading-snug transition-colors duration-500 ${
                    isHovered ? 'text-white/95' : 'text-slate-600'
                  }`}
                >
                  {doc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Button (Black text color #262626 + Bouncing down arrow) */}
        <div className="pt-3">
          <button
            type="button"
            onClick={onToggle}
            className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-[13px] font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer focus:outline-none ${
              isHovered
                ? 'bg-white text-[#262626] shadow-sm hover:bg-slate-50'
                : 'bg-[#EDF0EC] text-[#262626] hover:bg-slate-200/80'
            }`}
          >
            <span className="text-[#262626] font-medium">
              {isExpanded 
                ? 'Show Less' 
                : `View Full List (+${item.remainingDocs.length} more)`
              }
            </span>
            {isExpanded ? (
              <FiChevronUp className="w-4 h-4 text-[#262626] shrink-0" />
            ) : (
              <FiChevronDown className="w-4 h-4 text-[#262626] animate-bounce shrink-0" />
            )}
          </button>
        </div>

      </div>
    </div>
  );
}

/**
 * Standalone 3-Column Entity Document Section
 */
export default function LoanDocumentsSection({ loan }) {
  const loanName = loan?.name || 'Loan';

  // Manage individual card expansion state independently
  const [expandedCards, setExpandedCards] = useState({
    sole: false,
    partnership: false,
    pvtltd: false,
  });

  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section 
      className="py-16 md:py-20 relative overflow-hidden"
      style={{ 
        backgroundColor: themeConfig.colors.sectionProductsBg, // #EDF0EC
        fontFamily: themeConfig.typography.fontFamily 
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* ======================================================== */}
        {/* SECTION HEADER                                           */}
        {/* ======================================================== */}
        <ScrollReveal variant="fade-up" className="space-y-3 mb-10 md:mb-14">
          
          {/* Eyebrow Tagline with Spark Star SVG */}
          <div className="inline-flex items-center gap-2">
            <svg 
              className="w-4 h-4 text-blue-600 shrink-0" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path 
                d="M12 2L13.8 8.2C14.3 9.7 15.5 10.9 17 11.4L23.2 13.2L17 15C15.5 15.5 14.3 16.7 13.8 18.2L12 24.4L10.2 18.2C9.7 16.7 8.5 15.5 7 15L0.8 13.2L7 11.4C8.5 10.9 9.7 9.7 10.2 8.2L12 2Z" 
                fill="currentColor"
              />
            </svg>
            <span 
              className="text-xs sm:text-sm font-medium tracking-wider uppercase"
              style={{ color: themeConfig.colors.textHeading }}
            >
              DOCUMENTS REQUIRED BY BUSINESS TYPE
            </span>
          </div>

          {/* Main Section Heading */}
          <h2 
            className="text-2xl sm:text-3xl md:text-[28px] font-normal tracking-tight leading-tight max-w-3xl"
            style={{ color: themeConfig.colors.textHeading }}
          >
            Required Documents for Your {loanName} Application
          </h2>

          {/* Sub-heading calibrated to concise 2 lines */}
          <p 
            className="text-base sm:text-[18px] font-light leading-relaxed max-w-2xl text-[#666666]"
          >
            Simple paperwork requirements tailored to your business entity structure, with doorstep document verification across India.
          </p>

        </ScrollReveal>

        {/* ======================================================== */}
        {/* 3-COLUMN ENTITY CHECKLIST GRID (Independent Card Heights) */}
        {/* ======================================================== */}
        <ScrollReveal variant="fade-up" delay={150} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {documentCategories.map((item) => (
            <DocumentEntityCard
              key={item.id}
              item={item}
              isExpanded={expandedCards[item.id]}
              onToggle={() => toggleExpand(item.id)}
            />
          ))}
        </ScrollReveal>

      </div>
    </section>
  );
}
