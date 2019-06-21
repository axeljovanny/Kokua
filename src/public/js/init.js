(function ($) {
    $(function () {

        $('.sidenav').sidenav();
        $('.parallax').parallax();
        $('select').formSelect();

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

//Pantalla de Registro
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

left.addEventListener("mouseenter", () => {
    container.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
    container.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
    container.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
    container.classList.remove("hover-right");
});


//Fin Pantalla de Registro
