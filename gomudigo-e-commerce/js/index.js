window.addEventListener('load', () => {
  /*
   // Home slider
  */
  (function () {
    const container1 = document.querySelector('#CarouselOne');
    const container2 = document.querySelector('#CarouselTwo');
    const container3 = document.querySelector('#CarouselThree');

    function createSlider(container) {
      var slider = tns({
        container: container,
        slideBy: 1,
        speed: 500,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayHoverPause: true,
        nav: false,
        controlsText: [
          `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
      </svg>`,
          `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
      </svg>`,
        ],
        gutter: 10,
        loop: true,
        mouseDrag: true,
        responsive: {
          0: {
            items: 2,
          },
          800: {
            items: 3,
          },
          1080: {
            items: 4,
          },
          1320: {
            items: 5,
          },
        },
      });
    }

    createSlider(container1);
    createSlider(container2);
    createSlider(container3);
  })();

  (function () {
    const container = document.querySelector('.testimonials .quotes');

    var slider = tns({
      container: container,
      slideBy: 'page',
      speed: 500,
      autoplay: true,
      autoplayButtonOutput: false,
      autoplayHoverPause: true,
      loop: true,
      mouseDrag: true,
      controls: false,
      nav: false,
      responsive: {
        768: {
          nav: true,
          navPosition: 'bottom',
        },
      },
    });
  })();
});
