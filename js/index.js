$(document).ready(function () {
    $(window).scroll(function () {
        $('.navbar').toggleClass('bg-white', $(window).scrollTop() > $('.mediabg').height()-50);
        $('.navbar').toggleClass('transparent-bar', $(window).scrollTop() > $('.mediabg').height()-50);
        $('.navbar-brand').toggleClass('text-dark', $(window).scrollTop() > $('.mediabg').height()-50);
        $('.nav-link').toggleClass('text-dark', $(window).scrollTop() > $('.mediabg').height()-50);
    });
});