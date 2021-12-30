window.addEventListener('DOMContentLoaded', () => {
  /*
  // Blog post slider
  */
  (function () {
    const elem = document.querySelector('.rw-search-result-section .blog-posts .blogs');

    function createSlider(elem) {
      const slider = tns({
        container: elem,
        mouseDrag: true,
        navPosition: 'bottom',
        swipeAngle: false,
        loop: true,
        speed: 400,
        items: 1,
        gutter: 16,
        prevButton: '.rw-search-result-section .blog-posts .prev',
        nextButton: '.rw-search-result-section .blog-posts .next',
        responsive: {
          768: {
            items: 2,
          },
        },
      });

      return slider;
    }

    createSlider(elem);
  })();

  /*
  // Brands slider
  */
  (function () {
    const elem = document.querySelector('.rw-search-result-section .brands-carousel .brands');

    function createSlider(elem) {
      const slider = tns({
        container: elem,
        mouseDrag: true,
        nav: false,
        swipeAngle: false,
        loop: true,
        items: 2,
        speed: 400,
        prevButton: '.rw-search-result-section .brands-carousel .prev',
        nextButton: '.rw-search-result-section .brands-carousel .next',
        responsive: {
          576: {
            items: 3,
          },
          768: {
            items: 4,
          },
          992: {
            items: 6,
          },
        },
      });

      return slider;
    }

    createSlider(elem);
  })();
});
