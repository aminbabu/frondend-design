(function () {
  /**
   * filter sidebar
   */
  const sidebar = document.getElementById('side-bar');

  (function () {
    let screenSize = innerWidth;

    function responsiveFilter(windowSise) {
      if (windowSise <= 991.99) {
        sidebar.classList.add('offcanvas', 'offcanvas-start');
      } else {
        sidebar.classList.remove('offcanvas', 'offcanvas-start');
      }
    }
    responsiveFilter(screenSize);

    function reportWindowSize() {
      screenSize = innerWidth;
      responsiveFilter(screenSize);
    }

    window.onresize = reportWindowSize;
  })();
})();
