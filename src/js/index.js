// Slider
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 50,
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    360: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});

// Accordion
const accordions = document.querySelectorAll('.accordion');

const initAccordions = (collection) => {
  collection.forEach((accordion) => {
    accordion.addEventListener('click', (e) => {
      const target = e.target;
      const node = target.closest('.accordion');
      const arrow = target.querySelector('.accordion__head-switch');

      node.classList.toggle('show');
      arrow.classList.toggle('reverse');
    });
  });
};

initAccordions(accordions);
