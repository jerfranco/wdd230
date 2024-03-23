fetch('https://api.openweathermap.org/data/2.5/weather?lat=37.773972&lon=-122.431297&appid=012620101562c2ad81e26c7f2eca399b&units=imperial')
  .then(response => {
    // Check if the response is successful
    // Parse the JSON data returned by the API
    return response.json();
  })
  .then(data => {
    // Work with the JSON data here
    console.log(data);
    const weather = document.getElementById("temp");
    weather.innerHTML = `<p>Today's Weather</p>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon">
    <p>${data.main.temp}°F 
    - ${data.weather[0].main}</p>`;

    const img = weather.querySelector("img");
    img.style.width = "100%";
    weather.style.marginRight = "100px";
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('There was a problem with the fetch operation:', error);
  });




// Function to display the temperatures at 03:00 for each day in the HTML document
function displayTemperaturesAtThree(data) {
    const container = document.getElementById("temperatures-at-three");
    container.style.textAlign = "center";
  
    // Clear previous content
    container.innerHTML = "";
  
    // Extract temperatures at 03:00 for tomorrow, the day after tomorrow, and the day after that
    const temperatures = {};
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dayAfterTomorrow = new Date(today);
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);
    const dayAfterThat = new Date(today);
    dayAfterThat.setDate(dayAfterThat.getDate() + 3);
  
    const datesToDisplay = [
      tomorrow.toISOString().split('T')[0],
      dayAfterTomorrow.toISOString().split('T')[0],
      dayAfterThat.toISOString().split('T')[0]
    ];
  
    data.list.forEach(item => {
      const date = item.dt_txt.split(' ')[0];
      const time = item.dt_txt.split(' ')[1];
      const temperature = item.main.temp.toFixed(2);
  
      if (datesToDisplay.includes(date) && time === '12:00:00') {
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
  const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=37.773972&lon=-122.431297&appid=012620101562c2ad81e26c7f2eca399b&units=imperial";
  
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch forecast data: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Display temperatures at 03:00 for tomorrow, the day after tomorrow, and the day after that
      displayTemperaturesAtThree(data);
    })
    .catch(error => {
      console.error(error);
    });


    const container = document.getElementById("temperatures-at-three");
const forecastHeading = document.createElement("p");
forecastHeading.textContent = "3 Day Forecast";
forecastHeading.style.textAlign = "center";
container.parentNode.insertBefore(forecastHeading, container);
  



// // Function to display the forecast data in the HTML document
// function displayForecast(forecast, elementId) {
//     const container = document.getElementById(elementId);
  
//     // Clear previous content
//     container.innerHTML = "";
  
//     // Create and append elements for each forecast entry
//     Object.entries(forecast).forEach(([time, temperature]) => {
//       const forecastItem = document.createElement("div");
//       forecastItem.textContent = `${time}: ${temperature} °C`; // Display temperature with °C
//       container.appendChild(forecastItem);
//     });
//   }
  
//   // Update the API URL with your actual API endpoint
//   const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=37.773972&lon=-122.431297&appid=012620101562c2ad81e26c7f2eca399b&units=imperial";
  
//   fetch(apiUrl)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Failed to fetch forecast data: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       const today = new Date().toISOString().split('T')[0];
//       const tomorrow = addDays(today, 1);
//       const dayAfterTomorrow = addDays(today, 2);
//       const dayAfterThat = addDays(today, 3);
  
//       const forecastTomorrow = {};
//       const forecastDayAfterTomorrow = {};
//       const forecastDayAfterThat = {};
  
//       data.list.forEach(item => {
//         const date = item.dt_txt.split(' ')[0];
//         const time = item.dt_txt.split(' ')[1];
//         const temperature = item.main.temp.toFixed(2); // Extract temperature and round to 2 decimal places
  
//         if (date === tomorrow) {
//           forecastTomorrow[time] = temperature;
//         } else if (date === dayAfterTomorrow) {
//           forecastDayAfterTomorrow[time] = temperature;
//         } else if (date === dayAfterThat) {
//           forecastDayAfterThat[time] = temperature;
//         }
//       });
  
//       // Display forecast for tomorrow
//       displayForecast(forecastTomorrow, "tomorrow-forecast");
  
//       // Display forecast for the day after tomorrow
//       displayForecast(forecastDayAfterTomorrow, "day-after-tomorrow-forecast");
  
//       // Display forecast for the day after that
//       displayForecast(forecastDayAfterThat, "day-after-that-forecast");
//     })
//     .catch(error => {
//       console.error(error);
//     });
  
//   function addDays(date, days) {
//     const result = new Date(date);
//     result.setDate(result.getDate() + days);
//     return result.toISOString().split('T')[0];
//   }
  
