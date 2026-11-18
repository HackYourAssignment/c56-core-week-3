const cities = [
    { city: 'Amsterdam', tempCelsius: 22, windSpeed: 15 },
    { city: 'Berlin', tempCelsius: 15, windSpeed: 20 },
    { city: 'Copenhagen', tempCelsius: -5, windSpeed: 25 },
    // 2 extra cities
    { city: 'Stockholm', tempCelsius: 0, windSpeed: 30 },
    { city: 'Paris', tempCelsius: 18, windSpeed: 10 }
];

/* Utility functions */
const convertCelsiusToFahrenheit = (tempCelsius1) => (tempCelsius1 * 9 / 5) + 32;
const convertCelsiusToKelvin = (tempCelsius1) => tempCelsius1 + 273.15;
const showStatus = (tempCelsius1) => {
  if (tempCelsius1 < 0) {
    console.log("Status: Freezing");
  } else if (tempCelsius1 >= 0 && tempCelsius1 < 10) {
    console.log("Status: Cold");
  } else if (tempCelsius1 >= 10 && tempCelsius1 < 20) {
    console.log("Status: Mild");
  } else if (tempCelsius1 >= 20 && tempCelsius1 < 30) {
    console.log("Status: Warm");
  } else {
    console.log("Status: Hot");
  }
}

/* Show the report */
const printWeatherReport = ({ city, tempCelsius, windSpeed = 0 }) => {
  if (!city || (tempCelsius !== 0 && !tempCelsius)) {
    console.log('Aborting report: you provided faulty data. Please, check the input.')
    return;
  }
  const tempFahr = convertCelsiusToFahrenheit(tempCelsius);
  const tempKelv = convertCelsiusToKelvin(tempCelsius);
  let windChill = windSpeed
      ? 13.12 + 0.6215 * tempCelsius - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * tempCelsius * Math.pow(windSpeed, 0.16)
      : 0;

  console.log(`Weather Report for ${city}`);
  console.log(`Temperature: ${tempCelsius}°C`);
  console.log(`Temperature: ${tempFahr}°F`);
  console.log(`Temperature: ${tempKelv}K`);
  if (windChill) {
    console.log("Wind chill in " + city + ": " + windChill.toFixed(2) + "°C");
  }
  showStatus(tempCelsius)
  console.log("---");
}

/* Print out all the reports at once */
for (const { city, tempCelsius, windSpeed } of cities) {
  printWeatherReport({ city, tempCelsius, windSpeed });
}
