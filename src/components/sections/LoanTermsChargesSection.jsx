import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FiArrowUpRight, 
  FiInfo, 
  FiCheck
} from 'react-icons/fi';
import { themeConfig } from '../../config/themeconfig';
import { getLoanTerms } from '../../data/loanTermsData';
import OrangeRaysAccent from '../UI/OrangeRaysAccent';
import ScrollReveal from '../common/ScrollReveal';

// User-specified 3 icons from assets/Vectors
import coinsIcon from '../../assets/Vectors/icons8-coins-100.png';
import interestIcon from '../../assets/Vectors/icons8-interest-rate-96.png';
import hourglassIcon from '../../assets/Vectors/icons8-hourglass-100.png';

/**
 * Loan Terms & Associated Charges Section
 * Designed with a 2-Column Asymmetric layout inspired by the FINVIEW reference:
 * - Pure White Background (#FFFFFF)
 * - Left Column: Clean heading, description, 4-item charges breakdown card & CTA
 * - Right Column: 3 Stacked horizontal rounded cards (Amount, ROI, Tenure)
 */
export default function LoanTermsChargesSection({ loan }) {
  const loanTerms = getLoanTerms(loan);
  const loanName = loan?.name || loanTerms.loanName || 'Loan';

  return (
    <section 
      className="py-16 md:py-24 bg-white relative overflow-hidden"
      style={{ fontFamily: themeConfig.typography.fontFamily }}
    >
      {/* Scoped CSS for minimal, smooth, slow left-right floating drift */}
      <style>{`
        @keyframes floatSlowRight {
          0%, 100% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(8px);
          }
        }
        @keyframes floatSlowLeft {
          0%, 100% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(-8px);
          }
        }
        .animate-float-slow-r1 {
          animation: floatSlowRight 6s ease-in-out infinite;
          will-change: transform;
        }
        .animate-float-slow-l {
          animation: floatSlowLeft 6.5s ease-in-out 0.4s infinite;
          will-change: transform;
        }
        .animate-float-slow-r2 {
          animation: floatSlowRight 7s ease-in-out 0.8s infinite;
          will-change: transform;
        }
        @media (hover: hover) {
          .animate-float-slow-r1:hover,
          .animate-float-slow-l:hover,
          .animate-float-slow-r2:hover {
            animation-play-state: paused;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-float-slow-r1,
          .animate-float-slow-l,
          .animate-float-slow-r2 {
            animation: none !important;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Headings, Charges Breakdown & CTA Action    */}
          {/* ======================================================== */}
          <ScrollReveal variant="fade-right" className="lg:col-span-5 flex flex-col justify-between">
            
            {/* 1. Eyebrow Tagline with Spark Star SVG (Matching LoanDocumentsSection) */}
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
                TRANSPARENT TERMS & CHARGES
              </span>
            </div>

            {/* 2. Main Heading (Matching Documents Section font style and size) */}
            <h2 
              className="text-2xl sm:text-3xl md:text-[28px] font-normal tracking-tight leading-tight mb-3"
              style={{ color: themeConfig.colors.textHeading }}
            >
              Clear Loan Limits & Charges
            </h2>

            {/* 3. Sub-text Description (2 Lines max) */}
            <p className="text-sm sm:text-base font-light leading-relaxed text-[#666666] mb-6 max-w-lg">
              Transparent loan terms with zero hidden fees. Compare commercial rates and fee parameters across all partner lenders.
            </p>

            {/* 4. Applicable Charges (Simple clean checklist with green ticks, no colon split) */}
            <div className="mb-8 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                Applicable Charges:
              </span>

              <div className="space-y-2.5">
                {loanTerms.charges.map((chargeText, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-700">
                    {/* Green Tick matching Documents Section */}
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 shadow-2xs">
                      <FiCheck className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span className="font-normal text-[#262626]">{chargeText}</span>
                  </div>
                ))}
              </div>

              {/* Foreclosure / Statutory Note */}
              <div className="pt-2 flex items-start gap-2 text-[11px] text-slate-500 font-light">
                <FiInfo className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>{loanTerms.note}</span>
              </div>
            </div>

            {/* 5. CTA Button with Decorative Orange Accent Rays */}
            <div className="relative inline-flex self-start pt-2">
              {/* 4 Radiating Orange Accent Rays (Top-Left Doodle hugging curve) */}
              <OrangeRaysAccent />

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 select-none cursor-pointer relative z-0"
              >
                <span>Apply for {loanName}</span>
                <FiArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

          </ScrollReveal>


          {/* ======================================================== */}
          {/* RIGHT COLUMN: 3 Staggered FINVIEW Double-Framed Cards     */}
          {/* Each card links directly to the Contact page             */}
          {/* ======================================================== */}
          <ScrollReveal variant="fade-left" delay={150} className="lg:col-span-7 flex flex-col space-y-4 sm:space-y-5 lg:pl-8 lg:translate-x-3">
            
            {/* Card 1: Loan Amount Range (Links to Contact Page) */}
            <Link 
              to="/contact"
              className="w-full max-w-[500px] block lg:self-end bg-white rounded-2xl p-2 sm:p-2.5 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 group cursor-pointer animate-float-slow-r1 text-inherit no-underline"
            >
              {/* Inner Tinted Card with Smooth Brand Blue Hover */}
              <div className="bg-[#F4F6F5] group-hover:bg-blue-600 rounded-xl p-4 sm:p-5 transition-all duration-300">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    {/* Enlarged Clean White Circular Icon Container */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                      <img 
                        src={coinsIcon} 
                        alt="Loan Amount"
                        className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
                      />
                    </div>
                    {/* Content */}
                    <div>
                      <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500 group-hover:text-blue-100 transition-colors duration-300 block mb-0.5">
                        Loan Amount Range
                      </span>
                      <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-[#262626] group-hover:text-white transition-colors duration-300 mb-0.5">
                        {loanTerms.amount.display}
                      </h3>
                      <p className="text-xs sm:text-sm font-light text-[#666666] group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                        {loanTerms.amount.description}
                      </p>
                    </div>
                  </div>

                  {/* Y-axis Centered Round Arrow Badge */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200/80 bg-white text-slate-500 group-hover:text-blue-600 flex items-center justify-center transition-all duration-300 shadow-2xs shrink-0">
                    <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </Link>


            {/* Card 2: Rate of Interest (ROI) (Links to Contact Page) */}
            <Link 
              to="/contact"
              className="w-full max-w-[500px] block lg:self-start bg-white rounded-2xl p-2 sm:p-2.5 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 group cursor-pointer animate-float-slow-l text-inherit no-underline"
            >
              {/* Inner Tinted Card with Smooth Brand Blue Hover */}
              <div className="bg-[#F4F6F5] group-hover:bg-blue-600 rounded-xl p-4 sm:p-5 transition-all duration-300">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    {/* Enlarged Clean White Circular Icon Container */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                      <img 
                        src={interestIcon} 
                        alt="Interest Rate"
                        className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500 group-hover:text-blue-100 transition-colors duration-300 block mb-0.5">
                        Interest Rate (ROI)
                      </span>
                      <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-[#262626] group-hover:text-white transition-colors duration-300 mb-0.5">
                        {loanTerms.roi.display}
                      </h3>
                      <p className="text-xs sm:text-sm font-light text-[#666666] group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                        {loanTerms.roi.description}
                      </p>
                    </div>
                  </div>

                  {/* Y-axis Centered Round Arrow Badge */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200/80 bg-white text-slate-500 group-hover:text-blue-600 flex items-center justify-center transition-all duration-300 shadow-2xs shrink-0">
                    <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Special Multi-Tier Breakdown for Car Loans (New, Used, Refinance) */}
                {loanTerms.carVariants && (
                  <div className="mt-3.5 pt-3 border-t border-slate-200/80 group-hover:border-white/20 flex flex-col sm:flex-row items-stretch sm:divide-x divide-slate-200/80 group-hover:divide-white/20 transition-colors duration-300">
                    {loanTerms.carVariants.map((variant, vIdx) => (
                      <div 
                        key={vIdx} 
                        className={`flex-1 py-1.5 sm:py-0 ${
                          vIdx === 0 
                            ? 'sm:pr-3.5 sm:pl-0' 
                            : vIdx === loanTerms.carVariants.length - 1 
                            ? 'sm:pl-3.5 sm:pr-0' 
                            : 'sm:px-3.5'
                        } flex flex-col justify-between`}
                      >
                        <div>
                          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-500 group-hover:text-blue-100 block mb-0.5 transition-colors duration-300">
                            {variant.type}
                          </span>
                          <span className="text-xs sm:text-[13px] font-semibold text-[#262626] group-hover:text-white transition-colors duration-300">
                            {variant.roi}
                          </span>
                        </div>
                        <span className="text-[10px] sm:text-[11px] text-slate-500 group-hover:text-white/80 mt-1 block transition-colors duration-300">
                          Tenure: {variant.tenure}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Link>


            {/* Card 3: Repayment Tenure (Links to Contact Page) */}
            <Link 
              to="/contact"
              className="w-full max-w-[500px] block lg:self-end bg-white rounded-2xl p-2 sm:p-2.5 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 group cursor-pointer animate-float-slow-r2 text-inherit no-underline"
            >
              {/* Inner Tinted Card with Smooth Brand Blue Hover */}
              <div className="bg-[#F4F6F5] group-hover:bg-blue-600 rounded-xl p-4 sm:p-5 transition-all duration-300">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    {/* Enlarged Clean White Circular Icon Container */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                      <img 
                        src={hourglassIcon} 
                        alt="Repayment Tenure"
                        className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
                      />
                    </div>
                    {/* Content */}
                    <div>
                      <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500 group-hover:text-blue-100 transition-colors duration-300 block mb-0.5">
                        Repayment Tenure
                      </span>
                      <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-[#262626] group-hover:text-white transition-colors duration-300 mb-0.5">
                        {loanTerms.tenure.display}
                      </h3>
                      <p className="text-xs sm:text-sm font-light text-[#666666] group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                        {loanTerms.tenure.description}
                      </p>
                    </div>
                  </div>

                  {/* Y-axis Centered Round Arrow Badge */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200/80 bg-white text-slate-500 group-hover:text-blue-600 flex items-center justify-center transition-all duration-300 shadow-2xs shrink-0">
                    <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </Link>

          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
