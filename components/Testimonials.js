function Testimonials() {
  try {
    const [activeIndex, setActiveIndex] = React.useState(0);
    
    const testimonials = [
      {
        id: 1,
        name: "Sarah Johnson",
        role: "Software Engineer at Google",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        quote: "The Interview Bootcamp completely transformed my approach to interviews. I went from being nervous and unprepared to confident and articulate. Within two weeks of completing the program, I received three job offers, including my dream role at Google!",
      },
      {
        id: 2,
        name: "Michael Chen",
        role: "Product Manager at Amazon",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        quote: "After multiple failed interviews, I was losing confidence. This bootcamp helped me understand exactly what employers are looking for and how to showcase my skills effectively. The mock interviews were incredibly realistic and prepared me for everything that came up in my actual interviews.",
      },
      {
        id: 3,
        name: "Jessica Williams",
        role: "Marketing Director at Netflix",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        quote: "The strategies I learned in this bootcamp helped me negotiate a salary that was 30% higher than my previous position. The coaches didn't just help with interview skills, but with the entire job search process. Worth every penny!",
      },
    ];
    
    const companies = [
      "Google", "Amazon", "Microsoft", "Apple", "Facebook", "Netflix", "Salesforce", "Adobe"
    ];
    
    React.useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 8000);
      
      return () => clearInterval(interval);
    }, [testimonials.length]);
    
    const goToTestimonial = (index) => {
      setActiveIndex(index);
    };

    return (
      <section 
        id="testimonials" 
        data-name="testimonials-section"
        className="section-padding gradient-bg text-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 
              data-name="testimonials-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Success Stories from Our Graduates
            </h2>
            <p 
              data-name="testimonials-subheading"
              className="text-xl text-gray-200 max-w-3xl mx-auto"
            >
              Hear directly from professionals who transformed their career prospects after attending our bootcamp
            </p>
          </div>
          
          <div 
            data-name="testimonials-carousel"
            className="max-w-4xl mx-auto mb-16"
          >
            <div 
              data-name="testimonial-card-container"
              className="relative h-[400px] md:h-[300px]"
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  data-name={`testimonial-card-${testimonial.id}`}
                  className={`testimonial-card absolute w-full p-8 rounded-lg transition-all duration-500 ${
                    index === activeIndex ? 'opacity-100 translate-x-0 z-10' : 
                    index < activeIndex ? 'opacity-0 -translate-x-full z-0' : 'opacity-0 translate-x-full z-0'
                  }`}
                >
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div 
                      data-name={`testimonial-image-${testimonial.id}`}
                      className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0"
                    >
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div data-name={`testimonial-content-${testimonial.id}`}>
                      <div 
                        data-name={`testimonial-quote-${testimonial.id}`}
                        className="text-gray-800 mb-4 text-lg italic"
                      >
                        "{testimonial.quote}"
                      </div>
                      <div 
                        data-name={`testimonial-author-${testimonial.id}`}
                        className="font-bold text-[#0a2342]"
                      >
                        {testimonial.name}
                      </div>
                      <div 
                        data-name={`testimonial-role-${testimonial.id}`}
                        className="text-sm text-gray-600"
                      >
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div 
              data-name="testimonial-navigation"
              className="flex justify-center mt-6 gap-2"
            >
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  data-name={`testimonial-nav-dot-${index}`}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex ? 'bg-[#f7b538] w-6' : 'bg-gray-400'
                  }`}
                  onClick={() => goToTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
          
          <div 
            data-name="featured-quote"
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <div 
              data-name="featured-quote-icon"
              className="text-5xl text-[#f7b538] mb-4"
            >
              <i className="fas fa-quote-left"></i>
            </div>
            <div 
              data-name="featured-quote-text"
              className="text-2xl italic handwritten mb-6"
            >
              "The bootcamp didn't just help me get a job, it helped me get the RIGHT job."
            </div>
            <div 
              data-name="featured-quote-author"
              className="font-bold"
            >
              — David Rodriguez, Data Scientist at Microsoft
            </div>
          </div>
          
          <div data-name="company-logos" className="text-center">
            <h3 
              data-name="company-logos-heading"
              className="text-xl mb-6 text-gray-300"
            >
              Our graduates work at top companies worldwide
            </h3>
            <div 
              data-name="logo-container"
              className="flex flex-wrap justify-center gap-8"
            >
              {companies.map((company, index) => (
                <div 
                  key={index}
                  data-name={`company-logo-${index}`}
                  className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg"
                >
                  <span className="text-xl font-bold">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Testimonials component error:', error);
    reportError(error);
    return null;
  }
}
