import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import loaderGif from '../../assets/loader.gif';
import { siteConfig } from '../../config/siteConfig';
import { themeConfig } from '../../config/themeconfig';

// Initialize global loader flag on first load
if (typeof window !== 'undefined') {
  window.__IS_PAGE_LOADER_ACTIVE__ = true;
}

/**
 * PageTransitionLoader - Deep Dark Layer Page Transition Overlay
 * - Deep dark black/navy overlay (rgba(5, 10, 20, 0.92)) without blur
 * - Centered loader.gif with subtle luminous aura + clean white typography
 * - Coordinates with ScrollReveal: page animations trigger cleanly after the loader finishes
 * - Plays quick smooth animation (~1300ms) then quickly fades out to reveal the next page
 * - Locks body scroll during transition
 */
export default function PageTransitionLoader() {
  const { pathname } = useLocation();
  const [isAnimating, setIsAnimating] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [animationKey, setAnimationKey] = useState(() => Date.now());

  useEffect(() => {
    // Flag loader as active at the start of page load / navigation
    window.__IS_PAGE_LOADER_ACTIVE__ = true;
    setIsAnimating(true);
    setIsFadingOut(false);
    setAnimationKey(Date.now());

    // Phase 1: Show GIF and let it animate smoothly (1300ms)
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
      // Dispatch completion event so ScrollReveal triggers page reveal animations
      window.__IS_PAGE_LOADER_ACTIVE__ = false;
      window.dispatchEvent(new CustomEvent('page-loader-finished'));
    }, 1300);

    // Phase 2: Fade out dark overlay quickly (250ms) and unmount (1550ms total)
    const completeTimer = setTimeout(() => {
      setIsAnimating(false);
    }, 1550);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [pathname]);

  // Lock body scroll while overlay is active
  useEffect(() => {
    if (isAnimating) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isAnimating]);

  if (!isAnimating) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 z-[99999] pointer-events-auto select-none flex flex-col items-center justify-center p-4 transition-opacity duration-250 ease-out"
      style={{
        opacity: isFadingOut ? 0 : 1,
        backgroundColor: 'rgba(5, 10, 20, 0.80)', // Slightly lightened dark layer (reduced from 0.92 to 0.80)
      }}
      aria-hidden="true"
    >
      {/* Center Content: Animated GIF + Brand Details */}
      <div 
        className="relative flex flex-col items-center justify-center text-center transition-all duration-300"
        style={{
          transform: isFadingOut ? 'scale(0.95)' : 'scale(1)',
        }}
      >
        {/* Subtle luminous ambient aura behind the logo */}
        <div className="absolute w-36 h-36 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />

        {/* Animated loader.gif */}
        <div className="relative mb-3 flex items-center justify-center">
          <img 
            key={animationKey}
            src={`${loaderGif}?v=${animationKey}`} 
            alt={siteConfig.name} 
            draggable={false}
            className="w-28 sm:w-36 md:w-40 h-auto object-contain select-none drop-shadow-lg"
          />
        </div>

        {/* Company Name in clean white */}
        <h2 
          className="text-xl sm:text-2xl md:text-[26px] font-bold tracking-wider uppercase leading-tight text-white drop-shadow-sm"
          style={{ fontFamily: themeConfig.typography.fontFamily }}
        >
          {siteConfig.name}
        </h2>

        {/* Tagline in soft light-blue */}
        <p className="text-xs sm:text-sm font-medium tracking-widest text-blue-200/90 uppercase mt-1">
          {siteConfig.tagline}
        </p>
      </div>
    </div>
  );
}
