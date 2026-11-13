import React, { useState, useEffect } from 'react';
import { FiPhoneCall, FiPlus, FiArrowUpRight, FiMenu } from 'react-icons/fi';
import { mainNavLinks, loansDropdownItems } from '../../config/navigation';
import { siteConfig } from '../../config/siteConfig';
import { themeConfig } from '../../config/themeconfig';
import OutlineBtn from '../UI/btns/OutlineBtn';
import MobileNav from './MobileNav';
import navLogoImg from '../../assets/logo/nav-logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`sticky top-0 z-40 w-full bg-white transition-all duration-300 border-b border-slate-100 ${
          isScrolled ? 'shadow-sm py-3' : 'py-4 sm:py-5'
        }`}
        style={{ fontFamily: themeConfig.typography.fontFamily }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between gap-6 md:gap-10">
            
            {/* 1. Brand Logo (Increased size) */}
            <a href="/" className="inline-block shrink-0 focus:outline-none">
              <img 
                src={navLogoImg} 
                alt={siteConfig.name} 
                className="h-12 sm:h-14 md:h-15 w-auto object-contain" 
              />
            </a>

            {/* 2. Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center gap-9">
              {mainNavLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div key={link.name} className="relative group py-2">
                      {/* Nav link with Spinning Plus Icon */}
                      <a
                        href={link.path}
                        className="flex items-center gap-1.5 text-[15px] font-medium transition-colors cursor-pointer select-none"
                        style={{ color: themeConfig.colors.textHeading }}
                        onMouseEnter={(e) => e.currentTarget.style.color = themeConfig.colors.primary}
                        onMouseLeave={(e) => e.currentTarget.style.color = themeConfig.colors.textHeading}
                      >
                        <span>{link.name}</span>
                        <span className="inline-flex items-center justify-center w-4 h-4 text-slate-400 group-hover:text-blue-600 plus-spin font-semibold">
                          <FiPlus className="w-3.5 h-3.5 stroke-[2.5]" />
                        </span>
                      </a>

                      {/* Dropdown Menu (Starts right from the start of the Loans word with left-0) */}
                      <div className="absolute top-full left-0 pt-2.5 w-56 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto">
                        <div className="bg-white rounded-lg shadow-lg border border-slate-200/80 p-2 overflow-hidden ring-1 ring-black/5">
                          <div className="space-y-1">
                            {loansDropdownItems.map((item) => (
                              <a
                                key={item.name}
                                href={item.slug}
                                className="group/item flex items-center justify-between px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors duration-200"
                              >
                                <span className="inline-block transition-transform duration-200 group-hover/item:translate-x-1.5">
                                  {item.name}
                                </span>
                                <FiArrowUpRight className="w-3.5 h-3.5 text-blue-600 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <a
                    key={link.name}
                    href={link.path}
                    className="text-[15px] font-medium transition-colors"
                    style={{ color: themeConfig.colors.textHeading }}
                    onMouseEnter={(e) => e.currentTarget.style.color = themeConfig.colors.primary}
                    onMouseLeave={(e) => e.currentTarget.style.color = themeConfig.colors.textHeading}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* 3. Quick Call Outline CTA Button with Mouse-aware Radial Expand */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="hidden sm:block">
                <OutlineBtn
                  href={`tel:${siteConfig.phoneRaw}`}
                  icon={FiPhoneCall}
                  endIcon={FiArrowUpRight}
                >
                  Quick Call
                </OutlineBtn>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors"
                aria-label="Open navigation menu"
              >
                <FiMenu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Slide-over Mobile Drawer */}
      <MobileNav 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
    </>
  );
}
