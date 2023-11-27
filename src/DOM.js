import Pubsub from "./pubsub.js";

export default function DOM() {
  //listeners
  const _listeners = () => {
    Pubsub.subscribe("locationStatus", _locationStatus);
  };

  // cache DOM
  const doc = document.querySelector("[data-container]");

  // bind events
  const getLocation = () => {
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

  // support functions
  const _locationStatus = (status) => {
    const errorDiv = doc.querySelector("[data-error]");
    status === "error"
      ? (errorDiv.textContent = `\u2022 Location Error`)
      : (errorDiv.textContent = "");
  };

  // internal calls
  _listeners();

  return {
    getLocation,
  };
}
