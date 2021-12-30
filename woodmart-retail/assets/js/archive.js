window.addEventListener('DOMContentLoaded', () => {
  (function () {
    const initial = document.getElementById('startPrice');
    const final = document.getElementById('endPrice');

    const priceSlider = new Slider('#price-range', {
      id: 'price-range-slider',
      tooltip: 'hide',
    });

    function setInputs() {
      const valuePair = priceSlider.getValue();

      initial.innerHTML = valuePair[0];
      final.innerHTML = valuePair[1];
    }

    priceSlider.on('slide', setInputs);
  })();
});
