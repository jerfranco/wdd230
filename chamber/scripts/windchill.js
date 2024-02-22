// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    // Check if temperature is within valid range
    if (temperature <= 100 && temperature >= -50) {
        // Check if wind speed is within valid range
        if (windSpeed > 3.0) {
            // Calculate wind chill using the formula
            var windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
            return windChill.toFixed(1); // Return wind chill rounded to 1 decimal place
        } else {
            return "N/A"; // Wind speed is below the threshold for wind chill calculation
        }
    } else {
        return "N/A"; // Temperature is outside the range for wind chill calculation
    }
}

    var currentTemperature = 43; // Example temperature value in Fahrenheit
        var currentWindSpeed = 10; // Example wind speed value in mph

        // Update temperature and wind speed elements on the page
        document.getElementById("tempValue").textContent = "The current temperature right now is: " + currentTemperature;
        document.getElementById("windValue").textContent = "The current wind speed right now is: " + currentWindSpeed;

        // Calculate wind chill and update the element on the page
        var windChill = calculateWindChill(currentTemperature, currentWindSpeed);
        document.getElementById("windchillValue").textContent = "The current wind chill is: " + windChill;