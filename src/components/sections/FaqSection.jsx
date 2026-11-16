import React, { useState, useEffect } from 'react';
import { themeConfig } from '../../config/themeconfig';
import { faqsData } from '../../data/faqsData';
import { FiPlus, FiMinus } from 'react-icons/fi';
import msgIcon from '../../assets/Vectors/msg-icon.png';
import questionIcon from '../../assets/Vectors/FAQs/icons8-question-mark-100.png';

export default function FaqSection() {
  // Mobile view: only 1st question open initially; Desktop view: 1 in left col + 1 in right col open
  const [openLeftId, setOpenLeftId] = useState('faq-1');
  const [openRightId, setOpenRightId] = useState(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      return null;
    }
    return 'faq-5';
  });

  // Responsive check ensuring mobile only has at most 1 question open
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setOpenRightId(null);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggleLeft = (id) => {
    const isMobile = window.innerWidth < 1024;
    if (isMobile) {
      setOpenRightId(null);
      setOpenLeftId((prev) => (prev === id ? null : id));
    } else {
      // Desktop: at most 1 question open in left column
      setOpenLeftId((prev) => (prev === id ? null : id));
    }
  };

  const handleToggleRight = (id) => {
    const isMobile = window.innerWidth < 1024;
    if (isMobile) {
      setOpenLeftId(null);
      setOpenRightId((prev) => (prev === id ? null : id));
    } else {
      // Desktop: at most 1 question open in right column
      setOpenRightId((prev) => (prev === id ? null : id));
    }
  };

  // Split into 2 balanced columns (4 items each) for desktop layout
  const midPoint = Math.ceil(faqsData.length / 2);
  const leftColumnFaqs = faqsData.slice(0, midPoint);
  const rightColumnFaqs = faqsData.slice(midPoint);

  const renderFaqCard = (faq, isOpen, onToggle) => {
    return (
      <div
        key={faq.id}
        onClick={() => onToggle(faq.id)}
        className={`bg-white rounded-2xl border p-5 sm:p-6 transition-all duration-300 cursor-pointer shadow-xs select-none ${
          isOpen 
            ? 'border-blue-400/80 shadow-md ring-1 ring-blue-500/10' 
            : 'border-slate-200/90 hover:border-slate-300 hover:shadow-xs'
        }`}
      >
        {/* Question Row */}
        <div className="flex items-center justify-between gap-4">
          <h3 
            className="text-base sm:text-[17px] font-normal tracking-tight leading-snug"
            style={{ color: themeConfig.colors.textHeading }}
          >
            {faq.question}
          </h3>

          {/* Circular Action Toggle Button */}
          <div
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 shadow-xs ${
              isOpen
                ? 'bg-blue-600 text-white rotate-180 scale-105'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 rotate-0'
            }`}
          >
            {isOpen ? (
              <FiMinus className="w-4 h-4 stroke-[2.5]" />
            ) : (
              <FiPlus className="w-4 h-4 stroke-[2.5]" />
            )}
          </div>
        </div>

        {/* Smooth Animated Collapsible Answer */}
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'grid-rows-[1fr] opacity-100 pt-3.5 mt-3.5 border-t border-slate-100' 
              : 'grid-rows-[0fr] opacity-0 pt-0 mt-0 border-t-0'
          }`}
        >
          <div className="overflow-hidden">
            <p 
              className="text-sm font-light leading-relaxed"
              style={{ color: themeConfig.colors.textBody }}
            >
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section 
      className="py-16 md:py-24 bg-white relative overflow-hidden"
      style={{ fontFamily: themeConfig.typography.fontFamily }}
    >
      {/* Decorative Horizontally Gliding Question Mark Icon (Right-Bottom) - Well-proportioned on mobile */}
      <img
        src={questionIcon}
        alt="Decorative Question Mark"
        draggable={false}
        className="absolute bottom-3 right-3 sm:bottom-6 sm:right-8 lg:bottom-10 lg:right-14 w-10 sm:w-13 lg:w-16 h-auto object-contain select-none pointer-events-none opacity-80 z-10 animate-horizontal-float"
        style={{ animation: 'horizontalFloat 3.8s ease-in-out infinite' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-12 md:mb-16">
          
          {/* Eyebrow Tagline with Spark Icon */}
          <div className="inline-flex items-center gap-2">
            <svg 
              className="w-4 h-4 text-blue-600 shrink-0" 
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
              className="text-xs sm:text-sm font-medium tracking-wider uppercase"
              style={{ color: themeConfig.colors.textHeading }}
            >
              Frequently Asked Questions
            </span>
          </div>

          {/* Main H2 Heading with Message Icon placed cross to letter 'F' in 'Find' */}
          <div className="relative inline-block">
            {/* Decorative Wave-Bobbing Message Icon placed diagonally to the letter 'F' - Desktop only, hidden on mobile */}
            <img
              src={msgIcon}
              alt="Decorative Message Bubble"
              draggable={false}
              className="absolute -top-7 -left-10 sm:-top-8 sm:-left-12 lg:-top-9 lg:-left-14 w-10 sm:w-12 lg:w-14 h-auto object-contain select-none pointer-events-none opacity-85 z-10 animate-wave-bob hidden sm:block"
              style={{ animation: 'waveBobbing 4.2s ease-in-out infinite' }}
            />

            <h2 
              className="text-2xl sm:text-3xl md:text-[28px] font-normal tracking-tight leading-tight"
              style={{ color: themeConfig.colors.textHeading }}
            >
              Find Answers to Common Questions
            </h2>
          </div>

          {/* Subtext */}
          <p 
            className="text-base sm:text-[18.45px] font-light leading-relaxed max-w-2xl mx-auto"
            style={{ color: themeConfig.colors.textBody }}
          >
            We have compiled answers to common questions on loan eligibility, documents, interest rates, and approval timelines to guide your financial decisions.
          </p>

        </div>

        {/* 2-Column Responsive Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
          {/* Left Column (4 FAQs) */}
          <div className="space-y-4 sm:space-y-5">
            {leftColumnFaqs.map((faq) => 
              renderFaqCard(faq, openLeftId === faq.id, handleToggleLeft)
            )}
          </div>

          {/* Right Column (4 FAQs) */}
          <div className="space-y-4 sm:space-y-5">
            {rightColumnFaqs.map((faq) => 
              renderFaqCard(faq, openRightId === faq.id, handleToggleRight)
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
