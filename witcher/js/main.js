var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.arrow'
    },
    breakpoints: {
        560: {
            slidesPerView: 2,
        },
        400: {
            slidesPerView: 1,
        }
    }
});

var hamburgerBtn = document.querySelector('.hamburger');
var header = document.querySelector('.header');

hamburgerBtn.addEventListener('click', () => {
    console.log('click')
    header.classList.toggle('header-active');
    hamburgerBtn.classList.toggle('hamburger-active')
})