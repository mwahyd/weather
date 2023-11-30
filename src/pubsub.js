export default (function Pubsub() {
  const _events = {};

  const subscribe = (evName, func) => {
    // assign it to itself only if it exists, or create empty []
    _events[evName] = _events[evName] || [];
    _events[evName].push(func);
  };

  const publish = (evName, data) => {
    if (_events[evName]) {
      _events[evName].forEach((func) => func(data));
    }
  };

  return {
    subscribe,
    publish,
  };
})();
