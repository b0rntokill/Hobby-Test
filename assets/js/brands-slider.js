var mySwiper = new Swiper ('.brands__slider', {
  slidesPerView: 6,
  slidesPerGroup: 1,
  spaceBetween: 35,
  preventInteractionOnTransition: true,
  navigation: {
    nextEl: '.brands__slider-button-next',
    prevEl: '.brands__slider-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1170: {
      slidesPerView: 6,
      slidesPerGroup: 1,
      spaceBetween: 35,
    }
  },
});
