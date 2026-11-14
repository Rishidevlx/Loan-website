import React, { useState, useRef, useEffect } from 'react';
import { 
  FiSend, 
  FiCheckCircle, 
  FiAlertCircle, 
  FiShield, 
  FiChevronDown, 
  FiCheck 
} from 'react-icons/fi';
import { themeConfig } from '../../../config/themeconfig';
import { loansProducts } from '../../../data/loansData';
import { 
  validateContactForm, 
  validateName, 
  validateEmail, 
  validatePhone, 
  validateMessage 
} from '../../../validations/contactValidation';
import { sendContactEnquiry } from '../../../utils/mailSender';

/**
 * Reusable Contact & Loan Consultation Form
 * Includes real-time validation, numeric phone restrictions, custom animated loan dropdown,
 * dynamic character counter, and serverless Nodemailer email delivery.
 */
export default function ContactForm({
  title = "Send Us a Message",
  subtitle = "Fill in your details and we will get back to you with tailored loan offers.",
  defaultLoanType = "",
  className = ""
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    loanType: defaultLoanType || '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const [isLoanDropdownOpen, setIsLoanDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const dropdownContainerRef = useRef(null);

  // Freeze form fields and interaction while submission request is in-flight
  const isSubmitting = status.state === 'submitting';

  const handleDropdownMouseEnter = () => {
    if (isSubmitting) return;
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsLoanDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    if (isSubmitting) return;
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
    if (isSubmitting) return;
    const val = e.target.value.slice(0, 50);
    setFormData((prev) => ({ ...prev, fullName: val }));
    if (errors.fullName) {
      setErrors((prev) => ({ ...prev, fullName: validateName(val) }));
    }
  };

  const handleEmailChange = (e) => {
    if (isSubmitting) return;
    const val = e.target.value.slice(0, 50);
    setFormData((prev) => ({ ...prev, email: val }));
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: validateEmail(val) }));
    }
  };

  const handlePhoneChange = (e) => {
    if (isSubmitting) return;
    // Only accept numeric digits, up to 10 characters
    const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: digitsOnly }));
    if (errors.phone || digitsOnly.length > 0) {
      setErrors((prev) => ({ ...prev, phone: validatePhone(digitsOnly) }));
    }
  };

  const handleLoanSelect = (loanName) => {
    if (isSubmitting) return;
    setFormData((prev) => ({ ...prev, loanType: loanName }));
    setIsLoanDropdownOpen(false);
    if (errors.loanType) {
      setErrors((prev) => ({ ...prev, loanType: '' }));
    }
  };

  const handleMessageChange = (e) => {
    if (isSubmitting) return;
    const val = e.target.value.slice(0, 250);
    setFormData((prev) => ({ ...prev, message: val }));
    if (errors.message) {
      setErrors((prev) => ({ ...prev, message: validateMessage(val) }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsLoanDropdownOpen(false);
    
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
    <div className={`bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200/80 ${className}`}>
      {/* Form Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-[#222E48] mb-1">
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm text-slate-500">
            {subtitle}
          </p>
        )}
      </div>

      {/* Success Notification Banner */}
      {status.state === 'success' && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-emerald-800 text-sm">
          <FiCheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">{status.message}</p>
        </div>
      )}

      {/* Error Notification Banner */}
      {status.state === 'error' && (
        <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-rose-800 text-sm">
          <FiAlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">{status.message}</p>
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
              disabled={isSubmitting}
              value={formData.fullName}
              onChange={handleNameChange}
              placeholder="Your Full Name"
              maxLength={50}
              className={`w-full px-4 py-3.5 rounded-lg border bg-white text-slate-800 placeholder-slate-400 focus:outline-none transition-colors text-sm disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed disabled:border-slate-200 ${
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
              disabled={isSubmitting}
              value={formData.email}
              onChange={handleEmailChange}
              placeholder="Your Email Address"
              maxLength={50}
              className={`w-full px-4 py-3.5 rounded-lg border bg-white text-slate-800 placeholder-slate-400 focus:outline-none transition-colors text-sm disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed disabled:border-slate-200 ${
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
              <span className={`absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium select-none ${isSubmitting ? 'text-slate-400' : 'text-slate-500'}`}>
                +91
              </span>
              <input
                id="phone"
                type="tel"
                name="phone"
                inputMode="numeric"
                disabled={isSubmitting}
                value={formData.phone}
                onChange={handlePhoneChange}
                placeholder="10-digit mobile number"
                maxLength={10}
                className={`w-full pl-14 pr-4 py-3.5 rounded-lg border bg-white text-slate-800 placeholder-slate-400 focus:outline-none transition-colors text-sm disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed disabled:border-slate-200 ${
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
                disabled={isSubmitting}
                onClick={() => !isSubmitting && setIsLoanDropdownOpen(prev => !prev)}
                className={`w-full flex items-center justify-between px-4 py-3.5 border transition-all text-sm select-none text-left ${
                  isSubmitting
                    ? 'bg-slate-50 text-slate-400 cursor-not-allowed border-slate-200 rounded-lg'
                    : isLoanDropdownOpen 
                      ? 'bg-white rounded-t-lg rounded-b-none border-blue-500 border-b-slate-100 shadow-xs cursor-pointer' 
                      : errors.loanType
                        ? 'bg-rose-50/20 rounded-lg border-rose-400 cursor-pointer'
                        : 'bg-white rounded-lg border-slate-200 hover:border-slate-300 cursor-pointer'
                }`}
              >
                <span className={formData.loanType ? (isSubmitting ? 'text-slate-500 font-medium' : 'text-slate-800 font-medium') : 'text-slate-400'}>
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
                  isLoanDropdownOpen && !isSubmitting
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
            disabled={isSubmitting}
            value={formData.message}
            onChange={handleMessageChange}
            maxLength={250}
            placeholder="Briefly describe your loan requirement (optional)..."
            className={`w-full px-4 py-3.5 rounded-lg border bg-white text-slate-800 placeholder-slate-400 focus:outline-none transition-colors text-sm resize-none disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed disabled:border-slate-200 ${
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
  );
}
