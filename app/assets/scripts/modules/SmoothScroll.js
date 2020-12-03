import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

class SmoothScroll {
    constructor() {
        this.headerLinks = $(".smooth-scroll a");
        this.addSmoothScrolling();
    }

    addSmoothScrolling() {
        this.headerLinks.smoothScroll({
            offset: -40
        });
    }
}

export default SmoothScroll;
