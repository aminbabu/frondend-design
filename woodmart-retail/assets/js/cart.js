window.addEventListener('DOMContentLoaded', () => {
  /*
  // Specific products slider
  */
  (function () {
    const elem = document.querySelector('.specific-product .products-wrapper .products');

    function createSlider(elem) {
      const slider = tns({
        container: elem,
        mouseDrag: true,
        swipeAngle: false,
        loop: true,
        speed: 400,
        items: 2,
        nav: false,
        gutter: 24,
        prevButton: '.specific-product .products-wrapper .prev',
        nextButton: '.specific-product .products-wrapper .next',
        responsive: {
          768: {
            items: 3,
          },
          992: {
            items: 4,
          },
          1200: {
            items: 5,
          },
        },
      });

      return slider;
    }

    createSlider(elem);
  })();
});
