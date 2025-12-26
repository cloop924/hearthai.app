<script>
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('year').textContent = new Date().getFullYear();

    const videos = document.querySelectorAll("video.scroll-audio");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // STRICTLY REQUIRED: Video must remain muted to autoplay via script
          entry.target.muted = true; 
          entry.target.play().catch(e => console.log("Autoplay blocked:", e));
        } else {
          entry.target.pause();
        }
      });
    }, { threshold: 0.45 });

    videos.forEach(v => observer.observe(v));
  });
</script>