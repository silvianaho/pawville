$(document).ready(function () {
    $("#header").load("inc/header.html");
    $("#footer").load("inc/footer.html");
    
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

    $(newsletterForm[0]).change(function () { checkName($(newsletterForm[0])) });
    $(newsletterForm[1]).change(function () { checkEmail($(newsletterForm[1])) });

    function isvalid() {
        var namebool = checkName($(newsletterForm[0]));
        var mailbool = checkEmail($(newsletterForm[1]));
        return namebool && mailbool;
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

    $("button#newsSubmit").click(function () {
        event.preventDefault();
        var valid = isvalid();
        if (valid) {
            $("form#newsletter").submit();
        }
    })
});