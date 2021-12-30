window.addEventListener('DOMContentLoaded', () => {
  /*
  // Dropdown events
  */
  (function () {
    const dropdownButtons = document.querySelectorAll('.dropdown-btn');

    function toggleDropdown() {
      this.classList.toggle('active');
    }

    dropdownButtons.forEach((button) => {
      button.addEventListener('click', toggleDropdown);
    });
  })();

  /*
   // Select product category
  */
  (function () {
    const categories = document.querySelectorAll('.header-middle .dropdown-menu .dropdown-item');

    categories.forEach(function (category) {
      category.addEventListener('click', function (e) {
        e.preventDefault();

        const catetoryName = category.textContent;
        document.querySelector('.header-middle .dropdown-toggle small').innerHTML = catetoryName;
      });
    });
  })();

  /*
  // Partial collapse
  */
  (function () {
    const showMoreButtons = document.querySelectorAll(
      '.fadein-content .product-details .show-more'
    );

    showMoreButtons.forEach(function (elem) {
      elem.addEventListener('click', function () {
        const elem = this.previousElementSibling;
        const clases = elem.classList;
        console.log(clases);

        this.style.display = 'none';

        if (clases.contains('line-clamp-3')) {
          clases.remove('line-clamp-3');
        }
      });
    });
  })();
});
