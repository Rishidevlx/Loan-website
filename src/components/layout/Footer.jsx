import React from 'react';
import { FiPhoneCall, FiMail, FiMapPin, FiClock, FiArrowUpRight } from 'react-icons/fi';
import { loansDropdownItems, footerQuickLinks, footerLegalLinks } from '../../config/navigation';
import { siteConfig } from '../../config/siteConfig';
import { themeConfig } from '../../config/themeconfig';
import logoImg from '../../assets/logo/logo.jpeg';

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 items-start">
          
          {/* Column 1: Brand & Overview (Reduced border radius to rounded-lg) */}
          <div className="space-y-4">
            <div className="bg-white p-2.5 rounded-lg inline-flex items-center shadow-md">
              <img 
                src={logoImg} 
                alt={siteConfig.name} 
                className="h-16 sm:h-20 w-auto object-contain" 
              />
            </div>

            <p className="text-sm text-slate-300/90 leading-relaxed pt-1">
              {siteConfig.description}
            </p>
          </div>

          {/* Column 2: Loan Solutions (All 6 Loans) */}
          <div>
            <div className="mb-5">
              <h3 className="text-white font-semibold text-base tracking-wide">
                Loan Offerings
              </h3>
            </div>
            <ul className="space-y-3 text-sm">
              {loansDropdownItems.map((loan) => (
                <li key={loan.name}>
                  <a 
                    href={loan.slug}
                    className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-200"
                  >
                    <span>{loan.name}</span>
                    <FiArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & Compliance (Privacy Policy & Terms) */}
          <div>
            <div className="mb-5">
              <h3 className="text-white font-semibold text-base tracking-wide">
                Legal & Compliance
              </h3>
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="/privacy-policy"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-200"
                >
                  <span>Privacy Policy</span>
                  <FiArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </li>
              <li>
                <a 
                  href="/terms-and-conditions"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-200"
                >
                  <span>Terms & Conditions</span>
                  <FiArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <div className="mb-5">
              <h3 className="text-white font-semibold text-base tracking-wide">
                Contact Information
              </h3>
            </div>
            
            <div className="space-y-3.5 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <FiMapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{siteConfig.address.full}</span>
              </div>
              <div className="flex items-center gap-3">
                <FiPhoneCall className="w-4 h-4 text-blue-400 shrink-0" />
                <a 
                  href={`tel:${siteConfig.phoneRaw}`} 
                  className="hover:text-white hover:underline transition-colors"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="w-4 h-4 text-blue-400 shrink-0" />
                <a 
                  href={`mailto:${siteConfig.email}`} 
                  className="hover:text-white hover:underline transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-3 pt-1">
                <FiClock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-400">{siteConfig.timings}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory Loan Disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-700/60 text-xs text-slate-400/90 leading-relaxed">
          <p>
            <strong className="text-slate-300">Important Disclaimer: </strong>
            {siteConfig.disclaimer}
          </p>
        </div>

        {/* Bottom Copyright & Credit Links */}
        <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
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
    </footer>
  );
}
