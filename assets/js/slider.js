const cpdsSlider = new Swiper('.js-cpdsSlider', {
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    1201: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    993: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    577: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.js-cpdsSlider-next',
    prevEl: '.js-cpdsSlider-prev',
  },
});

const onsiteSlider = new Swiper('.js-onsiteSlider', {
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    1201: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    993: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    577: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.js-onsiteSlider-next',
    prevEl: '.js-onsiteSlider-prev',
  },
});