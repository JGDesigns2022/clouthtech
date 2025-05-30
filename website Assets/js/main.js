// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      }
  });
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
      navbar.style.background = 'rgba(255, 255, 255, 0.98)';
  } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.95)';
  }
});

// CTA button analytics tracking
document.querySelectorAll('.cta-primary, .cta-button').forEach(button => {
  button.addEventListener('click', function(e) {
      // Track button clicks for analytics
      console.log('CTA clicked:', this.textContent);
     
      // In production, this would send to analytics service
      /*
      analytics.track('cta_clicked', {
          button_text: this.textContent,
          page_location: window.location.href
      });
      */
  });
});

// To Access The json File
const userData = require('./user-data.json'); //Node js
// or
fetch('users.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    })

userData.users.forEach(user =>{
    console.log('${user.name} (${user.company}): ${user.plan} plan');
});
