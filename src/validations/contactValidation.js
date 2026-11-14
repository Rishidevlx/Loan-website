/**
 * Contact Form Validation Rules & Helpers
 * Reusable across any enquiry/contact forms in Bharath Finserv
 */

/**
 * Validates Full Name
 * - Required
 * - Max 50 characters
 * - Letters and basic punctuation only
 */
export const validateName = (name) => {
  if (!name || !name.trim()) {
    return 'Full name is required';
  }
  const trimmed = name.trim();
  if (trimmed.length < 2) {
    return 'Name must be at least 2 characters';
  }
  if (trimmed.length > 50) {
    return 'Name cannot exceed 50 characters';
  }
  // Allow letters, spaces, dots, and hyphens (common Indian naming formats)
  const nameRegex = /^[a-zA-Z\s.'-]+$/;
  if (!nameRegex.test(trimmed)) {
    return 'Name should only contain letters and spaces';
  }
  return '';
};

/**
 * Validates Email Address
 * - Required
 * - Max 50 characters
 * - Valid RFC email format
 */
export const validateEmail = (email) => {
  if (!email || !email.trim()) {
    return 'Email address is required';
  }
  const trimmed = email.trim();
  if (trimmed.length > 50) {
    return 'Email address cannot exceed 50 characters';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(trimmed)) {
    return 'Please enter a valid email address';
  }
  return '';
};

/**
 * Validates Mobile Number
 * - Required
 * - Exactly 10 digits
 * - Numbers only
 * - Must start with 6, 7, 8, or 9 (Indian telecom standards)
 */
export const validatePhone = (phone) => {
  if (!phone || !phone.toString().trim()) {
    return 'Mobile number is required';
  }
  const cleanPhone = phone.toString().replace(/\D/g, '');
  if (cleanPhone.length === 0) {
    return 'Mobile number is required';
  }
  if (!/^[6-9]/.test(cleanPhone)) {
    return 'Mobile number must start with 6, 7, 8, or 9';
  }
  if (cleanPhone.length !== 10) {
    return 'Mobile number must be exactly 10 digits';
  }
  return '';
};

/**
 * Validates Loan Requirement Dropdown
 * - Required
 * - Must not be empty or placeholder
 */
export const validateLoanType = (loanType) => {
  if (!loanType || !loanType.trim() || loanType === 'Select Loan Type') {
    return 'Please select your loan requirement';
  }
  return '';
};

/**
 * Validates User Message
 * - Optional
 * - Max 250 characters
 */
export const validateMessage = (message) => {
  if (message && message.length > 250) {
    return 'Message cannot exceed 250 characters';
  }
  return '';
};

/**
 * Composite validator for full contact form
 * @param {Object} formData { fullName, email, phone, loanType, message }
 * @returns {Object} { isValid: boolean, errors: Object }
 */
export const validateContactForm = (formData) => {
  const errors = {};

  const nameError = validateName(formData.fullName);
  if (nameError) errors.fullName = nameError;

  const emailError = validateEmail(formData.email);
  if (emailError) errors.email = emailError;

  const phoneError = validatePhone(formData.phone);
  if (phoneError) errors.phone = phoneError;

  const loanTypeError = validateLoanType(formData.loanType);
  if (loanTypeError) errors.loanType = loanTypeError;

  const messageError = validateMessage(formData.message);
  if (messageError) errors.message = messageError;

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
