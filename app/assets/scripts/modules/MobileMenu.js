class MobileMenu {
    constructor() {
        //1.store all the needed DOM elements in Object
        this.menuIcon = document.querySelector(".mobile-header-icon");
        this.mobileHeader = document.querySelector("#mobile-header");

        //2. Can create any class/object variables which is needed
        this.x = 10;

        //3. call a function which registers all the registered events
        this.events();
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleMenu());
    }

    toggleMenu() {
        this.mobileHeader.classList.toggle("mobile-menu-active");
        this.menuIcon.classList.toggle("mobile-header-icon-close");
    }
}

export default MobileMenu;
