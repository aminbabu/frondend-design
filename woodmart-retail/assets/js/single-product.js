window.addEventListener('DOMContentLoaded', () => {
  /*
  // Zoom product
  */
  (function () {
    const zoomFrame = document.querySelector('.rw-single-product-section .rw-body-content .zoom');

    function zoom(e) {
      var zoomer = e.currentTarget;
      e.offsetX ? (offsetX = e.offsetX) : (offsetX = e.touches[0].pageX);
      e.offsetY ? (offsetY = e.offsetY) : (offsetX = e.touches[0].pageX);
      x = (offsetX / zoomer.offsetWidth) * 100;
      y = (offsetY / zoomer.offsetHeight) * 100;
      zoomer.style.backgroundPosition = x + '% ' + y + '%';
    }
    zoomFrame.addEventListener('mousemove', function (ev) {
      zoom(ev);
    });
  })();
});
