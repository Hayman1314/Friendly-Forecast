function getWeather(response) {
  let temperatureElement = document.querySelector(".temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector(".city");
  let countryElement = document.querySelector(".country");
  let timeElement = document.querySelector(".date-time");
  let descriptionElement = document.querySelector(".condition");
  let humidityElement = document.querySelector(".humidity-number");
  let windElement = document.querySelector(".wind-number");
  console.log(response.data.condition.description);
  console.log(response.data.country);

  cityElement.innerHTML = response.data.city;
  countryElement.innerHTML = response.data.country;
  timeElement.innerHTML = formatDate(date);
  descriptionElement.innerHTML = response.data.condition.description;
  temperatureElement.innerHTML = Math.round(temperature);
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed}km/h`;
}
function formatDate(date) {
  let dates = date.getDates();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let years = date.getYears();
  let day = days[date.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[date.getMonths()];
  return `${day}, ${month} ${dates}, ${years}
  ${hours}:${minutes}`;
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
