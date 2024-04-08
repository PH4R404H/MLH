const openWeatherMapAPIKey = '';

function kelvinToFahrenheit(kelvin) {
  return (kelvin - 273.15) * 9/5 + 32;
}

let weatherData;

function getWeather(lat, lon) {
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openWeatherMapAPIKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      weatherData = data;
      console.log(weatherData);
    })
    
}

function setup() {
  createCanvas(500, 500);
  background(45, 0, 0);
  getWeather('39.9526', '75.1652'); 
}

function draw() {
  if (weatherData) {
    fill(255);
    textSize(26);
    text(`Temperature: ${kelvinToFahrenheit(weatherData.main.temp).toFixed(0)}°F`, 10, 50);
  }
}
