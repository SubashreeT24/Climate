function getWeather() {
    const country = document.getElementById('countryInput').value.trim();
    const weatherInfo = document.getElementById('weatherInfo');
    
    if (!country) {
        weatherInfo.innerHTML = '<p class="error">Please enter a country name</p>';
        return;
    }
    
    weatherInfo.innerHTML = '<p>Loading weather data...</p>';
    
    // API Ninjas endpoint
    const apiUrl = `https://api.api-ninjas.com/v1/weather?city=${encodeURIComponent(country)}`;
    
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'X-Api-Key': 'f596984e0ab7f7b490242969fe3fb529', // Replace with your actual API key
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (Object.keys(data).length === 0) {
            weatherInfo.innerHTML = '<p class="error">Country not found or invalid.</p>';
        } else {
            weatherInfo.innerHTML = `
                <h2>Weather Information</h2>
                <p>Temperature: ${data.temp}°C</p>
                <p>Feels Like: ${data.feels_like}°C</p>
                <p>Wind Speed: ${data.wind_speed} m/s</p>
                <p>Wind Direction: ${data.wind_degrees}°</p>
                <p>Humidity: ${data.humidity}%</p>
            `;
        }
    })
    .catch(error => {
        weatherInfo.innerHTML = `<p class="error">Error: ${error.message}</p>`;
    });
}
