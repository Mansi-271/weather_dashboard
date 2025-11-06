const apiKey = "cab68d044aa6eb524c4687ff689a69df"; // replace with your own API key
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (!city) {
    weatherResult.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        weatherResult.innerHTML = `
          <h3>${data.name}, ${data.sys.country}</h3>
          <p>🌡️ Temperature: ${data.main.temp} °C</p>
          <p>🌥️ Weather: ${data.weather[0].description}</p>
          <p>💨 Wind: ${data.wind.speed} m/s</p>
        `;
      } else {
        weatherResult.innerHTML = `<p>City not found. Try again.</p>`;
      }
    })
    .catch(() => {
      weatherResult.innerHTML = `<p>Error fetching data. Please try later.</p>`;
    });
});
