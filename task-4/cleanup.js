// Temperature conversion and weather report for City 1
function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function convertCelsiusToKelvin(celsius) {
  return celsius + 273.15;
}

function printWeatherReport(city, celsius) {
  console.log(`Weather Report for ${city}
Temperature: ${celsius} °C
Temperature: ${convertCelsiusToFahrenheit(celsius)} °F
Temperature: ${convertCelsiusToKelvin(celsius)} °K
Status: ${getCityStatus(celsius)}
---`)
}

function getCityStatus(celsius) {
  if (celsius < 0) {
    return "Freezing"
  } else if (celsius < 10) {
    return "Cold"
  } else if (celsius < 20) {
    return "Mild"
  } else if (celsius < 30) {
    return "Warm"
  } else {
    return "Hot"
  }
}

printWeatherReport("Amsterdam", 22);
printWeatherReport("Berlin", 15);
printWeatherReport("Copenhagen", -5);

function calculateWindChill(windSpeed, celsius) {
  const windChill = 13.12 + 0.6215 * celsius - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * celsius * Math.pow(windSpeed, 0.16);
  return windChill.toFixed(2)
}

function printWindChillReport(city, windChill) {
  console.log(`Wind chill in ${city}: ${windChill} °C`)
}

printWindChillReport("Amsterdam", calculateWindChill(15, 22));
printWindChillReport("Berlin", calculateWindChill(20, 15));
printWindChillReport("Copenhagen", calculateWindChill(25, -5));