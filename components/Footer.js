function Footer() {
  try {
    const currentYear = new Date().getFullYear();

    return (
      <footer 
        data-name="footer"
        className="bg-[#0a2342] text-white pt-16 pb-8"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div data-name="footer-about">
              <h3 
                data-name="footer-about-heading"
                className="text-xl font-bold mb-4"
              >
                Interview Bootcamp
              </h3>
              <p 
                data-name="footer-about-text"
                className="text-gray-300 mb-4"
              >
                We help job seekers master the art of interviewing and land their dream roles through 
                intensive training and personalized coaching.
              </p>
              <div 
                data-name="footer-social"
                className="flex space-x-4"
              >
                <a href="#" className="text-gray-300 hover:text-[#ff6b35]">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-[#ff6b35]">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-[#ff6b35]">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            
            <div data-name="footer-quick-links">
              <h3 
                data-name="footer-links-heading"
                className="text-xl font-bold mb-4"
              >
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#benefits" className="text-gray-300 hover:text-[#ff6b35]">Benefits</a>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-300 hover:text-[#ff6b35]">Success Stories</a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-300 hover:text-[#ff6b35]">Pricing</a>
                </li>
                <li>
                  <a href="#faq" className="text-gray-300 hover:text-[#ff6b35]">FAQ</a>
                </li>
              </ul>
            </div>
            
            <div data-name="footer-contact">
              <h3 
                data-name="footer-contact-heading"
                className="text-xl font-bold mb-4"
              >
                Contact Us
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:support@interviewbootcamp.com" className="text-gray-300 hover:text-[#ff6b35]">
                    support@interviewbootcamp.com
                  </a>
                </li>
                <li>
                  <a href="tel:+1-888-555-0123" className="text-gray-300 hover:text-[#ff6b35]">
                    +1 (888) 555-0123
                  </a>
                </li>
              </ul>
            </div>
            
            <div data-name="footer-newsletter">
              <h3 
                data-name="footer-newsletter-heading"
                className="text-xl font-bold mb-4"
              >
                Get Interview Tips
              </h3>
              <p className="text-gray-300 mb-4">
                Subscribe to our newsletter for weekly interview tips and career advice.
              </p>
              <form 
                data-name="footer-newsletter-form"
                className="flex"
                onSubmit={(e) => {
                  e.preventDefault();
                  // Newsletter subscription logic would go here
                }}
              >
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-grow px-4 py-2 rounded-l-md text-gray-900"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-[#ff6b35] px-4 py-2 rounded-r-md hover:bg-opacity-90"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          <div 
            data-name="footer-bottom"
            className="pt-8 mt-8 border-t border-gray-700 text-center text-gray-400"
          >
            <div className="mb-4">
              <a href="#" className="mx-3 hover:text-[#ff6b35]">Privacy Policy</a>
              <a href="#" className="mx-3 hover:text-[#ff6b35]">Terms of Service</a>
              <a href="#" className="mx-3 hover:text-[#ff6b35]">Cookie Policy</a>
            </div>
            <p>
              © {currentYear} Interview Bootcamp. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    reportError(error);
    return null;
  }
}
