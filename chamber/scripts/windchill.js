function calculateWindchill(temperature, windspeed) {
    return 35.74 + (0.6215 * temperature) - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16);
}
  

function windchill() {
    let temperature = parseFloat(document.getElementById('temperature').textContent);
    let windspeed = parseFloat(document.getElementById('windspeed').textContent);


    if (temperature <= 50 && windspeed > 3) {
        let windchill = calculateWindchill(temperature, windspeed);
      
        document.getElementById('windchill').textContent = windchill.toFixed(0);
    } else {
   
        document.getElementById('windchill').textContent = 'N/A';
    }

    
  }
