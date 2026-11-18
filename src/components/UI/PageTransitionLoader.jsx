import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import loaderGif from '../../assets/loader.gif';
import { siteConfig } from '../../config/siteConfig';
import { themeConfig } from '../../config/themeconfig';

/**
 * PageTransitionLoader - Split-Screen White Curtain Page Transition
 * - Clean pure white background (#FFFFFF)
 * - Zero center vertical seam lines
 * - loader.gif centered with Company Name below it
 * - Left and Right white screens part smoothly outward to reveal the webpage
 * - Safe against React StrictMode and guaranteed to dismiss after 1.2s
 */
export default function PageTransitionLoader() {
  const { pathname } = useLocation();
  const [isAnimating, setIsAnimating] = useState(true);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    // Reset to closed state at the start of page load / navigation
    setIsAnimating(true);
    setIsOpening(false);

    // Phase 1: Hold the loader so the user sees the logo and animation (600ms)
    const openTimer = setTimeout(() => {
      setIsOpening(true);
    }, 600);

    // Phase 2: Complete the slide-out curtain animation and remove from DOM (1250ms)
    const completeTimer = setTimeout(() => {
      setIsAnimating(false);
    }, 1250);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(completeTimer);
    };
  }, [pathname]);

  if (!isAnimating) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 z-[99999] pointer-events-auto select-none overflow-hidden"
      aria-hidden="true"
    >
      {/* ======================================================== */}
      {/* 1. LEFT WHITE CURTAIN PANEL (Zero Lines, Pure White)      */}
      {/* Slides completely to the left (-100%)                    */}
      {/* ======================================================== */}
      <div 
        className="absolute top-0 left-0 w-1/2 h-full bg-white z-10 will-change-transform"
        style={{
          transform: isOpening ? 'translate3d(-100%, 0, 0)' : 'translate3d(0, 0, 0)',
          transition: 'transform 650ms cubic-bezier(0.77, 0, 0.175, 1)',
        }}
      />

      {/* ======================================================== */}
      {/* 2. RIGHT WHITE CURTAIN PANEL (Zero Lines, Pure White)     */}
      {/* Slides completely to the right (+100%)                   */}
      {/* ======================================================== */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full bg-white z-10 will-change-transform"
        style={{
          transform: isOpening ? 'translate3d(100%, 0, 0)' : 'translate3d(0, 0, 0)',
          transition: 'transform 650ms cubic-bezier(0.77, 0, 0.175, 1)',
        }}
      />

      {/* ======================================================== */}
      {/* 3. CENTER CONTENT: LOADER GIF + COMPANY NAME             */}
      {/* ======================================================== */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center text-center will-change-transform"
        style={{
          opacity: isOpening ? 0 : 1,
          transform: isOpening 
            ? 'translate(-50%, -50%) scale(0.92)' 
            : 'translate(-50%, -50%) scale(1)',
          transition: 'opacity 350ms ease-out, transform 350ms ease-out',
          pointerEvents: 'none',
        }}
      >
        {/* Animated loader.gif */}
        <div className="relative mb-3 flex items-center justify-center">
          <img 
            src={loaderGif} 
            alt={siteConfig.name} 
            draggable={false}
            className="w-28 sm:w-36 md:w-40 h-auto object-contain select-none drop-shadow-sm"
          />
        </div>

        {/* Company Name below loader.gif */}
        <h2 
          className="text-xl sm:text-2xl md:text-[26px] font-bold tracking-wider uppercase leading-tight"
          style={{ 
            color: themeConfig.colors.navy,
            fontFamily: themeConfig.typography.fontFamily 
          }}
        >
          {siteConfig.name}
        </h2>

        {/* Tagline below Company Name */}
        <p className="text-xs sm:text-sm font-medium tracking-widest text-slate-500 uppercase mt-1">
          {siteConfig.tagline}
        </p>
      </div>
    </div>
  );
}
