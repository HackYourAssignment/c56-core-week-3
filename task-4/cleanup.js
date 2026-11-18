
function fahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function kelvin(celsius) {
    return celsius + 273.15;
}

function weatherReport(city, temp) {
    console.log("Weather Report for " + city);
    console.log("Temperature: " + temp + "°C");
    console.log("Temperature: " + fahrenheit(temp) + "°F");
    console.log("Temperature: " + kelvin(temp) + "K");

    if (temp < 0) {
        console.log("Status: Freezing");
    } else if (temp < 10) {
        console.log("Status: Cold");
    } else if (temp < 20) {
        console.log("Status: Mild");
    } else if (temp < 30) {
        console.log("Status: Warm");
    } else {
        console.log("Status: Hot");
    }

    console.log("---");
}

function windChill(city, temp, wind) {
    let result = 13.12 + 0.6215 * temp
        - 11.37 * Math.pow(wind, 0.16)
        + 0.3965 * temp * Math.pow(wind, 0.16);

    console.log("Wind chill in " + city + ": " + result.toFixed(2) + "°C");
}

// Original cities
weatherReport("Amsterdam", 22);
weatherReport("Berlin", 15);
weatherReport("Copenhagen", -5);

windChill("Amsterdam", 22, 15);
windChill("Berlin", 15, 20);
windChill("Copenhagen", -5, 25);

// Bonus: Two more cities
weatherReport("Paris", 25);
weatherReport("London", 8);

windChill("Paris", 25, 12);
windChill("London", 8, 18);
