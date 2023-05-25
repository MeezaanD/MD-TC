window.addEventListener('DOMContentLoaded', function() {
    const conversionMode = document.querySelectorAll('input[name="conversionMode"]');
    const temperatureRange = document.getElementById('temperatureRange');
    const result = document.getElementById('result');
    const resetBtn = document.getElementById('resetBtn');

    function convertCelsiusToFahrenheit(celsius) {
      return (celsius * 9/5) + 32;
    }

    function convertFahrenheitToCelsius(fahrenheit) {
      return (fahrenheit - 32) * 5/9;
    }

    function updateResult() {
      const selectedMode = document.querySelector('input[name="conversionMode"]:checked').value;
      const temperatureValue = parseInt(temperatureRange.value);

      if (selectedMode === 'celsius') {
        const fahrenheitValue = convertCelsiusToFahrenheit(temperatureValue);
        result.value = fahrenheitValue.toFixed(2) + ' °F';
      } else if (selectedMode === 'fahrenheit') {
        const celsiusValue = convertFahrenheitToCelsius(temperatureValue);
        result.value = celsiusValue.toFixed(2) + ' °C';
      }
    }

    function resetValues() {
      temperatureRange.value = 0;
      result.value = '';
    }

    temperatureRange.addEventListener('input', updateResult);
    conversionMode.forEach(function(mode) {
      mode.addEventListener('change', updateResult);
    });

    resetBtn.addEventListener('click', resetValues);

    // Initial conversion
    updateResult();
  });