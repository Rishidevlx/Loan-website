import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { themeConfig } from '../../config/themeconfig';
import OutlineBtn from '../UI/btns/OutlineBtn';
import ScrollReveal from '../common/ScrollReveal';

// User-specified 3-column process icons from assets/loans
import step1Icon from '../../assets/loans/loan-coln-1.png';
import step2Icon from '../../assets/loans/loan-coln-2.png';
import step3Icon from '../../assets/loans/loan-colun-3.png';

// Decorative Spinning Rupee Coin Icon from assets/Vectors (matching Homepage Our Loan Products)
import coinImg from '../../assets/Vectors/Coin.png';

// Fallback steps if loan doesn't provide custom overrides
const defaultSteps = [
  {
    stepNumber: '01',
    title: 'Check Eligibility & Compare All Banks',
    description: 'Tell us your funding requirement. We analyze your credit profile across all top banks & NBFCs across India to secure the highest loan amount at lowest interest rates.',
    icon: step1Icon,
  },
  {
    stepNumber: '02',
    title: 'Hassle-Free Doorstep Documentation',
    description: 'Zero bank branch visits. Our local loan specialists collect all required paperwork directly from your doorstep and coordinate all lender verifications.',
    icon: step2Icon,
  },
  {
    stepNumber: '03',
    title: 'Fast Sanction & Direct Disbursal',
    description: 'Receive your official bank sanction letter in 24 to 48 hours with 100% transparent terms and zero upfront consultation charges, followed by direct account credit.',
    icon: step3Icon,
  },
];

/**
 * 3-Column "How We Help You" Process Section
 * Displayed on #EDF0EC background immediately below the Loan Hero Section.
 * Features top-to-bottom entrance animations (variant="fade-down") across header,
 * cards, and CTA button.
 */
export default function LoanProcessSection({ loan }) {
  const loanName = loan?.name || 'Loan';
  const contactUrl = `/contact?loan=${encodeURIComponent(loanName)}`;

  // Map user-specified icons to the 3 steps
  const steps = loan?.processSteps && loan.processSteps.length === 3 
    ? [
        { ...loan.processSteps[0], icon: step1Icon, stepNumber: '01' },
        { ...loan.processSteps[1], icon: step2Icon, stepNumber: '02' },
        { ...loan.processSteps[2], icon: step3Icon, stepNumber: '03' },
      ]
    : defaultSteps;

  return (
    <section 
      className="py-16 md:py-20 relative overflow-hidden"
      style={{ 
        backgroundColor: themeConfig.colors.sectionProductsBg, // #EDF0EC
        fontFamily: themeConfig.typography.fontFamily 
      }}
    >
      {/* Decorative Spinning Rupee Coin Icon (Top-Right) matching Homepage Our Loan Products */}
      <img
        src={coinImg}
        alt="Decorative Rupee Coin"
        draggable={false}
        className="absolute top-3 right-3 sm:top-6 sm:right-8 lg:top-8 lg:right-12 w-14 sm:w-18 md:w-22 lg:w-26 h-auto object-contain select-none pointer-events-none opacity-90 z-10 animate-spin-slow"
        style={{ animation: 'spinSlow 14s linear infinite' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* ======================================================== */}
        {/* SECTION HEADER: Top-to-Bottom Entrance (variant="fade-down") */}
        {/* ======================================================== */}
        <ScrollReveal variant="fade-down" duration={650} className="space-y-3 mb-10 md:mb-14">
          
          {/* Eyebrow Tagline with Spark Star SVG - Text in Normal Heading Color #262626 */}
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
              HOW WE HELP YOU
            </span>
          </div>

          {/* Main Section Heading: Identical to Homepage Our Loan Products (24.6px - 28px, weight 400, color #262626) */}
          <h2 
            className="text-2xl sm:text-3xl md:text-[28px] font-normal tracking-tight leading-tight max-w-3xl"
            style={{ color: themeConfig.colors.textHeading }}
          >
            Three Simple Steps to Get Your {loanName} Approved at the Lowest Rate
          </h2>

          {/* Subtitle / Intro: Concise 2-line intro (18.45px, weight 300, color #262626) */}
          <p 
            className="text-base sm:text-[18.45px] font-light leading-relaxed max-w-2xl"
            style={{ color: themeConfig.colors.textBody }}
          >
            Compare all banks, get doorstep paperwork assistance, and secure fast approvals with zero upfront consultation charges.
          </p>

        </ScrollReveal>

        {/* ======================================================== */}
        {/* 3-COLUMN PROCESS GRID (Staggered top-to-bottom entrance)  */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-10 md:mb-14 items-start">
          {steps.map((step, idx) => (
            <ScrollReveal 
              key={idx}
              variant="fade-down"
              duration={650}
              delay={idx * 120}
              className="flex flex-col text-left h-full"
            >
              {/* Icon in Clean White Tile (Zero hover effect as requested) */}
              <div 
                className="w-16 h-16 rounded-2xl bg-white border border-slate-200/60 shadow-xs flex items-center justify-center mb-5 shrink-0"
              >
                <img 
                  src={step.icon} 
                  alt={step.title}
                  draggable="false"
                  onDragStart={(e) => e.preventDefault()}
                  className="w-10 h-10 object-contain select-none pointer-events-none"
                />
              </div>

              {/* Step Title */}
              <h3 
                className="text-xl sm:text-[23px] font-normal mb-2.5 tracking-tight min-h-[58px] sm:min-h-[64px] flex items-start"
                style={{ color: themeConfig.colors.textHeading }}
              >
                {step.title}
              </h3>

              {/* Step Description: Subdued readable body (weight 300) */}
              <p 
                className="text-xs sm:text-sm font-light leading-relaxed text-[#666666]"
              >
                {step.description}
              </p>
            </ScrollReveal>
          ))}
        </div>

        {/* ======================================================== */}
        {/* BOTTOM ACTION BUTTON: Top-to-Bottom Entrance             */}
        {/* ======================================================== */}
        <ScrollReveal variant="fade-down" duration={650} delay={360} className="flex flex-wrap items-center gap-4">
          <OutlineBtn
            href={contactUrl}
            endIcon={FiArrowUpRight}
            className="py-3 px-7 text-sm font-semibold"
          >
            Apply for {loanName} Now
          </OutlineBtn>
        </ScrollReveal>

      </div>
    </section>
  );
}
