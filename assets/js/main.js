// Auto play/pause videos when visible
const videos = document.querySelectorAll("video:not([data-hero])");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const video = entry.target;
    if (entry.isIntersecting) {
      video.play().catch(()=>{});
    } else {
      video.pause();
    }
  });
}, { threshold: 0.5 });

videos.forEach(v => observer.observe(v));
