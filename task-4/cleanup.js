const calculateFahrenheit = (tempCelsius) => (tempCelsius * 9) / 5 + 32;
const calculateKelvin = (tempCelsius) => tempCelsius + 273.15;

const weatherReport = (cityName, tempCelsius) => {
  console.log(`Weather Report for ${cityName}`);
  console.log(`Temperature: ${tempCelsius} °C`);
  console.log(`Temperature: ${calculateFahrenheit(tempCelsius)} °F`);
  console.log(`Temperature: ${calculateKelvin(tempCelsius)} K`);

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
};

const calculateWindSpeed = (windSpeed, tempCelsius) => {
  const resultWindSpeed =
    13.12 +
    0.6215 * tempCelsius -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * tempCelsius * Math.pow(windSpeed, 0.16);
  return resultWindSpeed;
};
const windChill = (cityName, windSpeed, tempCelsius) => {
  console.log(
    `Wind chill in ${cityName}: ${calculateWindSpeed(windSpeed, tempCelsius).toFixed(2)} °C`,
  );
};
weatherReport("Amsterdam", 22);
weatherReport("Berlin", 15);
weatherReport("Copenhagen", -5);
weatherReport("Nijmegen", 10);
weatherReport("Amsterdam", 9);

windChill("Amsterdam", 15, 22);
windChill("Berlin", 20, 15);
windChill("Copenhagen", 25, -5);
windChill("Nijmegen", 44, 10);
windChill("Amsterdam", 35, 9);
