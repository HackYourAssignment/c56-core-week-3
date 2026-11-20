
function convertToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function convertToKelvin(celsius) {
  return celsius + 273.15
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
      return "Status: Hot";
    }
}

function printWeatherReport(city, celsius) {
    const fahrenheit = convertToFahrenheit(celsius);
    const kelvin = convertToKelvin(celsius);
    const status = getTemperatureStatus(celsius);

    console.log("Weather Report for " + city.name);
    console.log("Temperature: " + celsius + "°C");
    console.log("Temperature: " + fahrenheit + "°F");
    console.log("Temperature: " + kelvin + "K");
    console.log("Status: " + status);
    console.log("---");
}

function calculateWindChill(celsius, windSpeed) {
    return 13.12 
        + 0.6215 * celsius
        - 11.37 * Math.pow(windSpeed, 0.16)
        + 0.3965 * celsius * Math.pow(windSpeed, 0.16);
}

// Wind chill calculation for City 2
function printWindChill(city, celsius, windSpeed) {
    const windChill = calculateWindChill(celsius, windSpeed);

    console.log(
        "Wind chill in " + city.name + ": " + windChill.toFixed(2) + "°C"
    );
    console.log("---");
}

// City data
const cities = [
  { name: "Amsterdam", temperature: 22, windSpeed: 15 },
  { name: "Berlin", temperature: 15, windSpeed: 20 },
  { name: "Copenhagen", temperature: -5, windSpeed: 25 }
]

// Weather reports
for (const city of cities) {
  printWeatherReport(city, city.temperature, city.windSpeed);
  printWindChill(city, city.temperature, city.windSpeed);
}