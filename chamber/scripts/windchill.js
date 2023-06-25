// select HTML elements in the document
const currentTemp = document.querySelector('#temp');
const currentWindSpeed = document.querySelector('#windspeedresult');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Hermosillo,MX&units=imperial&appid=9f3292324049b798caa4a57c365df48d';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

    function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}&deg;F</strong>`;
    currentWindSpeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)} Mph</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }



function windchill () {

    const temp = document.getElementById('temp').innerHTML;
    const windspeed = document.getElementById('windspeedresult').innerHTML; 
    const windchill = document.getElementById('windchillresult');
   
    if ( temp <= 50 && windspeed > 3) { 

        let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temp * Math.pow(windspeed, 0.16);
        wc = Math.floor(wc);

        windchill.innerHTML = wc + "°F";
    }
    else{

        windchill.innerHTML = "N/A"; 
    }

    return windchill;
}

windchill();