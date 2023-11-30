import Pubsub from "./pubsub.js";

export function listen() {
  Pubsub.subscribe("locationEntered", _getData);
}

// support functions
function _getData(location) {
  const key = "2435aa0ce3b14dfc9c7163807232711";
  const URL = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=5`;

  // attempt to use location provided to fetch data,
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      if (data["error"]) {
        Pubsub.publish("locationStatus", "error");
        return;
      }
      Pubsub.publish("locationData", data);
      Pubsub.publish("locationStatus", "success");
    })
    .catch((error) => console.log(error.message));
}
