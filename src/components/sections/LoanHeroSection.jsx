import React from 'react';
import { FiArrowUpRight, FiZap, FiFileText, FiShield, FiPhoneCall } from 'react-icons/fi';
import { themeConfig } from '../../config/themeconfig';
import { siteConfig } from '../../config/siteConfig';
import OutlineBtn from '../UI/btns/OutlineBtn';
import msgIconImg from '../../assets/Vectors/msg-icon.png';

/**
 * Reusable Loan Hero Section Component
 * Styled with exact star icon badge and buttons from the Home page hero section.
 */
export default function LoanHeroSection({ loanData }) {
  if (!loanData) return null;

  const {
    name,
    badge,
    headline,
    subtitle,
    image,
    primaryCtaText,
    secondaryCtaText,
    highlights = []
  } = loanData;

  const contactUrl = `/contact?loan=${encodeURIComponent(name)}`;

  // Icon mapping helper for highlights
  const renderHighlightIcon = (type) => {
    switch (type) {
      case 'zap':
        return <FiZap className="w-4 h-4 text-blue-600 shrink-0" />;
      case 'file':
        return <FiFileText className="w-4 h-4 text-blue-600 shrink-0" />;
      case 'bank':
      default:
        return <FiShield className="w-4 h-4 text-blue-600 shrink-0" />;
    }
  };

  return (
    <section 
      className="relative bg-white pt-8 pb-14 sm:pt-12 sm:pb-20 lg:py-20 overflow-hidden border-b border-slate-100"
      style={{ fontFamily: themeConfig.typography.fontFamily }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Loan Content & Actions                      */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* 1. Tagline with Loan Spark Star SVG Icon (Identical to Homepage Hero) */}
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <svg 
                className="w-5 h-5 text-blue-600 shrink-0" 
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
              <span className="text-sm font-semibold tracking-wide text-slate-800 uppercase">
                {badge || `SPECIAL OFFERS • ${name.toUpperCase()}`}
              </span>
            </div>

            {/* 2. Main Hero Headline */}
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-semibold tracking-tight text-[#222E48] leading-[1.18] mb-4 sm:mb-6"
              style={{ color: themeConfig.colors.textHeading }}
            >
              {headline}
            </h1>

            {/* 3. Subtitle Description */}
            <p 
              className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8 max-w-2xl font-normal"
              style={{ color: themeConfig.colors.textBody }}
            >
              {subtitle}
            </p>

            {/* 4. Action Buttons (Identical to Homepage Hero Section) */}
            <div className="flex flex-wrap items-center gap-4 mb-8 sm:mb-10">
              {/* Primary Filled CTA */}
              <a
                href={contactUrl}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                style={{ backgroundColor: themeConfig.colors.primary }}
              >
                <span>{primaryCtaText || `Apply for ${name}`}</span>
                <FiArrowUpRight className="w-4 h-4" />
              </a>

              {/* Secondary Outline CTA with Cursor-aware Radial Expansion (Direct Call matching Homepage) */}
              <OutlineBtn
                href={`tel:${siteConfig.phoneRaw}`}
                icon={FiPhoneCall}
                endIcon={FiArrowUpRight}
                className="py-3.5 px-6"
              >
                Call: {siteConfig.phoneDisplay}
              </OutlineBtn>
            </div>

            {/* 5. Trust / Feature Highlights Row (Clean React Icons & 16+ Banks) */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-y-3 gap-x-6 sm:gap-x-8 text-xs sm:text-sm text-slate-700">
              {highlights.length > 0 ? (
                highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 font-medium">
                    {renderHighlightIcon(item.iconType)}
                    <span>{item.text}</span>
                  </div>
                ))
              ) : (
                <>
                  <div className="flex items-center gap-2 font-medium">
                    <FiZap className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Fast 24-48 Hr Disbursal</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <FiFileText className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Minimal Documentation</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <FiShield className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>16+ Banking Partners</span>
                  </div>
                </>
              )}
            </div>

            {/* 6. Floating Message Icon with Smooth Left-Right Animation (Matching Homepage) */}
            <div className="hidden lg:block pt-4">
              <img
                src={msgIconImg}
                alt="Consultation Chat"
                draggable={false}
                className="w-14 sm:w-16 h-auto object-contain select-none pointer-events-none animate-horizontal-float opacity-80"
              />
            </div>

          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Illustration / Image (No hover, non-draggable) */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] lg:max-w-[540px]">
              
              {/* Subtle Ambient Glow Behind Image */}
              <div 
                className="absolute inset-0 bg-blue-50/50 rounded-3xl filter blur-2xl transform scale-95 -z-10"
                aria-hidden="true"
              />

              {/* Main Illustration Image - Hover disabled & Drag disabled */}
              <img 
                src={image} 
                alt={`${name} illustration`}
                draggable="false"
                onDragStart={(e) => e.preventDefault()}
                className="w-full h-auto max-h-[440px] object-contain drop-shadow-md select-none pointer-events-auto"
                style={{
                  userSelect: 'none',
                  WebkitUserDrag: 'none',
                  WebkitTouchCallout: 'none'
                }}
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
