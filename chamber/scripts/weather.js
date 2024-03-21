
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

//Three Day Forecast



const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=29.0667&lon=-110.9667&units=imperial&appid=9d751f54ea82f937a432e8b6080709aa";


async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            //console.log(data);
            displayResults(data);
        } else{
            throw Error(await response.text());
        }
    } catch (error){
       // console.log(error);
    }
}


