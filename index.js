//THIS IS A VARIABLE THAT BRINGS AN API KEY
// You need an API key from Open Weather Map to use their API
// You can sign up for a free one here: https://openweathermap.org/api_keys
const apiKey = "83a1101a4022b6b10a696ee7dd9da907"; 

//VARIABLE FOR LATITUDE AND LONGITUDE
// You need to specify the coordinates of Where you're targeting
// You can use this website to find them: https://www.latlong.net/
const lat = 40.7209;
const lon = -74.0007;

//VARIABLE THAT HOLDS THE URL
// You need to use the fetch function to make an API call
// You can use this URL to get the current weather data for any location: https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

// You need to use the .then() method to handle the response from the API
// You need to use the .json() method to parse the response as JSON
fetch(url) //GRABS INFO
.then(response => response.json())
.then(data => { //FOR EACH
  const temp = data.main.temp;
  const feelsLike = data.main.feels_like;
  const humidity = data.main.humidity;
  const wind = data.wind.speed;

  // Update the temperature in the HTML
  const tempElement = document.getElementById('temp');
  tempElement.innerHTML = `The current temperature in Manhattan is ${temp}&deg;F`;
  const windElement = document.getElementById('wind');
  windElement.innerHTML = `The current wind speed is ${wind} mph`;

  // Classes
  if (temp < 50) {
      document.body.classList.add('cold');
  } else if (temp < 80) {
      document.body.classList.add('warm');
  } else {
      document.body.classList.add('hot');
  }

  if (wind < 5) {
    document.body.classList.add('windy');
} else if (wind < 7) {
    document.body.classList.add('super');
} else {
    document.body.classList.add('extra');
}
})


  .catch(error => {
    // You need to use the .catch() method to handle any errors from the API call
    console.error(error);
  });


