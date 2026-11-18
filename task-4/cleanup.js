function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

function getTemperatureStatus(celsius) {
   if (celsius < 0) {
    return "Freezing";
  }
  if (celsius < 10) {
    return "Cold";
  }
  if (celsius < 20) {
    return "Mild";
  }
  if (celsius < 30) {
    return "Warm";
  }
  return "Hot";

}

function printWeatherReport(cityName, celsius) {
  const fahrenheit = celsiusToFahrenheit(celsius);
  const kelvin = celsiusToKelvin(celsius);

  console.log("Weather Report for " + cityName);
  console.log("Temperature: " + celsius + "°C");
  console.log("Temperature: " + fahrenheit + "°F");
  console.log("Temperature: " + kelvin + "K");
  console.log("Status: " + getTemperatureStatus(celsius));
  console.log("---");
}

function calculateWindChill(celsius, windSpeed) {
  return (
    13.12 +
    0.6215 * celsius -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * celsius * Math.pow(windSpeed, 0.16)
  );
}

function printWindChill(cityName, celsius, windSpeed) {
  const windChill = calculateWindChill(celsius, windSpeed);
  console.log("Wind chill in " + cityName + ": " + windChill.toFixed(2) + "°C");
}

printWeatherReport("Amsterdam", 22);
printWeatherReport("Berlin", 15);
printWeatherReport("Copenhagen", -5);

printWindChill("Amsterdam", 22, 15);
printWindChill("Berlin", 15, 20);
printWindChill("Copenhagen", -5, 25);