/// <reference path="../typings/globals/jquery/index.d.ts" />

$(document).ready(function () {
    $('.nav-menu').hide();
    $('.menu').on('click', function () {
        $(this).toggleClass('fa-bars fa-close')
        $('.nav-menu').slideToggle();
    });

    //toggle active class on click
    $('.nav-link').on('click', function () {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });

    //SLIDER

    if($('.owl-carousel').length > 0){
        $('.projects-slider').owlCarousel({
            loop: false,
            margin: 20,
            responsiveClass: true,
            dots: false,
            nav:true,
            autoplayHoverPause:true,
            navText: ['<span class="fa fa-chevron-left">', '<span class="fa fa-chevron-right">'],
            autoplay: true,


            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    }
   
});

//show popup video
document.querySelector('.show-video').addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector('.custom-popup').classList.add("d-block");
    document.querySelector('html').style.overflow = 'hidden';
    document.querySelector('iframe').setAttribute('src', 'https://www.youtube.com/embed/lz0wg-t-a7A?autoplay=1');
});

//close popup video
document.querySelector('.custom-popup').addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector('.custom-popup').classList.remove('d-block');
    document.querySelector('html').style.overflow = 'visible';
    let video = document.querySelector('.popup-video');
    video.src = video.src;
     document.querySelector('iframe').setAttribute('src', 'https://www.youtube.com/embed/lz0wg-t-a7A');
});


//close popup video on x click
document.querySelector('.fa-close').addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector('.custom-popup').classList.remove('d-block');
    document.querySelector('html').style.overflow = 'visible';
    document.querySelector('iframe').setAttribute('src', 'https://www.youtube.com/embed/lz0wg-t-a7A');
});

//prevent close popup by clicking on popup body
document.querySelector('.popup-body').addEventListener('click', (e)=>{
    e.stopPropagation();
});

