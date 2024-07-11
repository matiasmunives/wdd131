// Current year for footer in HTML 
document.addEventListener("DOMContentLoaded", (event) => {
    const year = document.getElementById("year");
    const now = new Date();
    const current = now.getFullYear();
    year.innerText = current;
  });

//Last modification for footer in HTML   
document.addEventListener("DOMContentLoaded", (event) => {
    const lastUpdatedElement = document.getElementById("last-updated");
    const lastModified = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = lastModified.toLocaleDateString('en-US', options);
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedTime = lastModified.toLocaleTimeString('en-US', timeOptions);
    lastUpdatedElement.innerText = `${formattedDate} ${formattedTime}`;
  });

//Calculate windChill
const temp = document.querySelector("#temperature");
const cond = document.querySelector("#condition");
const wind = document.querySelector("#windSpeed");
const windchill = document.querySelector("#windChill");

const temperature = 5;
const condition = "Cold";
const windSpeed = 6;

function calculateWindChild(temperature, windSpeed) {
    return (13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16))
     + (0.3965 * temperature) * Math.pow(windSpeed, 0.16)).toFixed(2);
}

temp.textContent = temperature;
cond.textContent = condition;
wind.textContent = windSpeed;

if (temperature <= 10 && windSpeed > 4.8) {
    windchill.textContent = `${calculateWindChild(temperature, windSpeed)} km/h`;
}
else {
    windchill.textContent = "N/A";
}