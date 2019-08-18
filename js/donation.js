$(document).ready(function () {
    /* Visual */
    $(window).scroll(function () {
        $('.navbar').toggleClass('bg-white', $(window).scrollTop() > $('.parallax').height() - 100);
        $('.navbar').toggleClass('transparent-bar', $(window).scrollTop() > $('.parallax').height() - 100);
        $('.navbar-brand').toggleClass('text-dark', $(window).scrollTop() > $('.parallax').height() - 100);
        $('.nav-link').toggleClass('text-dark', $(window).scrollTop() > $('.parallax').height() - 100);
    });

    $('#amounts label').addClass('disabled');

    function disableAmounts() {
        $('#amounts label').attr('disabled', "disabled");
        $('input[name="amounts"]').attr('disabled', "disabled");
    }

    /* Monthly or one time */

    var interval = $('.donationInterval input[name="interval"]');
    var amount = $('.donationInterval input[name="amounts"]');

    disableAmounts()
    /* Handle Interval toggling */
    interval.click(function () {
        /* reset */
        $('.form-group').removeClass("bg-primary text-white");
        $('.interval label').removeClass('active');
        disableAmounts();

        /* turn on/off amounts buttons */
        if ($('input[name="interval"]:checked').val() === "month") {
            $('#moamounts label').removeClass('disabled');
            $('#moamounts label').removeAttr('disabled');
            $('#moamounts input[name="amounts"]').removeAttr('disabled');
            $('#otamounts label').addClass('disabled');
        }
        else if ($('input[name="interval"]:checked').val() === "onetime") {
            $('#moamounts label').addClass('disabled');
            $('#otamounts label').removeAttr('disabled');
            $('#otamounts input[name="amounts"]').removeAttr('disabled');
            $('#otamounts label').removeClass('disabled');
        }

        $(this).filter(':checked').closest('.form-group').toggleClass("bg-primary text-white");
    });


    /* Show continue button after the amount has been chosen */
    amount.change(function () {
        if ($('input[name="amounts"]:checked').val() > 0) {
            $('#continuetoform').removeClass('d-none');
        }
    });


    /* Hide toggle and show form */
    $('.donationInterval .cont-button').click(function () {
        $('.donationInterval').addClass('d-none');
        $('.plans').addClass('d-none');
        $('#identityForm').removeClass('d-none');
        var per = $('input[name="interval"]:checked').val();
        var myAmount = $('input[name="amounts"]:checked').val();
        if (per === "month") {
            $('.myAmount h1').text(`$${myAmount}/${per}`);
        }
        else {
            $('.myAmount h1').text(`$${myAmount}`);
        }

    });

    $('.close').click(function () {
        $('.plans').removeClass('d-none');
        $('.donationInterval').removeClass('d-none');
        $('#identityForm').addClass('d-none');
    });





    /* donationForm */
    /* 8: firstName
       9: lastName

       10: email e
       
       11: address
       12: region
       13: city
  
       14: zip n
  
       15: credit
       16: debit
       17: paypal
  
       18: cc-name
  
       19: cc-number
       20: cc-expiration
       21: cc-cvv */

    var donationForm = $('#donation-form input');
    var textinput = $('#donation-form input[type="text"]');
    var numberinput = $('#donation-form input[type="number"]');

    /* Regular Expressions */
    var textregex = /^[A-Za-z]+$/;
    var emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    /* Date */
    var yearNow = new Date().getFullYear();

    /* Valid/Invalid Inputs */
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

    /* Check name */

    $(textinput[0]).change(function () { checkName($(textinput[0])) });
    $(textinput[1]).change(function () { checkName($(textinput[1])) });

    /* checkemail */
    $(donationForm[10]).change(function () { checkEmail($(donationForm[10])) });
    for (let i = 0; i < numberinput.length; i++) {
        $(numberinput[i]).change(function () { checkNum(i) });
    }

    /* Check address */
    $(textinput[2]).change(function () { checkAddr($(textinput[2])) });

    /* check text inputs */
    for (let i = 3; i < textinput.length; i++) {
        $(textinput[i]).change(function () { checkText($(textinput[i])) });
    }

    /* check country (select) */

    $('#donation-form select#country').change(function () { checkcountry($('#donation-form select#country')) });


    /* Check if form is valid for submission */
    function isvalid() {
        var fnamebool = checkName($(textinput[0]));
        var lnamebool = checkName($(textinput[1]));
        var addrbool = checkAddr($(textinput[2]));
        var textbool = [];
        for (let i = 3; i < textinput.length; i++) {
            textbool.push(checkText($(textinput[i])));
        }
        var ctrybool = checkcountry($('#donation-form select#country'));
        var mailbool = checkEmail($(donationForm[10]));
        var numbool = [];
        for (let i = 0; i < numberinput.length; i++) {
            numbool.push(checkNum(i));
        }

        var overalltext;
        var overallnum;

        for (let i = 0; i < textbool.length - 1; i++) {
            overalltext = textbool[i] && textbool[i + 1];
            if (overalltext == false) {
                break;
            }
        }

        for (let i = 0; i < numbool.length - 1; i++) {
            overallnum = numbool[i] && numbool[i + 1];
            if (overallnum == false) {
                break;
            }
        }

        return fnamebool && lnamebool && addrbool && mailbool && overalltext && ctrybool && overallnum
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

    function checkAddr(addr) {
        let addrval = addr.prop("value");
        if (addrval.length < 6) {
            invalidInput(addr);
            return false;
        } else {
            validInput(addr);
            return true;
        }
    }


    function checkText(text) {
        let textval = text.prop("value");
        if (textval.length < 5 || !textval.match(textregex)) {
            invalidInput(text);
            return false;
        } else {
            validInput(text);
            return true;
        }
    }

    function checkcountry(ctry) {
        let ctryval = ctry.prop("value");
        if (ctryval.length != 2) {
            invalidInput(ctry);
            return false;
        } else {
            validInput(ctry);
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

    function checkNum(i) {
        let numval = $(numberinput[i]).prop('value');
        switch (i) {
            case 0:
                if (numval.length != 6) {
                    invalidInput($(numberinput[i]));
                    return false;
                } else {
                    validInput($(numberinput[i]));
                    return true;
                }

            case 1:
                if (numval.length != 16) {
                    invalidInput($(numberinput[i]));
                    return false;
                } else {
                    validInput($(numberinput[i]));
                    return true;
                }

            case 2:
                if (numval <= yearNow) {
                    invalidInput($(numberinput[i]));
                    return false;
                }
                else {
                    validInput($(numberinput[i]));
                    return true;

                }

            case 3:
                if (numval.length != 3) {
                    invalidInput($(numberinput[i]));
                    return false;
                } else {
                    validInput($(numberinput[i]));
                    return true;

                }
        }
    }


    $("button#submitform").click(function () {
        event.preventDefault();
        var valid = isvalid();
        if (valid) {
            $("form#donation-form").submit();
        }
    });

    var urlparams = new URLSearchParams(location.search);
    var name = urlparams.get("firstName");
    var donationamount = urlparams.get("amounts");
    var donationinterval = urlparams.get("interval");
    var show;
    if (donationinterval === "month") {
        show = `$${donationamount}/${donationinterval}`;
    }
    else {
        show = `$${donationamount}`;
    }

    var msg = `
    <strong>
    <p class="display-4">Thank you, ${name}!</p>
    <hr>
    <div class="lead">
    <p>We have received your donation!</p>
    <p>Donation received: ${show}</p>
    <a class="btn btn-warning" href="donation.html">Donate Again</a>
    <a class="btn btn-warning" href="index.html">Back to home</a>
    </strong>`;
    $(".donationthx").html(msg);

})