document.addEventListener("DOMContentLoaded", () => {
    // Simple year update
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});