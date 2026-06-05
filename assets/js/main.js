document.addEventListener("DOMContentLoaded", () => {

  // Year in footer
  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  // Autoplay videos when scrolled into view
  const videos = document.querySelectorAll("video.scroll-video");
  if (videos.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.muted = true;
          entry.target.play().catch(() => {});
        } else {
          entry.target.pause();
        }
      });
    }, { threshold: 0.45 });
    videos.forEach(v => observer.observe(v));
  }

});
