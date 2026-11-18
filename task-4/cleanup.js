// Temperature conversions
function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

// Weather status based on temperature
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

// Print the full weather report for one city
function printWeatherReport(cityName, celsius) {
  console.log("Weather Report for " + cityName);
  console.log("Temperature: " + celsius + "°C");
  console.log("Temperature: " + celsiusToFahrenheit(celsius) + "°F");
  console.log("Temperature: " + celsiusToKelvin(celsius) + "K");
  console.log("Status: " + getTemperatureStatus(celsius));
  console.log("---");
}

// Wind chill formula
function calculateWindChill(celsius, windSpeed) {
  return 13.12 + 0.6215 * celsius - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * celsius * Math.pow(windSpeed, 0.16);
}

// Print the wind chill for one city
function printWindChill(cityName, celsius, windSpeed) {
  const windChill = calculateWindChill(celsius, windSpeed);
  console.log("Wind chill in " + cityName + ": " + windChill.toFixed(2) + "°C");
}

// Weather reports
printWeatherReport("Amsterdam", 22);
printWeatherReport("Berlin", 15);
printWeatherReport("Copenhagen", -5);

// Bonus: weather reports for extra cities
printWeatherReport("Shiraz", 33);
printWeatherReport("Tehran", 25);
printWeatherReport("New York", 8);
printWeatherReport("Boston", -2);

// Wind chill
printWindChill("Amsterdam", 22, 15);
printWindChill("Berlin", 15, 20);
printWindChill("Copenhagen", -5, 25);

// Bonus: wind chill for extra cities
printWindChill("Shiraz", 33, 10);
printWindChill("Tehran", 25, 12);
printWindChill("New York", 8, 18);
printWindChill("Boston", -2, 30);