import React, { useState, useEffect, useRef } from 'react';
import { FiPhoneCall, FiX, FiMessageSquare } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { siteConfig } from '../../config/siteConfig';

/**
 * Floating Contact Speed-Dial Widget
 * - Positioned fixed in bottom-right corner, directly above the Scroll-To-Top button.
 * - Main trigger toggles between contact icon and an 'X' close mark.
 * - Expands upward into 2 quick action buttons:
 *   1. WhatsApp Chat (Green, opens WhatsApp with custom loan inquiry text)
 *   2. Direct Call (Blue, triggers phone dialer)
 * - Closes automatically when clicking outside.
 */
export default function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef(null);

  // Close when clicking outside of the widget
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('pointerdown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
    };
  }, [isOpen]);

  const whatsappUrl = `https://wa.me/919944400022?text=${encodeURIComponent(
    'Hello Bharath Finserv, I would like to know more about your loan services in Coimbatore.'
  )}`;

  return (
    <div
      ref={widgetRef}
      className="fixed bottom-[74px] sm:bottom-[86px] right-6 sm:right-8 z-50 select-none"
    >
      {/* Upward Expanding Action Buttons Menu */}
      <div
        className={`absolute bottom-full right-0 mb-3 flex flex-col items-end gap-2.5 transition-all duration-300 ease-out origin-bottom ${
          isOpen
            ? 'opacity-100 visible translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 invisible translate-y-4 scale-95 pointer-events-none'
        }`}
      >
        {/* 1. WhatsApp Action Button */}
        <div className="flex items-center gap-2 group">
          <span className="hidden sm:inline-block px-2.5 py-1 text-xs font-medium text-slate-700 bg-white border border-slate-200/80 rounded-lg shadow-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            WhatsApp Chat
          </span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
          >
            <FaWhatsapp className="w-5 h-5" />
          </a>
        </div>

        {/* 2. Direct Call Action Button */}
        <div className="flex items-center gap-2 group">
          <span className="hidden sm:inline-block px-2.5 py-1 text-xs font-medium text-slate-700 bg-white border border-slate-200/80 rounded-lg shadow-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Call: {siteConfig.phoneDisplay}
          </span>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            aria-label="Direct Phone Call"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            <FiPhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>

      {/* Main Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close contact menu' : 'Open contact options'}
        aria-expanded={isOpen}
        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg text-white shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 ease-out cursor-pointer hover:-translate-y-0.5 active:translate-y-0 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${
          isOpen
            ? 'bg-slate-800 hover:bg-slate-900 rotate-90'
            : 'bg-blue-600 hover:bg-blue-700 rotate-0'
        }`}
      >
        {isOpen ? (
          <FiX className="w-5 h-5 stroke-[2.5]" />
        ) : (
          <FiMessageSquare className="w-5 h-5 stroke-[2.2]" />
        )}
      </button>
    </div>
  );
}
