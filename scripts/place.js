
document.getElementById('currentyear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = document.lastModified;

// Static values for temperature and wind speed
const temperature = 28; // °C
const windSpeed = 10; // km/h
const conditions = "Partly Cloudy";

// Function to calculate wind chill in Celsius
function calculateWindChill(temp, speed) {
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

// Function to display weather information
function displayWeather() {
  // Select the elements by ID
  let tempElement = document.querySelector('#temperature');
  let conditionsElement = document.querySelector('#conditions');
  let windElement = document.querySelector('#wind');
  let windChillElement = document.querySelector('#wind-chill');

  // Display the static values for temperature, conditions, and wind speed
  tempElement.textContent = temperature;
  conditionsElement.textContent = conditions;
  windElement.textContent = windSpeed;

  // Check if the conditions for calculating wind chill are met
  if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed).toFixed(2);
    windChillElement.textContent = {windChill};
  } else {
    windChillElement.textContent = 'N/A';
  }
}

// Call displayWeather when the page loads
window.addEventListener('load', displayWeather);