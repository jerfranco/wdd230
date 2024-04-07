fetch('https://api.openweathermap.org/data/2.5/weather?lat=33.15809000&lon=-117.35059000&appid=012620101562c2ad81e26c7f2eca399b')
  .then(response => {
    // Check if the response is successful
    // Parse the JSON data returned by the API
    return response.json();
  })
  .then(data => {
    // Work with the JSON data here
    console.log(data);
    const weather = document.getElementById("temp");
    weather.innerHTML = `<img id="weather-icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
    <p>${Math.round((data.main.temp - 273.15) * 9/5 + 32)}°F 
    - ${data.weather[0].main}</p>`;

    // Assign a class to the img element
    const weatherIcon = document.getElementById("weather-icon");
    weatherIcon.classList.add("weather-icon");
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('There was a problem with the fetch operation:', error);
  });
