function convertToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function convertToKelvin(celsius) {
    return celsius + 273.15;
}

function getWeatherStatus(celsius) {
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

function printWeatherReport(cityName, celsius, windSpeed) {
    let fahrenheit = convertToFahrenheit(celsius);
    let kelvin = convertToKelvin(celsius);
    let status = getWeatherStatus(celsius);
    let windChill = calculateWindChill(celsius, windSpeed);

    console.log("Weather Report for " + cityName);
    console.log("Temperature: " + celsius + "°C");
    console.log("Temperature: " + fahrenheit + "°F");
    console.log("Temperature: " + kelvin + "K");
    console.log("Status: " + status);
    console.log("---");

    console.log("Wind chill in " + cityName + ": " + windChill.toFixed(2) + "°C");
}

printWeatherReport("Amsterdam", 22, 15);
printWeatherReport("Berlin", 15, 20);
printWeatherReport("Copenhagen", -5, 25);
printWeatherReport("Paris", 28, 12);
printWeatherReport("Oslo", 5, 30);
