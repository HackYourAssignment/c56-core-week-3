function weather(cityName, tempCelsius) {

    let tempFahrenheit = (tempCelsius * 9 / 5) + 32;
    let tempKelvin = tempCelsius + 273.15;
    console.log(`Weather Report for ${cityName}`)
    console.log(`Temperature: ${tempCelsius}`)
    console.log(`Temperature: ${tempFahrenheit}`)
    console.log(`Temperature: ${tempKelvin}`)
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

return "---"

}


console.log(weather("Amsterdam", 22))
console.log(weather("Berlin", 15))
console.log(weather("Copenhagen", -5))
console.log(weather("Riyadh", 31))
console.log(weather("Moscow", 8))