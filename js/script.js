let progress = document.getElementById('progressBar')
let totalHeight = document.body.scrollHeight - window.innerHeight
window.onscroll = function() {
    let progressHeight = (window.pageYOffset / totalHeight) * 100
    progress.style.height = progressHeight + '%'
};

var swiper = new Swiper('.swiper-container', {
    effect: 'fade',
    centeredSlides: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



var swiper = new Swiper('.swiper-container2', {
    slidesPerView: 3.5,
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        100: {
            slidesPerView: 1,
            spaceBetween: 100,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 100,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 2.5,
            spaceBetween: 0,
        },
        1342: {
            slidesPerView: 3.5,
            spaceBetween: 0,
        },

    }
});

let menu_button = document.querySelector('.header__burger');
let menu_itself = document.querySelector('.header__menu');
let menu_list = document.querySelector('.header__list');
let body = document.querySelector('body');

menu_button.onclick = function() {
    menu_button.classList.toggle('active');
    menu_itself.classList.toggle('active');
    body.classList.toggle('lock');
};

menu_list.onclick = function() {
    menu_button.classList.toggle('active');
    menu_itself.classList.toggle('active');
    body.classList.toggle('lock');
};

lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    })
    /*с подключением библиотеки jquery:

    $(document).ready(function() {
        $('.header__burger').click(function(event) {
            $('.header__burger,.header__menu').toggleClass('active');
            $('body').toggleClass('lock');
        });
    });

    // закрытие меню при клике на ссылку
    $(document).ready(function() {
        $('.header__list').click(function(event) {
            $('.header__burger,.header__menu').toggleClass('active');
            $('body').toggleClass('lock');
        });
    });*/