import React from 'react';
import { themeConfig } from '../../config/themeconfig';

// User-specified process icons from assets/loans
import speakIcon from '../../assets/loans/icons8-speak-100.png';
import docIcon from '../../assets/loans/loan-coln-2.png';
import verifyIcon from '../../assets/loans/icons8-verify-100.png';

/**
 * Typical Process Flow Steps
 * Requirement --> Prepare Documents --> Decision
 * Descriptions calibrated to exactly 3 lines.
 */
const processSteps = [
  {
    stepNumber: '01',
    title: 'Share Your Requirement',
    description: 'Tell us your funding requirement and preferred tenure. We assess your profile across 16+ top banks for maximum loan eligibility.',
    icon: speakIcon,
  },
  {
    stepNumber: '02',
    title: 'Prepare & Verify Documents',
    description: 'Skip bank branch visits. Our local advisors collect papers from your doorstep and prepare a complete, verified credit file.',
    icon: docIcon,
  },
  {
    stepNumber: '03',
    title: 'Bank Decision & Disbursal',
    description: 'Receive quick sanction in 24 to 48 hours with 100% transparent terms, followed by direct disbursal to your bank account.',
    icon: verifyIcon,
  },
];

/**
 * Typical Loan Approval Process Section
 * Displayed on Pure White (#FFFFFF) background to alternate with #EDF0EC above it.
 * Brand Blue upper-U arched dashed arrows with generous spacing (no icon overlap).
 * Arrowhead shifted down so the dashed arrow body enters right in the dead-center between arrowhead wings.
 * Content under each step formatted to exactly 3 lines.
 */
export default function LoanTypicalProcessSection({ loan }) {
  const loanName = loan?.name || 'Loan';

  return (
    <section 
      className="py-16 md:py-24 bg-white relative overflow-hidden"
      style={{ fontFamily: themeConfig.typography.fontFamily }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ======================================================== */}
        {/* SECTION HEADER (Centered matching reference screenshot)  */}
        {/* ======================================================== */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-14 md:mb-20">
          
          {/* Eyebrow Tagline with Spark Icon - Matching above sections */}
          <div className="flex justify-center">
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
                TYPICAL WORK PROCESS
              </span>
            </div>
          </div>

          {/* Main H2 Heading (24.6px - 28px, weight 400, color #262626) */}
          <h2 
            className="text-2xl sm:text-3xl md:text-[28px] font-normal tracking-tight leading-tight"
            style={{ color: themeConfig.colors.textHeading }}
          >
            How Your {loanName} Application Moves Forward
          </h2>

          {/* Subtitle (18.45px, weight 300, color #262626) */}
          <p 
            className="text-base sm:text-[18.45px] font-light leading-relaxed max-w-2xl mx-auto"
            style={{ color: themeConfig.colors.textBody }}
          >
            A transparent 3-step path from requirement definition to doorstep document verification and official lender sanction.
          </p>

        </div>

        {/* ======================================================== */}
        {/* 3-COLUMN PROCESS WORKFLOW WITH BRAND BLUE ARCHED ARROWS   */}
        {/* ======================================================== */}
        <div className="relative">
          
          {/* Desktop Arched Connecting Arrow 1 (Step 1 -> Step 2) */}
          {/* Positioned between Col 1 and Col 2 with generous breathing space from both icons */}
          <div 
            className="hidden md:block absolute -top-2 left-[23%] w-[20%] max-w-[150px] h-12 pointer-events-none z-0"
            style={{ color: themeConfig.colors.primary }}
            aria-hidden="true"
          >
            <svg 
              className="w-full h-full text-blue-600"
              viewBox="0 0 140 44" 
              fill="none" 
              preserveAspectRatio="none"
            >
              {/* Upper-U curved dashed path in Brand Blue - Ends cleanly before the arrowhead */}
              <path 
                d="M 6 32 Q 65 -4 116 29" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeDasharray="4 4" 
                strokeLinecap="round" 
              />
              {/* Separate arrowhead pointing downward towards next icon (zero dashed overlap, dashed line enters center gap) */}
              <path 
                d="M 126 28 L 133 40 L 119 39" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </div>

          {/* Desktop Arched Connecting Arrow 2 (Step 2 -> Step 3) */}
          {/* Positioned between Col 2 and Col 3 with generous breathing space from both icons */}
          <div 
            className="hidden md:block absolute -top-2 left-[56.5%] w-[20%] max-w-[150px] h-12 pointer-events-none z-0"
            style={{ color: themeConfig.colors.primary }}
            aria-hidden="true"
          >
            <svg 
              className="w-full h-full text-blue-600"
              viewBox="0 0 140 44" 
              fill="none" 
              preserveAspectRatio="none"
            >
              {/* Upper-U curved dashed path in Brand Blue - Ends cleanly before the arrowhead */}
              <path 
                d="M 6 32 Q 65 -4 116 29" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeDasharray="4 4" 
                strokeLinecap="round" 
              />
              {/* Separate arrowhead pointing downward towards next icon (zero dashed overlap, dashed line enters center gap) */}
              <path 
                d="M 126 28 L 133 40 L 119 39" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </div>

          {/* 3 Step Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 relative items-start">
            {processSteps.map((step, idx) => (
              <div 
                key={idx}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Top Centered Circular Icon Badge: Exact match to Homepage Our Loan Products (#EDF0EC bg) */}
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 shadow-xs relative z-10"
                  style={{
                    backgroundColor: themeConfig.colors.sectionProductsBg, // #EDF0EC
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <img 
                    src={step.icon} 
                    alt={step.title}
                    draggable="false"
                    onDragStart={(e) => e.preventDefault()}
                    className="w-9 h-9 sm:w-10 sm:h-10 object-contain select-none pointer-events-none"
                  />
                </div>

                {/* Step Title: Identical to Our Loan Products Card Heading (24.6px, weight 400, color #262626) */}
                <h3 
                  className="text-lg sm:text-[21px] font-normal mb-2 tracking-tight"
                  style={{ color: themeConfig.colors.textHeading }}
                >
                  {step.title}
                </h3>

                {/* Step Description: Subdued readable body calibrated to exactly 3 lines */}
                <p 
                  className="text-xs sm:text-sm font-light leading-relaxed max-w-[280px] mx-auto text-[#666666]"
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
