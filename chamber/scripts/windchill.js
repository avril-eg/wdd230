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

const temp = document.querySelector("#temp");
const windspeed = document.querySelector("#windspeed");
const button = document.querySelector("button");
const div = document.querySelector(".weather");
const windchillp = document.createElement("p");

button.addEventListener("click", function () {
  if (temp.value <= 50 && windspeed.value >= 5) {
    var windspeedEXP = windspeed.value ** 0.16;
    var windchill =
      35.74 +
      0.6215 * temp.value -
      35.75 * windspeedEXP +
      0.4275 * windspeedEXP;
    windchillp.textContent = `The current windchill is ${windchill.toFixed(
      2
    )}°F`;
    div.append(windchillp);
  } else {
    windchillp.textContent = `N/A`;
    div.append(windchillp);
  }
});

 <div class="weather">
        <h2>Weather</h2>
        <p>Current Temperature (Fahrenheit):</p>
        <input type="text" id="temp" />
        <p>Current Windspeed (Miles per Hour):</p>
        <input type="text" id="windspeed" />
        <br />
        <button type="submit">Calculate Wind Chill</button>
      </div>

function windChill(tempF, speed) {
   if (tempF<=50 && speed >=3) {
      var windChill = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16));
      return windChill.toFixed(2) + "F";
   } else {
    return "It doesn't work"
   }
}

var temperature = parseFloat(prompt("Enter the air temperature in Fahrenheits:"));
var windSpeed = parseFloat(prompt("Enter the wind speed in miles per hour;"));

document.getElementById("chilling").innerHTML = windChill (temperature,windSpeed);
document.getElementById("speeding").innerHTML = temperature;
