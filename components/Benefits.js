function Benefits() {
  try {
    const benefits = [
      {
        id: 1,
        title: "Interactive, Hands-On Training",
        description: "Engage in real interview scenarios and practice sessions that prepare you for any question that comes your way.",
        icon: "fa-hands-helping",
        delay: 0
      },
      {
        id: 2,
        title: "Guidance from Top Industry Experts",
        description: "Learn directly from professionals who have conducted thousands of interviews at leading companies.",
        icon: "fa-user-tie",
        delay: 200
      },
      {
        id: 3,
        title: "Live Mock Interviews",
        description: "Participate in realistic mock interviews and receive immediate, actionable feedback to improve your performance.",
        icon: "fa-comments",
        delay: 400
      },
      {
        id: 4,
        title: "Exclusive Job-Seeking Strategies",
        description: "Discover proven techniques to stand out from other applicants and make a lasting impression on recruiters.",
        icon: "fa-chart-line",
        delay: 600
      }
    ];
    
    React.useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      document.querySelectorAll('.benefit-item').forEach(item => {
        observer.observe(item);
      });
      
      return () => {
        document.querySelectorAll('.benefit-item').forEach(item => {
          observer.unobserve(item);
        });
      };
    }, []);

    return (
      <section 
        id="benefits" 
        data-name="benefits-section"
        className="section-padding bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 
              data-name="benefits-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Why Choose Our Interview Bootcamp?
            </h2>
            <p 
              data-name="benefits-subheading"
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Our comprehensive program is designed to give you the edge in today's competitive job market
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.id}
                data-name={`benefit-item-${benefit.id}`}
                className={`benefit-item flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 delayed-animation opacity-0`}
                style={{ animationDelay: `${benefit.delay}ms` }}
              >
                <div 
                  data-name={`benefit-icon-${benefit.id}`}
                  className="flex-shrink-0 w-16 h-16 rounded-full bg-[#0a2342] text-white flex items-center justify-center text-2xl"
                >
                  <i className={`fas ${benefit.icon}`}></i>
                </div>
                <div data-name={`benefit-content-${benefit.id}`}>
                  <h3 
                    data-name={`benefit-title-${benefit.id}`}
                    className="text-xl font-bold mb-2"
                  >
                    {benefit.title}
                  </h3>
                  <p 
                    data-name={`benefit-description-${benefit.id}`}
                    className="text-gray-600"
                  >
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div 
            data-name="benefits-highlight"
            className="mt-20 bg-[#f7f3e3] rounded-lg p-8 shadow-lg max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div data-name="benefits-highlight-content" className="md:w-2/3">
                <h3 
                  data-name="benefits-highlight-title"
                  className="text-2xl font-bold mb-4"
                >
                  What Makes Us Different
                </h3>
                <p 
                  data-name="benefits-highlight-description"
                  className="text-gray-700 mb-4"
                >
                  Unlike generic interview advice, our bootcamp focuses on personalized feedback and 
                  industry-specific preparation. We don't just tell you what to say—we help you understand 
                  why it matters and how to adapt to any interview situation.
                </p>
                <div 
                  data-name="benefits-stats"
                  className="grid grid-cols-2 gap-4 mt-6"
                >
                  <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-[#ff6b35]">2x</div>
                    <div className="text-sm text-gray-600">Higher callback rate</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-[#ff6b35]">3x</div>
                    <div className="text-sm text-gray-600">Faster job offers</div>
                  </div>
                </div>
              </div>
              <div 
                data-name="benefits-highlight-image"
                className="md:w-1/3 flex justify-center"
              >
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                  alt="Interview preparation" 
                  className="rounded-lg shadow-lg w-full max-w-xs"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Benefits component error:', error);
    reportError(error);
    return null;
  }
}
