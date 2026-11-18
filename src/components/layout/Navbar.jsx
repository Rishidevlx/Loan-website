import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPhoneCall, FiPlus, FiArrowUpRight, FiMenu } from 'react-icons/fi';
import { mainNavLinks, loansDropdownItems } from '../../config/navigation';
import { siteConfig } from '../../config/siteConfig';
import { themeConfig } from '../../config/themeconfig';
import OutlineBtn from '../UI/btns/OutlineBtn';
import MobileNav from './MobileNav';
import navLogoImg from '../../assets/logo/nav-logo.png';

export default function Navbar({ currentPath = '/' }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Normalize path for accurate active matching
  const normalizedPath = (currentPath || '/').trim().replace(/\/$/, '') || '/';

  // Check if current route is ANY loan detail page
  const isAnyLoanActive = loansDropdownItems.some(
    (item) => item.slug === normalizedPath || normalizedPath.startsWith(item.slug)
  ) || normalizedPath.includes('-loan') || normalizedPath.includes('/loan') || normalizedPath === '/loans';

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
            
            {/* 1. Brand Logo */}
            <Link to="/" className="inline-block shrink-0 focus:outline-none">
              <img 
                src={navLogoImg} 
                alt={siteConfig.name} 
                className="h-12 sm:h-14 md:h-15 w-auto object-contain" 
              />
            </Link>

            {/* 2. Desktop Navigation Menu with Active Blue Underline */}
            <nav className="hidden lg:flex items-center gap-9">
              {mainNavLinks.map((link) => {
                // Dropdown link ("Loans +")
                if (link.hasDropdown) {
                  return (
                    <div key={link.name} className="relative group py-2">
                      {/* Nav link with Spinning Plus Icon & Active Blue Underline */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                        className={`relative flex items-center gap-1.5 text-[15px] transition-colors cursor-pointer select-none focus:outline-none ${
                          isAnyLoanActive ? 'font-semibold' : 'font-medium'
                        }`}
                        style={{ color: isAnyLoanActive ? themeConfig.colors.primary : themeConfig.colors.textHeading }}
                        onMouseEnter={(e) => e.currentTarget.style.color = themeConfig.colors.primary}
                        onMouseLeave={(e) => e.currentTarget.style.color = isAnyLoanActive ? themeConfig.colors.primary : themeConfig.colors.textHeading}
                      >
                        <span>{link.name}</span>
                        <span className={`inline-flex items-center justify-center w-4 h-4 ${
                          isAnyLoanActive ? 'text-blue-600' : 'text-slate-400'
                        } group-hover:text-blue-600 plus-spin font-semibold`}>
                          <FiPlus className="w-3.5 h-3.5 stroke-[2.5]" />
                        </span>

                        {/* Active Indicator Underline - Only in main navbar, not in sub-menus */}
                        {isAnyLoanActive && (
                          <span 
                            className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-blue-600 rounded-full" 
                            aria-hidden="true"
                          />
                        )}
                      </button>

                      {/* Dropdown Menu (Strictly clean without underline inside submenu items) */}
                      <div className="absolute top-full left-0 pt-2.5 w-60 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto">
                        <div className="bg-white rounded-xl shadow-xl border border-slate-200/80 p-2 overflow-hidden ring-1 ring-black/5">
                          <div className="space-y-1">
                            {loansDropdownItems.map((item) => (
                              <Link
                                key={item.name}
                                to={item.slug}
                                className="group/item flex items-center justify-between px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all duration-200"
                              >
                                <div className="flex items-center gap-2.5 transition-transform duration-200 group-hover/item:translate-x-1">
                                  {item.icon && (
                                    <img 
                                      src={item.icon} 
                                      alt="" 
                                      className="w-4 h-4 object-contain shrink-0" 
                                    />
                                  )}
                                  <span>{item.name}</span>
                                </div>
                                <FiArrowUpRight className="w-3.5 h-3.5 text-blue-600 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                // Standard Nav Links (Home, About, Contact)
                const decodedPath = decodeURIComponent(normalizedPath).toLowerCase();
                const isActive = link.path === '/'
                  ? (normalizedPath === '/' || normalizedPath === '')
                  : (normalizedPath === link.path || (link.path === '/about-us' && (decodedPath.startsWith('/about'))));

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative py-2 text-[15px] transition-colors ${isActive ? 'font-semibold' : 'font-medium'}`}
                    style={{ color: isActive ? themeConfig.colors.primary : themeConfig.colors.textHeading }}
                    onMouseEnter={(e) => e.currentTarget.style.color = themeConfig.colors.primary}
                    onMouseLeave={(e) => e.currentTarget.style.color = isActive ? themeConfig.colors.primary : themeConfig.colors.textHeading}
                  >
                    <span>{link.name}</span>

                    {/* Active Indicator Underline */}
                    {isActive && (
                      <span 
                        className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-blue-600 rounded-full" 
                        aria-hidden="true"
                      />
                    )}
                  </Link>
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
        currentPath={currentPath}
      />
    </>
  );
}
