document.addEventListener('scroll', function() {
    const fadeElement = document.querySelector('.fade-element');
    const fadeOutStart = window.innerHeight / 4; // Start fading when scroll is 1/4th down the viewport

    // Calculate opacity based on scroll position
    const scrollY = window.scrollY;
    const opacity = Math.max(1 - (scrollY / fadeOutStart), 0); // Fade out until opacity is 0

    fadeElement.style.opacity = opacity;
});