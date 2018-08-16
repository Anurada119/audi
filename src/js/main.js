$(document).ready(function () {

    searchBox();
    mobileMenu();

    $('.ab-slider').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 1000,
        fade: false,
        cssEase: 'linear'
    });

    $('.brands-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        dots: false,
        cssEase: 'linear'
      });
});

var searchBox = function(){
    $('.search-btn').on('click', function(){
        $(this).siblings('.searchbar').toggleClass('searchbar-open');
    });
}

var mobileMenu = function(){
    $('.mobile-menu-icon').on('click', function(){
        $(this).toggleClass('open');
        $('.ab-side-nav').toggleClass('nav-open');

        if($('.ab-side-nav').hasClass('nav-open')){
            $('body').css({
                'overflow':'hidden'
            });
        }else{
            $('body').css({
                'overflow':'auto'
            });
        }
    })
}