function App() {
  try {
    React.useEffect(() => {
      // Initialize animations
      animations.initScrollAnimations();
    }, []);

    return (
      <div data-name="app-container">
        <Navbar />
        <Hero />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CallToAction />
        <Footer />
        <ExitPopup />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    reportError(error);
    return null;
  }
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
