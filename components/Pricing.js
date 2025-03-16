function Pricing() {
  try {
    const [selectedPlan, setSelectedPlan] = React.useState('premium');
    
    const plans = {
      standard: {
        name: "Standard Bootcamp",
        price: 499,
        originalPrice: 799,
        features: [
          "48-hour intensive training program",
          "Live group sessions with industry experts",
          "Interview preparation workbook",
          "1 mock interview with personalized feedback",
          "Access to bootcamp community",
          "3 months access to recorded sessions"
        ],
        recommended: false
      },
      premium: {
        name: "Premium Bootcamp",
        price: 899,
        originalPrice: 1299,
        features: [
          "Everything in Standard Bootcamp",
          "2 additional mock interviews (3 total)",
          "1-on-1 coaching session (60 minutes)",
          "Resume & LinkedIn profile review",
          "Salary negotiation strategy session",
          "Lifetime access to recorded sessions",
          "Priority email support for 6 months"
        ],
        recommended: true
      }
    };
    
    const handlePlanSelect = (plan) => {
      setSelectedPlan(plan);
    };
    
    const handleEnrollNow = (plan) => {
      try {
        // This would typically connect to a payment processor
        // For now, we'll just log and show a success message
        console.log(`Enrolling in ${plan} plan`);
        alert(`Thank you for choosing the ${plans[plan].name}! You'll be redirected to complete your registration.`);
      } catch (error) {
        console.error("Enrollment error:", error);
        alert("There was an error processing your enrollment. Please try again.");
      }
    };

    return (
      <section 
        id="pricing" 
        data-name="pricing-section"
        className="section-padding bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span 
              data-name="pricing-label"
              className="inline-block bg-[#ff6b35] text-white text-sm font-bold px-4 py-1 rounded-full mb-4"
            >
              LIMITED TIME OFFER
            </span>
            <h2 
              data-name="pricing-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Choose Your Path to Interview Success
            </h2>
            <p 
              data-name="pricing-subheading"
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Invest in your future with our comprehensive interview preparation program
            </p>
            <div 
              data-name="pricing-countdown-container"
              className="mt-6 inline-block bg-gray-100 px-6 py-3 rounded-lg"
            >
              <span className="text-gray-700 mr-3">Special pricing ends in:</span>
              <span 
                data-name="pricing-countdown"
                className="text-[#ff6b35] font-bold"
              >
                <CountdownTimer targetDate={new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)} />
              </span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {Object.entries(plans).map(([planId, plan]) => (
              <div
                key={planId}
                data-name={`pricing-card-${planId}`}
                className={`pricing-card relative p-8 rounded-lg ${
                  plan.recommended ? 'highlighted' : ''
                }`}
                onClick={() => handlePlanSelect(planId)}
              >
                {plan.recommended && (
                  <div 
                    data-name={`pricing-recommended-badge-${planId}`}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#f7b538] text-white text-sm font-bold px-4 py-1 rounded-full"
                  >
                    MOST POPULAR
                  </div>
                )}
                
                <div 
                  data-name={`pricing-plan-name-${planId}`}
                  className="text-2xl font-bold mb-2"
                >
                  {plan.name}
                </div>
                
                <div 
                  data-name={`pricing-plan-price-container-${planId}`}
                  className="mb-6"
                >
                  <span 
                    data-name={`pricing-plan-currency-${planId}`}
                    className="text-xl align-top"
                  >
                    $
                  </span>
                  <span 
                    data-name={`pricing-plan-price-${planId}`}
                    className="text-5xl font-bold"
                  >
                    {plan.price}
                  </span>
                  {plan.originalPrice && (
                    <span 
                      data-name={`pricing-plan-original-price-${planId}`}
                      className="ml-2 text-gray-500 line-through"
                    >
                      ${plan.originalPrice}
                    </span>
                  )}
                  <div 
                    data-name={`pricing-plan-savings-${planId}`}
                    className="text-sm text-green-600 font-bold"
                  >
                    Save ${plan.originalPrice - plan.price}
                  </div>
                </div>
                
                <ul 
                  data-name={`pricing-plan-features-${planId}`}
                  className="mb-8 space-y-3"
                >
                  {plan.features.map((feature, index) => (
                    <li 
                      key={index}
                      data-name={`pricing-feature-${planId}-${index}`}
                      className="flex items-start"
                    >
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  data-name={`pricing-enroll-button-${planId}`}
                  className={`w-full py-3 rounded-lg font-bold transition-all ${
                    selectedPlan === planId 
                      ? 'bg-[#ff6b35] text-white hover:bg-[#e55a2b]' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => handleEnrollNow(planId)}
                >
                  Enroll Now
                </button>
                
                {plan.recommended && (
                  <div 
                    data-name={`pricing-guarantee-${planId}`}
                    className="mt-4 text-center text-sm text-gray-600"
                  >
                    <i className="fas fa-shield-alt mr-1"></i>
                    30-day money-back guarantee
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div 
            data-name="pricing-trust-badges"
            className="mt-12 text-center"
          >
            <div className="flex flex-wrap justify-center gap-4">
              <div 
                data-name="trust-badge-secure"
                className="trust-badge flex items-center bg-gray-100 px-4 py-2 rounded-lg"
              >
                <i className="fas fa-lock text-gray-700 mr-2"></i>
                <span className="text-sm">Secure Payment</span>
              </div>
              <div 
                data-name="trust-badge-guarantee"
                className="trust-badge flex items-center bg-gray-100 px-4 py-2 rounded-lg"
              >
                <i className="fas fa-shield-alt text-gray-700 mr-2"></i>
                <span className="text-sm">Money-back Guarantee</span>
              </div>
              <div 
                data-name="trust-badge-support"
                className="trust-badge flex items-center bg-gray-100 px-4 py-2 rounded-lg"
              >
                <i className="fas fa-headset text-gray-700 mr-2"></i>
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Pricing component error:', error);
    reportError(error);
    return null;
  }
}
