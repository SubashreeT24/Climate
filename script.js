// Your OpenWeatherMap API key
const apiKey = 'your-api-key-here'; // Replace with your actual API key

// Function to fetch weather data
async function getWeatherData() {
  const country = document.getElementById("country").value.trim();
  const weatherResult = document.getElementById("weather-result");
  const countryNameElem = document.getElementById("country-name");
  const temperatureElem = document.getElementById("temperature");
  const windspeedElem = document.getElementById("windspeed");

  // Clear previous weather results
  countryNameElem.innerText = '';
  temperatureElem.innerText = '';
  windspeedElem.innerText = '';
  weatherResult.style.display = 'none';

  // Check if the user entered a country name
  if (!country) {
    alert("Please enter a country name.");
    return;
  }

  // Show loading message while fetching data
  weatherResult.style.display = 'block';
  weatherResult.innerHTML = `<h2>Loading...</h2>`;

  // Fetch weather data from OpenWeatherMap API
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);

    // Handle errors from the API response
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();

    // Check if data contains valid weather information
    if (data.cod === 200) {
      const temp = data.main.temp;
      const windSpeed = data.wind.speed;
      const countryName = data.name;

      // Display the weather information
      countryNameElem.innerText = `Country: ${countryName}`;
      temperatureElem.innerText = `Temperature: ${temp}°C`;
      windspeedElem.innerText = `Wind Speed: ${windSpeed} m/s`;

      // Show the result section
      weatherResult.style.display = 'block';
    } else {
      // If the API returns an error, show a friendly message
      weatherResult.innerHTML = `<h2>Could not find weather data for ${country}. Please try again.</h2>`;
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
    weatherResult.innerHTML = `<h2>Something went wrong. Please try again later.</h2>`;
  }
}
