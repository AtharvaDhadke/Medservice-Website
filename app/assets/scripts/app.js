import $ from 'jquery';
import "lazysizes";
import "../styles/style.css";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import SmoothScroll from "./modules/SmoothScroll";

//Handles Mobile Menu/Header
let mobileMenu = new MobileMenu();

//Handkes Mobile Menu/Header 
new RevealOnScroll($('#our-begining'));
new RevealOnScroll($('#departments'));
new RevealOnScroll($('#counters'));
new RevealOnScroll($('#testimonials'));

//adding smooth scroll functionality to our header links
new SmoothScroll();

if (module.hot) {
    module.hot.accept();
}
