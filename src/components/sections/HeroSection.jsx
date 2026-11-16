import React from 'react';
import { FiPhoneCall, FiArrowUpRight, FiMapPin, FiClock, FiShield, FiCheckCircle, FiPercent } from 'react-icons/fi';
import { siteConfig } from '../../config/siteConfig';
import { themeConfig } from '../../config/themeconfig';
import OutlineBtn from '../UI/btns/OutlineBtn';
import heroImg from '../../assets/Vectors/Hero-sections.png';
import moneyFallImg from '../../assets/Vectors/Money-fall.png';
import msgIconImg from '../../assets/Vectors/msg-icon.png';

export default function HeroSection() {
  return (
    <section 
      className="pt-8 pb-12 sm:pt-12 sm:pb-16 lg:py-20 bg-white relative overflow-hidden"
      style={{ fontFamily: themeConfig.typography.fontFamily }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Official Content (6 cols on lg) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* 1. Tagline with Loan Spark SVG Icon */}
            <div className="flex items-center gap-2.5">
              <svg 
                className="w-5 h-5 text-blue-600 shrink-0" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
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
                {siteConfig.tagline}
              </span>
            </div>

            {/* 2. Main H1 Heading (49.2px, weight 500, color #262626) */}
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[49.2px] font-medium leading-[1.2] tracking-tight"
              style={{ color: themeConfig.colors.textHeading }}
            >
              Your Trusted Loan Partner in Coimbatore
            </h1>

            {/* 3. Sub-text from Official Requirement Doc (18.45px, weight 300, color #262626) */}
            <p 
              className="text-base sm:text-[18.45px] font-light leading-relaxed max-w-xl"
              style={{ color: themeConfig.colors.textBody }}
            >
              Business, property, car and personal loans from 16+ leading banks and NBFCs. 
              One application, honest guidance, transparent process.
            </p>

            {/* 4. Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              {/* Primary Filled CTA */}
              <a
                href="/apply-now"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                style={{ backgroundColor: themeConfig.colors.primary }}
              >
                <span>Apply for Loan Now</span>
                <FiArrowUpRight className="w-4 h-4" />
              </a>

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

          {/* Right Column: Enlarged Hero Illustration with Enlarged Floating Money (6 cols on lg) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-lg sm:max-w-xl lg:max-w-2xl flex justify-center items-center">
              
              {/* Floating Money 1: Top-Left (Enlarged size, smooth horizontal swing wave animation) */}
              <img
                src={moneyFallImg}
                alt="Floating Currency"
                draggable={false}
                className="absolute -top-6 -left-6 sm:-top-8 sm:-left-10 lg:-top-10 lg:-left-12 w-24 sm:w-36 lg:w-44 h-auto object-contain select-none pointer-events-none z-10 animate-money-swing drop-shadow-lg"
              />

              {/* Main Hero Vector Illustration (Enlarged scale, zero hover effects) */}
              <img
                src={heroImg}
                alt="Bharath Finserv Loan Consultation in Coimbatore"
                draggable={false}
                className="w-full h-auto object-contain select-none pointer-events-none scale-105 sm:scale-110 lg:scale-115 origin-center"
              />

              {/* Floating Money 2: Bottom-Right (Enlarged size, smooth horizontal swing wave animation) */}
              <img
                src={moneyFallImg}
                alt="Floating Currency"
                draggable={false}
                className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 lg:-bottom-10 lg:-right-10 w-24 sm:w-36 lg:w-44 h-auto object-contain select-none pointer-events-none z-10 animate-money-swing-alt drop-shadow-lg"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
