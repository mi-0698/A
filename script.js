document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.image-placeholder, .text').forEach(el => {
    observer.observe(el);
  });
});
