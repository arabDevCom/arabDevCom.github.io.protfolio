$(function (){

    'use strict';

     // fixed navbar

     var navbar = $('.navbar');
     $(window).scroll(function(){
         if($(window).scrollTop() <= 100){
             navbar.removeClass('fixed-top');
         }else{
             navbar.addClass('fixed-top');
         }
     });

    //  head landing

     var typed = new Typed('.type', {
        strings: [
            'Flutter Developer', 
            'Android Developer'
        ],
        typeSpeed: 0,
        backSpeed: 0,
        loop: true
      });

        // work list

$('.work-list li').click(function (){

    $(this).addClass('active').siblings().removeClass("active");

    $('.work .row > div').hide();

    $($(this).data('list')).fadeIn();
});

// work popup image

$('.view').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
        verticalFit: true
    }
    
});

// Testimonials carousel

$(".Testim .owl-carousel").owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 100,
    items: 1,
    nav: true,
    loop: true,
    dots: false,
});

// scroll to top

$(window).scroll(function () {
    if ($(window).scrollTop() >= 700) {
        $('.scroll-top').fadeIn(400);
    }else{
        $('.scroll-top').fadeOut(400);
    }
});
$('.scroll-top').click(function () {
    
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// loading page

$(window).on('load',function(){
    $('.loader').css({'display': 'none'});
});

});