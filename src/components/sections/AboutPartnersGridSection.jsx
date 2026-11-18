import React from 'react';
import { themeConfig } from '../../config/themeconfig';
import { allPartners } from '../../data/partnersData';
import ScrollReveal from '../common/ScrollReveal';

/**
 * AboutPartnersGridSection
 * Displays banking & NBFC partner logos in a clean, high-impact grid
 * on Pure White background (inspired by Digiloans reference screenshot).
 */
export default function AboutPartnersGridSection() {
  return (
    <section 
      className="pt-8 sm:pt-10 md:pt-12 pb-16 md:pb-24 bg-white relative overflow-hidden"
      style={{ fontFamily: themeConfig.typography.fontFamily }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ======================================================== */}
        {/* SECTION HEADER                                           */}
        {/* ======================================================== */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          
          {/* Eyebrow Tagline with Spark Icon */}
          <div className="inline-flex items-center gap-2 mb-3">
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
              OUR LENDING PARTNERS
            </span>
          </div>

          {/* Main H2 Heading */}
          <h2 
            className="text-2xl sm:text-3xl md:text-[34px] font-normal tracking-tight leading-tight mb-3"
            style={{ color: themeConfig.colors.textHeading }}
          >
            Direct Channel Partners with All Major Financial Institutions
          </h2>

          {/* Subtitle */}
          <p 
            className="text-sm sm:text-base font-light leading-relaxed text-[#666666] max-w-2xl mx-auto"
          >
            Direct tie-ups with India's premier scheduled commercial banks and RBI-registered NBFCs ensuring competitive interest rates, maximum loan limits, and fast doorstep disbursals.
          </p>
        </ScrollReveal>

        {/* ======================================================== */}
        {/* PARTNERS LOGO GRID (Matching DIGILOANS Reference)        */}
        {/* ======================================================== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
          {allPartners.map((partner, idx) => (
            <ScrollReveal 
              key={partner.id}
              variant="fade-up"
              delay={Math.min(idx * 40, 400)}
              className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center justify-center min-h-[96px] sm:min-h-[110px] group cursor-pointer"
            >
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`}
                draggable={false}
                className="max-h-10 sm:max-h-12 w-auto max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-105 select-none"
              />
            </ScrollReveal>
          ))}
        </div>

        {/* ======================================================== */}
        {/* AND MORE PARTNERS (Clean Heading Font, Zero Background)  */}
        {/* ======================================================== */}
        <div className="mt-10 sm:mt-14 text-center">
          <p 
            className="text-xl sm:text-2xl font-normal tracking-tight"
            style={{ color: themeConfig.colors.textHeading }}
          >
            ...and more
          </p>
        </div>

      </div>
    </section>
  );
}
