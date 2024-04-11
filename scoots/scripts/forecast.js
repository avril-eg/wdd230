document.addEventListener('DOMContentLoaded', () => {

    const apiKey = "9d751f54ea82f937a432e8b6080709aa";

    // Cozumel, Mexico
    const lat = 20.512992206946528;
    const lon = -86.93069161251013;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

    const weatherContainer = document.querySelector('#weather');

    async function apiFetch() {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
        
    }
    // Forecast API Fetch
async function forecastApiFetch() {
    try {
        const response = await fetch(urlForecast);
        if (response.ok) {
            const data = await response.json()
            console.log(data);
            return data;
        }
        else {
            throw Error (await response.text());
        }
    } catch (error) {
            console.log(error);
    }
}


    function capitalizeFirstLetter(str) {
        return str.replace(/\b\w/g, (char) => char.toUpperCase());
    }

    function createCard(data, weekday) {
        console.log('Current Data', data)
        const card = document.createElement('section');
        card.classList.add('forecast-card');

        const dayOfWeek = document.createElement('h3');
        
        dayOfWeek.textContent = weekday;

        const icon = document.createElement('img');
        const main = document.createElement('p');
        const temp = document.createElement('p');
        const humidity = document.createElement('p');
        const description = document.createElement('p');

        icon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        icon.alt = `Weather Icon`;
        icon.loading = 'lazy';
        icon.width = '300';
        icon.height = '200';

        main.textContent =(data.weather[0].main);
        temp.textContent = `${data.main.temp.toFixed(0)}°F`;
        humidity.textContent = `Humidity: ${data.main.humidity.toFixed(0)}`;
        description.textContent = capitalizeFirstLetter(data.weather[0].description);

        card.appendChild(dayOfWeek);
        card.appendChild(main);
        card.appendChild(icon);
        card.appendChild(temp);
        card.appendChild(humidity);
        card.appendChild(description);

        return card;
    }

    function weatherBanner(data1){
    
       const closeBannerBtn = document.getElementById("closeBanner");
        
        // Set initial visibility
        const isBannerVisible = true;
        banner.classList.toggle("banner", isBannerVisible);
        banner.classList.toggle("banner-hide", !isBannerVisible);
        
        // Close the banner when the close button is clicked
        closeBannerBtn.addEventListener("click", function () {
            banner.classList.add("banner-hide");
        });
      
        // Create High Temp Text
        const bannerContent = document.querySelector('.tempHigh');
        bannerContent.textContent = `${data1.main.temp_max.toFixed(0)} `;
            
    
}
    async function displayResults() {
        const data1 = await apiFetch();
        const data2 = await forecastApiFetch();
        
        weatherBanner(data1);
        // Clear container
        weatherContainer.innerHTML = '';

        // Get current day
        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const today = new Date().getDay();
        
        // Forecast loop 
        for (let i = 0; i < 5; i++) {
            let weekday = '';
            if (i == 0){
                 weekday = 'Today';
                weatherCard = createCard(data1, weekday);
                 
            }
            else{
                 weekday = weekdays[(today + i) % 7]; 
                 const index = data2.list.findIndex(item => item.dt_txt.includes('15:00'));
                 const adjustedIndex = index + 8 * i;

                 weatherCard = createCard(data2.list[adjustedIndex], weekday);
            }
            weatherContainer.appendChild(weatherCard);
        }
    }

    displayResults();
})