function CallToAction() {
  try {
    const scrollToRegistration = () => {
      document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
    };

    return (
      <section 
        data-name="cta-section"
        className="py-20 gradient-bg text-white relative overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              data-name="cta-heading"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Transform Your Interview Performance?
            </h2>
            <p 
              data-name="cta-subheading"
              className="text-xl mb-8 text-gray-200"
            >
              Join thousands of successful professionals who have landed their dream jobs after our bootcamp
            </p>
            <div 
              data-name="cta-countdown-container"
              className="mb-8 inline-block bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg"
            >
              <div className="text-lg mb-2">Next cohort starts in:</div>
              <div 
                data-name="cta-countdown"
                className="text-3xl font-bold text-[#f7b538]"
              >
                <CountdownTimer targetDate={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)} />
              </div>
              <div className="text-sm mt-2">Limited spots available!</div>
            </div>
            <div 
              data-name="cta-buttons"
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button 
                data-name="cta-primary-button"
                className="btn-primary text-lg py-4 px-8 pulse"
                onClick={scrollToRegistration}
              >
                Secure Your Spot Now
              </button>
              <a 
                href="#testimonials"
                data-name="cta-secondary-button"
                className="btn-secondary text-lg py-4 px-8"
              >
                See More Success Stories
              </a>
            </div>
            <div 
              data-name="cta-guarantee"
              className="mt-8 flex items-center justify-center text-gray-200"
            >
              <i className="fas fa-shield-alt mr-2 text-[#f7b538]"></i>
              <span>30-day money-back guarantee if you're not completely satisfied</span>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div 
          className="absolute top-0 right-0 w-64 h-64 bg-[#ff6b35] opacity-10 rounded-full blur-3xl"
          data-name="cta-decorative-circle-1"
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-80 h-80 bg-[#f7b538] opacity-10 rounded-full blur-3xl"
          data-name="cta-decorative-circle-2"
        ></div>
      </section>
    );
  } catch (error) {
    console.error('CallToAction component error:', error);
    reportError(error);
    return null;
  }
}
