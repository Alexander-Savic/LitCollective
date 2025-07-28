document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.nav-menu');
    const flexdirection = document.querySelector('flex-direction');

    document.addEventListener("click", function(event)
    {
        const targetElement = event.target;
        if (!hamburgerButton.contains(targetElement))
        {
            mobileMenu.style.left = '120%';
            document.body.style.overflow = 'scroll';
            hamburgerButton.style.display = 'flex';                       
        }
        else {
            mobileMenu.style.display = 'flex';
            mobileMenu.style.left = '30%';
            document.body.style.overflow = 'hidden';
            hamburgerButton.style.display = 'none';
        }
    });
});