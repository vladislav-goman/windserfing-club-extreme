import Swiper from 'swiper/bundle';

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.main-scene__slider', {
    spaceBetween: 30,
    effect: 'fade',
    navigation: {
      nextEl: document.querySelector('.main-scene__next'),
      prevEl: document.querySelector('.main-scene__prev'),
    },
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 10 * 1000,
      disableOnInteraction: false,
    },
  });
});
