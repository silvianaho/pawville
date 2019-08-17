$(document).ready(function () {
    $(window).scroll(function () {
        $('.navbar').toggleClass('bg-white', $(window).scrollTop() > $('.navbar').height());
        $('.navbar').toggleClass('transparent-bar', $(window).scrollTop() > $('.navbar').height());
        $('.navbar-brand').toggleClass('text-dark', $(window).scrollTop() > $('.navbar').height());
        $('.nav-link').toggleClass('text-dark', $(window).scrollTop() > $('.navbar').height());
    });
})