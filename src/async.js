import Pubsub from "./pubsub.js";

// get location name
// make a fetch call to API
// get location data
// announce when data received

export function listen() {
  Pubsub.subscribe("locationEntered", _getData);
}

// support functions
function _getData(location) {
  console.log(location);

  const URL = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`;
  // attempt to use location provided to fetch data,
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // if failed ... publish error
      if (data["error"]) {
        console.log(data["error"]["message"]);
        Pubsub.publish("locationError", data["error"]["message"]);
      }
      // if success ... publish data
    })
    .catch((error) => console.log(error.message));
}
