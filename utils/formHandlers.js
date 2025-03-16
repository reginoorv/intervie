const formHandlers = {
  validateEmail: (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  },

  validatePhone: (phone) => {
    const re = /^\+?[\d\s-]{10,}$/;
    return re.test(phone);
  },

  validateCardNumber: (cardNumber) => {
    const re = /^[\d\s-]{15,19}$/;
    return re.test(cardNumber.replace(/\s/g, ''));
  },

  formatCardNumber: (cardNumber) => {
    return cardNumber.replace(/\s/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim();
  },

  validateExpiryDate: (month, year) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    const expMonth = parseInt(month, 10);
    const expYear = parseInt(year, 10);

    if (expYear < currentYear) return false;
    if (expYear === currentYear && expMonth < currentMonth) return false;
    if (expMonth < 1 || expMonth > 12) return false;

    return true;
  },

  validateCVC: (cvc) => {
    const re = /^\d{3,4}$/;
    return re.test(cvc);
  },

  handlePaymentSubmit: async (formData) => {
    try {
      // Validate form data
      if (!formHandlers.validateEmail(formData.email)) {
        throw new Error('Invalid email address');
      }

      if (!formHandlers.validatePhone(formData.phone)) {
        throw new Error('Invalid phone number');
      }

      if (!formHandlers.validateCardNumber(formData.cardNumber)) {
        throw new Error('Invalid card number');
      }

      if (!formHandlers.validateExpiryDate(formData.expMonth, formData.expYear)) {
        throw new Error('Invalid expiry date');
      }

      if (!formHandlers.validateCVC(formData.cvc)) {
        throw new Error('Invalid CVC');
      }

      // Process payment
      const response = await apiService.enrollUser(formData);
      return response;
    } catch (error) {
      console.error('Payment submission error:', error);
      throw error;
    }
  }
};
