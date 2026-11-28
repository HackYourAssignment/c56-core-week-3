const cities = [
  { name: "Amsterdam", tempCelsius: 22, windSpeed: 15 },
  { name: "Berlin", tempCelsius: 15, windSpeed: 20 },
  { name: "Copenhagen", tempCelsius: -5, windSpeed: 25 },
  { name: "Nijmegen", tempCelsius: 10, windSpeed: 44 },
  { name: "Kherson", tempCelsius: 15, windSpeed: 18 },
];

const calculateFahrenheit = (tempCelsius) => (tempCelsius * 9) / 5 + 32;
const calculateKelvin = (tempCelsius) => tempCelsius + 273.15;

const weatherReport = (cityName, tempCelsius) => {
  console.log(`Weather Report for ${cityName}`);
  console.log(`Temperature: ${tempCelsius}°C`);
  console.log(`Temperature: ${calculateFahrenheit(tempCelsius)}°F`);
  console.log(`Temperature: ${calculateKelvin(tempCelsius)}K`);
  console.log(`Status: ${getTemperatureStatus(tempCelsius)}`);
  console.log("---");
};

const getTemperatureStatus = (tempCelsius) => {
  if (tempCelsius < 0) {
    return "Freezing";
  } else if (tempCelsius >= 0 && tempCelsius < 10) {
    return "Cold";
  } else if (tempCelsius >= 10 && tempCelsius < 20) {
    return "Mild";
  } else if (tempCelsius >= 20 && tempCelsius < 30) {
    return "Warm";
  } else {
    return "Hot";
  }
};

for (const city of cities) {
  weatherReport(city.name, city.tempCelsius);
}

const calculateWindChill = (windSpeed, tempCelsius) => {
  const resultWindChill =
    13.12 +
    0.6215 * tempCelsius -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * tempCelsius * Math.pow(windSpeed, 0.16);
  return resultWindChill;
};

const printWindChill = (cityName, tempCelsius, windSpeed) => {
  console.log(
    `Wind chill in ${cityName}: ${calculateWindChill(windSpeed, tempCelsius).toFixed(2)}°C`,
  );
};

for (const city of cities) {
  printWindChill(city.name, city.tempCelsius, city.windSpeed);
}
