fetch('https://api.openweathermap.org/data/2.5/weather?lat=37.773972&lon=-122.431297&appid=012620101562c2ad81e26c7f2eca399b')
  .then(response => {
    // Check if the response is successful
    // Parse the JSON data returned by the API
    return response.json();
  })
  .then(data => {
    // Work with the JSON data here
    console.log(data);
    const weather = document.getElementById("temp");
    weather.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
    <p>${Math.round((data.main.temp - 273.15) * 9/5 + 32)}°F 
    - ${data.weather[0].main}</p>`
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('There was a problem with the fetch operation:', error);
  });