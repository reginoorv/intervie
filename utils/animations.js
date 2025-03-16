const animations = {
  fadeIn: (element, duration = 1000) => {
    element.style.opacity = '0';
    element.style.transition = `opacity ${duration}ms ease-in-out`;
    
    requestAnimationFrame(() => {
      element.style.opacity = '1';
    });
  },

  slideIn: (element, direction = 'up', duration = 500) => {
    const directions = {
      up: 'translateY(20px)',
      down: 'translateY(-20px)',
      left: 'translateX(20px)',
      right: 'translateX(-20px)'
    };

    element.style.transform = directions[direction];
    element.style.opacity = '0';
    element.style.transition = `transform ${duration}ms ease-out, opacity ${duration}ms ease-in-out`;

    requestAnimationFrame(() => {
      element.style.transform = 'translate(0)';
      element.style.opacity = '1';
    });
  },

  pulse: (element) => {
    element.classList.add('pulse');
    
    element.addEventListener('animationend', () => {
      element.classList.remove('pulse');
    });
  },

  shake: (element) => {
    element.classList.add('shake');
    
    element.addEventListener('animationend', () => {
      element.classList.remove('shake');
    });
  },

  initScrollAnimations: () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });
  }
};
