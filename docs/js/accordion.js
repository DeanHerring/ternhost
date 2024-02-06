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
