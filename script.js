// Your OpenWeatherMap API key
const apiKey = 'f596984e0ab7f7b490242969fe3fb529'; // Replace with your API key

// Function to fetch weather data
async function getWeatherData() {
  const country = document.getElementById("country").value;
  const weatherResult = document.getElementById("weather-result");

  // Check if input is empty
  if (!country) {
    alert("Please enter a country name.");
    return;
  }

  // Fetch weather data from OpenWeatherMap API
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=${apiKey}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      const temp = data.main.temp;
      const windSpeed = data.wind.speed;
      const countryName = data.name;

      // Display the weather information
      document.getElementById("country-name").innerText = `Country: ${countryName}`;
      document.getElementById("temperature").innerText = `Temperature: ${temp}°C`;
      document.getElementById("windspeed").innerText = `Wind Speed: ${windSpeed} m/s`;

      // Show the result section
      weatherResult.style.display = 'block';
    } else {
      alert("Country not found. Please try again.");
    }
  } catch (error) {
    alert("An error occurred. Please try again.");
  }
}
