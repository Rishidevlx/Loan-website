import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheck, FiArrowUpRight, FiLayers, FiFileText, FiTrendingUp, FiShield } from 'react-icons/fi';
import { themeConfig } from '../../config/themeconfig';
import OutlineBtn from '../UI/btns/OutlineBtn';
import ScrollReveal from '../common/ScrollReveal';
import dollarCoinImg from '../../assets/Vectors/icons8-dollar-coin-100.png';
import whyUsImg from '../../assets/Vectors/why-us.png';

/**
 * AboutWhyChooseUsSection
 * Inspired by the FINVIEW reference layout (2-Column layout):
 * - Left Column: Clean Placeholder Graphic until user provides the final illustration
 * - Right Column: "Why Choose Us" eyebrow, heading, 2-line subtitle, 2x2 checklist, and CTA button
 * - Top-Right Corner: 3D spinning dollar coin icon (icons8-dollar-coin-100.png)
 * - Background: #EDF0EC (Soft Gray) alternating with Pure White Hero
 */
export default function AboutWhyChooseUsSection() {
  const highlights = [
    'Doorstep Documentation',
    'Expert Guidance & Insights',
    'All Bank & NBFC Comparison',
    '100% Transparent Terms',
  ];

  return (
    <section 
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ 
        backgroundColor: themeConfig.colors.sectionProductsBg, // #EDF0EC
        fontFamily: themeConfig.typography.fontFamily 
      }}
    >
      {/* Scoped CSS for 3D Spinning Coin Animation */}
      <style>{`
        @keyframes spin3DCoinAbout {
          0% {
            transform: perspective(600px) rotateY(0deg);
          }
          100% {
            transform: perspective(600px) rotateY(360deg);
          }
        }
        .animate-coin-spin-3d-about {
          animation: spin3DCoinAbout 4.5s linear infinite;
          transform-style: preserve-3d;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-coin-spin-3d-about {
            animation: none !important;
          }
        }
      `}</style>

      {/* Decorative 3D Spinning Dollar Coin in Right Top Corner */}
      <div 
        className="absolute top-4 right-4 sm:top-6 sm:right-8 lg:top-8 lg:right-12 pointer-events-none select-none z-10 opacity-85 hover:opacity-100 transition-opacity"
        aria-hidden="true"
      >
        <img 
          src={dollarCoinImg} 
          alt="Spinning Dollar Coin" 
          draggable={false}
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain drop-shadow-sm select-none animate-coin-spin-3d-about"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Why Choose Us Illustration                  */}
          {/* ======================================================== */}
          <ScrollReveal variant="fade-right" className="lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full max-w-lg flex justify-center items-center">
              <img 
                src={whyUsImg}
                alt="Why Choose Bharath Finserv"
                draggable={false}
                className="w-full h-auto max-h-[380px] sm:max-h-[420px] object-contain select-none pointer-events-none drop-shadow-sm"
              />
            </div>
          </ScrollReveal>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: FINVIEW Content in Brand Style             */}
          {/* ======================================================== */}
          <ScrollReveal variant="fade-left" delay={150} className="lg:col-span-6 space-y-6">
            
            {/* 1. Eyebrow Tagline with Spark SVG */}
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
                WHY CHOOSE US
              </span>
            </div>

            {/* 2. Main H2 Heading */}
            <h2 
              className="text-2xl sm:text-3xl md:text-[34px] font-normal tracking-tight leading-tight"
              style={{ color: themeConfig.colors.textHeading }}
            >
              Experience Excellence in Loan Advisory & Comparison
            </h2>

            {/* 3. Sub-text Description */}
            <p 
              className="text-sm sm:text-base font-light leading-relaxed text-[#666666] max-w-xl"
            >
              Our dedicated team of banking specialists conducts thorough eligibility assessments and risk profiling to provide you with comprehensive, unbiased access across all premier financial institutions.
            </p>

            {/* 4. 2x2 Feature Checklist Grid (Simple & Neat matching FINVIEW reference) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  {/* Green Tick Icon Badge */}
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 shadow-2xs">
                    <FiCheck className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span className="text-xs sm:text-[13px] md:text-sm font-medium text-[#262626]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* 5. Contact Us Button */}
            <div className="pt-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 select-none cursor-pointer"
              >
                <span>Contact Us</span>
                <FiArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
