$(document).ready( function() {
    // Scroll Up and Scroll Down NAVBAR animation
    $(window).scroll({
        previousTop: 0
    },
    
    function () {
        var currentTop = $(window).scrollTop();
        if (currentTop > this.previousTop) {
            $("header").slideUp();
        } else {
            $("header").slideDown();
        }
        this.previousTop = currentTop;
    });
});