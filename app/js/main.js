const swiper = new Swiper('.assortment__slider', {
  slidesPerView: 3,
  spaceBetween: 40,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.arrow-next',
    prevEl: '.arrow-prev',
  },
});



const swiperReviews = new Swiper('.reviews-slider', {
  slidesPerView: 12,
  spaceBetween: 16,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__arrow-next',
    prevEl: '.reviews-slider__arrow-prev',
  },
  pagination: {
    el: ".reviews-slider__pagination",
    type: "fraction",
  },
});