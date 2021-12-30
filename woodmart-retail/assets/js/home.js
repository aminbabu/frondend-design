window.addEventListener('DOMContentLoaded', () => {
  /*
  // Hero slider
  */
  (function () {
    const elem = document.querySelector('.hero-carousel');
    const slider = tns({
      container: elem,
      mouseDrag: true,
      swipeAngle: false,
      speed: 400,
      prevButton: '#hero-section .prev',
      nextButton: '#hero-section .next',
    });
  })();

  /*
  // Top categories
  */
  (function () {
    const elem = document.querySelector('.categories-carousel .categories');
    const slider = tns({
      container: elem,
      items: 2,
      speed: 400,
      mouseDrag: true,
      swipeAngle: false,
      nav: false,
      prevButton: '.categories-carousel .prev',
      nextButton: '.categories-carousel .next',

      responsive: {
        768: {
          items: 3,
        },
        992: {
          items: 4,
        },
        1200: {
          items: 6,
        },
      },
    });
  })();

  /*
  // Furniture categories
  */
  (function () {
    const elem = document.querySelector('.furniture-categories .categories-carousel .categories');
    const slider = tns({
      container: elem,
      items: 2,
      speed: 400,
      mouseDrag: true,
      swipeAngle: false,
      nav: false,
      prevButton: '.furniture-categories .categories-carousel .prev',
      nextButton: '.furniture-categories .categories-carousel .next',

      responsive: {
        768: {
          items: 3,
        },
        992: {
          items: 4,
        },
        1200: {
          items: 6,
        },
      },
    });
  })();

  /*
  // Furiture Brands
  */
  (function () {
    const elem = document.querySelector('.furniture-categories .brands-carousel .brands');
    const slider = tns({
      container: elem,
      items: 2,
      speed: 400,
      mouseDrag: true,
      swipeAngle: false,
      nav: false,
      prevButton: '.furniture-categories .brands-carousel .prev',
      nextButton: '.furniture-categories .brands-carousel .next',

      responsive: {
        768: {
          items: 3,
        },
        992: {
          items: 4,
        },
        1200: {
          items: 6,
        },
      },
    });
  })();

  /*
  // Blog post's slider
  */
  (function () {
    const elem = document.querySelector('.blog-posts .carousel-wrapper .blogs');
    const slider = tns({
      container: elem,
      mouseDrag: true,
      swipeAngle: false,
      speed: 400,
      nav: false,
      rewind: true,
      gutter: 16,
      prevButton: '.blog-posts .carousel-wrapper .prev',
      nextButton: '.blog-posts .carousel-wrapper .next',
      responsive: {
        576: {
          items: 2,
        },
        992: {
          items: 3,
        },
      },
    });
  })();

  /*
  // Specific products slider
  */

  (function () {
    const elem1 = document.querySelector('.specific-product .products-wrapper .products1');
    const elem2 = document.querySelector('.specific-product .products-wrapper .products2');
    const elem3 = document.querySelector('.specific-product .products-wrapper .products3');

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
        prevButton: '.specific-product .sec-heading .prev',
        nextButton: '.specific-product .sec-heading .next',
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

    createSlider(elem1);
    createSlider(elem2);
    createSlider(elem3);
  })();

  /*
  // Special sale offer slider
  */
  (function () {
    const elem1 = document.querySelector(
      '.special-sale-offer .special-offer-product .side-products'
    );

    const elem2 = document.querySelector(
      '.special-sale-offer .special-offer-product2 .side-products'
    );

    function createSlider(elem, container) {
      const slider = tns({
        container: elem,
        mouseDrag: true,
        swipeAngle: false,
        speed: 400,
        nav: false,
        rewind: true,
        prevButton: `.special-sale-offer .${container} .prev`,
        nextButton: `.special-sale-offer .${container} .next`,
      });

      return slider;
    }

    createSlider(elem1, 'special-offer-product');
    createSlider(elem2, 'special-offer-product2');
  })();

  /*
  // Favourite products slider
  */
  (function () {
    const elem1 = document.querySelector(
      '.favourite-product .favourite-product-carousel .products'
    );
    const elem2 = document.querySelector(
      '.favourite-product2 .favourite-product-carousel .products'
    );

    function createSlider(elem) {
      const slider = tns({
        container: elem,
        mouseDrag: true,
        swipeAngle: false,
        speed: 400,
        rewind: true,
        navPosition: 'bottom',
      });

      return slider;
    }

    createSlider(elem1);
    createSlider(elem2);
  })();
});
