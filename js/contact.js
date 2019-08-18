$(document).ready(function () {
    $(window).scroll(function () {
        $('.navbar').toggleClass('bg-white', $(window).scrollTop() > $('.navbar').height());
        $('.navbar').toggleClass('transparent-bar', $(window).scrollTop() > $('.navbar').height());
        $('.navbar-brand').toggleClass('text-dark', $(window).scrollTop() > $('.navbar').height());
        $('.nav-link').toggleClass('text-dark', $(window).scrollTop() > $('.navbar').height());
    });
    var faqform = $('form#faq-form input');
    var textarea = $('form#faq-form textarea');
    var textregex = /^[A-Za-z]+$/;
    var emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    $(faqform[0]).change(function () { checkName($(faqform[0])) });
    $(faqform[1]).change(function () { checkEmail($(faqform[1])) });
    $(textarea).change(function () { checkText($(textarea)) });

    function isvalid() {
        var namebool = checkName($(faqform[0]));
        var mailbool = checkEmail($(faqform[1]));
        var textbool = checkText($(textarea));
        return namebool && mailbool && textbool;
    }

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

    function checkName(name) {
        let nameval = name.prop("value");
        if (nameval.length < 3 || !nameval.match(textregex)) {
            invalidInput(name);
            return false;
        } else {
            validInput(name);
            return true;
        }
    }

    function checkEmail(email) {
        let mailval = email.prop("value");
        if (mailval.length < 5 || !mailval.match(emailregex)) {
            invalidInput(email);
            return false;
        } else {
            validInput(email);
            return true;

        }
    }
    function checkText(text) {
        let textval = text.prop("value");
        if (textval.length < 5) {
            invalidInput(text);
            return false;
        } else {
            validInput(text);
            return true;
        }
    }

    $("button#sendq").click(function () {
        event.preventDefault();
        var valid = isvalid();
        if (valid) {
            $("#display form#faq-form").submit();
        }
    })

    var urlparams = new URLSearchParams(location.search);
    var name = urlparams.get("name");
    var email = urlparams.get("email");
    var message = urlparams.get("enquiry");


    var meow = `
        <p class="display-4">Thank you, ${name}!</p>
        <hr>
        <div class="lead">
        <p>meow: ${message}</p>
        <p>From: ${name} (${email})</p>
        </div>
        `;
    $(".msgthx").removeClass('d-none');

    $(".msgthx").html(meow);
})