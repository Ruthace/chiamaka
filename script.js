// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Smooth Scroll
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }

      // Close mobile menu if open
      const navList = document.getElementById('nav-list');
      if (navList) {
        navList.classList.remove('active');
      }
    });
  });

  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navList = document.getElementById('nav-list');

  if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('active');
    });
  }

  // Fade-in on Scroll with Intersection Observer
  const fadeElements = document.querySelectorAll('.fade-in');

  // Create observer with options
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all fade-in elements
  fadeElements.forEach(element => {
    observer.observe(element);
  });

  // Make home section visible immediately
  const homeSection = document.querySelector('#home');
  if (homeSection) {
    homeSection.classList.add('visible');
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navList && menuToggle) {
      const isClickInsideNav = navList.contains(e.target);
      const isClickOnToggle = menuToggle.contains(e.target);
      
      if (!isClickInsideNav && !isClickOnToggle && navList.classList.contains('active')) {
        navList.classList.remove('active');
      }
    }
  });
});
