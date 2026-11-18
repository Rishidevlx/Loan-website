import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhoneCall, FiMail, FiMapPin, FiClock, FiArrowUpRight } from 'react-icons/fi';
import { loansDropdownItems, footerQuickLinks, footerLegalLinks } from '../../config/navigation';
import { siteConfig } from '../../config/siteConfig';
import { themeConfig } from '../../config/themeconfig';
import logoImg from '../../assets/logo/logo.jpeg';
import footerDesktopImg from '../../assets/footer.png';
import footerMobileImg from '../../assets/mobile-footer.png';

export default function Footer() {
  return (
    <footer 
      className="text-slate-300 relative overflow-hidden"
      style={{ 
        backgroundColor: themeConfig.colors.navy,
        fontFamily: themeConfig.typography.fontFamily 
      }}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-2 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 items-start">
          
          {/* Column 1: Brand & Overview (Reduced border radius to rounded-lg) */}
          <div className="space-y-3">
            <div className="bg-white p-2 rounded-lg inline-flex items-center shadow-md">
              <img 
                src={logoImg} 
                alt={siteConfig.name} 
                className="h-14 sm:h-16 w-auto object-contain" 
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed pt-1">
              {siteConfig.description}
            </p>
          </div>

          {/* Column 2: Loan Solutions (All 7 Loans) */}
          <div>
            <div className="mb-4">
              <h3 className="text-white font-semibold text-base tracking-wide">
                Loan Offerings
              </h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              {loansDropdownItems.map((loan) => (
                <li key={loan.name}>
                  <Link 
                    to={loan.slug}
                    className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-200"
                  >
                    <span>{loan.name}</span>
                    <FiArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & Compliance (Privacy Policy & Terms) */}
          <div>
            <div className="mb-4">
              <h3 className="text-white font-semibold text-base tracking-wide">
                Legal & Compliance
              </h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link 
                  to="/privacy-policy"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-200"
                >
                  <span>Privacy Policy</span>
                  <FiArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms-and-conditions"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-200"
                >
                  <span>Terms & Conditions</span>
                  <FiArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <div className="mb-4">
              <h3 className="text-white font-semibold text-base tracking-wide">
                Contact Information
              </h3>
            </div>
            
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <FiMapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{siteConfig.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FiPhoneCall className="w-4 h-4 text-blue-400 shrink-0" />
                <div className="flex flex-wrap items-center gap-1.5">
                  <a 
                    href={`tel:${siteConfig.phoneRaw}`} 
                    className="hover:text-white hover:underline transition-colors font-medium"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                  <span className="text-slate-400">/</span>
                  <a 
                    href={`tel:${siteConfig.phone2Raw}`} 
                    className="hover:text-white hover:underline transition-colors font-medium"
                  >
                    {siteConfig.phone2Display}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <FiMail className="w-4 h-4 text-blue-400 shrink-0" />
                <a 
                  href={`mailto:${siteConfig.email}`} 
                  className="hover:text-white hover:underline transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5 pt-0.5">
                <FiClock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-400">{siteConfig.timings}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory Loan Disclaimer (No border line, compact spacing) */}
        <div className="mt-5 pt-1 text-[11px] sm:text-xs text-slate-400/90 leading-relaxed max-w-5xl">
          <p>
            <strong className="text-slate-300">Important Disclaimer: </strong>
            {siteConfig.disclaimer}
          </p>
        </div>

        {/* Copyright & Shadow Arrow Credit (Placed Above Image matching reference layout) */}
        <div className="mt-4 pt-2 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-slate-400">
          <p>{siteConfig.copyright}</p>
          <div className="text-slate-400 text-xs text-center sm:text-right">
            <span>This Website is Designed & Developed By - </span>
            <a 
              href="https://shadowarrow.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 font-medium underline underline-offset-2 transition-colors"
            >
              Shadow Arrow🎯
            </a>
          </div>
        </div>

      </div>

      {/* ======================================================== */}
      {/* LANDSCAPE ILLUSTRATION BANNER                            */}
      {/* Positioned at the very bottom edge of the footer,        */}
      {/* below the copyright and developer credits.               */}
      {/* ======================================================== */}
      <div className="w-full relative select-none pointer-events-none overflow-hidden -mb-1 -mt-12 sm:-mt-18 md:-mt-28 lg:-mt-40 xl:-mt-[240px]">
        {/* Desktop / System View Landscape: Edge-to-edge panoramic */}
        <img 
          src={footerDesktopImg} 
          alt="Bharath Finserv Landscape"
          draggable={false}
          className="hidden md:block w-full h-auto object-cover object-bottom select-none pointer-events-none opacity-95"
        />
        {/* Mobile View Landscape: Tailored layout for phone viewport without excessive gap */}
        <img 
          src={footerMobileImg} 
          alt="Bharath Finserv Landscape"
          draggable={false}
          className="block md:hidden w-full max-w-[460px] mx-auto h-auto object-contain select-none pointer-events-none px-3"
        />
      </div>
    </footer>
  );
}
