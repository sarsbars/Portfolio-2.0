import * as utils from "./utils.js"

window.onload = () => { 
    const downArrow = utils.select('.header-down-arrow');
    console.log("downArrow:", downArrow);
    const aboutSection = utils.select('.about-me');
    const contactButton = utils.select('.get-in-touch-button');
    const contactSection = utils.select('.contact-me');

    utils.listen('click', downArrow, () => {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
        
    });

    utils.listen('click', contactButton, () => {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
};