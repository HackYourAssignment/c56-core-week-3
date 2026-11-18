function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

 function convertCelsiusToKelvin(celsius) {
  return celsius + 273.15;
 }

 function calculateWindChill(temperature, windSpeed) {
  return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
 }

 function printWeatherStatus(celsius) {
  if (celsius < 0) {
  console.log("Status: Freezing");
} else if (celsius >= 0 && celsius < 10) {
  console.log("Status: Cold");
} else if (celsius >= 10 && celsius < 20) {
  console.log("Status: Mild");
} else if (celsius >= 20 && celsius < 30) {
  console.log("Status: Warm");
} else {
  console.log("Status: Hot");
}

 }
// Temperature conversion and weather report for City 1
let cityName1 = "Amsterdam";
let tempCelsius1 = 22;
let tempFahrenheit1 = convertCelsiusToFahrenheit(tempCelsius1);
let tempKelvin1 = convertCelsiusToKelvin(tempCelsius1);
console.log("Weather Report for " + cityName1);
console.log("Temperature: " + tempCelsius1 + "°C");
console.log("Temperature: " + tempFahrenheit1 + "°F");
console.log("Temperature: " + tempKelvin1 + "K");
printWeatherStatus(tempCelsius1);
console.log("---");

// Temperature conversion and weather report for City 2
let cityName2 = "Berlin";
let tempCelsius2 = 15;
let tempFahrenheit2 = convertCelsiusToFahrenheit(tempCelsius2);
let tempKelvin2 = convertCelsiusToKelvin(tempCelsius2);
console.log("Weather Report for " + cityName2);
console.log("Temperature: " + tempCelsius2 + "°C");
console.log("Temperature: " + tempFahrenheit2 + "°F");
console.log("Temperature: " + tempKelvin2 + "K");
printWeatherStatus(tempCelsius2);
console.log("---");

// Temperature conversion and weather report for City 3
let cityName3 = "Copenhagen";
let tempCelsius3 = -5;
let tempFahrenheit3 = convertCelsiusToFahrenheit(tempCelsius3);
let tempKelvin3 = convertCelsiusToKelvin(tempCelsius3);
console.log("Weather Report for " + cityName3);
console.log("Temperature: " + tempCelsius3 + "°C");
console.log("Temperature: " + tempFahrenheit3 + "°F");
console.log("Temperature: " + tempKelvin3 + "K");
printWeatherStatus(tempCelsius3);
console.log("---");

// Wind chill calculation for City 1
let windSpeed1 = 15;
let windChill1 = calculateWindChill(tempCelsius1,  windSpeed1);
console.log("Wind chill in " + cityName1 + ": " + windChill1.toFixed(2) + "°C");

// Wind chill calculation for City 2
let windSpeed2 = 20;
let windChill2 = calculateWindChill(tempCelsius2, windSpeed2);
console.log("Wind chill in " + cityName2 + ": " + windChill2.toFixed(2) + "°C");

// Wind chill calculation for City 3
let windSpeed3 = 25;
let windChill3 = calculateWindChill(tempCelsius3, windSpeed3);
console.log("Wind chill in " + cityName3 + ": " + windChill3.toFixed(2) + "°C");

let cityName4 = "Zurich";
let tempCelsius4 = 4;
let tempFahrenheit4 = convertCelsiusToFahrenheit(tempCelsius4);
let tempKelvin4 = convertCelsiusToKelvin(tempCelsius4);

console.log("Weather Report for " + cityName4);
console.log("Temperature: " + tempCelsius4 + "°C");
console.log("Temperature: " + tempFahrenheit4 + "°F");
console.log("Temperature: " + tempKelvin4 + "K");
printWeatherStatus(tempCelsius4);
console.log("---");

// Wind chill calculation for City 4
let windSpeed4 = 12;
let windChill4 = calculateWindChill(tempCelsius4, windSpeed4);
console.log("Wind chill in " + cityName4 + ": " + windChill4.toFixed(2) + "°C");

let cityName5 = "Bali";
let tempCelsius5 = 31;
let tempFahrenheit5 = convertCelsiusToFahrenheit(tempCelsius5);
let tempKelvin5 = convertCelsiusToKelvin(tempCelsius5);

console.log("Weather Report for " + cityName5);
console.log("Temperature: " + tempCelsius5 + "°C");
console.log("Temperature: " + tempFahrenheit5 + "°F");
console.log("Temperature: " + tempKelvin5 + "K");
printWeatherStatus(tempCelsius5);
console.log("---");

// Wind chill calculation for City 5
let windSpeed5 = 10;
let windChill5 = calculateWindChill(tempCelsius5, windSpeed5);
console.log("Wind chill in " + cityName5 + ": " + windChill5.toFixed(2) + "°C");