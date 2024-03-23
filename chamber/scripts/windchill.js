const url = 'https://api.openweathermap.org/data/2.5/weather?lat=32.5103&lon=-114.9233&units=imperial&appid=9d751f54ea82f937a432e8b6080709aa';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}
apiFetch();

function displayResults(data) {
    const currentTemp = document.querySelector("#current-temp");
    const weatherIcon = document.querySelector("#weather-icon");
    const captionDesc = document.querySelector("#weather-description");
    const feelsLike = document.querySelector("#feels-like");
    const windSpeed = document.querySelector("#wind-speed");
    const humidity = document.querySelector("#humidity");
    
    // Format temperature to show zero decimal points
    const formattedTemp = data.main.temp.toFixed(0);
    // Display Results
    currentTemp.innerHTML = `${formattedTemp}&deg;F`;
    feelsLike.innerHTML = `${data.main.feels_like.toFixed(0)}&deg;F`;
    windSpeed.innerHTML = `${data.wind.speed.toFixed(0)}mph`;
    humidity.innerHTML = `${data.main.humidity}%`;


    // Display weather icon and description
    data.weather.forEach((weatherEvent) => {
        const iconsrc = `https://openweathermap.org/img/wn/${weatherEvent.icon}@2x.png`;
        let desc = weatherEvent.description;
        weatherIcon.setAttribute("src", iconsrc);
        weatherIcon.setAttribute("alt", desc);
        captionDesc.innerHTML= `${desc}`;
    });
}

function calculateWindChill() {
    const temp = document.getElementById("current-temp").innerHTML;
    const windSpeed = document.getElementById("wind-speed").innerHTML;

    let windChill;
    // Check if the temperature and wind speed  are valid
    if (temp > 50 || windSpeed < 3) {
        // return "Invalid input. Temperature should be less than or equal to 50 °F and wind speed should be greater than 3 mph.";
        windChill = "N/A";
        document.getElementById("wind-chill").innerHTML = windChill;
        return;
    }
    // Calculate wind chill factor
    let windChillFactor = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
    windChill = windChillFactor.toFixed(1) + `&deg;F`;
    document.getElementById("wind-chill").innerHTML = windChill;

    // console.log("Wind Chill Factor: " + windChill);
}
calculateWindChill();