import React from 'react';
import { FiPhoneCall, FiArrowUpRight, FiMapPin, FiClock, FiShield, FiCheckCircle, FiPercent } from 'react-icons/fi';
import { siteConfig } from '../../config/siteConfig';
import { themeConfig } from '../../config/themeconfig';
import OutlineBtn from '../UI/btns/OutlineBtn';
import OrangeRaysAccent from '../UI/OrangeRaysAccent';
import aboutUsImg from '../../assets/Vectors/about-us.png';
import msgIconImg from '../../assets/Vectors/msg-icon.png';

/**
 * AboutHeroSection
 * High-impact hero section for About Us page with identical generous dimensions,
 * padding, and layout matching LoanHeroSection (pt-8 pb-14 sm:pt-12 sm:pb-20 lg:py-20).
 */
export default function AboutHeroSection() {
  return (
    <section 
      className="relative bg-white pt-8 pb-14 sm:pt-12 sm:pb-20 lg:py-20 overflow-hidden border-b border-slate-100"
      style={{ fontFamily: themeConfig.typography.fontFamily }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Content (6 cols on lg) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* 1. Tagline with Loan Spark SVG Icon */}
            <div className="flex items-center gap-2.5">
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
              <span 
                className="text-sm font-medium tracking-wide uppercase"
                style={{ color: themeConfig.colors.textHeading }}
              >
                ABOUT BHARATH FINSERV
              </span>
            </div>

            {/* 2. Main H1 Heading */}
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-medium leading-[1.2] tracking-tight"
              style={{ color: themeConfig.colors.textHeading }}
            >
              Your Dedicated Loan Advisory & Facilitation Partner
            </h1>

            {/* 3. Subtitle Description */}
            <p 
              className="text-base sm:text-[18px] font-light leading-relaxed max-w-xl text-[#666666]"
            >
              Headquartered in Coimbatore and serving clients nationwide, we bridge borrowers with 16+ top banks & NBFCs through doorstep documentation, expert credit appraisal, and zero upfront consultation fees.
            </p>

            {/* 4. Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              {/* Primary Filled CTA with Orange Rays */}
              <div className="relative inline-flex items-center">
                <OrangeRaysAccent />
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 relative z-0"
                  style={{ backgroundColor: themeConfig.colors.primary }}
                >
                  <span>Apply for Loan Now</span>
                  <FiArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Secondary Outline CTA with Cursor-aware Radial Expansion */}
              <OutlineBtn
                href={`tel:${siteConfig.phoneRaw}`}
                icon={FiPhoneCall}
                endIcon={FiArrowUpRight}
                className="py-3.5 px-6"
              >
                Call: {siteConfig.phoneDisplay}
              </OutlineBtn>
            </div>

            {/* 5. Info Bar (NAP & Timings consistency for Local SEO) */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <FiMapPin className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{siteConfig.address.full}</span>
              </div>
              <div className="hidden sm:block text-slate-300">•</div>
              <div className="flex items-center gap-2 shrink-0">
                <FiClock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{siteConfig.timings}</span>
              </div>
            </div>

            {/* 6. Trust Badges Strip */}
            <div className="pt-3 grid grid-cols-3 gap-4 border-t border-slate-100 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <FiShield className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-medium">16+ Banks & NBFCs</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium">Zero Upfront Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <FiPercent className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-medium">Transparent Guidance</span>
              </div>
            </div>

            {/* 7. Floating Message Icon below Trust Badges (Desktop only, hidden on mobile) */}
            <div className="hidden lg:block pt-2">
              <img
                src={msgIconImg}
                alt="Consultation Chat"
                draggable={false}
                className="w-14 sm:w-16 h-auto object-contain select-none pointer-events-none animate-horizontal-float opacity-80"
              />
            </div>

          </div>

          {/* Right Column: Proportional & Neat About Us Illustration */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end items-center -mt-8 sm:-mt-8 lg:-mt-16 xl:-mt-22">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[390px] xl:max-w-[420px] flex justify-center items-center">
              <img
                src={aboutUsImg}
                alt="About Bharath Finserv Loan Consultation Across India"
                draggable={false}
                className="w-full h-auto max-h-[300px] sm:max-h-[340px] md:max-h-[370px] lg:max-h-[390px] object-contain select-none pointer-events-none drop-shadow-sm"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
