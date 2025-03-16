function Navbar() {
  try {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
      <nav 
        data-name="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div data-name="logo" className="text-2xl font-bold">
            <span className={isScrolled ? 'text-[#0a2342]' : 'text-white'}>Interview</span>
            <span className="text-[#ff6b35]">Bootcamp</span>
          </div>
          
          {/* Desktop Navigation */}
          <div data-name="desktop-nav" className="hidden md:flex items-center space-x-8">
            <a 
              href="#benefits" 
              data-name="nav-link-benefits"
              className={`hover:text-[#ff6b35] transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Benefits
            </a>
            <a 
              href="#testimonials" 
              data-name="nav-link-testimonials"
              className={`hover:text-[#ff6b35] transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Success Stories
            </a>
            <a 
              href="#pricing" 
              data-name="nav-link-pricing"
              className={`hover:text-[#ff6b35] transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Pricing
            </a>
            <a 
              href="#faq" 
              data-name="nav-link-faq"
              className={`hover:text-[#ff6b35] transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              FAQ
            </a>
            <button 
              data-name="nav-cta-button"
              className="btn-primary"
              onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
            >
              Join Now
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            data-name="mobile-menu-button"
            className="md:hidden text-2xl"
            onClick={toggleMobileMenu}
          >
            <i 
              className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            ></i>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            data-name="mobile-menu"
            className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4 slide-in-up"
          >
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <a 
                href="#benefits" 
                data-name="mobile-nav-link-benefits"
                className="text-gray-700 hover:text-[#ff6b35] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Benefits
              </a>
              <a 
                href="#testimonials" 
                data-name="mobile-nav-link-testimonials"
                className="text-gray-700 hover:text-[#ff6b35] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Success Stories
              </a>
              <a 
                href="#pricing" 
                data-name="mobile-nav-link-pricing"
                className="text-gray-700 hover:text-[#ff6b35] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#faq" 
                data-name="mobile-nav-link-faq"
                className="text-gray-700 hover:text-[#ff6b35] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <button 
                data-name="mobile-nav-cta-button"
                className="btn-primary w-full"
                onClick={() => {
                  document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
              >
                Join Now
              </button>
            </div>
          </div>
        )}
      </nav>
    );
  } catch (error) {
    console.error('Navbar component error:', error);
    reportError(error);
    return null;
  }
}
