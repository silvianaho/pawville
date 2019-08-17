var pg = location.pathname;
document.writeln("<script type='text/javascript' src='js/template.js'></script>");

if (pg.search("adopt.html") >= 0) {
    document.writeln("<script type='text/javascript' src='js/lightbox.js'></script>");
}

if (pg.search("donation.html") >= 0 || pg.search("thankyou.html") >= 0) {
    document.writeln("<script type='text/javascript' src='js/donation.js'></script>");
}

if (pg.search("form-contact.html") >= 0 || pg.search("thankyou.html") >= 0) {
    document.writeln("<script type='text/javascript' src='js/contact.js'></script>");
}

if (pg.search("index.html") >= 0) {
    document.writeln("<script type='text/javascript' src='js/index.js'></script>");
}

if (pg.search("about.html") >= 0) {
    document.writeln("<script type='text/javascript' src='js/about.js'></script>");
}

if (pg.search("error.html") >= 0) {
    document.writeln("<script type='text/javascript' src='js/err.js'></script>");
}

if (pg.search("help.html") >= 0) {
    document.writeln("<script type='text/javascript' src='js/help.js'></script>");
}

var newsletterForm = $('#footer input');
var textregex = /^[A-Za-z]+$/;
var emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function invalidInput(something) {
    $('.invalid-feedback').removeClass('d-none');
    something.addClass('is-invalid');
    something.removeClass('is-valid');
}

function validInput(something) {
    $('.invalid-feedback').addClass('d-none');
    something.removeClass('is-invalid');
    something.addClass('is-valid');
}