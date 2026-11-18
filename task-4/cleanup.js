function checkStatus(temp) {
  let status;
  if (temp < 0) {
    status = "Freezing";
  } else if (temp >= 0 && temp < 10) {
    status = "Cold";
  } else if (temp >= 10 && temp < 20) {
    status = "Mild";
  } else if (temp >= 20 && temp < 30) {
    status = "Warm";
  } else {
    status = "Hot";
  }
  return status;
}
function tempInFahrenheit(temp) {
  return (temp * 9) / 5 + 32;
}
function tempInKelvin(temp) {
  return temp + 273.15;
}
function calculateWindChill(temp, windSpeed) {
  let windChill =
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * temp * Math.pow(windSpeed, 0.16);
  return windChill.toFixed(2);
}
function showWeather(city, temp, windSpeed) {
  console.log(`Weather Report for ${city}`);
  console.log(`Temperature: ${temp} °C`);
  console.log(`Temperature: ${tempInFahrenheit(temp)} °F`);
  console.log(`Temperature: ${tempInKelvin(temp)} K`);
  console.log(`Status: ${checkStatus(temp)}  `);
  console.log("\n----");
  console.log(
    `Wind chill in  ${city} : ${calculateWindChill(temp, windSpeed)}°C\n`,
  );
}

console.log("===============================================\n");
showWeather("Amsterdam", 23, 37);
showWeather("Copenhagen", -5, 37);
