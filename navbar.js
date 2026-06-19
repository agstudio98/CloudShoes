/**
 * CloudShoes Global Navbar Logic
 * Handles responsive menu toggle and sticky scroll shrink effect
 */

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const navbar = document.querySelector('.custom-navbar');

    // 1. Mobile Menu Toggler
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('open');
            // Toggle body scroll to prevent scrolling when overlay menu is open
            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking on any link
        const linkItems = navLinks.querySelectorAll('a');
        linkItems.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    // 2. Shrink Navbar on Scroll
    if (navbar) {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shrunk');
            } else {
                navbar.classList.remove('shrunk');
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial run to check current scroll position on page load
        handleScroll();
    }
});
