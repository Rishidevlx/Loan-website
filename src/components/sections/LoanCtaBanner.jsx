import React from 'react';
import { FiPhoneCall, FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import { themeConfig } from '../../config/themeconfig';
import { siteConfig } from '../../config/siteConfig';
import OutlineBtn from '../UI/btns/OutlineBtn';

/**
 * Rectangular CTA Banner Card
 * Positioned on all loan detail pages right above the FAQ section.
 * Features:
 * - #EDF0EC background with rounded-3xl borders providing a clean visual break between White sections.
 * - Left side: Clean high-impact headline + Option 2 buttons (Solid Blue Primary + Cursor-aware OutlineBtn).
 * - Right side: Static compact loan hero image ("kutty ah") with soft glow.
 */
export default function LoanCtaBanner({ loan }) {
  const loanName = loan?.name || 'Loan';
  const loanImage = loan?.image;

  return (
    <section 
      className="py-10 md:py-16 bg-white relative overflow-hidden"
      style={{ fontFamily: themeConfig.typography.fontFamily }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rectangular Banner Card (#EDF0EC with subtle border & shadow) */}
        <div 
          className="relative rounded-2xl sm:rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs"
          style={{ backgroundColor: themeConfig.colors.sectionProductsBg }} // #EDF0EC
        >
          {/* Subtle Ambient Decorative Glows */}
          <div 
            className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl pointer-events-none"
            aria-hidden="true" 
          />
          <div 
            className="absolute -bottom-16 left-1/3 w-64 h-64 rounded-full bg-blue-300/10 blur-3xl pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* ======================================================== */}
            {/* LEFT COLUMN: Clean Headline & Action Buttons             */}
            {/* ======================================================== */}
            <div className="w-full lg:max-w-2xl text-center lg:text-left">
              
              {/* Main Headline */}
              <h3 
                className="text-2xl sm:text-3xl md:text-[28px] lg:text-[30px] font-normal tracking-tight leading-tight mb-6"
                style={{ color: themeConfig.colors.textHeading }}
              >
                Ready to Secure Your {loanName} Across India?
              </h3>

              {/* Action Buttons (Option 2: Primary Solid Blue + OutlineBtn) */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                
                {/* 1. Primary Solid Blue Button */}
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                >
                  <span>Apply for {loanName}</span>
                  <FiArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>

                {/* 2. Direct Call OutlineBtn with Mouse-aware Radial Expand */}
                <OutlineBtn
                  href={`tel:${siteConfig.phoneRaw}`}
                  icon={FiPhoneCall}
                  endIcon={FiArrowUpRight}
                >
                  Direct Call
                </OutlineBtn>

              </div>
            </div>

            {/* ======================================================== */}
            {/* RIGHT COLUMN: Static Compact Hero Image ("Kutty ah")     */}
            {/* ======================================================== */}
            {loanImage && (
              <div className="relative shrink-0 flex items-center justify-center">
                {/* Subtle soft backdrop halo */}
                <div 
                  className="absolute w-36 h-36 sm:w-44 sm:h-44 bg-blue-200/40 rounded-full blur-2xl -z-10 pointer-events-none" 
                  aria-hidden="true"
                />

                {/* Compact Loan Image (Clean, Static, Zero Animation) */}
                <img 
                  src={loanImage} 
                  alt={loanName} 
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                  className="w-44 sm:w-52 md:w-60 lg:w-64 max-h-36 sm:max-h-44 object-contain drop-shadow-sm select-none pointer-events-none"
                />
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
