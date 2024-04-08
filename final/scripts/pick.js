function displayTime30MinutesAhead() {
    // Get the current date and time
    var now = new Date();

    // Add 30 minutes to the current time
    now.setMinutes(now.getMinutes() + 30);

    // Format the time
    var hours = now.getHours();
    var minutes = now.getMinutes();

    // Ensure leading zero for single digit minutes
    minutes = (minutes < 10 ? '0' : '') + minutes;

    // Determine AM/PM
    var ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)

    // Display the time
    var timeString = hours + ':' + minutes + ' ' + ampm;

    // Update the HTML element
    document.getElementById('timeDisplay').innerHTML = 'Pick up time: ' + timeString;

    // Store the time in local storage
    localStorage.setItem('time30MinutesAhead', timeString);
}

// Check if the time is stored in local storage
var storedTime = localStorage.getItem('time30MinutesAhead');

// If the time is stored, display it
if (storedTime) {
    document.getElementById('timeDisplay').innerHTML = 'Pick up time: ' + storedTime;
} else {
    // If the time is not stored, display the current time
    displayTime30MinutesAhead();
}