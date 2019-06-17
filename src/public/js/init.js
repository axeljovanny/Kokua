(function ($) {
    $(function () {

        $('.sidenav').sidenav();
        $('.parallax').parallax();

    });
})(jQuery);

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 10) {
            $('nav').addClass('shrink');
        } else {
            $('nav').removeClass('shrink');
        }
    });
});