function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

function getTemperatureStatus(celsius) {
  if (celsius < 0) {
    return "Freezing";
  } else if (celsius < 10) {
    return "Cold";
  } else if (celsius < 20) {
    return "Mild";
  } else if (celsius < 30) {
    return "Warm";
  } else {
    return "Hot";
  }
}

function printWeatherReport(cityName, celsius) {
  console.log("Weather Report for " + cityName);
  console.log("Temperature: " + celsius + "°C");
  console.log("Temperature: " + celsiusToFahrenheit(celsius) + "°F");
  console.log("Temperature: " + celsiusToKelvin(celsius) + "K");
  console.log("Status: " + getTemperatureStatus(celsius));
  console.log("---");
}

function calculateWindChill(celsius, windSpeed) {
  const windFactor = Math.pow(windSpeed, 0.16);
  return 13.12 + 0.6215 * celsius - 11.37 * windFactor + 0.3965 * celsius * windFactor;
}

function printWindChill(cityName, celsius, windSpeed) {
  const windChill = calculateWindChill(celsius, windSpeed);
  console.log("Wind chill in " + cityName + ": " + windChill.toFixed(2) + "°C");
}

printWeatherReport("Amsterdam", 22);
printWeatherReport("Berlin", 15);
printWeatherReport("Copenhagen", -5);
printWeatherReport("Barcelona", 33);
printWeatherReport("Oslo", 4);

printWindChill("Amsterdam", 22, 15);
printWindChill("Berlin", 15, 20);
printWindChill("Copenhagen", -5, 25);
printWindChill("Barcelona", 33);
printWindChill("Oslo", 4);