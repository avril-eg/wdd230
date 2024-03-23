
const forecast = "https://api.openweathermap.org/data/2.5/forecast?lat=32.5103&lon=-114.9233&units=imperial&appid=9d751f54ea82f937a432e8b6080709aa";

async function apiFetch() {
    try {
        const response = await fetch(forecast);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

function capEachWord(description) {
    return description
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

function displayForecast(data) {
    const fiveDayForecast = data.list.filter(x => x.dt_txt.includes('15:00:00'));
    console.log(fiveDayForecast);
    let day = 0;
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    // Limiting to the first 3 entries for a 3-day forecast
    const threeDayForecast = fiveDayForecast.slice(0, 3);
    threeDayForecast.forEach(forecast => {
        const d = new Date(forecast.dt_txt);
        document.getElementById(`dayofweek${day + 1}`).textContent = weekdays[d.getDay()];
        document.getElementById(`forecast${day + 1}`).textContent = `${Math.round(forecast.main.temp_max)}°F`;
        day++;
    });
}

apiFetch()