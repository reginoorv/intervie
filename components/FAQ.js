function FAQ() {
  try {
    const [activeIndex, setActiveIndex] = React.useState(null);
    
    const faqs = [
      {
        id: 1,
        question: "How is the bootcamp structured?",
        answer: "Our bootcamp is an intensive 48-hour program spread over two weekends. It includes live sessions with industry experts, interactive workshops, mock interviews, and personalized feedback. You'll also receive resources to continue practicing after the bootcamp ends."
      },
      {
        id: 2,
        question: "Who are the instructors?",
        answer: "Our instructors are seasoned HR professionals, career coaches, and hiring managers from top companies who have conducted thousands of interviews. They bring real-world expertise and insider knowledge to help you understand exactly what employers are looking for."
      },
      {
        id: 3,
        question: "Is this bootcamp suitable for all career levels?",
        answer: "Yes! We have participants ranging from recent graduates to senior executives. The bootcamp content adapts to your experience level, and our coaches provide personalized guidance based on your specific career stage and goals."
      },
      {
        id: 4,
        question: "What if I can't attend all the live sessions?",
        answer: "All sessions are recorded and available for replay. While we encourage live participation for the interactive components, you can catch up on any missed content and still submit your mock interview recordings for feedback."
      },
      {
        id: 5,
        question: "How is this different from free interview advice online?",
        answer: "Unlike generic advice, our bootcamp provides personalized feedback, industry-specific strategies, and realistic practice with professionals who actually conduct interviews. We focus on practical application rather than theory, with tailored guidance for your specific situation."
      },
      {
        id: 6,
        question: "Do you offer a money-back guarantee?",
        answer: "Yes, we offer a 30-day money-back guarantee. If you complete the bootcamp, implement the strategies, and don't see improvement in your interview performance, we'll refund your investment in full."
      }
    ];
    
    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

    return (
      <section 
        id="faq" 
        data-name="faq-section"
        className="section-padding bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 
              data-name="faq-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Frequently Asked Questions
            </h2>
            <p 
              data-name="faq-subheading"
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Everything you need to know about our Interview Bootcamp
            </p>
          </div>
          
          <div 
            data-name="faq-accordion"
            className="max-w-3xl mx-auto"
          >
            {faqs.map((faq, index) => (
              <div 
                key={faq.id}
                data-name={`faq-item-${faq.id}`}
                className="mb-4"
              >
                <button
                  data-name={`faq-question-${faq.id}`}
                  className={`w-full text-left p-4 rounded-lg flex justify-between items-center transition-all ${
                    activeIndex === index 
                      ? 'bg-[#0a2342] text-white' 
                      : 'bg-white text-gray-800 hover:bg-gray-100'
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <i 
                    className={`fas ${activeIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'} transition-transform`}
                  ></i>
                </button>
                
                <div 
                  data-name={`faq-answer-${faq.id}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-4 bg-white border border-t-0 rounded-b-lg">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div 
            data-name="faq-cta"
            className="text-center mt-12"
          >
            <p 
              data-name="faq-cta-text"
              className="text-lg text-gray-700 mb-6"
            >
              Still have questions? We're here to help!
            </p>
            <a 
              href="mailto:support@interviewbootcamp.com"
              data-name="faq-cta-button"
              className="btn-secondary inline-flex items-center"
            >
              <i className="fas fa-envelope mr-2"></i>
              Contact Support
            </a>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('FAQ component error:', error);
    reportError(error);
    return null;
  }
}
