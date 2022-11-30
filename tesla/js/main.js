$(document).ready(function () {
  $('#pagepiling').pagepiling({
    anchors: ['home', 'about', 'gallery', 'contacts'],
    menu: '#menu',
    scrollingSpeed: 100,
    navigation: {
      'textColor': '#fff',
      'bulletsColor': '#fff',
      'position': 'right',
      'tooltips': ['Home', 'Feature', 'Gallery', 'Contacts']
    }
  });
  
  const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 400,
    slidesPerView: 1,
  
    pagination: {
      el: '.project-paginatation',
      type: 'bullets',
      bulletClass: 'project-bullet',
      bulletActiveClass: 'project-bullet-active',
      clickable: true
    },
  
    navigation: {
      nextEl: '.slide-button-next',
      prevEl: '.slide-button-prev'
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    }
  });
  
  
});
