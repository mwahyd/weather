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
  const bindEvents = () => {
    // initial location
    document.addEventListener("DOMContentLoaded", _getDefaultLocation);

    const searchBtn = doc.querySelector("[data-search-btn]");
    searchBtn.addEventListener("click", _getInput);
    window.addEventListener("keydown", _registerEnter);

    // forecast display
    const dailyBtn = doc.querySelector("[data-daily]");
    const hourBtn = doc.querySelector("[data-hourly]");
    dailyBtn.addEventListener("click", _handleForecastDisplay.bind(null, true));
    hourBtn.addEventListener("click", _handleForecastDisplay.bind(null, false));
  };

  // handler functions
  const _registerEnter = (event) => {
    if (event.key === "Enter") _getInput();
  };

  const _getInput = () => {
    const searchInput = doc.querySelector("#search");
    const locationValue = searchInput.value.trim().toLowerCase();
    if (locationValue === "") return;
    Pubsub.publish("locationEntered", locationValue);
    searchInput.value = "";
  };

  const _getDefaultLocation = () => {
    Pubsub.publish("locationEntered", "london");
  };

  const _handleForecastDisplay = (isDaily) => {
    const forecastDisplay = doc.querySelector("[data-forecast]");
    const daily = doc.querySelectorAll(".group.daily");
    const hourly = doc.querySelectorAll(".group.hourly");

    // remove "hide" class if false; add "hide" if true
    daily.forEach((item) => item.classList.toggle("hide", !isDaily));
    hourly.forEach((item) => item.classList.toggle("hide", isDaily));

    // show daily if true; show hourly if false
    forecastDisplay.classList.toggle("daily", isDaily);
    forecastDisplay.classList.toggle("hourly", !isDaily);
  };

  const _resetForecastDisplay = () => {
    const forecastDisplay = doc.querySelector("[data-forecast]");
    forecastDisplay.classList.remove("hourly");
  };

  // support functions
  const _locationStatus = (status) => {
    const errorDiv = doc.querySelector("[data-error]");
    status === "error"
      ? (errorDiv.textContent = `\u2022 Location not found!`)
      : (errorDiv.textContent = "");
  };

  const _updateDOM = (data) => {
    _resetForecastDisplay();
    _setBackground(data);
    _setCondition(data);
    _setLocationConditions(data);
    _setForecastConditions(data);
    _setForecastDays(data);
    _setForecastHourly(data);
  };

  // background handling
  const _setBackground = (data) => {
    const isDay = data["current"]["is_day"];
    isDay ? _setDayState(data) : _setNightState(data);
  };

  const _setDayState = (data) => {
    _setBaseState(
      data["current"]["is_day"],
      "#3d53b3",
      "#0008ff",
      "#C9BA9E",
      "#9C7F62",
      "#9C7F62",
      "../dist/img/sunset-icon.gif",
      data["forecast"]["forecastday"][0]["astro"]["sunset"]
    );
  };

  const _setNightState = (data) => {
    _setBaseState(
      data["current"]["is_day"],
      "#FA9F05",
      "#D6B16F",
      "#112830",
      "#345166",
      "#345166",
      "../dist/img/sunrise-icon.gif",
      data["forecast"]["forecastday"][0]["astro"]["sunrise"]
    );
  };

  const _setBaseState = (
    isDay,
    searchColour,
    errorColour,
    overlay,
    border,
    background,
    iconSrc,
    time
  ) => {
    const bg = doc.querySelector("[data-background]");
    const sunInfo = doc.querySelector("[data-sun]");
    const root = document.documentElement;
    const sunImg = document.createElement("img");

    sunInfo.innerHTML = "";

    bg.style.backgroundImage = `url(${
      isDay ? "../dist/img/day_hill.gif" : "../dist/img/night_hill.gif"
    })`;

    root.style.setProperty("--search-colour", searchColour);
    root.style.setProperty("--error-colour", errorColour);
    root.style.setProperty("--overlay", overlay);
    root.style.setProperty("--border", border);
    root.style.setProperty("--background", background);

    isDay ? sunImg.classList.add("icon") : sunImg.classList.add("icon", "img");
    sunImg.src = iconSrc;
    const text = document.createTextNode(time);
    sunInfo.appendChild(sunImg);
    sunInfo.appendChild(text);
  };

  // other setters
  const _setCondition = (data) => {
    const weatherIcon = doc.querySelector("[data-weather-icon]");
    const weatherText = doc.querySelector("#weather-text");

    weatherIcon.src = data["current"]["condition"]["icon"];
    weatherText.textContent = data["current"]["condition"]["text"];
  };

  const _setLocationConditions = (data) => {
    const location = doc.querySelector("#location");
    const temp = doc.querySelector("#temp");
    const rFeel = doc.querySelector("#rfeel");
    const humi = doc.querySelector("#humi");
    const windSp = doc.querySelector("#wind-sp");

    location.textContent = data["location"]["name"];
    temp.textContent = `${Math.floor(data["current"]["temp_c"])}°`;
    rFeel.textContent = `${Math.floor(data["current"]["feelslike_c"])}°`;
    humi.textContent = `${data["current"]["humidity"]}%`;
    windSp.textContent = `${data["current"]["wind_kph"]} km/h`;
  };

  const _setForecastConditions = (data) => {
    const tempH = doc.querySelector("#high");
    const tempL = doc.querySelector("#low");
    const rainProb = doc.querySelector("#chance-rain");

    rainProb.textContent = `${data["forecast"]["forecastday"][0]["day"]["daily_chance_of_rain"]}%`;
    tempH.textContent = `${Math.floor(
      data["forecast"]["forecastday"][0]["day"]["maxtemp_c"]
    )}°`;
    tempL.textContent = `${Math.floor(
      data["forecast"]["forecastday"][0]["day"]["mintemp_c"]
    )}°`;
  };

  // forecast display daily / hourly
  const _setForecastDays = (data) => {
    const forecast = doc.querySelector("[data-forecast]");
    forecast.innerHTML = "";
    const today = new Date().getDate();

    data["forecast"]["forecastday"].forEach((array) => {
      const date = new Date(array["date"]);
      if (date.getDate() === today) return;

      const options = { weekday: "long" };
      const dayWeek = date.toLocaleDateString("en-GB", options);

      const group = document.createElement("div");
      const day = document.createElement("p");
      const tempH = document.createElement("p");
      const tempL = document.createElement("p");
      const condition = document.createElement("img");

      day.textContent = dayWeek;
      tempH.textContent = `H: ${Math.floor(array["day"]["maxtemp_c"])}°`;
      tempL.textContent = `L: ${Math.floor(array["day"]["mintemp_c"])}°`;
      condition.src = array["day"]["condition"]["icon"];
      condition.classList.add("forecast-img");
      tempH.classList.add("metric-name");
      tempL.classList.add("metric-name");

      day.classList.add("day");
      group.classList.add("group", "daily");
      group.append(day, tempH, tempL, condition);
      forecast.appendChild(group);
    });
  };

  const _setForecastHourly = (data) => {
    const forecast = doc.querySelector("[data-forecast]");
    data["forecast"]["forecastday"][0]["hour"].forEach((segment) => {
      const forecastTime = new Date(segment["time"]);
      const options = { hour: "numeric", minute: "numeric" };
      const time = forecastTime.toLocaleTimeString("en-GB", options);

      const group = document.createElement("div");
      const hour = document.createElement("p");
      const tempAvg = document.createElement("p");
      const condition = document.createElement("img");

      hour.textContent = time;
      tempAvg.textContent = `${Math.floor(segment["temp_c"])}°`;
      condition.src = segment["condition"]["icon"];
      condition.classList.add("forecast-img", "hourly");

      hour.classList.add("day");
      group.classList.add("group", "hourly", "hide");
      tempAvg.classList.add("metric-name");

      group.append(hour, tempAvg, condition);
      forecast.appendChild(group);
    });
  };

  // initialise
  _listeners();

  return {
    bindEvents,
  };
}
