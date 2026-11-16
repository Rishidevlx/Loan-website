import React, { useState, useRef, useEffect } from 'react';
import { FiArrowDown } from 'react-icons/fi';
import { themeConfig } from '../config/themeconfig';
import { siteConfig } from '../config/siteConfig';
import ContactForm from '../components/UI/forms/ContactForm';
import OutlineBtn from '../components/UI/btns/OutlineBtn';
import stairsImg from '../assets/contact/stairs.webp';
import phoneIcon from '../assets/contact/icons8-phone-100.png';
import mailIcon from '../assets/contact/icons8-mail-100.png';
import addressIcon from '../assets/contact/icons8-address-100.png';

/**
 * ContactDetailCard - Features a continuous dashed outer border with a smooth downward scoop curve
 * perfectly concentric around the floating top icon, with matching inner card clip and cursor-aware blue ripple.
 */
function ContactDetailCard({ id, icon, heading, value, href, isMultiline = false }) {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const [size, setSize] = useState({ w: 460, h: 155 });
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      if (width > 0 && height > 0) {
        setSize({ w: width, h: height });
      }
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const handleMouseEnter = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setCoords({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
    setIsHovered(true);
  };

  const handleMouseLeave = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setCoords({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
    setIsHovered(false);
  };

  const { w, h } = size;
  const cx = w / 2;
  const r_out = 24;
  const p = 8;
  const r_in = 16;

  // Exact concentric circular arcs centered at (cx, 0):
  // 1. Icon: diameter 64px, radius 32px (bottom at y = 32)
  // 2. Outer dashed scoop: radius 38px (bottom at y = 38, exactly 6px clearance around icon)
  // 3. Inner card scoop: radius 46px (bottom at y = 46, exactly 8px parallel gap from dashed line)
  // At y = 8, circle with radius 46 intersects at cx +- sqrt(46^2 - 8^2) = cx +- 45.3
  const x_in = Math.sqrt(Math.max(0, 46 * 46 - p * p));

  const outerPath = `M ${r_out} 0 L ${(cx - 38).toFixed(1)} 0 A 38 38 0 0 0 ${(cx + 38).toFixed(1)} 0 L ${w - r_out} 0 A ${r_out} ${r_out} 0 0 1 ${w} ${r_out} L ${w} ${h - r_out} A ${r_out} ${r_out} 0 0 1 ${w - r_out} ${h} L ${r_out} ${h} A ${r_out} ${r_out} 0 0 1 0 ${h - r_out} L 0 ${r_out} A ${r_out} ${r_out} 0 0 1 ${r_out} 0 Z`;

  const innerClipPath = `M ${p + r_in} ${p} L ${(cx - x_in).toFixed(1)} ${p} A 46 46 0 0 0 ${(cx + x_in).toFixed(1)} ${p} L ${w - p - r_in} ${p} A ${r_in} ${r_in} 0 0 1 ${w - p} ${p + r_in} L ${w - p} ${h - p - r_in} A ${r_in} ${r_in} 0 0 1 ${w - p - r_in} ${h - p} L ${p + r_in} ${h - p} A ${r_in} ${r_in} 0 0 1 ${p} ${h - p - r_in} L ${p} ${p + r_in} A ${r_in} ${r_in} 0 0 1 ${p + r_in} ${p} Z`;

  return (
    <div 
      ref={containerRef}
      className="relative w-full transition-all duration-300"
    >
      {/* Outer Dashed Border & Inner Card Clip Definition */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none z-10" 
        style={{ overflow: 'visible' }}
      >
        <defs>
          <clipPath id={`inner-clip-${id}`}>
            <path d={innerClipPath} />
          </clipPath>
        </defs>
        <path 
          d={outerPath} 
          fill="none" 
          stroke="#CBD5E1" 
          strokeWidth="2" 
          strokeDasharray="6 6" 
        />
      </svg>

      {/* Floating Icon: Exactly concentric with center at (cx, 0), radius 32px */}
      <div 
        className="absolute -top-8 left-1/2 w-16 h-16 rounded-full bg-white border border-slate-200/90 shadow-sm flex items-center justify-center p-2.5 z-20 pointer-events-none"
        style={{
          transform: 'translate(-50%, 0)',
          boxShadow: '0 1px 3px rgba(0,0,0,0.06)'
        }}
      >
        <img 
          src={icon} 
          alt={heading} 
          className="w-full h-full object-contain select-none" 
        />
      </div>

      {/* Inner White Card with Mouse-Entry Ripple Hover Effect & Concentric Scoop Clip */}
      <div
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-full overflow-hidden bg-white p-6 pt-14 pb-7 text-center shadow-xs transition-all duration-300 min-h-[145px] sm:min-h-[155px] flex flex-col items-center justify-center cursor-pointer"
        style={{
          clipPath: `url(#inner-clip-${id})`,
          boxShadow: isHovered ? '0 16px 36px rgba(37, 99, 235, 0.22)' : 'none',
          transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
        }}
      >
        {/* Dynamic Expanding Circle Overlay (Brand Blue) */}
        <span
          className="absolute rounded-full pointer-events-none transition-transform duration-700 ease-out"
          style={{
            left: `${coords.x}px`,
            top: `${coords.y}px`,
            width: '900px',
            height: '900px',
            backgroundColor: themeConfig.colors.primary,
            transform: isHovered 
              ? 'translate(-50%, -50%) scale(1)' 
              : 'translate(-50%, -50%) scale(0)',
            willChange: 'transform',
          }}
        />

        {/* Card Content above the expanding blue background */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <span 
            className="text-xs font-bold uppercase tracking-wider mb-1.5 transition-colors duration-300"
            style={{
              color: isHovered ? 'rgba(255, 255, 255, 0.9)' : '#64748B'
            }}
          >
            {heading}
          </span>
          {href ? (
            <a 
              href={href}
              className="text-base sm:text-lg font-bold transition-colors duration-300 block"
              style={{
                color: isHovered ? '#FFFFFF' : '#0F172A'
              }}
            >
              {value}
            </a>
          ) : (
            <p 
              className={`font-semibold transition-colors duration-300 ${isMultiline ? 'text-xs sm:text-sm max-w-sm mx-auto leading-relaxed' : 'text-sm sm:text-base'}`}
              style={{
                color: isHovered ? '#FFFFFF' : '#0F172A'
              }}
            >
              {value}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div 
      className="min-h-screen bg-white"
      style={{ fontFamily: themeConfig.typography.fontFamily }}
    >
      {/* ========================================================= */}
      {/* 1. HERO SECTION (Flush Stairs to Screen Edge, Theme Fonts)*/}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-white pt-10 pb-0 sm:py-16 lg:py-24 border-b border-slate-100">
        
        {/* Stairs graphic pinned flush against the right display/screen edge (Hanging directly on the right screen edge) */}
        <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 w-[52%] xl:w-[54%] justify-end pointer-events-none select-none z-10 overflow-hidden">
          <img
            src={stairsImg}
            alt="Financial Progress Stairs - Bharath Finserv"
            draggable={false}
            className="w-full max-w-2xl xl:max-w-3xl h-auto object-contain select-none pointer-events-none translate-x-[2%]"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Area: Styled identically to Home Page Typography & Star Spark */}
            <div className="lg:col-span-7 space-y-6 max-w-2xl">
              
              {/* Eyebrow with Home Page Loan Spark SVG Icon */}
              <div className="flex items-center gap-2.5">
                <svg 
                  className="w-5 h-5 text-blue-600 shrink-0" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M12 2L13.8 8.2C14.3 9.7 15.5 10.9 17 11.4L23.2 13.2L17 15C15.5 15.5 14.3 16.7 13.8 18.2L12 24.4L10.2 18.2C9.7 16.7 8.5 15.5 7 15L0.8 13.2L7 11.4C8.5 10.9 9.7 9.7 10.2 8.2L12 2Z" 
                    fill="currentColor"
                  />
                </svg>
                <span 
                  className="text-xs sm:text-sm font-medium tracking-wider uppercase"
                  style={{ color: themeConfig.colors.textHeading }}
                >
                  Contact Bharath Finserv
                </span>
              </div>

              {/* Main H1 Heading (49.2px, weight 500, color #262626) */}
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[49.2px] font-medium leading-[1.2] tracking-tight"
                style={{ color: themeConfig.colors.textHeading }}
              >
                Empowering <br className="hidden sm:block" />
                Your Every Step.
              </h1>

              {/* Subtitle matching themeConfig body styling (18.45px, weight 300, color #262626) */}
              <p 
                className="text-base sm:text-[18.45px] font-light leading-relaxed max-w-xl"
                style={{ color: themeConfig.colors.textBody }}
              >
                Have questions about loan eligibility, interest rates, or fast documentation? 
                Speak directly with Velandipalayam's trusted loan advisors helping borrowers across 16+ banks.
              </p>

              {/* Action Button: Outlined Btn with Smooth Radial Entry Hover Expansion */}
              <div className="pt-2">
                <OutlineBtn
                  href="#contact-form"
                  endIcon={FiArrowDown}
                  className="py-3.5 px-7"
                >
                  Send an Enquiry
                </OutlineBtn>
              </div>

            </div>

            {/* Mobile/Tablet Stairs Display (Hanging on the right edge, flush to bottom) */}
            <div className="lg:hidden flex justify-end mt-4 -mr-4 sm:-mr-6 pointer-events-none select-none overflow-hidden -mb-px">
              <img
                src={stairsImg}
                alt="Financial Progress Stairs - Bharath Finserv"
                draggable={false}
                className="w-full max-w-sm sm:max-w-md h-auto object-contain select-none pointer-events-none translate-x-[2%] block"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. FORM & CONTACT DETAILS SECTION (#EDF0EC Background)    */}
      {/* ========================================================= */}
      <section 
        id="contact-form" 
        className="pt-15 pb-16 sm:py-24 relative"
        style={{ backgroundColor: themeConfig.colors.sectionProductsBg }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header with Loan Spark Star SVG Icon */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
            <div className="inline-flex items-center gap-2">
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
              <span 
                className="text-xs sm:text-sm font-medium tracking-wider uppercase"
                style={{ color: themeConfig.colors.textHeading }}
              >
                Direct Loan Consultation
              </span>
            </div>
            {/* Section Heading (24.6px - 28px, weight 400, color #262626) */}
            <h2 
              className="text-2xl sm:text-3xl md:text-[28px] font-normal tracking-tight"
              style={{ color: themeConfig.colors.textHeading }}
            >
              Get in Touch with Our Advisors
            </h2>
            <p 
              className="text-base sm:text-[18.45px] font-light leading-relaxed"
              style={{ color: themeConfig.colors.textBody }}
            >
              Submit your enquiry below or contact us directly via call or WhatsApp. We reply promptly during office hours.
            </p>
          </div>

          {/* 2-Column Grid: Form (Left) & Contact Info Cards (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column: Reusable Interactive Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: One-by-One Rectangular Contact Cards with Outer Dashed Border & Floating Icons (5 cols) */}
            <div className="lg:col-span-5 space-y-9 sm:space-y-10 pt-7">
              
              {/* Card 1: Direct Phone */}
              <ContactDetailCard
                id="phone"
                icon={phoneIcon}
                heading="Call Now"
                value={`+91 ${siteConfig.phoneDisplay}`}
                href={`tel:${siteConfig.phoneRaw}`}
              />

              {/* Card 2: Email */}
              <ContactDetailCard
                id="email"
                icon={mailIcon}
                heading="Email Us"
                value={siteConfig.email}
                href={`mailto:${siteConfig.email}`}
              />

              {/* Card 3: Coimbatore Office Address */}
              <ContactDetailCard
                id="address"
                icon={addressIcon}
                heading="Office Address"
                value={siteConfig.address.full}
                isMultiline={true}
              />

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
