
    const tempInput = document.getElementById("tempInput");
    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");
    const result = document.getElementById("result");

    tempInput.addEventListener("input", convertTemp);
    fromUnit.addEventListener("change", convertTemp);
    toUnit.addEventListener("change", convertTemp);

    function convertTemp() {
      const input = parseFloat(tempInput.value);
      const from = fromUnit.value;
      const to = toUnit.value;

      if (isNaN(input)) {
        result.textContent = "Please enter a valid number.";
        return;
      }

      let celsius;

      // Convert input to Celsius first
      switch (from) {
        case "celsius":
          celsius = input;
          break;
        case "fahrenheit":
          celsius = (input - 32) * (5 / 9);
          break;
        case "kelvin":
          celsius = input - 273.15;
          break;
      }

      let output;

      // Convert Celsius to target unit
      switch (to) {
        case "celsius":
          output = celsius;
          break;
        case "fahrenheit":
          output = (celsius * 9 / 5) + 32;
          break;
        case "kelvin":
          output = celsius + 273.15;
          break;
      }

      result.textContent = `${output.toFixed(2)} ${getSymbol(to)}`;
    }

    function getSymbol(unit) {
      switch (unit) {
        case "celsius": return "°C";
        case "fahrenheit": return "°F";
        case "kelvin": return "°K";
      }
    }

 