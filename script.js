document.getElementById('region-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const region = document.getElementById('region').value.toLowerCase().trim();
    const predictionText = getClimatePrediction(region);
    document.getElementById('prediction').textContent = predictionText;
    document.getElementById('result').style.display = 'block';
});

function getClimatePrediction(region) {
    const climateData = {
        'tropical': 'Hot and humid climate with heavy rainfall throughout the year.',
        'desert': 'Very hot with little to no rainfall, dry conditions.',
        'temperate': 'Mild climate with moderate rainfall and seasonal changes.',
        'arctic': 'Cold with freezing temperatures, little precipitation.',
        'savannah': 'Warm to hot climate with seasonal rainfall.',
        'mountain': 'Cool to cold, with significant variation in temperature depending on altitude.'
    };

    if (climateData[region]) {
        return climateData[region];
    } else {
        return 'Sorry, we do not have climate data for this region.';
    }
}
