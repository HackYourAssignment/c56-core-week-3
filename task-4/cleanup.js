function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function convertCelsiusToKelvin(celsius) {
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
function calculateWindChill(celsius, windSpeed) {
    return 13.12 + 0.6215 * celsius
        - 11.37 * Math.pow(windSpeed, 0.16)
        + 0.3965 * celsius * Math.pow(windSpeed, 0.16);
}

function printWeatherReport(cityName, celsius) {
    let fahrenheit = convertCelsiusToFahrenheit(celsius);
    let kelvin = convertCelsiusToKelvin(celsius);

    console.log("Weather Report for " + cityName);
    console.log("Temperature: " + celsius + "°C");
    console.log("Temperature: " + fahrenheit + "°F");
    console.log("Temperature: " + kelvin + "K");
    console.log("Status: " + getTemperatureStatus(celsius));
}
// Temperature conversion and weather report for City 1
let cityName1 = "Amsterdam";
let tempCelsius1 = 22;
printWeatherReport(cityName1, tempCelsius1);

// Temperature conversion and weather report for City 2
let cityName2 = "Berlin";
let tempCelsius2 = 15;
printWeatherReport(cityName2, tempCelsius2);
// Temperature conversion and weather report for City 3
let cityName3 = "Copenhagen";
let tempCelsius3 = -5;
printWeatherReport(cityName3, tempCelsius3);
function printWindChillReport(cityName, celsius, windSpeed) {
    let windChill = calculateWindChill(celsius, windSpeed);
    console.log("Wind chill in " + cityName + ": " + windChill.toFixed(2) + "°C");
}
// Weather report for City 4
let cityName4 = "Barcelona";
let tempCelsius4 = 26;
printWeatherReport(cityName4, tempCelsius4);

// Weather report for City 5
let cityName5 = "Milan";
let tempCelsius5 = 8;
printWeatherReport(cityName5, tempCelsius5);
// Wind chill calculation for City 1
let windSpeed1 = 15;
printWindChillReport(cityName1, tempCelsius1, windSpeed1);

// Wind chill calculation for City 2
let windSpeed2 = 20;
printWindChillReport(cityName2, tempCelsius2, windSpeed2);

// Wind chill calculation for City 3
let windSpeed3 = 25;
printWindChillReport(cityName3, tempCelsius3, windSpeed3);
// Wind chill for City 4
let windSpeed4 = 14;
printWindChillReport(cityName4, tempCelsius4, windSpeed4);

// Wind chill for City 5
let windSpeed5 = 22;
printWindChillReport(cityName5, tempCelsius5, windSpeed5);