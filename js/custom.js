$(document).ready(function () {

    /*top menu toggle*/

    $('.header__btn').click(function () {
        $('.nav').toggleClass('vis');
        $('body').toggleClass('oh');
        $('#hamburger').toggleClass('open');
        $('.nav__link_drop').removeClass('vis');
        $('.header').toggleClass('fixed');
    });
    $('.nav__link_drop').click(function() {
        $(this).addClass('vis');
    });
    var wi = $(window).width();
 
    if (wi <= 1024){
        $('.nav__link_drop').click(function(e) {
            e.preventDefault();
        });
    }
    /*end top menu toggle*/


    $('#slick_1').slick({
        slidesToShow: 1,
        dots: false,
        adaptiveHeight: true,
        autoplaySpeed: 10000,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 768,

            }
        ]
    });
    $('#slick_2').slick({
        slidesToShow: 4,
        dots: false,
        autoplaySpeed: 7000,
        responsive: [
            {
                breakpoint: 1024,
                settings: "unslick",
            }
        ]
    });
    $('#slick_3').slick({
        slidesToShow: 4,
        dots: false,
        autoplaySpeed: 7000,
        responsive: [
            {
                breakpoint: 1024,
                settings: "unslick",
            }
        ]
    });
    $('#slick_4').slick({
        slidesToShow: 3,
        dots: false,
        autoplaySpeed: 7000,
        responsive: [
            {
                breakpoint: 1024,
                settings: "unslick",
            }
        ]
    });
    $('#slick_5').slick({
        slidesToShow: 3,
        dots: false,
        autoplaySpeed: 7000,
        responsive: [
            {
                breakpoint: 1024,
                settings: "unslick",
            }
        ]
    });
    $('.adv__desc-item').hover(function() {
        $('.adv__pic-item').removeClass('vis');
        var activeTab = $(this).attr('data-id');
        $('#'+activeTab).addClass('vis');
        return false;
    });
    $('.tab__item, .select__option').click(function() {
        $('.tab__item').removeClass('act');
        $(this).addClass('act');
        var activeTab = $(this).attr('data-id');
        $('.tab__desc-item').removeClass('vis');
        $('#'+activeTab).addClass('vis');
        return false;
    });
    $('.modal__close').click(function() {
        $('body').removeClass('oh');
        $('.modal-bg').removeClass('vis');
        $('.modal-wrap').removeClass('vis');
    });
    function modal(){
        $('body').addClass('oh');
        $('.modal-bg').addClass('vis');
        $('#modal-info').addClass('vis');
    }
    setTimeout(function() { 
        modal();
    }, 100);
    $('.header-nav__link_login').click(function() {
        $('body').addClass('oh');
        $('.modal-bg').addClass('vis');
        $('#modal-reg').addClass('vis');

    });
    $('.select__head').click(function() {
        $('.select').toggleClass('open');
    });
    $('.select__option').click(function() {
        $('.select').removeClass('open');
        var text = $(this).text();
        $('.select__head').empty().append(text);
    });
});

$( window ).on( "load", function() {

    new WOW().init();

});






