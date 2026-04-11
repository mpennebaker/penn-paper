// Scroll fade-in animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.fade-in').forEach((el, i) => {
  // Stagger cards in the games grid
  if (el.classList.contains('game-card')) {
    el.style.transitionDelay = `${i * 0.08}s`;
  }
  observer.observe(el);
});
