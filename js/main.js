var pg = location.pathname;
document.writeln("<script type='text/javascript' src='js/template.js'></script>");

if (pg.search("adopt.html") >= 0) {
    document.writeln("<script type='text/javascript' src='js/lightbox.js'></script>");
}

if (pg.search("donation.html") >= 0 || pg.search("thankyou.html") >= 0) {
    document.writeln("<script type='text/javascript' src='js/donation.js'></script>");
}

if (pg.search("contact.html") >= 0 || pg.search("messagenoted.html") >= 0) {
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

document.writeln("<script type='text/javascript' src='js/newsvalid.js'></script>");
