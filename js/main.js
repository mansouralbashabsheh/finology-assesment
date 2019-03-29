$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 3,
            nav: true,
            loop: false
        }
    }
})


new WOW().init();



var num = 200; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('#navbar').addClass('fixed');
    } else {
        $('#navbar').removeClass('fixed');
    }
});



$(".btn-edit").click(function () {
    $(this).parent().addClass('hidden')
    $('.buttons-hidden').removeClass('hidden')
    $('.people-desc').addClass('active')
});
$(".btn-cancel").click(function () {
    $(this).parent().addClass('hidden')
    $('.buttons-groub').removeClass('hidden')
    $('.people-desc').removeClass('active')
});


