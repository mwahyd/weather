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
      ? (errorDiv.textContent = `\u2022 Location Error!`)
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
    const root = document.documentElement;
    const isDay = data["current"]["is_day"];
    console.log(isDay);
    switch (isDay) {
      case 1: // day
        _setDayState(root, background);
        break;
      case 0: // night
        _setNightState(root, background);
        break;
    }
  };

  const _setDayState = (root, bg) => {
    bg.style.backgroundImage = "url(./assets/backgrounds/day_hill.gif)";
    root.style.setProperty("--search-colour", "#3d53b3");
    root.style.setProperty("--error-colour", "#0008ff");
  };

  const _setNightState = (root, bg) => {
    bg.style.backgroundImage = "url(./assets/backgrounds/night_hill.gif)";
    root.style.setProperty("--search-colour", "#FA9F05");
    root.style.setProperty("--error-colour", "#D6B16F");
  };

  const _getCondition = () => {
    // {light_rain: icon}
  };

  // internal calls
  _listeners();

  return {
    getLocation,
  };
}
