import Pubsub from "./pubsub.js";

export default function DOM() {
  //listeners
  const _listeners = () => {
    Pubsub.subscribe("locationStatus", _locationStatus);
    Pubsub.subscribe("locationData", _updateDOM);
  };

  // cache DOM
  const doc = document.querySelector("[data-container]");

  // bind events
  const getLocation = () => {
    // initial location
    document.addEventListener("DOMContentLoaded", _getDefaultLocation);

    const searchBtn = doc.querySelector("[data-search-btn]");
    searchBtn.addEventListener("click", _getInput);
  };

  // handler functions
  const _getInput = () => {
    const searchInput = doc.querySelector("#search");
    if (searchInput.value.trim().toLowerCase() === "") {
      searchInput.value = "";
      return;
    }
    Pubsub.publish("locationEntered", searchInput.value.trim().toLowerCase());
    searchInput.value = "";
  };

  const _getDefaultLocation = () => {
    Pubsub.publish("locationEntered", "london");
  };

  // support functions
  const _locationStatus = (status) => {
    const errorDiv = doc.querySelector("[data-error]");
    status === "error"
      ? (errorDiv.textContent = `\u2022 Location not found!`)
      : (errorDiv.textContent = "");
  };

  const _updateDOM = (data) => {
    console.log(data);
    const location = doc.querySelector("#location");

    // current object
    const temp = doc.querySelector("#temp");
    const rFeel = doc.querySelector("#rfeel");
    const humi = doc.querySelector("#humi");
    const windSp = doc.querySelector("#wind-sp");

    // forecast object
    const tempH = doc.querySelector("#high");
    const tempL = doc.querySelector("#low");
    const rainProb = doc.querySelector("#chance-rain");

    _setBackground(data);
    _setCondition(data);

    location.textContent = data["location"]["name"];
    temp.textContent = `${Math.floor(data["current"]["temp_c"])}°`;
    rFeel.textContent = `${Math.floor(data["current"]["feelslike_c"])}°`;
    humi.textContent = `${data["current"]["humidity"]}%`;
    windSp.textContent = `${data["current"]["wind_kph"]} km/h`;

    rainProb.textContent = `${data["forecast"]["forecastday"][0]["day"]["daily_chance_of_rain"]}%`;
    console.log(rainProb);
    tempH.textContent = `${Math.floor(
      data["forecast"]["forecastday"][0]["day"]["maxtemp_c"]
    )}°`;
    tempL.textContent = `${Math.floor(
      data["forecast"]["forecastday"][0]["day"]["mintemp_c"]
    )}°`;
  };

  const _setBackground = (data) => {
    const background = doc.querySelector("[data-background]");
    const sunInfo = doc.querySelector("[data-sun]");
    const root = document.documentElement;
    const sunImg = document.createElement("img");
    sunImg.classList.add("icon");

    const isDay = data["current"]["is_day"];
    console.log(isDay);
    switch (isDay) {
      case 1: // day
        _setDayState(root, background, sunInfo, sunImg, data);
        break;
      case 0: // night
        _setNightState(root, background, sunInfo, sunImg, data);
        break;
    }
  };

  const _setDayState = (root, bg, sunInfo, sunImg, data) => {
    sunInfo.innerHTML = "";
    bg.style.backgroundImage = "url(./assets/backgrounds/day_hill.gif)";
    root.style.setProperty("--search-colour", "#3d53b3");
    root.style.setProperty("--error-colour", "#0008ff");
    root.style.setProperty("--overlay", "#C9BA9E");
    root.style.setProperty("--border", "#9C7F62");
    root.style.setProperty("--background", "#9C7F62");
    sunImg.src = "./assets/icons/sunset-icon.gif";
    const text = document.createTextNode(
      data["forecast"]["forecastday"][0]["astro"]["sunset"]
    );
    sunInfo.appendChild(sunImg);
    sunInfo.appendChild(text);
  };

  const _setNightState = (root, bg, sunInfo, sunImg, data) => {
    sunInfo.innerHTML = "";
    bg.style.backgroundImage = "url(./assets/backgrounds/night_hill.gif)";
    root.style.setProperty("--search-colour", "#FA9F05");
    root.style.setProperty("--error-colour", "#D6B16F");
    root.style.setProperty("--overlay", "#112830");
    root.style.setProperty("--border", "#345166");
    root.style.setProperty("--background", "#345166");
    sunImg.src = "./assets/icons/sunrise-icon.gif";
    const text = document.createTextNode(
      data["forecast"]["forecastday"][0]["astro"]["sunrise"]
    );
    sunImg.classList.add("img");
    sunInfo.appendChild(sunImg);
    sunInfo.appendChild(text);
  };

  const _setCondition = (data) => {
    console.log("hello");
    const weatherIcon = doc.querySelector("[data-weather-icon]");
    const weatherText = doc.querySelector("#weather-text");

    weatherIcon.src = data["current"]["condition"]["icon"];
    weatherText.textContent = data["current"]["condition"]["text"];
  };

  // internal calls
  _listeners();

  return {
    getLocation,
  };
}
