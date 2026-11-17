import React from 'react';

/**
 * OrangeRaysAccent
 * Reusable decorative sunburst / radiating rays accent placed at the top-left
 * curve of primary filled CTA buttons (inspired by LottoLend reference).
 * 
 * Sits cleanly outside the button without crossing over the button face or text.
 */
export default function OrangeRaysAccent({ className = '' }) {
  return (
    <svg 
      className={`absolute -top-3.5 -left-3.5 w-7 h-7 sm:w-8 sm:h-8 text-[#FF7A00] pointer-events-none select-none z-10 ${className}`} 
      viewBox="0 0 28 28" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* 4 radiating dashes hugging around the top-left pill shoulder (none cross into x>22 or y>22) */}
      {/* Ray 1: Leftward / horizontal-ish ray */}
      <path 
        d="M 2 21 C 4.5 21.2 6.5 21.8 8.5 22.5" 
        stroke="currentColor" 
        strokeWidth="2.75" 
        strokeLinecap="round" 
      />
      {/* Ray 2: Low-diagonal ray (10 o'clock) */}
      <path 
        d="M 3.5 12.5 C 5.5 13.8 7.5 15.2 9.5 16" 
        stroke="currentColor" 
        strokeWidth="2.75" 
        strokeLinecap="round" 
      />
      {/* Ray 3: High-diagonal ray (11 o'clock) */}
      <path 
        d="M 11.5 3 C 13 5.2 14.5 7.2 15.5 9.5" 
        stroke="currentColor" 
        strokeWidth="2.75" 
        strokeLinecap="round" 
      />
      {/* Ray 4: Upward / vertical-ish ray (12 o'clock) */}
      <path 
        d="M 21.5 1 C 22 3.2 22.2 5.5 22.5 7.5" 
        stroke="currentColor" 
        strokeWidth="2.75" 
        strokeLinecap="round" 
      />
    </svg>
  );
}
