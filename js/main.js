$(function () {


    // Add dynamic Padding To Body 
    $("body").css("padding-top", $(".custom-navbar").height())

    $(window).resize(function () {
        $("body").css("padding-top", $(".custom-navbar").height())
    })


    // Scroll To Top
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            if ($('.scroll-icon').is(':hidden')) {
                $('.scroll-icon').css("display", "flex")
            }
        } else {
            $('.scroll-icon').fadeOut(500);
        }
    })

    // scroll to top (click)
    $('.scroll-icon').on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 500)
    });

    AOS.init();


    /* Loading Page */

    $(".loading").fadeOut(1500);
    $("body").css("overflowY", "scroll");

    /* sync scroll with nav */

    $(window).scroll(function () {



        $('.block_scroll').each(function () {
            if ($(window).scrollTop() > $(this).offset().top - 90) {

                var attrId = $(this).attr('id');


                $('.custom-navbar .nav-link').removeClass('active');

                $('.custom-navbar .nav-link[data-scroll =' + attrId + ']').addClass('active');

            }
        });

        // Scroll-to-top

        if ($(window).scrollTop() > 500) {

            if ($('.scroll-to-top').is(':hidden')) {

                $('.scroll-to-top').fadeIn(500);
            }



        } else {
            $('.scroll-to-top').fadeOut(500)
        }


        $('.scroll-to-top').on('click', function () {

            $('html, body').animate({
                scrollTop: 0
            }, 500)

        });


    });

    /* sync scroll with nav */




});




const swiper = new Swiper('.swiper-header', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-header-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.header-swiper-button-next',
        prevEl: '.header-swiper-button-prev',
    },

    autoplay: {
        delay: 10000,
    },


});


const testimonialsSwiper = new Swiper('.testimonials-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination-testimonials',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.test-swiper-button-prev',
        prevEl: '.test-swiper-button-next',
    },

    autoplay: {
        delay: 30000,
    },


});

var mySwiper3 = new Swiper(".staff-swiper1", {

    navigation: {
        nextEl: ".staff-swiper-button-next",
        prevEl: ".staff-swiper-button-prev",
    },
    breakpoints: {
        '1199': {
            slidesPerView: 5,
            spaceBetween: 30,
        },

        '767': {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        '991': {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        '300': {
            slidesPerView: 1,
            spaceBetween: 3,
        },

    },

    autoplay: {
        delay: 1000,
    },

});

var mySwiper4 = new Swiper(".staff-swiper2", {

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 15,

    autoplay: {
        delay: 2000,
    },

});


var mySwiper4 = new Swiper(".portfolio-swiper", {

    navigation: {
        nextEl: ".portfolio-swiper-next",
        prevEl: ".portfolio-swiper-prev",
    },

    autoplay: {
        delay: 2000,
    },



    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },




});


var mySwiper4 = new Swiper(".portfolio-swiper2", {

    navigation: {
        nextEl: ".portfolio-swiper-next",
        prevEl: ".portfolio-swiper-prev",
    },
    slidesPerView: 1,
    spaceBetween: 15,

    autoplay: {
        delay: 2000,
    },

});


/* Copyright FullYear */

let getYear = new Date();

let footerCopyright = document.querySelector(".copyright-year").textContent = getYear.getFullYear();