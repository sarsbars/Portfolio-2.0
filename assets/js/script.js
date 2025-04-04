document.addEventListener('DOMContentLoaded', function() {
    
    const downArrow = document.getElementById('scroll-down');
    const targetSection = document.getElementById('about-me');
    

    downArrow.addEventListener('click', function() {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });

});


document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.querySelector('.header-button'); 
    const contactSection = document.querySelector('.contact-me'); 

    contactButton.addEventListener('click', function(event) {
        event.preventDefault(); 

        const offsetTop = contactSection.offsetTop; 

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth' 
        });
    });
});