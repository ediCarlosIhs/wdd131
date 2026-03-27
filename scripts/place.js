function calculateWindChill(temperature, windSpeed) {
    return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
}

// debugger;
const temperature = parseFloat(document.getElementById("temperature").textContent);
const windSpeed = parseFloat(document.getElementById("windSpeed").textContent);
const windChillElement = document.getElementById("windChill");

let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    let calculation = calculateWindChill(temperature, windSpeed);
    windChill = `${calculation.toFixed(1)} ºC`;
}

windChillElement.textContent = windChill;
