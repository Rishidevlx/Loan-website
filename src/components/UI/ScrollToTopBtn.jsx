import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

/**
 * Floating Scroll-To-Top Button
 * - Square shape with minimal rounded corners (rounded-lg).
 * - Fixed at bottom-right corner.
 * - Clean neutral shadow without blue colored glow halo.
 * - Smoothly fades and slides in when user scrolls down > 300px.
 * - Smoothly scrolls to the top of the page on click.
 */
export default function ScrollToTopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when page is scrolled down more than 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 
        w-10 h-10 sm:w-11 sm:h-11 rounded-lg 
        bg-blue-600 hover:bg-blue-700 text-white 
        shadow-md hover:shadow-lg
        hover:-translate-y-1 active:translate-y-0 active:scale-95
        flex items-center justify-center cursor-pointer select-none
        transition-all duration-200 ease-out border-0
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
        ${
          isVisible
            ? 'opacity-100 visible translate-y-0 pointer-events-auto'
            : 'opacity-0 invisible translate-y-4 pointer-events-none'
        }
      `}
    >
      <FiArrowUp className="w-5 h-5 stroke-[2.5]" />
    </button>
  );
}
