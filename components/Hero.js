function Hero() {
  try {
    const [parallaxOffset, setParallaxOffset] = React.useState({ x: 0, y: 0 });
    
    React.useEffect(() => {
      const handleMouseMove = (e) => {
        const x = (window.innerWidth / 2 - e.clientX) / 30;
        const y = (window.innerHeight / 2 - e.clientY) / 30;
        setParallaxOffset({ x, y });
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
    
    const scrollToRegistration = () => {
      document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
    };

    return (
      <section 
        data-name="hero-section" 
        className="hero-gradient text-white min-h-screen flex items-center pt-20"
      >
        <div className="container mx-auto px-4 py-16 md:py-32 relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div 
              data-name="hero-content" 
              className="z-10 fade-in"
            >
              <h1 
                data-name="hero-headline"
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              >
                Master Your Next Job Interview & Land Your Dream Role!
              </h1>
              <p 
                data-name="hero-subheadline"
                className="text-xl md:text-2xl mb-8 text-gray-200"
              >
                Join our intensive bootcamp and learn how to ace your interviews with confidence, 
                showcase your skills, and stand out from other candidates.
              </p>
              <div 
                data-name="hero-cta"
                className="flex flex-col sm:flex-row gap-4"
              >
                <button 
                  data-name="hero-primary-cta"
                  className="btn-primary text-lg pulse"
                  onClick={scrollToRegistration}
                >
                  Join the Bootcamp Now
                </button>
                <a 
                  href="#testimonials" 
                  data-name="hero-secondary-cta"
                  className="btn-secondary text-lg"
                >
                  See Success Stories
                </a>
              </div>
              <div 
                data-name="hero-stats"
                className="mt-12 flex flex-wrap gap-8"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#f7b538]">94%</div>
                  <div className="text-sm text-gray-200">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#f7b538]">1,500+</div>
                  <div className="text-sm text-gray-200">Graduates</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#f7b538]">48hrs</div>
                  <div className="text-sm text-gray-200">Intensive Training</div>
                </div>
              </div>
            </div>
            
            <div 
              data-name="hero-image"
              className="relative hidden md:block"
            >
              <div 
                className="parallax rounded-lg shadow-2xl overflow-hidden"
                style={{
                  transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`,
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Confident professional in interview" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div 
                className="absolute -bottom-6 -left-6 bg-[#ff6b35] rounded-lg p-6 shadow-lg parallax"
                style={{
                  transform: `translate(${parallaxOffset.x * -0.5}px, ${parallaxOffset.y * -0.5}px)`,
                }}
              >
                <div className="text-2xl font-bold mb-1">Next Bootcamp</div>
                <div className="text-lg">Starts in</div>
                <div className="text-3xl font-bold mt-2">
                  <CountdownTimer targetDate={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div 
            className="absolute top-20 right-10 w-64 h-64 bg-[#ff6b35] opacity-10 rounded-full blur-3xl"
            data-name="decorative-circle-1"
          ></div>
          <div 
            className="absolute bottom-10 left-10 w-80 h-80 bg-[#f7b538] opacity-10 rounded-full blur-3xl"
            data-name="decorative-circle-2"
          ></div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    reportError(error);
    return null;
  }
}
