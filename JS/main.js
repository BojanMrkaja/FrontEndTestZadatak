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

});

//show popup video
document.querySelector('.show-video').addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector('.custom-popup').classList.add("d-block");
    document.querySelector('html').style.overflow = 'hidden';
});

//close popup video
document.querySelector('.custom-popup').addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector('.custom-popup').classList.remove('d-block');
    document.querySelector('html').style.overflow = 'visible';
});

//close popup video on x click
document.querySelector('.fa-close').addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector('.custom-popup').classList.remove('d-block');
    document.querySelector('html').style.overflow = 'visible';
});

//prevent close popup by clicking on popup body
document.querySelector('.popup-body').addEventListener('click', (e)=>{
    e.stopPropagation();
});

