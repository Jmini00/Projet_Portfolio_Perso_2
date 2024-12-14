/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
//

    // Scroll reveal
    ScrollReveal({
        // reset: true,
        distance: '200px',
        duration: 2500,
        delay: 500
    });

    ScrollReveal().reveal('.page-section-heading, .masthead-avatar', { origin: 'top' });
    ScrollReveal().reveal('.portfolio-item, #contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.about-left, .masthead-subheading, .skills-left, .picture-left, .education', { origin: 'left' });
    ScrollReveal().reveal('.about-right, .masthead-heading, .skills-right, .picture-right, .jobs', { origin: 'right' });


    // Effet type
    const typed = new Typed('.multiple-text', {
        strings: ['curieux', 'passionné', "jeune diplômé quarantenaire", "en quête d'un nouveau challenge", 'Développeur Web Full Stack junior'],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        loop: true
    });

    // Animation logo
const picture = document.querySelector(".masthead-avatar");
setInterval(() => {
    picture.classList.toggle('zoomOut');
}, 4000);
setInterval(() => {
    picture.classList.toggle('zoomIn');
}, 8000);

    // Modal à l'ouverture
    const myModal = new bootstrap.Modal(document.getElementById('mentionsLegales'), {
        keyboard: false
      })
      setTimeout(() => {
        myModal.toggle()
      },10000);
        



window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
