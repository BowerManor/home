// Get the navbar element
const navbar = document.getElementById('navbar');

// Function to add/remove class based on scroll position
function handleScroll() {
    if (window.scrollY > 800) { // Adjust this value as needed
        navbar.classList.add('scrolled');
    } 
	
	
	else {
        navbar.classList.remove('scrolled');
    }
	
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);