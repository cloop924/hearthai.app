document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const videos = document.querySelectorAll("video.scroll-audio");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.muted = true;
        entry.target.play().catch(e => console.log("Autoplay blocked:", e));
      } else {
        entry.target.pause();
      }
    });
  }, { threshold: 0.45 });

  videos.forEach(v => observer.observe(v));
});