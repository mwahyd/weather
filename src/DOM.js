import Pubsub from "./pubsub.js";

export default function DOM() {
  // cache DOM
  const doc = document.querySelector("[data-container]");

  // bind events
  const getLocation = () => {
    const searchBtn = doc.querySelector("[data-search-btn]");
    searchBtn.addEventListener("click", _getInput);
  };

  // render

  // handler functions
  const _getInput = (event) => {
    const searchInput = doc.querySelector("#search");
    console.log(searchInput.value);
  };

  return {
    getLocation,
  };
}
