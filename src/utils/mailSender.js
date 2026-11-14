/**
 * Client-side email sending utility for Bharath Finserv
 * Sends formatted loan enquiry to backend/serverless endpoint
 */

/**
 * Submits the contact enquiry to the serverless /api/contact endpoint
 * @param {Object} formData { fullName, email, phone, loanType, message }
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export const sendContactEnquiry = async (formData) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.toString().replace(/\D/g, ''),
        loanType: formData.loanType,
        message: formData.message ? formData.message.trim() : '',
        timestamp: new Date().toISOString(),
      }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.message || 'Failed to send enquiry. Please try again.');
    }

    return {
      success: true,
      message: data.message || 'Your enquiry has been received successfully. Our loan advisor will call you within 15 minutes.'
    };
  } catch (error) {
    console.error('Email sending error:', error);
    return {
      success: false,
      message: error.message || 'Unable to connect to the enquiry service. Please call us directly.'
    };
  }
};
