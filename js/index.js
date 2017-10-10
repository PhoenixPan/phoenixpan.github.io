/**
 * Created by Phoenix on 2/19/2017.
 */
// Scroll the page down smoothly
$(function() {
    $('a').on('click', function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 800);
                return false;
            }
        }
    });
});