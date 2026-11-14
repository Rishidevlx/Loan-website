import React, { useState, useRef, useEffect } from 'react';
import { 
  FiArrowDown, 
  FiSend, 
  FiCheckCircle,
  FiAlertCircle,
  FiExternalLink,
  FiShield,
  FiChevronDown,
  FiCheck
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import { themeConfig } from '../config/themeconfig';
import { siteConfig } from '../config/siteConfig';
import { loansDropdownItems } from '../config/navigation';
import { loansProducts } from '../data/loansData';
import { 
  validateContactForm, 
  validateName, 
  validateEmail, 
  validatePhone, 
  validateLoanType, 
  validateMessage 
} from '../validations/contactValidation';
import { sendContactEnquiry } from '../utils/mailSender';
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
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    loanType: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const [isLoanDropdownOpen, setIsLoanDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const dropdownContainerRef = useRef(null);

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsLoanDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsLoanDropdownOpen(false);
    }, 150);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownContainerRef.current && !dropdownContainerRef.current.contains(e.target)) {
        setIsLoanDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  const handleNameChange = (e) => {
    const val = e.target.value.slice(0, 50);
    setFormData((prev) => ({ ...prev, fullName: val }));
    if (errors.fullName) {
      setErrors((prev) => ({ ...prev, fullName: validateName(val) }));
    }
  };

  const handleEmailChange = (e) => {
    const val = e.target.value.slice(0, 50);
    setFormData((prev) => ({ ...prev, email: val }));
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: validateEmail(val) }));
    }
  };

  const handlePhoneChange = (e) => {
    // Only accept numeric digits, up to 10 characters
    const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: digitsOnly }));
    if (errors.phone || digitsOnly.length > 0) {
      setErrors((prev) => ({ ...prev, phone: validatePhone(digitsOnly) }));
    }
  };

  const handleLoanSelect = (loanName) => {
    setFormData((prev) => ({ ...prev, loanType: loanName }));
    setIsLoanDropdownOpen(false);
    if (errors.loanType) {
      setErrors((prev) => ({ ...prev, loanType: '' }));
    }
  };

  const handleMessageChange = (e) => {
    const val = e.target.value.slice(0, 250);
    setFormData((prev) => ({ ...prev, message: val }));
    if (errors.message) {
      setErrors((prev) => ({ ...prev, message: validateMessage(val) }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Comprehensive modular validation
    const { isValid, errors: validationErrors } = validateContactForm(formData);
    if (!isValid) {
      setErrors(validationErrors);
      setStatus({ 
        state: 'error', 
        message: 'Please correct the highlighted errors before submitting your enquiry.' 
      });
      return;
    }

    setErrors({});
    setStatus({ state: 'submitting', message: '' });

    try {
      const result = await sendContactEnquiry(formData);
      if (result.success) {
        setStatus({
          state: 'success',
          message: result.message
        });
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          loanType: '',
          message: ''
        });
        setErrors({});
      } else {
        setStatus({
          state: 'error',
          message: result.message
        });
      }
    } catch (err) {
      setStatus({
        state: 'error',
        message: 'Unable to send enquiry at the moment. Please call us directly at +91 99444 00022.'
      });
    }
  };

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
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-slate-800 uppercase">
                  Contact Bharath Finserv
                </span>
              </div>

              {/* Main H1 Heading - Solid black/navy matching themeConfig sectionHeading */}
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-semibold leading-[1.16] tracking-tight"
                style={{ 
                  color: themeConfig.typography.sectionHeading.color,
                  fontFamily: themeConfig.typography.fontFamily 
                }}
              >
                Empowering <br className="hidden sm:block" />
                Your Every Step.
              </h1>

              {/* Subtitle matching themeConfig body styling */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
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
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-slate-700 uppercase">
                Direct Loan Consultation
              </span>
            </div>
            <h2 
              className="text-3xl sm:text-4xl font-bold tracking-tight text-[#222E48]"
              style={{ color: themeConfig.typography.sectionHeading.color }}
            >
              Get in Touch with Our Advisors
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Submit your enquiry below or contact us directly via call or WhatsApp. We reply promptly during office hours.
            </p>
          </div>

          {/* 2-Column Grid: Form (Left) & Contact Info Cards (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column: Interactive Contact Form (7 cols, reduced rounded-2xl radius) */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200/80">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#222E48] mb-1">
                  Send Us a Message
                </h3>
                <p className="text-sm text-slate-500">
                  Fill in your details and we will get back to you with tailored loan offers.
                </p>
              </div>

              {/* Status Notifications */}
              {status.state === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-emerald-800 text-sm">
                  <FiCheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p>{status.message}</p>
                </div>
              )}

              {status.state === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm">
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Row 1, Col 1: Name (Max 50 chars) */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleNameChange}
                      placeholder="Your Full Name"
                      maxLength={50}
                      className={`w-full px-4 py-3.5 rounded-lg border bg-white text-slate-800 placeholder-slate-400 focus:outline-none transition-colors text-sm ${
                        errors.fullName 
                          ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 bg-rose-50/20' 
                          : 'border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1 font-medium">
                        <FiAlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Row 1, Col 2: Email (Max 50 chars) */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleEmailChange}
                      placeholder="Your Email Address"
                      maxLength={50}
                      className={`w-full px-4 py-3.5 rounded-lg border bg-white text-slate-800 placeholder-slate-400 focus:outline-none transition-colors text-sm ${
                        errors.email 
                          ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 bg-rose-50/20' 
                          : 'border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1 font-medium">
                        <FiAlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Row 2, Col 1: Mobile Number (10 digits, starts with 6,7,8,9) */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-500 font-medium select-none">
                        +91
                      </span>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        inputMode="numeric"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        placeholder="10-digit mobile number"
                        maxLength={10}
                        className={`w-full pl-14 pr-4 py-3.5 rounded-lg border bg-white text-slate-800 placeholder-slate-400 focus:outline-none transition-colors text-sm ${
                          errors.phone 
                            ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 bg-rose-50/20' 
                            : 'border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1 font-medium">
                        <FiAlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Row 2, Col 2: Custom Loan Dropdown (Smooth Hover & Click with Animated Arrow) */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Loan Requirement <span className="text-rose-500">*</span>
                    </label>
                    <div 
                      ref={dropdownContainerRef}
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleDropdownMouseLeave}
                      className="relative"
                    >
                      {/* Interactive Field Button */}
                      <button
                        type="button"
                        onClick={() => setIsLoanDropdownOpen(prev => !prev)}
                        className={`w-full flex items-center justify-between px-4 py-3.5 border bg-white transition-all text-sm cursor-pointer select-none text-left ${
                          isLoanDropdownOpen 
                            ? 'rounded-t-lg rounded-b-none border-blue-500 border-b-slate-100 shadow-xs' 
                            : errors.loanType
                              ? 'rounded-lg border-rose-400 bg-rose-50/20'
                              : 'rounded-lg border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <span className={formData.loanType ? 'text-slate-800 font-medium' : 'text-slate-400'}>
                          {formData.loanType || 'Select Loan Type'}
                        </span>
                        
                        {/* Down Arrow with Increased Size and Margin Right */}
                        <FiChevronDown 
                          className={`w-5 h-5 text-slate-500 mr-1 shrink-0 transition-transform duration-300 ${
                            isLoanDropdownOpen ? 'rotate-180 text-blue-600' : ''
                          }`}
                        />
                      </button>

                      {/* Smooth Downward Animated Dropdown Menu (Attached directly with zero gap) */}
                      <div 
                        className={`absolute left-0 right-0 top-full -mt-px z-50 bg-white rounded-b-lg shadow-xl border border-blue-500 border-t-0 py-1.5 transition-all duration-200 origin-top ${
                          isLoanDropdownOpen 
                            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' 
                            : 'opacity-0 scale-95 -translate-y-1 pointer-events-none'
                        }`}
                      >
                        {loansProducts.map((loan) => {
                          const isSelected = formData.loanType === loan.name;
                          return (
                            <div
                              key={loan.name}
                              onClick={() => handleLoanSelect(loan.name)}
                              className={`px-4 py-2.5 flex items-center justify-between text-sm cursor-pointer transition-colors ${
                                isSelected 
                                  ? 'bg-blue-50 text-blue-600 font-semibold' 
                                  : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                {loan.icon && (
                                  <img 
                                    src={loan.icon} 
                                    alt={loan.name}
                                    className="w-5 h-5 object-contain shrink-0" 
                                  />
                                )}
                                <span>{loan.name}</span>
                              </div>
                              {isSelected && (
                                <FiCheck className="w-4 h-4 text-blue-600 shrink-0" />
                              )}
                            </div>
                          );
                        })}

                        {/* Extra option: Other Financial Requirement */}
                        <div
                          onClick={() => handleLoanSelect('Other Financial Requirement')}
                          className={`px-4 py-2.5 flex items-center justify-between text-sm cursor-pointer border-t border-slate-100 transition-colors ${
                            formData.loanType === 'Other Financial Requirement'
                              ? 'bg-blue-50 text-blue-600 font-semibold' 
                              : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">
                              +
                            </span>
                            <span className="truncate">Other Financial Requirement</span>
                          </div>
                          {formData.loanType === 'Other Financial Requirement' && (
                            <FiCheck className="w-4 h-4 text-blue-600 shrink-0" />
                          )}
                        </div>
                      </div>
                    </div>
                    {errors.loanType && (
                      <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1 font-medium">
                        <FiAlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.loanType}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 3: Message (Max 250 chars) */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700">
                      Your Message
                    </label>
                    <span className="text-xs text-slate-400 font-medium select-none">
                      {formData.message.length}/250 characters
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleMessageChange}
                    maxLength={250}
                    placeholder="Briefly describe your loan requirement (optional)..."
                    className={`w-full px-4 py-3.5 rounded-lg border bg-white text-slate-800 placeholder-slate-400 focus:outline-none transition-colors text-sm resize-none ${
                      errors.message 
                        ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 bg-rose-50/20' 
                        : 'border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1 font-medium">
                      <FiAlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button (Text: Submit) */}
                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={status.state === 'submitting'}
                    className="w-full py-3.5 px-6 rounded-lg font-semibold text-white shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 transform active:scale-[0.99] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{ backgroundColor: themeConfig.colors.primary }}
                  >
                    {status.state === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <FiSend className="w-4 h-4" />
                        <span>Submit</span>
                      </>
                    )}
                  </button>

                  {/* Confidentiality note with Shield Icon */}
                  <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 pt-3">
                    <FiShield className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Zero upfront fees. Your contact info is 100% confidential.</span>
                  </div>
                </div>
              </form>
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
