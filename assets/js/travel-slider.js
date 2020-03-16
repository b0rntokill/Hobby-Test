var mySwiper = new Swiper ('.travel__slider', {
  loop: true,
  slidesPerView: 5,
  slidesPerGroup: 1,
  spaceBetween: 35,
  navigation: {
    nextEl: '.travel__slider-button-next',
    prevEl: '.travel__slider-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    500: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 37,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 41,
    },
    1170: {
      slidesPerView: 5,
      slidesPerGroup: 1,
      spaceBetween: 35,
    }
  },
});
