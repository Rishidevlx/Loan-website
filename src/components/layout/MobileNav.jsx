import React, { useState } from 'react';
import { FiX, FiPhoneCall, FiChevronDown, FiArrowUpRight } from 'react-icons/fi';
import { mainNavLinks, loansDropdownItems } from '../../config/navigation';
import { siteConfig } from '../../config/siteConfig';
import OutlineBtn from '../UI/btns/OutlineBtn';
import navLogoImg from '../../assets/logo/nav-logo.png';

export default function MobileNav({ isOpen, onClose, currentPath = '/' }) {
  const [loansOpen, setLoansOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Smooth Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Slide Down from Top Panel */}
      <div className="fixed top-0 inset-x-0 w-full max-h-[92vh] bg-white shadow-2xl rounded-b-3xl flex flex-col z-10 overflow-hidden animate-slide-down border-b border-slate-100">
        
        {/* Header with Logo and Close Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <img 
              src={navLogoImg} 
              alt={siteConfig.name} 
              className="h-10 w-auto object-contain"
            />
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
            aria-label="Close menu"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Items (Scrollable if tall) */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-1">
          {mainNavLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div key={link.name} className="border-b border-slate-100 pb-2">
                  <button
                    onClick={() => setLoansOpen(!loansOpen)}
                    className="w-full flex items-center justify-between py-2.5 text-base font-semibold text-slate-800 hover:text-blue-600 transition-colors"
                  >
                    <span>{link.name}</span>
                    <FiChevronDown 
                      className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${loansOpen ? 'rotate-180 text-blue-600' : ''}`} 
                    />
                  </button>

                  {/* Smooth Nested Loans Sub-menu (No Card Box, Butter-smooth Accordion) */}
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      loansOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pl-4 pb-2 pt-1 space-y-0.5">
                        {loansDropdownItems.map((loan) => (
                          <a
                            key={loan.name}
                            href={loan.slug}
                            onClick={onClose}
                            className="block py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                          >
                            {loan.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            const isActive = currentPath === link.path;
            return (
              <a
                key={link.name}
                href={link.path}
                onClick={onClose}
                className={`block py-2.5 text-base font-semibold border-b border-slate-100 transition-colors ${
                  isActive ? 'text-blue-600 font-bold' : 'text-slate-800 hover:text-blue-600'
                }`}
              >
                {link.name}
              </a>
            );
          })}

          {/* Contact Details in Drawer */}
          <div className="pt-4 text-xs text-slate-500 space-y-1">
            <p className="font-semibold text-slate-700">Office Address:</p>
            <p>{siteConfig.address.full}</p>
            <p><span className="font-semibold text-slate-700">Hours:</span> {siteConfig.timings}</p>
          </div>
        </div>

        {/* Quick Call Action at bottom */}
        <div className="p-5 border-t border-slate-100 bg-slate-50/60">
          <OutlineBtn
            href={`tel:${siteConfig.phoneRaw}`}
            icon={FiPhoneCall}
            endIcon={FiArrowUpRight}
            className="w-full py-3"
          >
            Quick Call • {siteConfig.phoneDisplay}
          </OutlineBtn>
        </div>

      </div>
    </div>
  );
}
