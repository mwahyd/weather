export default (function Pubsub() {
  const _events = {};

  const subscribe = (evName, func) => {
    // assign it to itself only if it exists, or create empty []
    _events[evName] = _events[evName] || [];
    _events[evName].push(func);
    console.log(`PUBSUB: ${func} just subscribed to ${evName}`);
  };

  const publish = (evName, data) => {
    if (_events[evName]) {
      _events[evName].forEach((func) => func(data));
    }
    console.log(`PUBSUB: Making a broadcast about ${evName} with ${data}`);
  };

  return {
    subscribe,
    publish,
  };
})();
