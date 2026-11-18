function TemperatureConversion(cityName, tempCelsius) {
  let tempFahrenheit = (tempCelsius * 9 / 5) + 32;
  let tempKelvin = tempCelsius + 273.15;
  console.log("Weather Report for " + cityName);
  console.log("Temperature: " + tempCelsius + "°C");
  console.log("Temperature: " + tempFahrenheit + "°F");
  console.log("Temperature: " + tempKelvin + "K");
  if (tempCelsius < 0) {
    console.log("Status: Freezing");
  } else if (tempCelsius >= 0 && tempCelsius < 10) {
    console.log("Status: Cold");
  } else if (tempCelsius >= 10 && tempCelsius < 20) {
    console.log("Status: Mild");
  } else if (tempCelsius >= 20 && tempCelsius < 30) {
    console.log("Status: Warm");
  } else {
    console.log("Status: Hot");
  }
  console.log("---");
}
function WindChillCalculation(windSpeed, cityName, tempCelsius) {
  let windChill = 13.12 + 0.6215 * tempCelsius - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * tempCelsius * Math.pow(windSpeed, 0.16);
  console.log("Wind chill in " + cityName + ": " + windChill.toFixed(2) + "°C");
}

TemperatureConversion("Amsterdam", 22);
TemperatureConversion("Berlin", 15);
TemperatureConversion("Copenhagen", -5);

WindChillCalculation(15, "Amsterdam", 22);
WindChillCalculation(20, "Berlin", 15);
WindChillCalculation(25, "Copenhagen", -5);
