import React from 'react';
import { themeConfig } from '../../config/themeconfig';
import { partnersRow1, partnersRow2 } from '../../data/partnersData';
import worldIcon from '../../assets/Vectors/stats/icons8-world-64.png';

export default function PartnersSection() {
  // Duplicate arrays for seamless infinite circular looping
  const row1Logos = [...partnersRow1, ...partnersRow1];
  const row2Logos = [...partnersRow2, ...partnersRow2];

  return (
    <section 
      className="py-16 md:py-20 relative overflow-hidden"
      style={{ 
        backgroundColor: themeConfig.colors.sectionProductsBg,
        fontFamily: themeConfig.typography.fontFamily 
      }}
    >
      {/* Decorative 3D Spinning Globe Icon (Top-Right) */}
      <img
        src={worldIcon}
        alt="Decorative 3D World Globe"
        draggable={false}
        className="absolute top-5 right-5 sm:top-7 sm:right-8 lg:top-8 lg:right-12 w-12 sm:w-14 lg:w-16 h-auto object-contain select-none pointer-events-none opacity-85 z-10 animate-spin-3d"
        style={{ animation: 'spin3DHorizontal 7s linear infinite' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 md:mb-14 text-center">
        
        {/* Eyebrow Tagline with Spark Icon */}
        <div className="inline-flex items-center gap-2 mb-3">
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
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-slate-800 uppercase">
            16+ Banking & NBFC Partners
          </span>
        </div>

        {/* Section Heading */}
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#222E48] leading-tight mb-3.5"
          style={{ color: themeConfig.typography.sectionHeading.color }}
        >
          Our Lending Network
        </h2>

        {/* Subtitle from Official Documentation */}
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
          We compare offers across India's premier commercial banks and leading NBFCs to ensure you secure the lowest interest margins and fastest approvals.
        </p>

      </div>

      {/* Dual Row Marquee Viewport with Left and Right Edge Gradient Masks */}
      <div className="relative w-full overflow-hidden space-y-5 sm:space-y-6 py-2">
        
        {/* Left Gradient Fade Mask */}
        <div 
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-32 md:w-44 z-10"
          style={{
            background: `linear-gradient(to right, ${themeConfig.colors.sectionProductsBg}, transparent)`
          }}
        />

        {/* Right Gradient Fade Mask */}
        <div 
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-32 md:w-44 z-10"
          style={{
            background: `linear-gradient(to left, ${themeConfig.colors.sectionProductsBg}, transparent)`
          }}
        />

        {/* Row 1: Right-to-Left Continuous Marquee (Pauses on Hover) */}
        <div 
          className="animate-marquee gap-4 sm:gap-6 items-center"
          title="Row 1: Hover to pause"
        >
          {row1Logos.map((partner, index) => (
            <div
              key={`row1-${partner.id}-${index}`}
              className="bg-white rounded-lg border border-slate-200/90 shadow-2xs h-18 sm:h-20 w-40 sm:w-44 px-4 py-3 flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105 hover:shadow-xs select-none"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                draggable={false}
                className="max-h-10 sm:max-h-12 max-w-[120px] sm:max-w-[135px] w-auto h-auto object-contain select-none pointer-events-none"
              />
            </div>
          ))}
        </div>

        {/* Row 2: Left-to-Right Reverse Marquee (Pauses on Hover) */}
        <div 
          className="animate-marquee-reverse gap-4 sm:gap-6 items-center"
          title="Row 2: Hover to pause"
        >
          {row2Logos.map((partner, index) => (
            <div
              key={`row2-${partner.id}-${index}`}
              className="bg-white rounded-lg border border-slate-200/90 shadow-2xs h-18 sm:h-20 w-40 sm:w-44 px-4 py-3 flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105 hover:shadow-xs select-none"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                draggable={false}
                className="max-h-10 sm:max-h-12 max-w-[120px] sm:max-w-[135px] w-auto h-auto object-contain select-none pointer-events-none"
              />
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
