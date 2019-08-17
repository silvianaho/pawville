$(document).ready(function () {

    $(window).scroll(function () {
        $('.navbar').toggleClass('bg-white', $(window).scrollTop() > $('.parallaxAdopt').height() - 100);
        $('.navbar').toggleClass('transparent-bar', $(window).scrollTop() > $('.parallaxAdopt').height() - 100);
        $('.navbar-brand').toggleClass('text-dark', $(window).scrollTop() > $('.parallaxAdopt').height() - 100);
        $('.nav-link').toggleClass('text-dark', $(window).scrollTop() > $('.parallaxAdopt').height() - 100);
    });

    var lightboxImg = $('#adopt img');
    var mymodal = $('#myModal');

    var total = lightboxImg.length;
    var i = 0;

    function showImg() {
        $('#swapHeart i').removeClass('redheart');
        var imgsrc = lightboxImg.eq(i).attr("src");
        var imgalt = lightboxImg.eq(i).attr("alt");
        var imgcounter = "(" + (i + 1) + " of " + total + ")";
        var img = `<img src="${imgsrc}" class="lightbox-img img-fluid">`;
        mymodal.find(".imgHolder").html(img);
        mymodal.find(".imgTitle").html(imgalt);
        mymodal.find(".counter").html(imgcounter);
        $(".lightbox-img").click(moveNext);
        $(".lightbox-img").css("cursor", "pointer");
    }

    $(".lightbox-prev").click(movePrev);
    $(".lightbox-next").click(moveNext);

    function moveNext() {
        i++;
        if (i >= total) {
            i = 0;
        }
        showImg();
    }

    function movePrev() {
        i--;
        if (i < 0) {
            i = total - 1;
        }
        showImg();
    }

    lightboxImg.click(function () {
        $('#swapHeart i').removeClass('redheart');
        i = lightboxImg.index(this);
        showImg();
        mymodal.modal('show');
    })

    $('#adopt img').click(function () {
        $('.modal').removeClass('d-none');
    });

    $('.close').click(function () {
        $('.modal').addClass('d-none');
    });

    $('#swapHeart i').on('click', function () {
        var heart = $(this);
        heart.toggleClass('redheart');
    });
})