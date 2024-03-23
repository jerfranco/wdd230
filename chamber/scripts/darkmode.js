// Function to toggle dark mode
function toggleDarkMode() {
    var mainElement = document.querySelector('main');
    var darkModeToggle = document.querySelector('.switch input[type="checkbox"]');
    var card = document.querySelectorAll('.card p');
    var weather = document.querySelectorAll('.weathercard p');
    var weatherIcon = document.querySelectorAll('.weathercard img');
    var weatherInfo = document.querySelector('.weatherinfo');
    var action = document.querySelector('.actionCard p');
    var members = document.querySelectorAll('.member');
    var websites = document.querySelectorAll('.website a');
    var message = document.querySelector('#sidebar-message');

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
        members.forEach(function(member) {
            member.style.color = '';
            member.style.backgroundColor = '';
        });
        websites.forEach(function(element) {
            element.style.color = '';
        });
        action.style.color = '';
        action.style.backgroundColor = '';
        weatherInfo.style.backgroundColor = '';
        weatherInfo.style.color = '';
        message.style.color = '';
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
        members.forEach(function(member) {
            member.style.color = 'white';
            member.style.backgroundColor = '#424242';
        });
        websites.forEach(function(element) {
            element.style.color = 'white';
        });
        action.style.color = 'white';
        action.style.backgroundColor = '#424242';
        weatherInfo.style.backgroundColor = '#424242';
        weatherInfo.style.color = 'white';
        message.style.color = 'white';
    }
}
