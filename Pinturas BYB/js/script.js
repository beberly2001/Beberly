const cityInput = document.getElementById('cityInput');
const dateInput = document.getElementById('dateInput'); // Agregamos un input para la fecha
const searchButton = document.getElementById('searchButton');
const weatherInfoDiv = document.getElementById('weatherInfo');

searchButton.addEventListener('click', async () => {
    const city = cityInput.value;
    const date = dateInput.value; // Obtenemos la fecha ingresada

    if (city.trim() === '' || date.trim() === '') {
        weatherInfoDiv.innerHTML = '<p>Por favor, ingrese el nombre de la ciudad y la fecha.</p>';
        return;
    }

    try {
        const apiKey = '0d3f5939606ccd83346372592c082518'; // Reemplazar con tu propia clave de API de OpenWeatherMap
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
        const forecastData = await response.json();

        if (forecastData.cod !== '200') {
            weatherInfoDiv.innerHTML = `<p>${forecastData.message}</p>`;
            return;
        }

        const forecastList = forecastData.list;
        const selectedForecast = forecastList.find(item => item.dt_txt.includes(date)); // Encontrar pronóstico para la fecha ingresada

        if (!selectedForecast) {
            weatherInfoDiv.innerHTML = `<p>No se encontró pronóstico para la fecha ${date}.</p>`;
            return;
        }

        const temperature = selectedForecast.main.temp;
        const humidity = selectedForecast.main.humidity;

        weatherInfoDiv.innerHTML = `
            <p><strong>Ciudad:</strong> ${city}</p>
            <p><strong>Fecha y Hora:</strong> ${selectedForecast.dt_txt}</p>
            <p><strong>Temperatura:</strong> ${temperature}°C</p>
            <p><strong>Humedad:</strong> ${humidity}%</p>
        `;
    } catch (error) {
        console.error('Error:', error);
    }
});