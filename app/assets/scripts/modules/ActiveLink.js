import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class ActiveLinks {
    constructor() {
        this.pageSection = $(".section");
        this.headerLinks = $(".menu-list a");
        this.createPageSectionWaypoints();
    }
    
    createPageSectionWaypoints() {
        let that = this;
        this.pageSection.each(function(){
            var currentPageSection = this;
            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if(direction == 'down') {
                        let matchingLinkSelector = currentPageSection.getAttribute('data-matching-link');
                        if(matchingLinkSelector != null) {
                            that.headerLinks.removeClass('is-current-link');
                            $(matchingLinkSelector).addClass('is-current-link');
                        }
                    }
                },
                offset: '10%'
            });
            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if(direction == 'up') {
                        let matchingLinkSelector = currentPageSection.getAttribute('data-matching-link');
                        if(matchingLinkSelector != null) {
                            that.headerLinks.removeClass('is-current-link');
                            $(matchingLinkSelector).addClass('is-current-link');
                        }
                    }
                },
                offset: '-40%'
            });
        });
    }
}

export default ActiveLinks;