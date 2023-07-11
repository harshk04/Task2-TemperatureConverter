function convertToCelsius() {
    var fahrenheit = document.getElementById("fahrenheit-input").value;
    if (fahrenheit === "") {
      alert("Please enter a temperature in Fahrenheit.");
      return;
    }

    var celsius = (parseFloat(fahrenheit) - 32) * 5 / 9;
    document.getElementById("result-text").innerHTML = fahrenheit + "°F is approximately " + celsius.toFixed(2) + "°C.";
  }

  function convertToFahrenheit() {
    var celsius = document.getElementById("celsius-input").value;
    if (celsius === "") {
      alert("Please enter a temperature in Celsius.");
      return;
    }

    var fahrenheit = (parseFloat(celsius) * 9 / 5) + 32;
    document.getElementById("result-text").innerHTML = celsius + "°C is approximately " + fahrenheit.toFixed(2) + "°F.";
  }