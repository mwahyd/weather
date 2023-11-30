(() => {
  "use strict";
  var n = {
      426: (n, e, t) => {
        t.d(e, { Z: () => c });
        var r = t(81),
          o = t.n(r),
          a = t(645),
          i = t.n(a)()(o());
        i.push([
          n.id,
          ":root {\n  --_background: var(--background, black);\n  --_border: var(--border, black);\n  --_font-colour: var(--colour, white);\n  --_overlay: var(--overlay, rgb(48, 48, 48));\n  --_search-colour: var(--search-colour, #3d53b3);\n  --_error-colour: var(--error-colour, #0008ff);\n}\n\nhtml {\n  box-sizing: border-box;\n  font-family: system-ui, sans-serif;\n  font-size: 10px;\n  line-height: 1.5;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  height: 100svh;\n  border: 2px solid orange;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--_font-colour);\n}\n\n.container {\n  z-index: 1;\n  flex-grow: 1;\n\n  border: 4px solid var(--_border);\n  border-radius: 1.5rem;\n  background-color: var(--_background);\n  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.5);\n\n  padding: 20px;\n  max-width: 500px;\n  min-height: 500px;\n  position: relative;\n}\n\n#background {\n  border-radius: inherit;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-position: 45% 0px;\n  z-index: -1;\n}\n\n.overlay {\n  position: fixed;\n  inset: 0;\n  background-color: var(--_overlay);\n}\n\n#weather-text {\n  font-size: 1.8rem;\n  margin-top: -1.5rem;\n}\n\n.search-box {\n  margin: -0.5rem auto 2rem 4rem;\n}\n\n.search.icon {\n  font-size: 2rem;\n  cursor: pointer;\n}\n\ninput#search {\n  background-color: transparent;\n  border: 0;\n  outline: 0;\n  border-bottom: 2px solid white;\n  color: var(--_search-colour);\n  font-size: 1.8rem;\n  font-weight: 800;\n  padding: 0.5rem 1rem;\n  max-width: 180px;\n}\n\n.error {\n  position: absolute;\n  top: 57%;\n  right: 35%;\n\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: var(--_error-colour);\n}\n\n/* metric boxes */\n.content {\n  font-size: 2.3rem;\n  font-weight: 600;\n  padding: 1rem;\n  text-align: center;\n}\n\n#temp-var,\n#sun {\n  font-size: 1.3rem;\n}\n\n#sun > img {\n  margin-right: 0.5rem;\n}\n\n#temp-var {\n  margin-top: -1.5rem;\n}\n\n#temp {\n  font-size: 5rem;\n}\n\n.metrics {\n  margin: 0.5rem 0;\n  display: flex;\n  gap: 1rem;\n}\n\n/* buttons and metrics */\n.box,\n.btn,\n.group,\n.img {\n  background-color: rgba(255, 255, 255, 0.4);\n  border-radius: 10px;\n  padding: 2px;\n}\n\n.box {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n\n.metric {\n  text-align: left;\n  margin-left: 5px;\n}\n\n.icon {\n  width: 25px;\n  height: 25px;\n}\n\n.metric-value {\n  font-size: 1.3rem;\n  font-weight: 900;\n  text-align: center;\n}\n\n.metric-name,\n.btn {\n  font-size: 1.2rem;\n  font-weight: 500;\n}\n\n/* forecast display */\n.forecast-display,\n.metrics {\n  padding: 5px;\n}\n\n.forecast {\n  min-height: 7rem;\n  display: flex;\n}\n\n.forecast.hourly {\n  display: grid;\n  grid-template-columns: repeat(24, 1fr);\n  gap: 1px;\n  overflow-y: hidden;\n}\n\n.group {\n  font-size: 1.3rem;\n  padding: 3px 1rem;\n  margin-right: 1rem;\n  position: relative;\n}\n\n.time {\n  margin-bottom: 1rem;\n}\n\n.btn {\n  padding: 3px 5px;\n  color: inherit;\n  font-weight: 700;\n  border: 0;\n  outline: 2px solid rgba(161, 241, 242, 0.4);\n  margin-right: 0.5rem;\n  cursor: pointer;\n}\n\n.forecast-img {\n  position: absolute;\n  transform: scale(0.6);\n  top: 2rem;\n  right: -1.2rem;\n}\n\n.day {\n  font-size: 1.4rem;\n  font-weight: bold;\n}\n\n.group.daily {\n  flex: 1;\n}\n\n.group.hourly {\n  min-width: 80px;\n  margin-bottom: 1rem;\n}\n\n.forecast-img.hourly {\n  top: 0.5rem;\n  right: -1rem;\n}\n\n.hide {\n  display: none;\n}\n\n/* style scrollbar */\n@media (min-width: 769px) {\n  ::-webkit-scrollbar {\n    height: 1rem;\n  }\n\n  ::-webkit-scrollbar-track {\n    background-color: rgba(255, 255, 255, 0.1);\n    border-radius: 100vw;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: rgba(255, 255, 255, 0.2);\n    border-radius: 100vw;\n  }\n\n  ::-webkit-scrollbar-track:hover {\n    background-color: rgba(255, 255, 255, 0.3);\n  }\n  ::-webkit-scrollbar-thumb:hover {\n    background-color: rgb(42, 44, 45);\n  }\n\n  @supports (scrollbar-color: black grey) {\n    * {\n      scrollbar-color: rgb(42, 44, 45) rgba(255, 255, 255, 0.3);\n      scrollbar-width: thin;\n    }\n  }\n}\n\n@media (max-width: 767px) {\n  .container {\n    /* padding: 5px; */\n    min-width: 300px;\n  }\n\n  .error {\n    top: 53%;\n    right: 35%;\n  }\n\n  .box {\n    display: block;\n    text-align: center;\n    padding-top: 1rem;\n  }\n\n  .metric {\n    text-align: center;\n  }\n\n  .forecast-img {\n    transform: scale(0.45);\n    top: 2.3rem;\n    right: -1.5rem;\n  }\n}\n",
          "",
        ]);
        const c = i;
      },
      645: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (t += "@supports (".concat(e[4], ") {")),
                  e[2] && (t += "@media ".concat(e[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (t += n(e)),
                  r && (t += "}"),
                  e[2] && (t += "}"),
                  e[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (e.i = function (n, t, r, o, a) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var i = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (i[s] = !0);
                }
              for (var l = 0; l < n.length; l++) {
                var d = [].concat(n[l]);
                (r && i[d[0]]) ||
                  (void 0 !== a &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = a)),
                  t &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = t))
                      : (d[2] = t)),
                  o &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = o))
                      : (d[4] = "".concat(o))),
                  e.push(d));
              }
            }),
            e
          );
        };
      },
      81: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      379: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === n) {
              t = r;
              break;
            }
          return t;
        }
        function r(n, r) {
          for (var a = {}, i = [], c = 0; c < n.length; c++) {
            var s = n[c],
              l = r.base ? s[0] + r.base : s[0],
              d = a[l] || 0,
              u = "".concat(l, " ").concat(d);
            a[l] = d + 1;
            var p = t(u),
              m = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(m);
            else {
              var f = o(m, r);
              (r.byIndex = c),
                e.splice(c, 0, { identifier: u, updater: f, references: 1 });
            }
            i.push(u);
          }
          return i;
        }
        function o(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var a = r((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var i = 0; i < a.length; i++) {
              var c = t(a[i]);
              e[c].references--;
            }
            for (var s = r(n, o), l = 0; l < a.length; l++) {
              var d = t(a[l]);
              0 === e[d].references && (e[d].updater(), e.splice(d, 1));
            }
            a = s;
          };
        };
      },
      569: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var r = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      216: (n) => {
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      565: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      795: (n) => {
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (r += t.css),
                  o && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var a = t.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  e.styleTagTransform(r, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      589: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    e = {};
  function t(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var a = (e[r] = { id: r, exports: {} });
    return n[r](a, a.exports, t), a.exports;
  }
  (t.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return t.d(e, { a: e }), e;
  }),
    (t.d = (n, e) => {
      for (var r in e)
        t.o(e, r) &&
          !t.o(n, r) &&
          Object.defineProperty(n, r, { enumerable: !0, get: e[r] });
    }),
    (t.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (n) {
        if ("object" == typeof window) return window;
      }
    })()),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (() => {
      var n;
      t.g.importScripts && (n = t.g.location + "");
      var e = t.g.document;
      if (!n && e && (e.currentScript && (n = e.currentScript.src), !n)) {
        var r = e.getElementsByTagName("script");
        if (r.length) for (var o = r.length - 1; o > -1 && !n; ) n = r[o--].src;
      }
      if (!n)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (n = n
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (t.p = n);
    })(),
    (t.nc = void 0),
    (() => {
      var n = t(379),
        e = t.n(n),
        r = t(795),
        o = t.n(r),
        a = t(569),
        i = t.n(a),
        c = t(565),
        s = t.n(c),
        l = t(216),
        d = t.n(l),
        u = t(589),
        p = t.n(u),
        m = t(426),
        f = {};
      (f.styleTagTransform = p()),
        (f.setAttributes = s()),
        (f.insert = i().bind(null, "head")),
        (f.domAPI = o()),
        (f.insertStyleElement = d()),
        e()(m.Z, f),
        m.Z && m.Z.locals && m.Z.locals,
        t.p,
        t.p,
        t.p,
        t.p,
        t.p,
        t.p,
        t.p,
        t.p,
        t.p;
      const h = (function () {
        const n = {};
        return {
          subscribe: (e, t) => {
            (n[e] = n[e] || []), n[e].push(t);
          },
          publish: (e, t) => {
            n[e] && n[e].forEach((n) => n(t));
          },
        };
      })();
      function g(n) {
        fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=2435aa0ce3b14dfc9c7163807232711&q=${n}&days=5`
        )
          .then((n) => n.json())
          .then((n) => {
            n.error
              ? h.publish("locationStatus", "error")
              : (h.publish("locationData", n),
                h.publish("locationStatus", "success"));
          })
          .catch((n) => console.log(n.message));
      }
      h.subscribe("locationEntered", g),
        (function () {
          const n = document.querySelector("[data-container]"),
            e = (n) => {
              "Enter" === n.key && t();
            },
            t = () => {
              const e = n.querySelector("#search"),
                t = e.value.trim().toLowerCase();
              "" !== t && (h.publish("locationEntered", t), (e.value = ""));
            },
            r = () => {
              h.publish("locationEntered", "london");
            },
            o = (e) => {
              const t = n.querySelector("[data-forecast]"),
                r = n.querySelectorAll(".group.daily"),
                o = n.querySelectorAll(".group.hourly");
              r.forEach((n) => n.classList.toggle("hide", !e)),
                o.forEach((n) => n.classList.toggle("hide", e)),
                t.classList.toggle("daily", e),
                t.classList.toggle("hourly", !e);
            },
            a = (n) => {
              n.current.is_day ? i(n) : c(n);
            },
            i = (n) => {
              s(
                n.current.is_day,
                "#3d53b3",
                "#0008ff",
                "#C9BA9E",
                "#9C7F62",
                "#9C7F62",
                "../dist/img/sunset-icon.gif",
                n.forecast.forecastday[0].astro.sunset
              );
            },
            c = (n) => {
              s(
                n.current.is_day,
                "#FA9F05",
                "#D6B16F",
                "#112830",
                "#345166",
                "#345166",
                "../dist/img/sunrise-icon.gif",
                n.forecast.forecastday[0].astro.sunrise
              );
            },
            s = (e, t, r, o, a, i, c, s) => {
              const l = n.querySelector("[data-background]"),
                d = n.querySelector("[data-sun]"),
                u = document.documentElement,
                p = document.createElement("img");
              (d.innerHTML = ""),
                (l.style.backgroundImage = `url(${
                  e ? "../dist/img/day_hill.gif" : "../dist/img/night_hill.gif"
                })`),
                u.style.setProperty("--search-colour", t),
                u.style.setProperty("--error-colour", r),
                u.style.setProperty("--overlay", o),
                u.style.setProperty("--border", a),
                u.style.setProperty("--background", i),
                e ? p.classList.add("icon") : p.classList.add("icon", "img"),
                (p.src = c);
              const m = document.createTextNode(s);
              d.appendChild(p), d.appendChild(m);
            },
            l = (e) => {
              const t = n.querySelector("[data-weather-icon]"),
                r = n.querySelector("#weather-text");
              (t.src = e.current.condition.icon),
                (r.textContent = e.current.condition.text);
            },
            d = (e) => {
              const t = n.querySelector("#location"),
                r = n.querySelector("#temp"),
                o = n.querySelector("#rfeel"),
                a = n.querySelector("#humi"),
                i = n.querySelector("#wind-sp");
              (t.textContent = e.location.name),
                (r.textContent = `${Math.floor(e.current.temp_c)}°`),
                (o.textContent = `${Math.floor(e.current.feelslike_c)}°`),
                (a.textContent = `${e.current.humidity}%`),
                (i.textContent = `${e.current.wind_kph} km/h`);
            },
            u = (e) => {
              const t = n.querySelector("#high"),
                r = n.querySelector("#low");
              (n.querySelector(
                "#chance-rain"
              ).textContent = `${e.forecast.forecastday[0].day.daily_chance_of_rain}%`),
                (t.textContent = `${Math.floor(
                  e.forecast.forecastday[0].day.maxtemp_c
                )}°`),
                (r.textContent = `${Math.floor(
                  e.forecast.forecastday[0].day.mintemp_c
                )}°`);
            },
            p = (e) => {
              const t = n.querySelector("[data-forecast]");
              t.innerHTML = "";
              const r = new Date().getDate();
              e.forecast.forecastday.forEach((n) => {
                const e = new Date(n.date);
                if (e.getDate() === r) return;
                const o = e.toLocaleDateString("en-GB", { weekday: "long" }),
                  a = document.createElement("div"),
                  i = document.createElement("p"),
                  c = document.createElement("p"),
                  s = document.createElement("p"),
                  l = document.createElement("img");
                (i.textContent = o),
                  (c.textContent = `H: ${Math.floor(n.day.maxtemp_c)}°`),
                  (s.textContent = `L: ${Math.floor(n.day.mintemp_c)}°`),
                  (l.src = n.day.condition.icon),
                  l.classList.add("forecast-img"),
                  c.classList.add("metric-name"),
                  s.classList.add("metric-name"),
                  i.classList.add("day"),
                  a.classList.add("group", "daily"),
                  a.append(i, c, s, l),
                  t.appendChild(a);
              });
            },
            m = (e) => {
              const t = n.querySelector("[data-forecast]");
              e.forecast.forecastday[0].hour.forEach((n) => {
                const e = new Date(n.time).toLocaleTimeString("en-GB", {
                    hour: "numeric",
                    minute: "numeric",
                  }),
                  r = document.createElement("div"),
                  o = document.createElement("p"),
                  a = document.createElement("p"),
                  i = document.createElement("img");
                (o.textContent = e),
                  (a.textContent = `${Math.floor(n.temp_c)}°`),
                  (i.src = n.condition.icon),
                  i.classList.add("forecast-img", "hourly"),
                  o.classList.add("day"),
                  r.classList.add("group", "hourly", "hide"),
                  a.classList.add("metric-name"),
                  r.append(o, a, i),
                  t.appendChild(r);
              });
            };
          return (
            h.subscribe("locationStatus", (e) => {
              n.querySelector("[data-error]").textContent =
                "error" === e ? "• Location not found!" : "";
            }),
            h.subscribe("locationData", (e) => {
              n.querySelector("[data-forecast]").classList.remove("hourly"),
                a(e),
                l(e),
                d(e),
                u(e),
                p(e),
                m(e);
            }),
            {
              bindEvents: () => {
                document.addEventListener("DOMContentLoaded", r),
                  n
                    .querySelector("[data-search-btn]")
                    .addEventListener("click", t),
                  window.addEventListener("keydown", e);
                const a = n.querySelector("[data-daily]"),
                  i = n.querySelector("[data-hourly]");
                a.addEventListener("click", o.bind(null, !0)),
                  i.addEventListener("click", o.bind(null, !1));
              },
            }
          );
        })().bindEvents();
    })();
})();
