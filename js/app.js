// Passive House Website JavaScript

// Set current year for copyright in footer
document.addEventListener('DOMContentLoaded', function() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

  // Add animation class to feature and system cards for staggered animation
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach((card, index) => {
    card.style.setProperty('--n', index + 1);
    // Add a slight delay before showing the cards
    setTimeout(() => {
      card.classList.add('visible');
    }, 100 * index);
  });

  const systemCards = document.querySelectorAll('.system-card');
  systemCards.forEach((card, index) => {
    card.style.setProperty('--n', index + 1);
    // Add a slight delay before showing the cards
    setTimeout(() => {
      card.classList.add('visible');
    }, 100 * index);
  });

  // Add intersection observer to trigger animations when scrolling
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  }

  // Simple tabs for mobile view if needed in the future
  document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab');

      // Hide all tab content
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
      });

      // Deactivate all tab buttons
      document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
      });

      // Show selected tab content and activate button
      document.getElementById(tabId).classList.add('active');
      button.classList.add('active');
    });
  });
});

// Add service worker registration for offline support if needed in the future
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/service-worker.js').then(registration => {
//       console.log('ServiceWorker registration successful');
//     }).catch(error => {
//       console.log('ServiceWorker registration failed: ', error);
//     });
//   });
// }
