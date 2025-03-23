document.getElementById('weather-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const country = document.getElementById('country').value.trim();
    const apiKey = 'b813e41284d68655f3714dc41db9f10e';  // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const temperature = data.main.temp;
                const windSpeed = data.wind.speed;

                document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
                document.getElementById('wind-speed').textContent = `Wind Speed: ${windSpeed} m/s`;
                document.getElementById('result').style.display = 'block';
            } else {
                document.getElementById('temperature').textContent = 'Country not found or invalid.';
                document.getElementById('wind-speed').textContent = '';
                document.getElementById('result').style.display = 'block';
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('temperature').textContent = 'Error fetching data';
            document.getElementById('wind-speed').textContent = '';
            document.getElementById('result').style.display = 'block';
        });
});
