// Select the hamburger icon and the navigation menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const dropdown = document.querySelector(".dropdown");

// Add a click event listener to the hamburger icon
hamburger.addEventListener("click", () => {
    // Toggle the 'active' class on the hamburger icon
    hamburger.classList.toggle("active");
    // Toggle the 'active' class on the navigation menu
    navMenu.classList.toggle("active");
});

// Close the menu when a link is clicked
document.querySelectorAll(".nav-link").forEach(link => {
    // Add click listener only to non-dropdown links
    if (!link.parentElement.classList.contains('dropdown')) {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    }
});