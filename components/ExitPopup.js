function ExitPopup() {
  try {
    const [isVisible, setIsVisible] = React.useState(false);
    const [hasShown, setHasShown] = React.useState(false);
    
    React.useEffect(() => {
      const handleMouseLeave = (e) => {
        if (
          e.clientY <= 0 && 
          !hasShown && 
          !localStorage.getItem('exitPopupShown')
        ) {
          setIsVisible(true);
          setHasShown(true);
          localStorage.setItem('exitPopupShown', 'true');
        }
      };
      
      document.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        document.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, [hasShown]);
    
    const handleClose = () => {
      setIsVisible(false);
    };
    
    if (!isVisible) return null;

    return (
      <div 
        data-name="exit-popup"
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      >
        <div 
          data-name="exit-popup-content"
          className="bg-white rounded-lg max-w-md w-full p-8 relative"
        >
          <button 
            data-name="exit-popup-close"
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            onClick={handleClose}
          >
            <i className="fas fa-times"></i>
          </button>
          
          <div 
            data-name="exit-popup-header"
            className="text-center mb-6"
          >
            <h3 className="text-2xl font-bold mb-2">
              Wait! Don't Miss Out!
            </h3>
            <p className="text-gray-600">
              Get an exclusive 20% discount if you enroll today!
            </p>
          </div>
          
          <div 
            data-name="exit-popup-offer"
            className="bg-[#f7f3e3] p-4 rounded-lg mb-6"
          >
            <p className="text-center font-bold text-lg mb-2">
              Use code: <span className="text-[#ff6b35]">SAVE20TODAY</span>
            </p>
            <p className="text-center text-sm text-gray-600">
              Limited time offer - Expires in 24 hours
            </p>
          </div>
          
          <div 
            data-name="exit-popup-cta"
            className="text-center"
          >
            <button 
              className="btn-primary w-full mb-4"
              onClick={() => {
                document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
                handleClose();
              }}
            >
              Claim My Discount Now
            </button>
            <button 
              className="text-gray-500 hover:text-gray-700 text-sm"
              onClick={handleClose}
            >
              No thanks, I'll pay full price later
            </button>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ExitPopup component error:', error);
    reportError(error);
    return null;
  }
}
