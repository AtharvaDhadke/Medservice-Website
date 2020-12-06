import $ from 'jquery';
import "lazysizes";
import "../styles/style.css";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import SmoothScroll from "./modules/SmoothScroll";
import ActiveLinks from "./modules/ActiveLink";
import Modal from "./modules/Modal";


//Handles Mobile Menu/Header
let mobileMenu = new MobileMenu();

//Handkes Mobile Menu/Header 
new RevealOnScroll($('#our-begining'));
new RevealOnScroll($('#departments'));
new RevealOnScroll($('#counters'));
new RevealOnScroll($('#testimonials'));

//adding smooth scroll functionality to our header links
new SmoothScroll();

// Adding Active Link Status in our project
new ActiveLinks();

new Modal();

if (module.hot) {
    module.hot.accept();
}
