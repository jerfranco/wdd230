// Function to toggle dark mode
function toggleDarkMode() {
    var mainElement = document.querySelector('main');
    var darkModeToggle = document.querySelector('.switch input[type="checkbox"]');
    var card = document.querySelectorAll('.card p');
    var weather = document.querySelectorAll('.weathercard p');
    var weatherIcon = document.querySelectorAll('.weathercard img');
    var weatherInfo = document.querySelector('.weatherinfo');
    var action = document.querySelector('.actionCard p');

    mainElement.classList.toggle('dark-mode');

    if (darkModeToggle.checked) {
        mainElement.style.backgroundColor = '#fdf0d5';
         card.forEach(function(paragraph) {
            paragraph.style.backgroundColor = '';
            paragraph.style.color = '';
        });
        weather.forEach(function(paragraph) {
            paragraph.style.backgroundColor = '';
            paragraph.style.color = '';
        });
        weatherIcon.forEach(function(paragraph) {
            paragraph.style.backgroundColor = '';
        });
        action.style.color = '';
        action.style.backgroundColor = '';
        weatherInfo.style.backgroundColor = '';
        weatherInfo.style.color = '';
    } else {
        mainElement.style.backgroundColor = 'black';
        card.forEach(function(paragraph) {
            paragraph.style.backgroundColor = '#424242';
            paragraph.style.color = 'white';
        });
        weather.forEach(function(paragraph) {
            paragraph.style.backgroundColor = '#424242';
            paragraph.style.color = 'white';
        });
        weatherIcon.forEach(function(paragraph) {
            paragraph.style.backgroundColor = '#424242';
        });
        action.style.color = 'white';
        action.style.backgroundColor = '#424242';
        weatherInfo.style.backgroundColor = '#424242';
        weatherInfo.style.color = 'white';
    }
}
