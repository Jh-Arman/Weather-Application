const getWeather = ()=>{

    const city= document.getElementById ('cityInput').value;
    const apiKey = 'bb5feb4aea811e96932b7cfbb35a9915';

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then(res =>res.json())
    .then(data => {
        //console.log(data);
        const weatherInfo = document.getElementById('weatherInfo');
        const description = data.weather[0].description;
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        console.log(weatherInfo)
        weatherInfo.innerHTML = `
        
        <p>Description: ${description}</p>
        <h3>Temperature: ${temperature} &#8451</h3>
        <p>Humidity: ${humidity} %</p>
        <p>Wind Speed: ${windSpeed} m/s</p>

        `;
    });

};
