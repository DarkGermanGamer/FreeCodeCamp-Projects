//Controls
let weatherBtn = document.getElementById("get-weather-btn");
let weatherSelect = document.getElementById("get-weather-select");

//Weather-Display
let weatherBox = document.getElementById("weather-box");
let weatherIcon = document.getElementById("weather-icon");
let temperatureDisplay = document.getElementById("main-temperature");
let feelsLikeDisplay = document.getElementById("feels-like");
let humidityDisplay = document.getElementById("humidity");
let windDisplay = document.getElementById("wind");
let windGustDisplay = document.getElementById("wind-gust");
let weatherMainDisplay = document.getElementById("weather-main");
let locationDisplay = document.getElementById("location");

weatherBtn.addEventListener("click", () => {
  let selectedValue = weatherSelect.value;

  if(!selectedValue) {
    return;
  }
  else {
    showWeather(selectedValue);
  }
});

/**
 * Fetches weather data for the specified location
 */
async function getWeather(city) {
  try {
    const response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);

    if(!response.ok) {
      alert("Something went wrong, please try again later.");
    }

    return await response.json();
  }
  catch (error) {
    console.log(error.message)
    return null;
  }
}


/**
 * Displays weather data for the specified location
 */
async function showWeather(city) {
  const response = await getWeather(city)

  if(!response || response.error) {
    weatherBox.style.display = "none";

    weatherIcon.src = "";
    temperatureDisplay.innerText = "";
    feelsLikeDisplay.innerText = "";
    humidityDisplay.innerText = "";
    windDisplay.innerText = "";
    windGustDisplay.innerText = "";
    weatherMainDisplay.innerText = "";
    locationDisplay.innerText = "";
  }
  else {
    weatherBox.style.display = "grid";

    weatherIcon.src = response.weather[0]?.icon
        ? response.weather[0].icon
        : "";

    temperatureDisplay.innerText = `Temperature: ${response.main?.temp 
      ? `${response.main.temp} °C`
      : `N/A`
    }`;

    feelsLikeDisplay.innerText = `Feels like: ${response.main?.feels_like 
      ? `${response.main.feels_like} °C`
      : `N/A`
    }`;

    humidityDisplay.innerText = `Humidity: ${response.main?.humidity 
      ? `${response.main.humidity}%` 
      : `N/A`
    }`;

    windDisplay.innerText = `Wind: ${response.wind?.speed 
      ? `${response.wind.speed} m/s` 
      : `N/A`
    }`;

    windGustDisplay.innerText = `Wind-Gust: ${response.wind?.gust 
      ? `${response.wind.gust} m/s` 
      : `N/A`
    }`;

    weatherMainDisplay.innerText = `Weather: ${response.weather[0]?.main
      ? response.weather[0].main
      : `N/A`
    }`;

    locationDisplay.innerText = response.name 
      ? response.name
      : `N/A`;
  }

  return response;
}