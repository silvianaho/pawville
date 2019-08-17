$(document).ready(function () {
    $(window).scroll(function () {
        $('.navbar').toggleClass('bg-white', $(window).scrollTop() > $('.parallaxAbout').height() - 100);
        $('.navbar').toggleClass('transparent-bar', $(window).scrollTop() > $('.parallaxAbout').height() - 100);
        $('.navbar-brand').toggleClass('text-dark', $(window).scrollTop() > $('.parallaxAbout').height() - 100);
        $('.nav-link').toggleClass('text-dark', $(window).scrollTop() > $('.navbar').height()-10);
      });


})