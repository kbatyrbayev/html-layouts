$(document).ready(function () {
  $('#pagepiling').pagepiling({
    anchors: ['home', 'about', 'gallery', 'contact'],
    menu: '#menu',
    scrollingSpeed: 100,
    navigation: {
      'textColor': '#fff',
      'bulletsColor': '#fff',
      'position': 'right',
      'tooltips': ['Главное', 'Характеристика', 'Галерея', 'Контакты']
    }
  });
});

var mySwiper = new Swiper('.swiper-container', {
  speed: 400,
  spaceBetween: 100,
  loop: true,
  navigation: {
    nextEl: '.slide-button-next',
    prevEl: '.slide-button-prev'
  },
  pagination: {
    el: '.project-paginatation',
    type: 'bullets',
    bulletClass: 'project-bullet',
    bulletActiveClass: 'project-bullet-active',
    clickable: true
  }
});