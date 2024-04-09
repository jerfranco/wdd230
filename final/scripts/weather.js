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
    weather.innerHTML = `<img id="weather-icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">
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

  function displayTemperaturesAtNine(data) {
    const container = document.getElementById("temperatures-at-nine");
    container.style.textAlign = "center";
  
    // Clear previous content
    container.innerHTML = "";
  
    // Extract temperatures at 03:00 for tomorrow, the day after tomorrow, and the day after that
    const temperatures = {};
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 0);
    const dayAfterTomorrow = new Date(today);
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 1);
    const dayAfterThat = new Date(today);
    dayAfterThat.setDate(dayAfterThat.getDate() + 2);
  
    const datesToDisplay = [
      tomorrow.toISOString().split('T')[0],
      dayAfterTomorrow.toISOString().split('T')[0],
      dayAfterThat.toISOString().split('T')[0]
    ];
  
    data.list.forEach(item => {
      const date = item.dt_txt.split(' ')[0];
      const time = item.dt_txt.split(' ')[1];
      const temperature = item.main.temp.toFixed(2);
  
      if (datesToDisplay.includes(date) && time === '09:00:00') {
        if (!temperatures[date]) {
          temperatures[date] = temperature;
        }
      }
    });
  
    // Create and append elements for each day's temperature at 03:00
    Object.entries(temperatures).forEach(([date, temperature]) => {
      const temperatureItem = document.createElement("div");
      const forcastHeading = document.createElement("p");
      temperatureItem.textContent = `${date}: ${temperature} °F`;

      temperatureItem.style.margin = "1rem";

      container.appendChild(temperatureItem);
    });
  }
  
  // Update the API URL with your actual API endpoint
  const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=33.15809000&lon=-117.35059000&appid=012620101562c2ad81e26c7f2eca399b&units=imperial";
  
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch forecast data: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Display temperatures at 03:00 for tomorrow, the day after tomorrow, and the day after that
      displayTemperaturesAtNine(data);
    })
    .catch(error => {
      console.error(error);
    });


    const container = document.getElementById("temperatures-at-nine");
const forecastHeading = document.createElement("p");