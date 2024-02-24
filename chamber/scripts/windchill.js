document.addEventListener("DOMContentLoaded", function() {
  const temperature = document.querySelector("#temp"); 
  const windspeed = document.querySelector("#speed"); 


  if (temperature <= 50 && windspeed > 3.0) {
      const windchill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16);
      windchillValue.textContent = `Wind Chill: ${windchill.toFixed(2)}°F`;
  } else {
      windchillValue.textContent = 'Wind Chill: N/A';
  }
});

