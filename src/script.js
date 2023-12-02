import style from "./style.css";
import bgDay from "./assets/backgrounds/day_hill.gif";
import bgNight from "./assets/backgrounds/night_hill.gif";
import fogIco from "./assets/icons/fog.png";
import humiIco from "./assets/icons/humi-icon.gif";
import rainIco from "./assets/icons/rain-icon.gif";
import rfIco from "./assets/icons/rf-icon.gif";
import sunriseIco from "./assets/icons/sunrise.gif";
import sunsetIco from "./assets/icons/sunset.gif";
import windIco from "./assets/icons/wind-icon.gif";

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
