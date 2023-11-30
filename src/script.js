import DOM from "./DOM.js";
import { listen as async_listen } from "./async.js";

const listeners = {
  init: () => {
    // set up listener for async.js
    async_listen();

    // listen to user input
    DOM().bindEvents();
  },
};

listeners.init();
