// Simple scroll animation (placeholder)
window.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(section => {
    if (window.scrollY + window.innerHeight > section.offsetTop + 100) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
});
