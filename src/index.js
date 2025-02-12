function getWeather(response) {
  let temperatureElement = document.querySelector(".temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector(".city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "e7fc61eo4ad8861tbc800a33e027f600";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getWeather);
}

function searchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  searchCity(searchInput.value);
}
let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", searchSubmit);

searchCity("Paris");
