import style from "./style.css";
import bgDay from "./img/day_hill.gif";
import bgNight from "./img/night_hill.gif";
import fogIco from "./img/fog.png";
import humiIco from "./img/humi-icon.gif";
import rainIco from "./img/rain-icon.gif";
import rfIco from "./img/rf-icon.gif";
import sunriseIco from "./img/sunrise-icon.gif";
import sunsetIco from "./img/sunset-icon.gif";
import windIco from "./img/wind-icon.gif";

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
